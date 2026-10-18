"use strict";
/* ნიმუშის ჩატვირთვა: პროექტი „თბილისი ჰილსი“ და ანგარიში DPR-002 (24.09.2026) Excel ფაილიდან.
   გაშვება: npm run seed-sample  (სერვერი შეიძლება ამ დროს გაჩერებული იყოს) */
const path = require("path");
const Database = require("better-sqlite3");
const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, "..", "data"));
const db = new Database(path.join(DATA_DIR, "dpr.sqlite"));
const proj = require("./seed_proj.json");
const rep = require("./seed_rep.json");
const now = new Date().toISOString();
if (db.prepare("SELECT 1 FROM projects WHERE id='tbh'").get()) { console.log("ნიმუში უკვე ჩატვირთულია."); process.exit(0); }
db.prepare("INSERT INTO projects(id,data,updated_at) VALUES('tbh',?,?)").run(JSON.stringify(proj), now);
db.prepare("INSERT INTO reports(id,project_id,date,data,updated_at) VALUES(?,?,?,?,?)").run("tbh__2026-09-24", "tbh", rep.date, JSON.stringify(rep), now);
console.log("ჩაიტვირთა: პროექტი „თბილისი ჰილსი“ (27 BoQ სტრიქონი) და ანგარიში DPR-002.");
