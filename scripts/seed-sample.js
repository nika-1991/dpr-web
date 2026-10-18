"use strict";
/* ნიმუშის ჩატვირთვა: პროექტი „თბილისი ჰილსი“ და ანგარიში DPR-002 (24.09.2026) Excel ფაილიდან.
   გაშვება: npm run seed-sample  (სერვერი შეიძლება ამ დროს გაჩერებული იყოს)
   სერვერი თავადაც იძახებს, თუ SEED_SAMPLE=true (დროებითი დისკის მქონე ჰოსტინგისთვის). */
const proj = require("./seed_proj.json");
const rep = require("./seed_rep.json");

function seedSample(db) {
  if (db.prepare("SELECT 1 FROM projects WHERE id='tbh'").get()) return false;
  const now = new Date().toISOString();
  db.prepare("INSERT INTO projects(id,data,updated_at) VALUES('tbh',?,?)").run(JSON.stringify(proj), now);
  db.prepare("INSERT INTO reports(id,project_id,date,data,updated_at) VALUES(?,?,?,?,?)").run("tbh__2026-09-24", "tbh", rep.date, JSON.stringify(rep), now);
  return true;
}
module.exports = seedSample;

if (require.main === module) {
  const path = require("path");
  const Database = require("better-sqlite3");
  const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, "..", "data"));
  const db = new Database(path.join(DATA_DIR, "dpr.sqlite"));
  console.log(seedSample(db) ? "ჩაიტვირთა: პროექტი „თბილისი ჰილსი“ (27 BoQ სტრიქონი) და ანგარიში DPR-002." : "ნიმუში უკვე ჩატვირთულია.");
}
