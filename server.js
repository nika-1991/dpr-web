"use strict";
/*
 * DPR — ყოველდღიური რეპორტის საიტი
 * Express + SQLite სერვერი: მომხმარებლის სახელით/პაროლით შესვლა, პროექტები, გუნდები, ანგარიშები, ფოტოები.
 */
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const express = require("express");
const bcrypt = require("bcryptjs");
const Database = require("better-sqlite3");

const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, "data"));
const UPLOAD_DIR = path.join(DATA_DIR, "uploads");
const SESSION_DAYS = Number(process.env.SESSION_DAYS || 14);
const COOKIE_SECURE = process.env.COOKIE_SECURE === "true";
const COOKIE = "dpr_session";

fs.mkdirSync(UPLOAD_DIR, { recursive: true });

/* ---------------- database ---------------- */
const db = new Database(path.join(DATA_DIR, "dpr.sqlite"));
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
db.exec(`
CREATE TABLE IF NOT EXISTS users(
  id TEXT PRIMARY KEY, username TEXT NOT NULL UNIQUE COLLATE NOCASE, name TEXT NOT NULL,
  password_hash TEXT NOT NULL, role TEXT NOT NULL CHECK(role IN ('admin','reviewer','employee')),
  active INTEGER NOT NULL DEFAULT 1, must_change INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL, last_login TEXT);
CREATE TABLE IF NOT EXISTS sessions(
  token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL, expires_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS projects(id TEXT PRIMARY KEY, data TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS reports(
  id TEXT PRIMARY KEY, project_id TEXT NOT NULL, date TEXT NOT NULL, data TEXT NOT NULL, updated_at TEXT NOT NULL,
  UNIQUE(project_id, date));
CREATE INDEX IF NOT EXISTS reports_date ON reports(date);
CREATE TABLE IF NOT EXISTS additional(id TEXT PRIMARY KEY, project_id TEXT NOT NULL, data TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS config(key TEXT PRIMARY KEY, data TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS schedules(project_id TEXT PRIMARY KEY, data TEXT NOT NULL, updated_at TEXT NOT NULL, updated_by TEXT);
CREATE TABLE IF NOT EXISTS report_revisions(
  report_id TEXT NOT NULL, rev INTEGER NOT NULL, data TEXT NOT NULL, saved_at TEXT NOT NULL, PRIMARY KEY(report_id, rev));
CREATE TABLE IF NOT EXISTS uploads(id TEXT PRIMARY KEY, user_id TEXT NOT NULL, mime TEXT NOT NULL, size INTEGER NOT NULL, created_at TEXT NOT NULL);
`);

/* older databases: widen the users.role check to allow the reviewer role */
if (!/'reviewer'/.test(db.prepare("SELECT sql FROM sqlite_master WHERE name='users'").get().sql)) {
  db.pragma("foreign_keys = OFF");
  db.transaction(() => {
    db.exec(`CREATE TABLE users_new(
      id TEXT PRIMARY KEY, username TEXT NOT NULL UNIQUE COLLATE NOCASE, name TEXT NOT NULL,
      password_hash TEXT NOT NULL, role TEXT NOT NULL CHECK(role IN ('admin','reviewer','employee')),
      active INTEGER NOT NULL DEFAULT 1, must_change INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL, last_login TEXT);
    INSERT INTO users_new SELECT id,username,name,password_hash,role,active,must_change,created_at,last_login FROM users;
    DROP TABLE users; ALTER TABLE users_new RENAME TO users;`);
  })();
  db.pragma("foreign_keys = ON");
}

/* phone number of a user (used to send the temporary password by SMS) */
for (const col of ["phone", "email"])
  if (!db.prepare("PRAGMA table_info(users)").all().some((c) => c.name === col)) db.exec("ALTER TABLE users ADD COLUMN " + col + " TEXT");

/* e-mail with login details, sent when SMTP is configured (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM) */
const mailer = process.env.SMTP_HOST ? require("nodemailer").createTransport({
  host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: Number(process.env.SMTP_PORT) === 465,
  auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
}) : null;
async function mailLogin(req, u, password, isNew) {
  if (!mailer || !u.email) return { emailed: false };
  const site = (process.env.SITE_URL || req.protocol + "://" + req.get("host")).replace(/\/$/, "");
  try {
    await mailer.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER, to: u.email,
      subject: "Tesen Group DPR — " + (isNew ? "შესვლის მონაცემები" : "ახალი დროებითი პაროლი"),
      text: "გამარჯობა, " + u.name + "!\n\n" + (isNew ? "თქვენთვის შეიქმნა ანგარიში" : "თქვენი პაროლი განახლდა") + " ყოველდღიური რეპორტის საიტზე.\n\n" +
        "საიტი: " + site + "\nმომხმარებელი: " + u.username + "\nდროებითი პაროლი: " + password + "\n\n" +
        "პირველი შესვლისას სისტემა საკუთარი პაროლის დაყენებას მოგთხოვთ.\n\nTesen Group",
    });
    return { emailed: true };
  } catch (e) {
    console.error("mail:", e.message);
    return { emailed: false, emailError: "ელფოსტა ვერ გაიგზავნა" };
  }
}

const now = () => new Date().toISOString();
const newId = (n = 12) => crypto.randomBytes(n).toString("base64url");
const sha = (s) => crypto.createHash("sha256").update(s).digest("hex");
const parse = (row) => (row ? JSON.parse(row.data) : null);

const DEFAULT_LISTS = {
  weather: ["მზიანი", "ნაწილობრივ მოღრუბლული", "მოღრუბლული", "წვიმა", "ძლიერი წვიმა", "თოვლი", "ქარიანი", "ნისლიანი"],
  costCats: ["შრომა", "მასალა", "ტექნიკა", "საწვავი", "ქვეკონტრაქტორი", "ტრანსპორტი", "სხვა"],
  fuelTypes: ["დიზელი", "ბენზინი", "გაზი", "სხვა"],
  positions: ["დღიური მუშა", "მობილური ჯგუფი", "სხვა"],
  units: ["მ", "მ²", "მ³", "ტ", "ცალი", "სთ", "დღე", "ლიტრი", "კგ"],
};
if (!db.prepare("SELECT 1 FROM config WHERE key='lists'").get())
  db.prepare("INSERT INTO config(key,data) VALUES('lists',?)").run(JSON.stringify(DEFAULT_LISTS));

/* first administrator */
if (!db.prepare("SELECT 1 FROM users LIMIT 1").get()) {
  const username = process.env.ADMIN_USERNAME || "admin";
  const generated = !process.env.ADMIN_PASSWORD;
  const password = process.env.ADMIN_PASSWORD || crypto.randomBytes(9).toString("base64url");
  /* a password chosen in ADMIN_PASSWORD is kept as is; only a generated one must be changed at first login */
  db.prepare("INSERT INTO users(id,username,name,password_hash,role,active,must_change,created_at) VALUES(?,?,?,?,?,1,?,?)")
    .run(newId(), username, "ადმინისტრატორი", bcrypt.hashSync(password, 10), "admin", generated ? 1 : 0, now());
  console.log("\n==============================================");
  console.log(" შეიქმნა პირველი ადმინისტრატორი");
  console.log("   მომხმარებელი: " + username);
  console.log("   პაროლი:       " + (generated ? password : "(ADMIN_PASSWORD-დან)"));
  if (generated) console.log(" პირველი შესვლისას სისტემა პაროლის შეცვლას მოითხოვს.");
  console.log("==============================================\n");
} else if (process.env.ADMIN_PASSWORD) {
  /* existing databases: the main admin still on the ADMIN_PASSWORD is not asked to change it */
  const a = db.prepare("SELECT id,password_hash FROM users WHERE username=? AND must_change=1").get(process.env.ADMIN_USERNAME || "admin");
  if (a && bcrypt.compareSync(process.env.ADMIN_PASSWORD, a.password_hash)) db.prepare("UPDATE users SET must_change=0 WHERE id=?").run(a.id);
}

/* sample data on every start (for hosts whose disk is wiped on restart) */
if (process.env.SEED_SAMPLE === "true" && require("./scripts/seed-sample")(db))
  console.log("ჩაიტვირთა ნიმუში: პროექტი „თბილისი ჰილსი“ და ანგარიში DPR-002.");

/* ---------------- app ---------------- */
const app = express();
app.disable("x-powered-by");
if (process.env.TRUST_PROXY) app.set("trust proxy", process.env.TRUST_PROXY);

app.use((req, res, next) => {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "same-origin",
    "Content-Security-Policy":
      "default-src 'self'; img-src 'self' data: blob:; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
  });
  next();
});

app.use("/vendor/xlsx.full.min.js", (req, res) => res.sendFile(require.resolve("xlsx/dist/xlsx.full.min.js")));
app.use("/vendor/html2pdf.bundle.min.js", (req, res) => res.sendFile(require.resolve("html2pdf.js/dist/html2pdf.bundle.min.js")));
app.use(express.static(path.join(__dirname, "public"), { index: "index.html", maxAge: "1h" }));

const api = express.Router();
app.use("/api", api);
api.use(express.json({ limit: "4mb" }));

/* CSRF: every state-changing request must carry the custom header (browsers block it cross-site without CORS) */
api.use((req, res, next) => {
  if (req.method !== "GET" && req.get("X-DPR") !== "1") return res.status(403).json({ error: "მოთხოვნა უარყოფილია" });
  next();
});

function readCookie(req, name) {
  const h = req.headers.cookie || "";
  for (const part of h.split(";")) {
    const i = part.indexOf("=");
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}
function setSessionCookie(res, token, maxAgeSec) {
  res.setHeader("Set-Cookie", `${COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}${COOKIE_SECURE ? "; Secure" : ""}`);
}

/* auth middleware */
api.use((req, res, next) => {
  const token = readCookie(req, COOKIE);
  if (token) {
    const row = db.prepare(`SELECT u.* , s.expires_at FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=?`).get(sha(token));
    if (row && row.active && row.expires_at > now()) req.user = row;
  }
  next();
});
const publicUser = (u) => ({ id: u.id, username: u.username, name: u.name, role: u.role, mustChange: !!u.must_change });
function auth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: "საჭიროა შესვლა" });
  if (req.user.must_change && !req.allowMustChange) return res.status(403).json({ error: "ჯერ შეცვალეთ დროებითი პაროლი", code: "must_change" });
  next();
}
const allowMustChange = (req, res, next) => { req.allowMustChange = true; next(); };
function admin(req, res, next) {
  if (req.user.role !== "admin") return res.status(403).json({ error: "საჭიროა ადმინისტრატორის უფლება" });
  next();
}

/* login throttling: 5 failures per username+IP → 15 min lock; temporary (4-digit) passwords are also
   limited per username across all addresses: 10 failures → 15 min lock */
const fails = new Map();
function throttleKey(req, username) { return (req.ip || "") + "|" + String(username || "").toLowerCase(); }
const userKey = (username) => "user|" + String(username || "").toLowerCase();
const isLocked = (f, max) => f && f.count >= max && Date.now() - f.at < 15 * 60e3;
const bump = (key, f) => fails.set(key, { count: (f && Date.now() - f.at < 15 * 60e3 ? f.count : 0) + 1, at: Date.now() });
const TEMP_PW_RE = /^\d{4}$/;
const MIN_PW = 4;

api.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  const key = throttleKey(req, username);
  const f = fails.get(key), uk = userKey(username), fu = fails.get(uk);
  const u = typeof username === "string" ? db.prepare("SELECT * FROM users WHERE username=?").get(username.trim()) : null;
  if (isLocked(f, 5) || (u && u.must_change && isLocked(fu, 10)))
    return res.status(429).json({ error: "ძალიან ბევრი წარუმატებელი ცდა. სცადეთ 15 წუთში." });
  const ok = u && u.active && typeof password === "string" && bcrypt.compareSync(password, u.password_hash);
  if (!ok) {
    bump(key, f); bump(uk, fu);
    return res.status(401).json({ error: "მომხმარებლის სახელი ან პაროლი არასწორია" });
  }
  fails.delete(key); fails.delete(uk);
  const token = crypto.randomBytes(32).toString("base64url");
  const exp = new Date(Date.now() + SESSION_DAYS * 864e5).toISOString();
  db.prepare("INSERT INTO sessions(token_hash,user_id,created_at,expires_at) VALUES(?,?,?,?)").run(sha(token), u.id, now(), exp);
  db.prepare("UPDATE users SET last_login=? WHERE id=?").run(now(), u.id);
  db.prepare("DELETE FROM sessions WHERE expires_at < ?").run(now());
  setSessionCookie(res, token, SESSION_DAYS * 86400);
  res.json({ user: publicUser(u) });
});

api.post("/logout", (req, res) => {
  const token = readCookie(req, COOKIE);
  if (token) db.prepare("DELETE FROM sessions WHERE token_hash=?").run(sha(token));
  setSessionCookie(res, "", 0);
  res.json({ ok: true });
});

api.get("/me", allowMustChange, auth, (req, res) => res.json({ user: publicUser(req.user) }));

api.post("/me/password", allowMustChange, auth, (req, res) => {
  const { current, next: np } = req.body || {};
  if (typeof current !== "string" || !bcrypt.compareSync(current, req.user.password_hash))
    return res.status(400).json({ error: "მიმდინარე პაროლი არასწორია" });
  if (typeof np !== "string" || np.length < MIN_PW) return res.status(400).json({ error: "ახალი პაროლი მინიმუმ 4 სიმბოლო უნდა იყოს" });
  if (np === current) return res.status(400).json({ error: "ახალი პაროლი ძველისგან უნდა განსხვავდებოდეს" });
  db.prepare("UPDATE users SET password_hash=?, must_change=0 WHERE id=?").run(bcrypt.hashSync(np, 10), req.user.id);
  // end other sessions of this user
  const token = readCookie(req, COOKIE);
  db.prepare("DELETE FROM sessions WHERE user_id=? AND token_hash<>?").run(req.user.id, sha(token));
  res.json({ ok: true });
});

/* ---------------- users ---------------- */
api.get("/users/names", auth, (req, res) => {
  res.json(db.prepare("SELECT id,name,username,role,active FROM users ORDER BY name").all());
});
api.get("/users", auth, admin, (req, res) => {
  res.json(db.prepare("SELECT id,username,name,phone,email,role,active,must_change AS mustChange,created_at AS createdAt,last_login AS lastLogin FROM users ORDER BY name").all());
});
const USERNAME_RE = /^[A-Za-z0-9._@-]{3,40}$/;
/* "" for no e-mail, null when invalid */
function cleanEmail(v) {
  const s = String(v ?? "").trim().toLowerCase();
  if (!s) return "";
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= 200 ? s : null;
}
/* "" for no phone, null when invalid; Georgian mobiles without a country code get +995 */
function cleanPhone(v) {
  const s = String(v ?? "").replace(/[\s()-]/g, "");
  if (!s) return "";
  if (!/^\+?\d{9,15}$/.test(s)) return null;
  return s.startsWith("+") ? s : (s.length === 9 ? "+995" + s : "+" + s);
}
api.post("/users", auth, admin, async (req, res) => {
  const { username, name, role, password } = req.body || {};
  const phone = cleanPhone((req.body || {}).phone), email = cleanEmail((req.body || {}).email);
  if (phone === null) return res.status(400).json({ error: "ტელეფონის ნომერი არასწორია" });
  if (email === null) return res.status(400).json({ error: "ელფოსტა არასწორია" });
  if (!USERNAME_RE.test(username || "")) return res.status(400).json({ error: "მომხმარებლის სახელი: 3–40 ლათინური ასო, ციფრი ან . _ - @" });
  if (!name || !String(name).trim()) return res.status(400).json({ error: "მიუთითეთ სახელი და გვარი" });
  if (!ROLES.includes(role)) return res.status(400).json({ error: "არასწორი როლი" });
  if (typeof password !== "string" || !TEMP_PW_RE.test(password)) return res.status(400).json({ error: "დროებითი პაროლი 4 ციფრი უნდა იყოს" });
  if (db.prepare("SELECT 1 FROM users WHERE username=?").get(username)) return res.status(409).json({ error: "ეს მომხმარებლის სახელი დაკავებულია" });
  const id = newId();
  db.prepare("INSERT INTO users(id,username,name,phone,email,password_hash,role,active,must_change,created_at) VALUES(?,?,?,?,?,?,?,1,1,?)")
    .run(id, username, String(name).trim(), phone, email, bcrypt.hashSync(password, 10), role, now());
  res.json({ id, ...(await mailLogin(req, { username, name: String(name).trim(), email }, password, true)) });
});
api.patch("/users/:id", auth, admin, async (req, res) => {
  const u = db.prepare("SELECT * FROM users WHERE id=?").get(req.params.id);
  if (!u) return res.status(404).json({ error: "მომხმარებელი ვერ მოიძებნა" });
  const b = req.body || {};
  const self = u.id === req.user.id;
  if (self && (b.active === false || (b.role !== undefined && b.role !== "admin"))) return res.status(400).json({ error: "საკუთარ თავს ადმინის უფლებას ან წვდომას ვერ ჩამოართმევთ" });
  if (b.name !== undefined) { if (!String(b.name).trim()) return res.status(400).json({ error: "სახელი ცარიელია" }); db.prepare("UPDATE users SET name=? WHERE id=?").run(String(b.name).trim(), u.id); }
  if (b.phone !== undefined) { const ph = cleanPhone(b.phone); if (ph === null) return res.status(400).json({ error: "ტელეფონის ნომერი არასწორია" }); db.prepare("UPDATE users SET phone=? WHERE id=?").run(ph, u.id); }
  if (b.email !== undefined) { const em = cleanEmail(b.email); if (em === null) return res.status(400).json({ error: "ელფოსტა არასწორია" }); db.prepare("UPDATE users SET email=? WHERE id=?").run(em, u.id); }
  if (b.role !== undefined) { if (!ROLES.includes(b.role)) return res.status(400).json({ error: "არასწორი როლი" }); db.prepare("UPDATE users SET role=? WHERE id=?").run(b.role, u.id); }
  if (b.active !== undefined) {
    db.prepare("UPDATE users SET active=? WHERE id=?").run(b.active ? 1 : 0, u.id);
    if (!b.active) db.prepare("DELETE FROM sessions WHERE user_id=?").run(u.id);
  }
  if (b.password !== undefined) {
    if (typeof b.password !== "string" || !TEMP_PW_RE.test(b.password)) return res.status(400).json({ error: "დროებითი პაროლი 4 ციფრი უნდა იყოს" });
    db.prepare("UPDATE users SET password_hash=?, must_change=1 WHERE id=?").run(bcrypt.hashSync(b.password, 10), u.id);
    db.prepare("DELETE FROM sessions WHERE user_id=?").run(u.id);
    return res.json({ ok: true, ...(await mailLogin(req, db.prepare("SELECT * FROM users WHERE id=?").get(u.id), b.password, false)) });
  }
  res.json({ ok: true });
});

/* ---------------- config ---------------- */
api.get("/config/lists", auth, (req, res) => res.json(parse(db.prepare("SELECT data FROM config WHERE key='lists'").get())));
api.get("/config/mail", auth, admin, (req, res) => res.json({ enabled: !!mailer }));
api.get("/config/hse-default", auth, admin, (req, res) => res.json(DEFAULT_HSE));
api.put("/config/lists", auth, admin, (req, res) => {
  const out = {};
  for (const k of Object.keys(DEFAULT_LISTS)) {
    const v = (req.body || {})[k];
    out[k] = Array.isArray(v) ? v.map((s) => String(s).trim()).filter(Boolean).slice(0, 300) : DEFAULT_LISTS[k];
  }
  db.prepare("UPDATE config SET data=? WHERE key='lists'").run(JSON.stringify(out));
  res.json(out);
});

/* ---------------- projects ---------------- */
const getProject = (id) => parse(db.prepare("SELECT data FROM projects WHERE id=?").get(id));
const isMember = (p, u) => !!(p && (p.memberIds || []).includes(u.id));
/* account roles: an admin can do everything; an employee gets rights per project through the team page */
const ROLES = ["admin", "employee"];
/* access inside a project: executor (fills reports), reviewer (also approves and prices), viewer (read only) */
const ACCESS = ["executor", "reviewer", "viewer"];
const accessOf = (p, u) => !p ? null : u.role === "admin" ? "admin" : isMember(p, u) ? (ACCESS.includes(p.members?.[u.id]?.access) ? p.members[u.id].access : "executor") : null;
const canSee = (p, u) => !!accessOf(p, u);
const canWork = (p, u) => ["admin", "reviewer", "executor"].includes(accessOf(p, u));
const canReview = (p, u) => ["admin", "reviewer"].includes(accessOf(p, u));
/* older databases: the account-level "reviewer" role becomes reviewer access on that user's projects */
for (const u of db.prepare("SELECT id FROM users WHERE role='reviewer'").all()) {
  db.transaction(() => {
    for (const row of db.prepare("SELECT id,data FROM projects").all()) {
      const p = JSON.parse(row.data);
      if (!(p.memberIds || []).includes(u.id)) continue;
      p.members = p.members || {}; p.members[u.id] = { ...(p.members[u.id] || {}), access: p.members[u.id]?.access || "reviewer" };
      db.prepare("UPDATE projects SET data=? WHERE id=?").run(JSON.stringify(p), row.id);
    }
    db.prepare("UPDATE users SET role='employee' WHERE id=?").run(u.id);
  })();
}
const withId = (id, d) => ({ id, ...d });

/* per-project summary for the dashboard: reports, last report, BoQ progress (average share done over BoQ items) */
const codeKey = (c) => String(c ?? "").trim().replace(/\./g, ",");
const qtyNum = (v) => parseFloat(String(v ?? "").replace(",", ".")) || 0;
function projectStats(p, id) {
  const reps = db.prepare("SELECT data FROM reports WHERE project_id=?").all(id).map((r) => JSON.parse(r.data))
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  const items = (p.boq || []).filter((it) => it.type === "პოზიცია" && qtyNum(it.qty) > 0);
  const done = new Map();
  const avg = () => items.length ? items.reduce((a, it) => a + Math.min((done.get(codeKey(it.code)) || 0) / qtyNum(it.qty), 1), 0) / items.length : 0;
  for (const r of reps) for (const w of r.works || []) if (w.code) done.set(codeKey(w.code), (done.get(codeKey(w.code)) || 0) + qtyNum(w.qty));
  const perItem = items.map((it) => { const q = done.get(codeKey(it.code)) || 0; return { done: q, pct: Math.min(q / qtyNum(it.qty), 1) * 100 }; });
  const last = reps[reps.length - 1];
  return { reports: reps.length, approved: reps.filter((r) => r.status === "approved").length,
    lastDate: last ? last.date : "", lastStatus: last ? last.status : "",
    progress: Math.round(avg() * 1000) / 10, itemsDone: perItem.filter((x) => x.pct >= 100).length, itemsStarted: perItem.filter((x) => x.done > 0).length,
 };
}
api.get("/projects", auth, (req, res) => {
  const rows = db.prepare("SELECT id,data FROM projects").all().map((r) => withId(r.id, JSON.parse(r.data)));
  res.json(rows.filter((p) => canSee(p, req.user)).map((p) => ({ ...p, stats: projectStats(p, p.id) })));
});
const PROJECT_FIELDS = ["name", "client", "location", "companyCode", "projectCode", "accountingCode", "participants", "boq", "memberIds", "members", "archived", "hse", "dprStart"];
/* HSE items every new report starts with; each project can edit its own copy */
const DEFAULT_HSE = require("./scripts/seed_proj.json").hse;
function cleanProject(body, base) {
  const p = { ...base };
  for (const k of PROJECT_FIELDS) if (body[k] !== undefined) p[k] = body[k];
  for (const k of ["name", "client", "location", "companyCode", "projectCode", "accountingCode"]) p[k] = String(p[k] ?? "").trim().slice(0, 300);
  p.participants = typeof p.participants === "object" && p.participants ? p.participants : {};
  p.boq = Array.isArray(p.boq) ? p.boq.slice(0, 5000) : [];
  const validIds = new Set(db.prepare("SELECT id FROM users").all().map((r) => r.id));
  p.memberIds = Array.isArray(p.memberIds) ? [...new Set(p.memberIds.filter((x) => validIds.has(x)))] : [];
  p.members = typeof p.members === "object" && p.members ? Object.fromEntries(Object.entries(p.members).filter(([k]) => p.memberIds.includes(k))
    .map(([k, m]) => [k, { ...(m && typeof m === "object" ? m : {}), access: ACCESS.includes(m?.access) ? m.access : "executor" }])) : {};
  p.archived = !!p.archived;
  p.dprStart = Math.max(1, parseInt(p.dprStart, 10) || 1);
  p.hse = (Array.isArray(p.hse) ? p.hse : DEFAULT_HSE).slice(0, 50)
    .map((x) => ({ desc: String(x?.desc ?? "").slice(0, 2000), descEn: String(x?.descEn ?? "").slice(0, 2000) }))
    .filter((x) => x.desc || x.descEn);
  return p;
}
api.post("/projects", auth, admin, (req, res) => {
  const p = cleanProject(req.body || {}, { createdAt: now(), createdBy: req.user.id });
  if (!p.name) return res.status(400).json({ error: "მიუთითეთ პროექტის დასახელება" });
  const id = newId(8);
  db.prepare("INSERT INTO projects(id,data,updated_at) VALUES(?,?,?)").run(id, JSON.stringify(p), now());
  res.json(withId(id, p));
});
api.patch("/projects/:id", auth, admin, (req, res) => {
  const cur = getProject(req.params.id);
  if (!cur) return res.status(404).json({ error: "პროექტი ვერ მოიძებნა" });
  const p = cleanProject(req.body || {}, cur);
  if (!p.name) return res.status(400).json({ error: "პროექტის დასახელება ცარიელია" });
  db.prepare("UPDATE projects SET data=?, updated_at=? WHERE id=?").run(JSON.stringify(p), now(), req.params.id);
  if (p.dprStart !== cur.dprStart) renumberReports(req.params.id);
  res.json(withId(req.params.id, p));
});

/* additional works */
api.get("/projects/:id/additional", auth, (req, res) => {
  if (!canSee(getProject(req.params.id), req.user)) return res.status(404).json({ error: "პროექტი ვერ მოიძებნა" });
  res.json(db.prepare("SELECT id,data FROM additional WHERE project_id=?").all(req.params.id).map((r) => withId(r.id, JSON.parse(r.data))));
});
api.post("/projects/:id/additional", auth, (req, res) => {
  const p = getProject(req.params.id);
  if (!canSee(p, req.user)) return res.status(404).json({ error: "პროექტი ვერ მოიძებნა" });
  if (!canWork(p, req.user)) return res.status(403).json({ error: "ამ პროექტზე მხოლოდ ნახვის უფლება გაქვთ" });
  const b = req.body || {};
  if (!String(b.name || "").trim()) return res.status(400).json({ error: "დასახელება სავალდებულოა" });
  /* additional works are numbered დ1, დ2, დ3 … per project (the prefix keeps them apart from BoQ codes) */
  const taken = new Set([...(p.boq || []).map((x) => String(x.code).replace(/\./g, ",")),
    ...db.prepare("SELECT data FROM additional WHERE project_id=?").all(req.params.id).map((r) => JSON.parse(r.data).code)]);
  let n = 1; while (taken.has("დ" + n)) n++;
  const code = "დ" + n;
  const d = { projectId: req.params.id, code, chapter: String(b.chapter || "").trim(), name: String(b.name).trim(), unit: String(b.unit || ""), createdBy: req.user.id };
  const id = newId(8);
  db.prepare("INSERT INTO additional(id,project_id,data) VALUES(?,?,?)").run(id, req.params.id, JSON.stringify(d));
  res.json(withId(id, d));
});
api.delete("/additional/:id", auth, admin, (req, res) => {
  db.prepare("DELETE FROM additional WHERE id=?").run(req.params.id);
  res.json({ ok: true });
});

/* ---------------- reports ---------------- */
const SECTIONS = ["conditions", "issues", "hse", "works", "expenses", "personnel", "materials", "fuel", "visitors", "photos"];
const PRICED = ["works", "expenses"];
/* DPR numbers follow the report dates (1, 2, 3 … with no gaps); recomputed whenever a report is added or deleted */
function renumberReports(projectId) {
  const start = Math.max(1, parseInt((getProject(projectId) || {}).dprStart, 10) || 1);
  const rows = db.prepare("SELECT id,data FROM reports WHERE project_id=? ORDER BY date").all(projectId);
  const upd = db.prepare("UPDATE reports SET data=? WHERE id=?");
  rows.forEach((row, i) => { const r = JSON.parse(row.data); if (r.num !== start + i) { r.num = start + i; upd.run(JSON.stringify(r), row.id); } });
}
const getReportRow = (id) => db.prepare("SELECT * FROM reports WHERE id=?").get(id);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const REPORT_TZ = process.env.REPORT_TZ || "Asia/Tbilisi";
const todayLocal = () => new Intl.DateTimeFormat("en-CA", { timeZone: REPORT_TZ }).format(new Date());

api.get("/projects/:id/reports", auth, (req, res) => {
  if (!canSee(getProject(req.params.id), req.user)) return res.status(404).json({ error: "პროექტი ვერ მოიძებნა" });
  res.json(db.prepare("SELECT id,data FROM reports WHERE project_id=? ORDER BY date DESC").all(req.params.id).map((r) => withId(r.id, JSON.parse(r.data))));
});
api.get("/reports", auth, (req, res) => {
  const date = String(req.query.date || "");
  if (!DATE_RE.test(date)) return res.status(400).json({ error: "თარიღი არასწორია" });
  const rows = db.prepare("SELECT id,project_id,data FROM reports WHERE date=?").all(date);
  const cache = new Map();
  res.json(rows.filter((r) => { if (!cache.has(r.project_id)) cache.set(r.project_id, canSee(getProject(r.project_id), req.user)); return cache.get(r.project_id); })
    .map((r) => withId(r.id, JSON.parse(r.data))));
});
function cleanSection(k, v) {
  if (k === "conditions") return typeof v === "object" && v && !Array.isArray(v) ? v : {};
  return Array.isArray(v) ? v.slice(0, 500) : [];
}
api.post("/reports", auth, (req, res) => {
  const b = req.body || {};
  const p = getProject(b.projectId);
  if (!canSee(p, req.user)) return res.status(404).json({ error: "პროექტი ვერ მოიძებნა" });
  if (!canWork(p, req.user)) return res.status(403).json({ error: "ამ პროექტზე მხოლოდ ნახვის უფლება გაქვთ" });
  if (p.archived) return res.status(400).json({ error: "პროექტი დაარქივებულია" });
  if (!DATE_RE.test(b.date || "")) return res.status(400).json({ error: "თარიღი არასწორია" });
  if (req.user.role !== "admin" && b.date > todayLocal()) return res.status(400).json({ error: "მომავალი თარიღით ანგარიშის შექმნა შეუძლებელია" });
  const id = b.projectId + "__" + b.date;
  const create = db.transaction(() => {
    if (getReportRow(id)) return null;
    const d = { projectId: b.projectId, date: b.date, num: 0, rev: 0, status: "draft",
      createdBy: req.user.id, createdAt: now(), updatedBy: req.user.id, updatedAt: now() };
    for (const k of SECTIONS) d[k] = cleanSection(k, b[k]);
    db.prepare("INSERT INTO reports(id,project_id,date,data,updated_at) VALUES(?,?,?,?,?)").run(id, b.projectId, b.date, JSON.stringify(d), now());
    renumberReports(b.projectId);
    return JSON.parse(getReportRow(id).data);
  });
  const d = create();
  if (!d) return res.status(409).json({ error: "ამ თარიღზე ანგარიში უკვე არსებობს" });
  res.json(withId(id, d));
});
function loadEditable(req, res) {
  const row = getReportRow(req.params.id);
  const p = row && getProject(row.project_id);
  if (!row || !canSee(p, req.user)) { res.status(404).json({ error: "ანგარიში ვერ მოიძებნა" }); return null; }
  return { row, p, r: JSON.parse(row.data) };
}
function saveReport(id, r) { db.prepare("UPDATE reports SET data=?, updated_at=? WHERE id=?").run(JSON.stringify(r), now(), id); }

api.patch("/reports/:id", auth, (req, res) => {
  const x = loadEditable(req, res); if (!x) return;
  const { p, r } = x;
  const editable = !p.archived && (canReview(p, req.user) ? r.status !== "approved" : canWork(p, req.user) && r.status === "draft");
  if (!editable) return res.status(403).json({ error: r.status === "draft" ? "ამ ანგარიშის რედაქტირების უფლება არ გაქვთ" : "ანგარიში დაბლოკილია (" + r.status + ")" });
  const b = req.body || {};
  for (const k of SECTIONS) if (b[k] !== undefined) {
    const rows = cleanSection(k, b[k]);
    /* unit prices are set by the reviewer (admin); other users keep whatever is stored */
    if (!canReview(p, req.user) && PRICED.includes(k))
      rows.forEach((row, i) => { if (row && typeof row === "object") { delete row.price; const old = (r[k] || [])[i]; if (old && old.price !== undefined) row.price = old.price; } });
    r[k] = rows;
  }
  r.updatedBy = req.user.id; r.updatedAt = now();
  saveReport(req.params.id, r);
  res.json(withId(req.params.id, r));
});
api.post("/reports/:id/status", auth, (req, res) => {
  const x = loadEditable(req, res); if (!x) return;
  const { p, r } = x;
  const isAdmin = canReview(p, req.user);
  const a = (req.body || {}).action;
  /* every work and expense row needs a unit price (0 is allowed) before approval */
  if (a === "approve") {
    const missing = PRICED.reduce((n, k) => n + (r[k] || []).filter((x) => (k !== "works" || x.code) && (x.price === "" || x.price == null)).length, 0);
    if (missing) return res.status(400).json({ error: "დადასტურებამდე ყველა სამუშაოს და ხარჯს უნდა ჰქონდეს ერთ. ღირებულება (ფასის გარეშე: " + missing + ")" });
  }
  const t = now();
  if (a === "submit" && r.status === "draft" && canWork(p, req.user) && !p.archived) Object.assign(r, { status: "submitted", submittedBy: req.user.id, submittedAt: t });
  else if (a === "return" && isAdmin && r.status === "submitted") Object.assign(r, { status: "draft" });
  else if (a === "approve" && isAdmin && r.status === "submitted") Object.assign(r, { status: "approved", approvedBy: req.user.id, approvedAt: t });
  else if (a === "reopen" && isAdmin && r.status === "approved") {
    /* keep the approved version before opening the next revision */
    db.prepare("INSERT OR REPLACE INTO report_revisions(report_id,rev,data,saved_at) VALUES(?,?,?,?)").run(req.params.id, r.rev || 0, JSON.stringify(r), t);
    Object.assign(r, { status: "draft", rev: (r.rev || 0) + 1 });
  }
  else return res.status(400).json({ error: "ეს მოქმედება ამ სტატუსზე შეუძლებელია" });
  r.updatedBy = req.user.id; r.updatedAt = t;
  saveReport(req.params.id, r);
  res.json(withId(req.params.id, r));
});
/* analysis: works (revenue) and expenses (cost) of every report, for the reviewer */
api.get("/analysis", auth, (req, res) => {
  const seen = new Map(), mine = (pid) => { if (!seen.has(pid)) seen.set(pid, canReview(getProject(pid), req.user)); return seen.get(pid); };
  const reports = db.prepare("SELECT project_id,data FROM reports").all().filter((row) => mine(row.project_id)).map((row) => {
    const r = JSON.parse(row.data);
    return { projectId: row.project_id, date: r.date, num: r.num, status: r.status, works: r.works || [], expenses: r.expenses || [] };
  });
  const additional = db.prepare("SELECT project_id,data FROM additional").all().filter((row) => mine(row.project_id)).map((row) => ({ projectId: row.project_id, ...JSON.parse(row.data) }));
  res.json({ reports, additional });
});
/* schedule (გეგმა-გრაფიკი): resources under each BoQ position and planned quantities per day */
const RES_TYPES = ["მასალა", "ტექნიკა", "შრომა"];
const ISO_RE = /^\d{4}-\d{2}-\d{2}$/;
const cleanNum = (v) => { const n = parseFloat(String(v ?? "").replace(",", ".")); return isFinite(n) ? Math.round(n * 1e4) / 1e4 : null; };
const cleanPlan = (pl) => Object.fromEntries(Object.entries(pl && typeof pl === "object" ? pl : {})
  .filter(([d, v]) => ISO_RE.test(d) && cleanNum(v) !== null && cleanNum(v) !== 0).slice(0, 2000).map(([d, v]) => [d, cleanNum(v)]));
const str = (v, n) => String(v ?? "").slice(0, n);
function cleanSchedule(b) {
  const rows = {};
  for (const [code, r] of Object.entries(b && typeof b.rows === "object" && b.rows ? b.rows : {}).slice(0, 5000)) {
    if (!r || typeof r !== "object") continue;
    rows[str(code, 40)] = {
      price: cleanNum(r.price), plan: cleanPlan(r.plan),
      res: (Array.isArray(r.res) ? r.res : []).slice(0, 200).map((x) => ({
        id: str(x?.id, 20) || newId(6), type: RES_TYPES.includes(x?.type) ? x.type : "მასალა",
        name: str(x?.name, 300), unit: str(x?.unit, 30), qty: cleanNum(x?.qty), price: cleanNum(x?.price), plan: cleanPlan(x?.plan),
      })),
    };
  }
  return { start: ISO_RE.test(b?.start || "") ? b.start : "", end: ISO_RE.test(b?.end || "") ? b.end : "", rows };
}
api.get("/projects/:id/schedule", auth, (req, res) => {
  if (!canSee(getProject(req.params.id), req.user)) return res.status(404).json({ error: "პროექტი ვერ მოიძებნა" });
  const row = db.prepare("SELECT data,updated_at,updated_by FROM schedules WHERE project_id=?").get(req.params.id);
  res.json(row ? { ...JSON.parse(row.data), updatedAt: row.updated_at, updatedBy: row.updated_by } : { start: "", end: "", rows: {} });
});
/* the schedule is edited by admins and the project's reviewers */
api.put("/projects/:id/schedule", auth, (req, res) => {
  const p = getProject(req.params.id);
  if (!canSee(p, req.user)) return res.status(404).json({ error: "პროექტი ვერ მოიძებნა" });
  if (!canReview(p, req.user)) return res.status(403).json({ error: "გეგმა-გრაფიკს ცვლის ადმინი ან პროექტის რივიუერი" });
  const d = cleanSchedule(req.body || {}), t = now();
  db.prepare("INSERT INTO schedules(project_id,data,updated_at,updated_by) VALUES(?,?,?,?) ON CONFLICT(project_id) DO UPDATE SET data=excluded.data,updated_at=excluded.updated_at,updated_by=excluded.updated_by")
    .run(req.params.id, JSON.stringify(d), t, req.user.id);
  res.json({ ok: true, updatedAt: t });
});
/* earlier (approved) revisions of a report */
api.get("/reports/:id/revisions", auth, (req, res) => {
  const row = getReportRow(req.params.id);
  if (!row || !canSee(getProject(row.project_id), req.user)) return res.status(404).json({ error: "ანგარიში ვერ მოიძებნა" });
  res.json(db.prepare("SELECT rev,data,saved_at FROM report_revisions WHERE report_id=? ORDER BY rev DESC").all(req.params.id)
    .map((x) => ({ ...JSON.parse(x.data), id: req.params.id, rev: x.rev, savedAt: x.saved_at })));
});
api.delete("/reports/:id", auth, admin, (req, res) => {
  const x = loadEditable(req, res); if (!x) return;
  if (x.r.status === "approved") return res.status(400).json({ error: "დადასტურებული ანგარიში არ იშლება" });
  db.transaction(() => {
    db.prepare("DELETE FROM reports WHERE id=?").run(req.params.id);
    db.prepare("DELETE FROM report_revisions WHERE report_id=?").run(req.params.id);
    renumberReports(x.row.project_id);
  })();
  res.json({ ok: true });
});

/* ---------------- photo uploads ---------------- */
const MIME_EXT = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" };
api.post("/uploads", auth, express.raw({ type: Object.keys(MIME_EXT), limit: "15mb" }), (req, res) => {
  const mime = (req.get("Content-Type") || "").split(";")[0];
  const b = req.body;
  const magic = Buffer.isBuffer(b) && b.length > 12 && (
    (b[0] === 0xff && b[1] === 0xd8) || b.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) ||
    (b.slice(0, 4).toString() === "RIFF" && b.slice(8, 12).toString() === "WEBP") || b.slice(0, 3).toString() === "GIF");
  if (!MIME_EXT[mime] || !magic) return res.status(400).json({ error: "დაშვებულია მხოლოდ JPG, PNG, WEBP ან GIF" });
  const id = newId(16);
  fs.writeFileSync(path.join(UPLOAD_DIR, id), req.body);
  db.prepare("INSERT INTO uploads(id,user_id,mime,size,created_at) VALUES(?,?,?,?,?)").run(id, req.user.id, mime, req.body.length, now());
  res.json({ id, url: "/api/uploads/" + id });
});
api.get("/uploads/:id", auth, (req, res) => {
  const u = db.prepare("SELECT * FROM uploads WHERE id=?").get(req.params.id);
  if (!u) return res.status(404).end();
  res.set({ "Content-Type": u.mime, "Cache-Control": "private, max-age=86400", "Content-Disposition": "inline" });
  res.sendFile(path.join(UPLOAD_DIR, u.id));
});
api.delete("/uploads/:id", auth, (req, res) => {
  const u = db.prepare("SELECT * FROM uploads WHERE id=?").get(req.params.id);
  if (!u) return res.json({ ok: true });
  if (u.user_id !== req.user.id && req.user.role !== "admin") return res.status(403).json({ error: "სხვისი ფოტოს წაშლა შეუძლია მხოლოდ ადმინს" });
  db.prepare("DELETE FROM uploads WHERE id=?").run(u.id);
  fs.rm(path.join(UPLOAD_DIR, u.id), { force: true }, () => {});
  res.json({ ok: true });
});

api.use((req, res) => res.status(404).json({ error: "მისამართი ვერ მოიძებნა" }));
api.use((err, req, res, next) => {
  if (err && err.type === "entity.too.large") return res.status(413).json({ error: "ფაილი ან მონაცემი ძალიან დიდია" });
  console.error(err);
  res.status(500).json({ error: "სერვერის შეცდომა" });
});

/* bring DPR numbers in line with the report dates (older data was numbered in creation order) */
for (const { id } of db.prepare("SELECT id FROM projects").all()) renumberReports(id);

app.listen(PORT, () => console.log(`DPR სერვერი გაშვებულია: http://localhost:${PORT}`));
