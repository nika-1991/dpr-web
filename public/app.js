"use strict";
/* ---------- reference data ---------- */
const COUNTRIES = ["საქართველო", "ავსტრალია", "ავსტრია", "ავღანეთი", "აზერბაიჯანი", "ალბანეთი", "ალჟირი", "ამერიკის შეერთებული შტატები", "ანგოლა", "ანდორა", "ანტიგუა და ბარბუდა", "არაბთა გაერთიანებული საამიროები", "არგენტინა", "ახალი ზელანდია", "ბანგლადეში", "ბარბადოსი", "ბაჰამის კუნძულები", "ბაჰრეინი", "ბელარუსი", "ბელგია", "ბელიზი", "ბენინი", "ბოლივია", "ბოსნია და ჰერცეგოვინა", "ბოტსვანა", "ბრაზილია", "ბრუნეი", "ბულგარეთი", "ბურკინა-ფასო", "ბურუნდი", "ბუტანი", "გაბონი", "გაერთიანებული სამეფო", "გაიანა", "გამბია", "განა", "გერმანია", "გვატემალა", "გვინეა", "გვინეა-ბისაუ", "გრენადა", "დანია", "დომინიკა", "დომინიკელთა რესპუბლიკა", "ეგვიპტე", "ეთიოპია", "ეკვადორი", "ეკვატორული გვინეა", "ერაყი", "ერიტრეა", "ესვატინი", "ესპანეთი", "ესტონეთი", "ვანუატუ", "ვატიკანი", "ვენესუელა", "ვიეტნამი", "ზამბია", "ზიმბაბვე", "თურქეთი", "თურქმენეთი", "იაპონია", "იემენი", "ინდოეთი", "ინდონეზია", "იორდანია", "ირანი", "ირლანდია", "ისლანდია", "ისრაელი", "იტალია", "კაბო-ვერდე", "კამბოჯა", "კამერუნი", "კანადა", "კატარი", "კენია", "კვიპროსი", "კირიბატი", "კოლუმბია", "კომორის კუნძულები", "კონგოს დემოკრატიული რესპუბლიკა", "კონგოს რესპუბლიკა", "კოსტა-რიკა", "კოტ-დივუარი", "კუბა", "ლაოსი", "ლატვია", "ლესოთო", "ლიბანი", "ლიბერია", "ლიბია", "ლიტვა", "ლიხტენშტაინი", "ლუქსემბურგი", "მადაგასკარი", "მავრიკი", "მავრიტანია", "მალავი", "მალაიზია", "მალდივები", "მალი", "მალტა", "მაროკო", "მარშალის კუნძულები", "მექსიკა", "მიანმარი", "მიკრონეზია", "მოზამბიკი", "მოლდოვა", "მონაკო", "მონტენეგრო", "მონღოლეთი", "ნამიბია", "ნაურუ", "ნეპალი", "ნიგერი", "ნიგერია", "ნიდერლანდები", "ნიკარაგუა", "ნორვეგია", "ომანი", "პაკისტანი", "პალაუ", "პალესტინა", "პანამა", "პაპუა-ახალი გვინეა", "პარაგვაი", "პერუ", "პოლონეთი", "პორტუგალია", "რუანდა", "რუმინეთი", "რუსეთი", "საბერძნეთი", "სალვადორი", "სამოა", "სამხრეთ აფრიკის რესპუბლიკა", "სამხრეთ კორეა", "სამხრეთ სუდანი", "სან-მარინო", "სან-ტომე და პრინსიპი", "საუდის არაბეთი", "საფრანგეთი", "სეიშელის კუნძულები", "სენეგალი", "სენტ-ვინსენტი და გრენადინები", "სენტ-კიტსი და ნევისი", "სენტ-ლუსია", "სერბეთი", "სიერა-ლეონე", "სინგაპური", "სირია", "სლოვაკეთი", "სლოვენია", "სოლომონის კუნძულები", "სომალი", "სომხეთი", "სუდანი", "სურინამი", "ტაილანდი", "ტანზანია", "ტაჯიკეთი", "ტიმორ-ლესტე", "ტოგო", "ტონგა", "ტრინიდადი და ტობაგო", "ტუვალუ", "ტუნისი", "უგანდა", "უზბეკეთი", "უკრაინა", "უნგრეთი", "ურუგვაი", "ფილიპინები", "ფინეთი", "ფიჯი", "ქუვეითი", "ყაზახეთი", "ყირგიზეთი", "შვედეთი", "შვეიცარია", "შრი-ლანკა", "ჩადი", "ჩეხეთი", "ჩილე", "ჩინეთი", "ჩრდილოეთ კორეა", "ჩრდილოეთ მაკედონია", "ცენტრალური აფრიკის რესპუბლიკა", "ხორვატია", "ჯამაიკა", "ჯიბუტი", "ჰაიტი", "ჰონდურასი"];
const PROJECT_ROLES = ["პორტფელის მენეჯერი","პროექტის მენეჯერი","პროექტის კოორდინატორი","საიტის მენეჯერი","საიტის კოორდინატორი","საქმეთა მწარმოებელი","ინჟინერი","სხვა"];
const PARTICIPANTS = [
  ["portfolio","პორტფელის მენეჯერი","Portfolio Manager"],
  ["pm","პროექტის მენეჯერი","Project Manager"],
  ["coordinator","პროექტის კოორდინატორი","Project Coordinator"],
  ["siteManager","საიტის მენეჯერი","Site Manager"],
  ["siteCoordinator","საიტის კოორდინატორი","Site Coordinator"],
  ["supervisor","საქმეთა მწარმოებელი","Site Supervisor"],
  ["subcontractors","ქვეკონტრაქტორ(ებ)ი","Sub-Contractor(s)"]];
const ROLE_NAMES = {admin:"ადმინი",employee:"თანამშრომელი"};
const ACCESS_NAMES = {executor:"შემსრულებელი",reviewer:"რივიუერი",viewer:"მნახველი"};
const ACCESS_HINT = {executor:"ქმნის და ავსებს ანგარიშებს",reviewer:"ავსებს, ადასტურებს და წერს ფასებს",viewer:"მხოლოდ ნახვა"};
/* role badge next to the user's name; skipped when the name already says the role (e.g. "ადმინისტრატორი") */
function roleTag(u){
  const r=ROLE_NAMES[u.role]||u.role||"";
  return String(u.name||"").toLowerCase().includes(r.slice(0,5).toLowerCase())?null:h("span",{class:"role-tag"},r);
}
const STATUS = {draft:"დრაფტი",submitted:"გაგზავნილი",approved:"დადასტურებული"};
const POLL_MS = 20000;

/* ---------- helpers ---------- */
/* language: Georgian by default, English on demand. Every text passed through h() is translated by tr() */
let LANG=(()=>{ try{ return localStorage.getItem("dpr.lang")==="en"?"en":"ka"; }catch(e){ return "ka"; } })();
const LOCALE=()=>LANG==="en"?"en-GB":"ka-GE";
const BILINGUAL=/^([^]*?[\u10A0-\u10FF][^]*?) \/ ([^\u10A0-\u10FF]*[A-Za-z][^\u10A0-\u10FF]*)$/;
const I18N=window.I18N_EN||{};
const I18N_FRAGS=Object.keys(I18N).filter(k=>/^[\s·,.]|[\s:(]$/.test(k)).sort((a,b)=>b.length-a.length);
function tr(s){
  if(typeof s!=="string"||!/[\u10A0-\u10FF]/.test(s)) return s;
  const bi=BILINGUAL.exec(s);
  if(LANG==="ka") return bi?bi[1]:s;
  if(I18N[s]!=null) return I18N[s];
  const t=s.trim(); if(I18N[t]!=null) return s.replace(t,I18N[t]);
  if(bi) return bi[2];
  let out=s; for(const k of I18N_FRAGS) if(out.includes(k)) out=out.split(k).join(I18N[k]);
  return out;
}
function setLang(l){
  LANG=l; try{ localStorage.setItem("dpr.lang",l); }catch(e){}
  document.documentElement.lang=l; document.title=tr("პროექტები")+" · Tesen Group";
  render();
}
function h(tag, props, ...kids){
  const el=document.createElement(tag);
  for(const c of kids.flat(Infinity)){ if(c==null||c===false) continue; el.append(c instanceof Node?c:String(tr(c))); }
  if(props) for(let [k,v] of Object.entries(props)){
    if(v==null||v===false) continue;
    if(k==="placeholder"||k==="title"||k==="aria-label"||k==="data-l") v=tr(v);
    if(k==="class") el.className=v;
    else if(k==="style") el.style.cssText=v;
    else if(k.startsWith("on")&&typeof v==="function") el.addEventListener(k.slice(2),v);
    else if(k==="value"||k==="checked"||k==="disabled"||k==="selected") el[k]=v;
    else el.setAttribute(k, v===true?"":v);
  }
  return el;
}
const clone = o => JSON.parse(JSON.stringify(o ?? null));
const pad = n => String(n).padStart(2,"0");
const isoDay = d => d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const todayISO = () => isoDay(new Date());
function fmtDate(iso,short){ if(!iso) return ""; const m=/^(\d{4})-(\d{2})-(\d{2})/.exec(iso); if(!m) return String(iso); return m[3]+"."+m[2]+"."+(short?m[1].slice(2):m[1]); }
function fmtDateTime(iso){ if(!iso) return "—"; const d=new Date(iso); return fmtDate(isoDay(d))+" "+pad(d.getHours())+":"+pad(d.getMinutes()); }
function normCode(c){ return String(c??"").trim().replace(/\./g,","); }
function num(v){ if(v===""||v==null) return 0; const n=parseFloat(String(v).replace(",",".")); return isFinite(n)?n:0; }
function fmtNum(n){ return (Math.round(n*100)/100).toLocaleString(LOCALE(),{maximumFractionDigits:2}); }
function toast(msg){ const t=h("div",{class:"toast",role:"status"},msg); document.body.append(t); setTimeout(()=>t.remove(),3400); }
function errMsg(e){ return (e&&e.message)||"უცნობი შეცდომა"; }
function chip(status){ return h("span",{class:"chip st-"+(status||"none")}, STATUS[status]||"არ არის"); }
let uidCounter=0; const uid=()=>"f"+(++uidCounter);
function genPassword(){ const b=new Uint32Array(1); crypto.getRandomValues(b); return String(b[0]%10000).padStart(4,"0"); }

/* ---------- API ---------- */
class ApiError extends Error{ constructor(status,message,code){ super(message); this.status=status; this.code=code; } }
async function api(method,url,body,raw){
  const headers={"X-DPR":"1"}; let payload;
  if(raw){ headers["Content-Type"]=raw.type; payload=raw; }
  else if(body!==undefined){ headers["Content-Type"]="application/json"; payload=JSON.stringify(body); }
  let res;
  try{ res=await fetch("/api"+url,{method,headers,body:payload,credentials:"same-origin"}); }
  catch(e){ throw new ApiError(0,"სერვერთან კავშირი ვერ დამყარდა"); }
  let data=null; try{ data=await res.json(); }catch(e){}
  if(res.status===401 && url!=="/login"){ onLoggedOut(); throw new ApiError(401,"სესია დასრულდა — შედით თავიდან"); }
  if(res.status===403 && data&&data.code==="must_change"){ S.me.mustChange=true; go("account"); throw new ApiError(403,data.error,"must_change"); }
  if(!res.ok) throw new ApiError(res.status,(data&&data.error)||("შეცდომა "+res.status));
  return data;
}

/* ---------- state ---------- */
const S = {
  me:null, admin:false, names:new Map(),
  lists:{weather:[],costCats:[],fuelTypes:[],positions:[],units:[]},
  projects:new Map(), todayReports:new Map(),
  view:"home", pid:null, tab:"reports", month:null, onlyApproved:false,
  reports:new Map(), additional:[], loadedPid:null,
  rep:null, repId:null, dirty:new Set(), saveTimer:null, saving:false,
  boqTimer:null, creating:null, users:[], pollTimer:null
};
const main = document.getElementById("main");

/* ---------- names ---------- */
function nameOf(id){ const u=S.names.get(id); return u?u.name:"—"; }
const who = id => id ? h("span",null,nameOf(id)) : h("span",{class:"muted"},"—");
function initials(name){ return String(name||"?").split(/\s+/).filter(Boolean).slice(0,2).map(s=>s[0]).join("").toUpperCase(); }
async function loadNames(){ const list=await api("GET","/users/names"); S.names=new Map(list.map(u=>[u.id,u])); }

/* ---------- project helpers ---------- */
const P = () => S.projects.get(S.pid);
function isMember(p){ return !!(p && S.me && (p.memberIds||[]).includes(S.me.id)); }
/* rights inside a project come from the team page: executor fills reports, reviewer also approves and prices, viewer only reads */
function accessOf(p){ if(!p||!S.me) return null; if(S.admin) return "admin"; if(!isMember(p)) return null; const a=((p.members||{})[S.me.id]||{}).access; return ACCESS_NAMES[a]?a:"executor"; }
function canWorkOn(p){ return ["admin","reviewer","executor"].includes(accessOf(p)); }
function canReview(p){ return ["admin","reviewer"].includes(accessOf(p)); }
function boqIndex(p){
  const map=new Map(); let chap="", sub="";
  for(const it of (p&&p.boq)||[]){
    const code=normCode(it.code);
    if(it.type==="თავი"){ chap=it.name; sub=""; }
    else if(it.type==="ქვეთავი"){ sub=it.name; }
    map.set(code,{...it,code,chapter:chap,subchapter:sub});
  }
  for(const a of S.additional){ const code=normCode(a.code); if(!map.has(code)) map.set(code,{code,type:"დამატებითი",name:a.name,unit:a.unit,chapter:a.chapter||"დამატებითი სამუშაოები",qty:"",additional:true}); }
  return map;
}
function docCode(p,r){
  const parts=[p.companyCode,p.projectCode,p.accountingCode].filter(Boolean);
  return [...parts,"DPR",String(r.num||0).padStart(3,"0"),"REV"+String(r.rev||0).padStart(2,"0"),fmtDate(r.date,true)].join("-");
}

/* ---------- data loading ---------- */
async function loadProjects(){
  const list=await api("GET","/projects");
  S.projects=new Map(list.map(p=>[p.id,p]));
  /* reviewer on at least one project: sees the analysis page */
  S.reviewer=!S.admin&&list.some(p=>accessOf(p)==="reviewer");
}
async function loadToday(){
  const list=await api("GET","/reports?date="+todayISO());
  S.todayReports=new Map(list.map(r=>[r.projectId,r]));
}
async function loadProjectData(pid){
  const [reps,add]=await Promise.all([api("GET","/projects/"+encodeURIComponent(pid)+"/reports"),api("GET","/projects/"+encodeURIComponent(pid)+"/additional")]);
  if(S.pid!==pid) return;
  S.reports=new Map(reps.map(r=>[r.id,r])); S.additional=add; S.loadedPid=pid;
}
function typing(){ const a=document.activeElement; return !!(a&&main.contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)); }
async function poll(){
  if(!S.me||S.me.mustChange||document.hidden) return;
  try{
    if(S.view==="home"){ await Promise.all([loadProjects(),loadToday()]); if(!typing()&&S.view==="home") render(); }
    else if(S.view==="project"&&S.pid){ await Promise.all([loadProjects(),loadProjectData(S.pid)]); if(!typing()&&S.view==="project") render(); }
    else if(S.view==="report"&&S.pid){ await loadProjectData(S.pid); onReportsChanged(); }
  }catch(e){ /* transient — next poll retries */ }
}
function startPolling(){ clearInterval(S.pollTimer); S.pollTimer=setInterval(poll,POLL_MS); }
document.addEventListener("visibilitychange",()=>{ if(!document.hidden) poll(); });

/* ---------- navigation ---------- */
async function go(view, opts={}){
  const {_pop,_replace,...o}=opts;
  if(S.view==="report" && view!=="report") flushNow();
  Object.assign(S,{view},o);
  if(!_pop) pushNav(_replace);
  if(view!=="report"){ S.rep=null; S.repId=null; S.dirty.clear(); }
  try{ localStorage.setItem("dpr.nav",JSON.stringify({view:["project","report"].includes(S.view)?"project":"home",pid:S.pid,tab:S.tab})); }catch(e){}
  if((view==="project"||view==="report") && S.pid && S.loadedPid!==S.pid){
    S.reports=new Map(); S.additional=[];
    main.replaceChildren(h("div",{class:"empty"},h("h2",null,"იტვირთება…")));
    try{ await loadProjectData(S.pid); }catch(e){ toast("ანგარიშები ვერ ჩაიტვირთა: "+errMsg(e)); }
  }
  if(view==="analysis"&&(S.admin||S.reviewer)){ try{ S.analysis=await api("GET","/analysis"); }catch(e){ S.analysis=null; toast(errMsg(e)); } }
  if(view==="users"&&S.admin){ try{ S.users=await api("GET","/users"); }catch(e){ toast(errMsg(e)); } }
  render(); window.scrollTo(0,0);
}
/* browser history: each screen (and project tab) is a history entry, so the browser's Back button goes one step back */
function navState(){ return {view:S.view,pid:S.pid||null,tab:S.tab||null,repId:S.view==="report"?S.repId:null}; }
function pushNav(replace){
  const st=navState(), cur=history.state;
  if(st.view==="project"||st.view==="report") try{ localStorage.setItem("dpr.nav",JSON.stringify({view:"project",pid:S.pid,tab:S.tab})); }catch(e){}
  if(replace||!cur) history.replaceState(st,"");
  else if(JSON.stringify(cur)!==JSON.stringify(st)) history.pushState(st,"");
}
window.addEventListener("popstate",async e=>{
  const st=e.state; if(!st||!S.me||S.me.mustChange) return;
  S.creating=null; S.editInfo=false;
  if(st.view==="report"&&st.repId){
    if(S.loadedPid!==st.pid){ S.pid=st.pid; S.reports=new Map(); S.additional=[]; try{ await loadProjectData(st.pid); }catch(e){} }
    S.pid=st.pid; S.tab=st.tab||"reports";
    if(S.reports.has(st.repId)){ openReport(st.repId,true); return; }
    go("project",{pid:st.pid,tab:"reports",_replace:true}); return;
  }
  if((st.view==="project"||st.view==="report")&&!S.projects.has(st.pid)){ go("home",{_replace:true}); return; }
  go(st.view,{pid:st.pid,tab:st.tab||S.tab,_pop:true});
});
function onReportsChanged(){
  if(S.view!=="report"||!S.repId||S.oldRev!=null) return;
  const remote=S.reports.get(S.repId);
  if(!remote){ if(S.rep){ toast("ანგარიში წაიშალა"); go("project",{pid:S.pid,tab:"reports"}); } return; }
  if(!S.rep){ S.rep=clone(remote); render(); return; }
  const metaKeys=["status","rev","num","submittedBy","submittedAt","approvedBy","approvedAt","updatedBy","updatedAt","date"];
  let metaChanged=false;
  for(const k of metaKeys){ if(JSON.stringify(S.rep[k])!==JSON.stringify(remote[k])){ S.rep[k]=clone(remote[k]); metaChanged=true; } }
  for(const sec of SECTION_KEYS){
    if(S.dirty.has(sec)||S.saving) continue;
    if(JSON.stringify(S.rep[sec])===JSON.stringify(remote[sec])) continue;
    const el=document.getElementById("sec-"+sec);
    if(el && el.contains(document.activeElement)) continue;
    S.rep[sec]=clone(remote[sec]);
    if(el) el.replaceWith(renderSection(sec));
  }
  if(metaChanged && !typing()) render();
}

/* ---------- top bar ---------- */
function renderBar(){
  const c=document.getElementById("crumbs"); c.replaceChildren();
  const p=P();
  const add=(label,fn)=>{ if(c.childNodes.length) c.append(h("span",{class:"sep"},"/")); c.append(fn?h("button",{type:"button",onclick:fn},label):h("span",{class:"muted"},label)); };
  if(S.view==="settings") add("სიები");
  if(S.view==="users") add("მომხმარებლები");
  if(S.view==="analysis") add("ანალიტიკა");
  if(PLACEHOLDERS[S.view]) add(PLACEHOLDERS[S.view][1]);
  if(S.view==="account") add("ჩემი ანგარიში");
  if((S.view==="project"||S.view==="report") && p) add(p.name,()=>go("project",{pid:S.pid,tab:"reports"}));
  if(S.view==="report" && S.rep) add("DPR-"+String(S.rep.num||0).padStart(3,"0")+" · "+fmtDate(S.rep.date));
  const me=document.getElementById("me"); me.replaceChildren();
  document.querySelector(".brand-name").textContent=tr("პროექტები");
  me.append(h("button",{class:"lang-btn",type:"button",title:LANG==="en"?"ქართული":"English","aria-label":LANG==="en"?"ქართული":"English",onclick:()=>setLang(LANG==="en"?"ka":"en")},LANG==="en"?"ქა":"EN"));
  if(S.me){
    me.append(h("button",{class:"me-btn",type:"button",title:"ჩემი ანგარიში",onclick:()=>go("account")},
      h("span",{class:"avatar"},initials(S.me.name)),h("span",null,S.me.name),roleTag(S.me)));
  }
}

/* ---------- render root ---------- */
function render(){
  const projView=!!(S.me&&!S.me.mustChange&&S.view==="project"&&P());
  const wideTab=S.tab==="schedule"||S.tab==="exec";
  document.body.classList.toggle("has-side",projView&&!wideTab);
  document.body.classList.toggle("wide",projView&&wideTab);
  renderBar();
  let v;
  if(!S.me) v=renderLogin();
  else if(S.me.mustChange||S.view==="account") v=renderAccount();
  else if(S.view==="home") v=renderHome();
  else if(S.view==="settings") v=renderSettings();
  else if(S.view==="users") v=renderUsers();
  else if(S.view==="analysis") v=renderAnalysis();
  else if(PLACEHOLDERS[S.view]) v=renderPlaceholder(PLACEHOLDERS[S.view]);
  else if(S.view==="project") v=P()?renderProject():renderMissing();
  else if(S.view==="report") v=renderReport();
  else v=renderHome();
  const nav=S.me&&!S.me.mustChange&&["home","budget","workforce","materials","issues","analysis","users","settings","account"].includes(S.view);
  document.body.classList.toggle("has-nav",!!nav);
  main.replaceChildren(...[nav?renderAppNav():null,v].flat(Infinity).filter(Boolean));
}
/* pages listed in the menu whose content is still to be designed */
const PLACEHOLDERS={budget:["Budget vs Costs","ბიუჯეტი vs ხარჯები","expenses"],workforce:["Workforce","პერსონალი","personnel"],materials:["Materials","მასალები","materials"],issues:["Issues & Delays","პრობლემები და შეფერხებები","issues"]};
function renderPlaceholder([en,title,ic]){
  return [h("div",{class:"head"},h("div",null,h("div",{class:"eyebrow"},en),h("h1",null,title))),
    h("div",{class:"empty"},icon(ic),h("p",{class:"muted"},"გვერდი მზადდება."))];
}
/* left navigation panel on the app-level pages (projects, analysis, settings) */
function renderAppNav(){
  const item=(view,ic,label)=>h("button",{type:"button",class:"anav-i"+(S.view===view?" on":""),"aria-current":S.view===view?"page":null,onclick:()=>go(view)},icon(ic),h("span",null,label));
  return h("nav",{class:"anav","aria-label":"მენიუ"},
    h("div",{class:"anav-g"},
      item("home","folder","პროექტები"),
      S.admin||S.reviewer?item("budget","expenses","ბიუჯეტი vs ხარჯები"):null,
      item("workforce","personnel","პერსონალი"),
      item("materials","materials","მასალები"),
      item("issues","issues","პრობლემები და შეფერხებები"),
      S.admin||S.reviewer?item("analysis","chart","ანალიტიკა"):null),
    h("div",{class:"anav-g anav-set"},h("div",{class:"hb-l"},"პარამეტრები"),
      S.admin?item("users","personnel","მომხმარებლები"):null,
      S.admin?item("settings","list","სიები"):null,
      item("account","gear","ჩემი ანგარიში")));
}
function renderMissing(){ return h("div",{class:"empty"},h("h2",null,"პროექტი ვერ მოიძებნა"),h("p",{class:"muted"},"შესაძლოა წვდომა შეგეზღუდათ."),h("button",{class:"btn",type:"button",onclick:()=>go("home")},"პროექტების სია")); }

/* ---------- LOGIN ---------- */
function renderLogin(){
  const uId=uid(), pId=uid();
  const err=h("div",{class:"err",role:"alert"});
  const user=h("input",{id:uId,class:"inp",autocomplete:"username",autocapitalize:"none",spellcheck:"false",required:true});
  const pass=h("input",{id:pId,class:"inp",type:"password",autocomplete:"current-password",required:true});
  const btn=h("button",{class:"btn primary",type:"submit"},"შესვლა");
  const form=h("form",{class:"login",onsubmit:async e=>{
    e.preventDefault(); err.textContent=""; btn.disabled=true;
    try{ const r=await api("POST","/login",{username:user.value.trim(),password:pass.value}); await onLoggedIn(r.user); }
    catch(ex){ err.textContent=errMsg(ex); pass.value=""; pass.focus(); }
    btn.disabled=false; }},
    h("div",{class:"login-logo"},h("img",{class:"logo logo-l",src:"/logo.png",alt:"Tesen Group"}),h("img",{class:"logo logo-d",src:"/logo-dark.png",alt:"Tesen Group"})),
    h("div",null,h("h1",null,"შესვლა"),h("p",{class:"muted small",style:"margin:4px 0 0"},"ყოველდღიური რეპორტის საიტი")),
    h("div",{class:"field"},h("label",{for:uId},"მომხმარებლის სახელი"),user),
    h("div",{class:"field"},h("label",{for:pId},"პაროლი"),pass),
    err,btn,
    h("p",{class:"small muted",style:"margin:0"},"ანგარიშს ქმნის ადმინისტრატორი. პაროლი თუ დაგავიწყდათ, მიმართეთ მას."));
  setTimeout(()=>user.focus(),0);
  return h("div",{class:"login-wrap"},form);
}
async function onLoggedIn(user){
  S.me=user; S.admin=user.role==="admin"; S.reviewer=false;
  if(user.mustChange){ S.view="account"; render(); return; }
  await loadAll();
}
function onLoggedOut(){
  S.me=null; S.admin=false; S.reviewer=false; clearInterval(S.pollTimer); S.projects=new Map(); S.reports=new Map(); S.loadedPid=null; S.rep=null; S.repId=null; S.dirty.clear();
  render();
}
async function loadAll(){
  main.replaceChildren(h("div",{class:"empty"},h("h2",null,"იტვირთება…")));
  try{
    const [lists]=await Promise.all([api("GET","/config/lists"),loadNames(),loadProjects(),loadToday()]);
    S.lists=lists;
  }catch(e){ main.replaceChildren(h("div",{class:"empty"},h("h2",null,"მონაცემები ვერ ჩაიტვირთა"),h("p",{class:"muted"},errMsg(e)))); return; }
  let nav=null; try{ nav=JSON.parse(localStorage.getItem("dpr.nav")||"null"); }catch(e){}
  startPolling();
  if(nav&&nav.view==="project"&&nav.pid&&S.projects.has(nav.pid)) go("project",{pid:nav.pid,tab:nav.tab||"reports",_replace:true});
  else go("home",{_replace:true});
}

/* ---------- ACCOUNT ---------- */
function renderAccount(){
  const ids={cur:uid(),n1:uid(),n2:uid()};
  const err=h("div",{class:"small",role:"alert",style:"color:var(--bad);min-height:1.2em"});
  const cur=h("input",{id:ids.cur,class:"inp",type:"password",autocomplete:"current-password",required:true});
  const n1=h("input",{id:ids.n1,class:"inp",type:"password",autocomplete:"new-password",minlength:"4",required:true});
  const n2=h("input",{id:ids.n2,class:"inp",type:"password",autocomplete:"new-password",minlength:"4",required:true});
  const forced=S.me.mustChange;
  const form=h("form",{class:"panel-b",style:"display:flex;flex-direction:column;gap:12px;max-width:420px",onsubmit:async e=>{
    e.preventDefault(); err.textContent="";
    if(n1.value!==n2.value){ err.textContent="ახალი პაროლები არ ემთხვევა"; return; }
    if(n1.value.length<4){ err.textContent=tr("პაროლი მინიმუმ 4 სიმბოლო უნდა იყოს"); return; }
    try{ await api("POST","/me/password",{current:cur.value,next:n1.value}); toast("პაროლი შეიცვალა"); const was=S.me.mustChange; S.me.mustChange=false; if(was) await loadAll(); else go("home"); }
    catch(ex){ err.textContent=errMsg(ex); } }},
    h("div",{class:"field"},h("label",{for:ids.cur},forced?"დროებითი პაროლი":"მიმდინარე პაროლი"),cur),
    h("div",{class:"field"},h("label",{for:ids.n1},"ახალი პაროლი (მინ. 4 სიმბოლო)"),n1),
    h("div",{class:"field"},h("label",{for:ids.n2},"გაიმეორეთ ახალი პაროლი"),n2),
    err,
    h("div",{class:"row"},h("button",{class:"btn primary",type:"submit"},"პაროლის შეცვლა"),
      !forced?h("button",{class:"btn ghost",type:"button",onclick:()=>go("home")},"გაუქმება"):null));
  return [h("div",{class:"head"},h("div",null,h("div",{class:"eyebrow"},S.me.username),h("h1",null,S.me.name)),
      h("button",{class:"btn",type:"button",onclick:async()=>{ flushNow(); try{ await api("POST","/logout"); }catch(e){} onLoggedOut(); }},"გასვლა")),
    forced?h("div",{class:"notice"},"თქვენი პაროლი დროებითია. გასაგრძელებლად დააყენეთ საკუთარი პაროლი."):null,
    h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"პაროლის შეცვლა")),form)];
}

/* ---------- HOME ---------- */
function renderHome(){
  const list=[...S.projects.entries()]
    .sort((a,b)=>(a[1].archived?1:0)-(b[1].archived?1:0)||String(a[1].name).localeCompare(String(b[1].name),"ka"));
  const head=h("div",{class:"head"},
    h("div",null,h("div",{class:"eyebrow"},"Daily Progress Report"),h("h1",null,"პროექტები")),
    S.admin?h("div",{class:"row"},h("button",{class:"btn primary",type:"button",onclick:newProject},"+ ახალი პროექტი")):null);
  const out=[head];
  if(S.creating==="project") out.push(renderProjectForm(null));
  if(!list.length){
    out.push(S.admin
      ? h("div",{class:"empty"},h("h2",null,"ჯერ პროექტი არ არის"),h("p",{class:"muted"},"1) „მომხმარებლები“ — შექმენით თანამშრომლების ანგარიშები. 2) „+ ახალი პროექტი“ — დაამატეთ პროექტი. 3) პროექტში ატვირთეთ ხარჯთაღრიცხვა და დაამატეთ გუნდი."),
          h("button",{class:"btn primary",type:"button",onclick:newProject},"+ ახალი პროექტი"))
      : h("div",{class:"empty"},h("h2",null,"ჯერ არცერთ პროექტში არ ხართ დამატებული"),h("p",{class:"muted"},"სთხოვეთ ადმინისტრატორს, დაგამატოთ პროექტის გუნდში. დამატების შემდეგ პროექტი აქ გამოჩნდება.")));
    return out;
  }
  // dashboard: search, status and company filters, small project tiles (or a table)
  const pos=p=>(p.boq||[]).filter(x=>x.type==="პოზიცია").length;
  const st=p=>p.stats||{progress:0,itemsDone:0,reports:0};
  const all=list.map(e=>e[1]);
  const F=S.homeF||(S.homeF={q:"",f:"active",co:"",view:(()=>{ try{ return localStorage.getItem("dpr.homeView")||"cards"; }catch(e){ return "cards"; } })()});
  const companies=[...new Set(all.map(p=>(p.companyCode||"").trim()).filter(Boolean))].sort();
  if(F.co&&!companies.includes(F.co)) F.co="";
  const q=F.q.trim().toLowerCase();
  const shown=all.filter(p=>(F.f==="all"||(F.f==="archived")===!!p.archived)&&(!F.co||(p.companyCode||"").trim()===F.co)
    &&(!q||[p.name,p.client,p.location,p.companyCode,p.projectCode,p.accountingCode].some(v=>String(v||"").toLowerCase().includes(q))));
  const open=id=>go("project",{pid:id,tab:"reports"});
  const search=h("input",{class:"inp",type:"search",placeholder:"ძებნა: დასახელება, დამკვეთი, კოდი…","aria-label":"ძებნა",value:F.q,oninput:e=>{ F.q=e.target.value; const c=e.target.selectionStart; render(); const el=document.querySelector(".home-search input"); if(el){ el.focus(); el.setSelectionRange(c,c); } }});
  const stBtn=(k,ic,l)=>h("button",{type:"button",class:"vbtn tip"+(F.f===k?" on":""),"aria-label":l,"data-tip":tr(l),"aria-pressed":String(F.f===k),onclick:()=>{F.f=k;render();}},icon(ic));
  const coChip=(k,l)=>h("button",{type:"button",class:"vbtn vtxt"+(k?" co":"")+(F.co===k?" on":""),"aria-pressed":String(F.co===k),onclick:()=>{F.co=k;render();}},l);
  const viewBtn=(k,ic,l)=>h("button",{type:"button",class:"vbtn tip"+(F.view===k?" on":""),"aria-label":l,"data-tip":tr(l),"aria-pressed":String(F.view===k),onclick:()=>{ F.view=k; try{ localStorage.setItem("dpr.homeView",k); }catch(e){} render(); }},icon(ic));
  const prog=p=>h("div",{class:"pprog"},h("div",{class:"pbar"},h("span",{style:"width:"+Math.min(100,st(p).progress)+"%"})),h("b",null,fmtNum(st(p).progress)+"%"));
  const last=p=>st(p).lastDate?h("span",{class:"plast"},"ბოლო: "+fmtDate(st(p).lastDate)," ",chip(st(p).lastStatus)):h("span",{class:"plast muted"},"ანგარიში არ არის");
  const codes=p=>[p.companyCode,p.projectCode,p.accountingCode].filter(Boolean).map(c=>h("span",{class:"code-tag"},c));
  const status=p=>h("span",{class:"pstat "+(p.archived?"off":"on")},h("span",{class:"dot"}),p.archived?"დასრულებული":"აქტიური");
  let listEl;
  if(!shown.length) listEl=h("div",{class:"empty"},h("p",{class:"muted"},"პროექტები ვერ მოიძებნა"));
  else if(F.view==="table") listEl=h("section",{class:"panel"},h("div",{class:"tw"},h("table",{class:"rt ptable"},
    h("thead",null,h("tr",null,["პროექტი","კოდები","სტატუსი","გუნდი","BoQ მუხლი","პროგრესი","ბოლო ანგარიში"].map(l=>h("th",null,l)))),
    h("tbody",null,shown.map(p=>h("tr",{tabindex:"0",onclick:()=>open(p.id),onkeydown:e=>{ if(e.key==="Enter") open(p.id); }},
      h("td",{"data-l":"პროექტი"},h("b",null,p.name||"უსახელო")),
      h("td",{"data-l":"კოდები"},codes(p)),
      h("td",{"data-l":"სტატუსი"},status(p)),
      h("td",{class:"num","data-l":"გუნდი"},(p.memberIds||[]).length),
      h("td",{class:"num","data-l":"BoQ მუხლი"},pos(p)),
      h("td",{"data-l":"პროგრესი"},prog(p)),
      h("td",{"data-l":"ბოლო ანგარიში"},last(p))))))));
  else listEl=h("div",{class:"tiles-grid"},shown.map(p=>h("button",{class:"ptile"+(p.archived?" archived":""),type:"button",onclick:()=>open(p.id)},
      h("div",{class:"ptile-top"},h("span",{class:"ptile-codes"},codes(p).slice(0,3)),status(p)),
      h("div",{class:"ptile-name",title:p.name||""},p.name||"უსახელო"),
      h("div",{class:"ptile-meta"},h("span",null,icon("personnel"),(p.memberIds||[]).length),h("span",null,icon("works"),pos(p)," BoQ")),
      prog(p),
      last(p))));
  out.push(h("div",{class:"dash-left"},
    h("div",{class:"home-bar"},
      h("label",{class:"home-search"},icon("search"),search),
      companies.length?h("div",{class:"hb-grp"},h("span",{class:"hb-l"},"კომპანია"),h("div",{class:"vswitch"},coChip("","ყველა"),companies.map(c=>coChip(c,c)))):null,
      h("div",{class:"hb-grp"},h("span",{class:"hb-l"},"პროექტი"),h("div",{class:"vswitch"},stBtn("active","pulse","აქტიური პროექტები"),stBtn("archived","checkc","დასრულებული პროექტები"),stBtn("all","layers","ყველა პროექტი"))),
      h("div",{class:"hb-grp"},h("span",{class:"hb-l"},"განლაგება"),h("div",{class:"vswitch"},viewBtn("cards","grid","ბარათები"),viewBtn("table","table","ცხრილი")))),
    h("div",{class:"dash-count"},icon("grid"),h("span",null,"პროექტები"),h("span",{class:"spacer"}),h("span",{class:"muted small"},shown.length+" პროექტი")),
    listEl));
  return out;
}

/* a new project starts with the standard HSE items (editable in the form) */
async function newProject(){
  if(!S.hseDefault){ try{ S.hseDefault=await api("GET","/config/hse-default"); }catch(e){ S.hseDefault=[]; } }
  S.creating="project"; render();
}
/* ---------- project form ---------- */
async function saveProject(pid,patch,msg){
  try{ const p=await api("PATCH","/projects/"+encodeURIComponent(pid),patch); p.stats=(S.projects.get(pid)||{}).stats; S.projects.set(pid,p); if(msg) toast(msg); return p; }
  catch(e){ toast("ვერ შეინახა: "+errMsg(e)); throw e; }
}
/* create / edit form laid out like the project data page (title band, participants, codes, HSE) */
function renderProjectForm(pid){
  const p=pid?S.projects.get(pid):{};
  const f={}, pf={};
  const inp=(store,k,val,label)=>{ const el=h("input",{class:"inp","aria-label":label,value:val||""}); store[k]=el; return el; };
  const band=h("div",{class:"sh-band"},
    [["name","პროექტის დასახელება / Project Title"],["client","დამკვეთის დასახელება / Client Name"],["location","ადგილმდებარეობა / Location"]]
      .map(([k,l])=>h("div",{class:"sh-cell"},h("div",{class:"sh-th"},l),h("div",{class:"sh-td sh-td-in"},inp(f,k,p[k],l)))));
  const row=(label,el)=>h("div",{class:"sh-row"},h("div",{class:"sh-lbl"},label),el);
  const parts=h("section",{class:"sh-box"},
    h("div",{class:"sh-hd"},
      h("div",{class:"sh-title"},"👥 პროექტში ჩართული პირი / პოზიცია",h("span",{class:"en"},"Project Participant / Position")),
      h("div",{class:"sh-sub"},"კომპანიის სახელი: პასუხისმგებელი პირის გვარი, ტელეფონი, ელ. ფოსტა")),
    PARTICIPANTS.map(([k,ka,en])=>row(ka+" / "+en,inp(pf,k,(p.participants||{})[k],ka+" / "+en))));
  const codes=h("section",{class:"sh-box"},
    h("div",{class:"sh-hd"},h("div",{class:"sh-title"},"🏷️ კოდები",h("span",{class:"en"},"Codes"))),
    [["accountingCode","პროექტის ბუღალტრული კოდი / Accounting Code"],["companyCode","კომპანიის კოდი / Company Code"],["projectCode","პროექტის კოდი / Project Code"],["dprStart","პირველი DPR ნომერი / First DPR number"]]
      .map(([k,l])=>{ const el=inp(f,k,k==="dprStart"?(p[k]||1):p[k],l); el.classList.add("mono"); if(k==="dprStart"){ el.type="number"; el.min="1"; el.step="1"; } return row(l,el); }));
  const hse=clone(pid?(p.hse||[]):(S.hseDefault||[]));
  const hseBox=h("div",{class:"hse-ed"});
  const drawHse=()=>hseBox.replaceChildren(...hse.map((x,i)=>h("div",{class:"hse-ed-row"},
      h("span",{class:"ix"},i+1),
      h("textarea",{class:"inp",rows:3,"aria-label":"აღწერა ქართულად",value:x.desc||"",oninput:e=>x.desc=e.target.value}),
      h("textarea",{class:"inp",rows:3,"aria-label":"Description in English",value:x.descEn||"",oninput:e=>x.descEn=e.target.value}),
      h("button",{class:"btn sm ghost",type:"button","aria-label":"სტრიქონის წაშლა",onclick:()=>{hse.splice(i,1);drawHse();}},"✕"))),
    h("button",{class:"btn sm",type:"button",onclick:()=>{hse.push({desc:"",descEn:""});drawHse();}},"+ პუნქტი"));
  drawHse();
  const hseSec=h("section",{class:"sh-box"},
    h("div",{class:"sh-hd"},h("div",{class:"sh-title"},"🦺 უსაფრთხოების (HSE) პუნქტები",h("span",{class:"en"},"HSE")),h("div",{class:"sh-sub"},"ყოველი ახალი ანგარიში ამ პუნქტებით იწყება. მარცხნივ ქართულად, მარჯვნივ ინგლისურად.")),
    hseBox);
  const save=async()=>{
    const data={}; for(const k in f) data[k]=f[k].value.trim();
    if(!data.name){ f.name.focus(); toast("შეიყვანეთ პროექტის დასახელება"); return; }
    data.participants={}; for(const k in pf) data.participants[k]=pf[k].value.trim();
    data.hse=hse.map(x=>({desc:(x.desc||"").trim(),descEn:(x.descEn||"").trim()})).filter(x=>x.desc||x.descEn);
    if(pid){ try{ await saveProject(pid,data,"შენახულია"); S.editInfo=false; render(); }catch(e){} }
    else{ try{ const np=await api("POST","/projects",data); S.projects.set(np.id,np); S.creating=null; toast("პროექტი შეიქმნა — დაამატეთ გუნდი"); go("project",{pid:np.id,tab:"team"}); }catch(e){ toast("ვერ შეიქმნა: "+errMsg(e)); } }
  };
  const bar=h("div",{class:"form-bar"},h("h2",null,pid?"პროექტის მონაცემები":"ახალი პროექტი"),
    h("button",{class:"btn ghost",type:"button",onclick:()=>{ if(pid) S.editInfo=false; else S.creating=null; render();}},"გაუქმება"),
    h("button",{class:"btn primary",type:"button",onclick:save},pid?"შენახვა":"შექმნა"));
  return h("div",{class:"sheet-head sheet-form"},bar,band,h("div",{class:"sh-grid"},parts,codes),hseSec);
}

/* ---------- PROJECT ---------- */
const TAB_ICONS={reports:"report",progress:"chart",boq:"list",schedule:"calendar",exec:"target",info:"info",team:"personnel"};
function renderProject(){
  const p=P();
  const tabs=[["reports","ანგარიშები"],["progress","პროგრესი"],["boq","ხარჯთაღრიცხვა (BoQ)"],["schedule","გეგმა-გრაფიკი"],["exec","შესრულების გეგმა"],["info","პროექტის მონაცემები"],...(S.admin?[["team","გუნდი"]]:[])];
  if(!tabs.some(([k])=>k===S.tab)) S.tab="reports";
  // left sidebar: client/location, status, quick figures, the completed toggle (codes and name sit beside the tabs)
  const st=p.stats||{};
  const fact=(l,v)=>h("div",{class:"pside-fact"},h("span",null,l),h("b",null,v));
  const side=h("aside",{class:"pside"},
    p.client||p.location?h("div",{class:"pside-card"},
      p.client?h("div",{class:"pside-li"},icon("building"),h("span",null,p.client)):null,
      p.location?h("div",{class:"pside-li muted"},icon("pin"),h("span",null,p.location)):null):null,
    h("div",{class:"pside-facts"},
      fact("სტატუსი",h("span",{class:"pstat "+(p.archived?"off":"on")},h("span",{class:"dot"}),p.archived?"დასრულებული":"აქტიური")),
      fact("ანგარიშები",String(sortedReports().length)),
      fact("პროგრესი",fmtNum(st.progress||0)+"%"),
      st.lastDate?fact("ბოლო ანგარიში",fmtDate(st.lastDate)):null),
    S.admin?h("button",{class:"btn state-btn pside-state "+(p.archived?"reopen":"finish"),type:"button",onclick:async()=>{
        if(!confirm(tr(p.archived?"პროექტი ისევ აქტიური გახდეს?":"მოვნიშნო პროექტი დასრულებულად? ის „დასრულებულ“ პროექტებში გადავა, ახალი ანგარიში აღარ შეიქმნება."))) return;
        try{ await saveProject(S.pid,{archived:!p.archived},p.archived?"პროექტი ისევ აქტიურია":"პროექტი დასრულებულად მოინიშნა"); render(); }catch(e){} }},
      icon(p.archived?"plus":"works"),p.archived?"აქტიურად დაბრუნება":"დასრულებულად მონიშვნა"):null);
  const tabBar=h("div",{class:"tabs",role:"tablist"},tabs.map(([k,l])=>h("button",{type:"button",role:"tab","aria-label":tr(l),"aria-selected":String(S.tab===k),onclick:()=>{S.tab=k;S.creating=null;S.editInfo=false;pushNav();render();}},icon(TAB_ICONS[k]),h("span",null,tr(l)))));
  let body;
  if(S.tab==="reports") body=renderReportsTab(p);
  else if(S.tab==="progress") body=renderProgress(p);
  else if(S.tab==="boq") body=renderBoq(p);
  else if(S.tab==="team") body=renderTeam(p);
  else if(S.tab==="schedule") body=renderSchedule(p);
  else if(S.tab==="exec") body=renderExec(p);
  else body=renderInfo(p);
  /* codes and name beside the tabs; the row stays put (and frozen under the top bar) on every tab */
  const pid=h("div",{class:"pid"},
    h("div",{class:"pid-codes"},[p.companyCode,p.projectCode,p.accountingCode].filter(Boolean).map(c=>h("span",{class:"code-tag"},c))),
    h("h1",{class:"pid-name",title:p.name},p.name));
  const tabRow=h("div",{class:"ptabs"},pid,tabBar);
  if(S.tab==="schedule"||S.tab==="exec") return h("div",{class:"proj-main"},tabRow,body);
  /* on a phone the sidebar stacks above the tabs, so the codes and name go first */
  if(window.matchMedia("(max-width:980px)").matches) return h("div",{class:"proj-layout"},pid,side,h("div",{class:"proj-main"},h("div",{class:"ptabs"},tabBar),body));
  return h("div",{class:"proj-layout"},side,h("div",{class:"proj-main"},tabRow,body));
}

function canCreateOn(date){ return S.admin || date<=todayISO(); }
function openReport(id,fromHistory){ S.repId=id; S.rep=splitHse(clone(S.reports.get(id))); S.dirty.clear(); S.oldRev=null; S.revs=[]; loadRevisions(); go("report",{pid:S.pid,_pop:!!fromHistory}); }
/* earlier approved versions (kept by the server when a new REV is opened) */
async function loadRevisions(){
  const id=S.repId;
  try{ const list=await api("GET","/reports/"+encodeURIComponent(id)+"/revisions"); if(S.repId!==id) return; S.revs=list; if(S.view==="report"&&!typing()) render(); }catch(e){}
}
function showRevision(v){
  flushNow();
  if(v==="cur"){ S.oldRev=null; S.rep=splitHse(clone(S.reports.get(S.repId))); }
  else{ const old=S.revs.find(x=>String(x.rev)===v); if(!old) return; S.oldRev=old.rev; S.rep=splitHse(clone(old)); }
  render();
}
/* older HSE items hold Georgian and English in one text: show them as two fields, one per language (saved on the next edit) */
function splitHse(r){
  for(const x of (r&&r.hse)||[]){
    if(x.descEn||!x.desc) continue;
    const m=/^([^]*[\u10A0-\u10FF][^]*?)\s+([A-Za-z(][^\u10A0-\u10FF]*)$/.exec(x.desc);
    if(m){ x.desc=m[1].trim(); x.descEn=m[2].trim(); }
  }
  return r;
}
function sortedReports(){ return [...S.reports.entries()].sort((a,b)=>b[1].date.localeCompare(a[1].date)||(b[1].num||0)-(a[1].num||0)); }

/* reports tab: a toolbar (new report on the left, register export on the right) right above the reports table */
function renderReportsTab(p){
  const list=sortedReports();
  const cnt=(arr,f)=>(arr||[]).filter(f).length;
  const bar=h("div",{class:"rep-toolbar"},
    canWorkOn(p)&&!p.archived?renderCreateControls(p):h("span"),
    list.length?h("button",{class:"btn",type:"button",onclick:()=>exportProject(p)},icon("list"),"რეესტრის ექსპორტი (.xlsx)"):null);
  const table=list.length?h("section",{class:"panel"},h("div",{class:"tw"},h("table",{class:"rt rlist-t stack"},
      h("thead",null,h("tr",null,["DPR #","თარიღი","REV","სამუშაო","ფოტო","შექმნა / Created by","დაადასტურა / Approved by","სტატუსი"].map(l=>h("th",null,l)))),
      h("tbody",null,list.map(([id,r])=>h("tr",{tabindex:"0",role:"link",onclick:()=>openReport(id),onkeydown:e=>{ if(e.key==="Enter") openReport(id); }},
        h("td",{class:"rn","data-l":"DPR #"},"DPR-"+String(r.num||0).padStart(3,"0")),
        h("td",{"data-l":"თარიღი"},fmtDate(r.date)),
        h("td",{class:"mono muted","data-l":"REV"},"REV"+String(r.rev||0).padStart(2,"0")),
        h("td",{class:"num","data-l":"სამუშაო"},cnt(r.works,w=>w.code)),
        h("td",{class:"num","data-l":"ფოტო"},(r.photos||[]).length),
        h("td",{"data-l":"შექმნა / Created by"},who(r.createdBy)),
        h("td",{"data-l":"დაადასტურა / Approved by"},r.status==="approved"?who(r.approvedBy):h("span",{class:"muted"},"—")),
        h("td",{"data-l":"სტატუსი"},chip(r.status))))))))
    :h("div",{class:"empty-line muted"},"ანგარიში ჯერ არ შექმნილა.");
  return h("div",{class:"rep-tab"},bar,table);
}
function renderCreateControls(p){
  const date=(S.creating&&S.creating.date)||todayISO();
  const dateIn=h("input",{type:"date",value:date,max:S.admin?null:todayISO(),class:"inp","aria-label":"ანგარიშის თარიღი",onchange:e=>{S.creating={date:e.target.value};render();}});
  const exists=S.reports.has(S.pid+"__"+date); const future=!canCreateOn(date);
  return h("div",{class:"rep-new",id:"create-panel"},dateIn,
    exists?h("button",{class:"btn",type:"button",onclick:()=>openReport(S.pid+"__"+date)},"გახსნა"):
      h("button",{class:"btn primary",type:"button",disabled:future||!date,onclick:()=>createReport(date)},"ანგარიშის შექმნა"),
    exists?h("span",{class:"small muted"},"ამ თარიღზე ანგარიში უკვე არსებობს."):null,
    future?h("span",{class:"small",style:"color:var(--bad)"},"მომავალი თარიღით ანგარიშის შექმნა შეუძლებელია."):null);
}
const hseFromProject=p=>(p.hse||[]).map(x=>({desc:x.desc||"",descEn:x.descEn||"",status:"",comment:""}));

async function createReport(date){
  const data={projectId:S.pid,date,
    conditions:{weather:"",tempMin:"",tempMax:"",hours:"07:00-18:00",breakHours:"13:00-14:00",overtime:""},
    issues:[],hse:hseFromProject(P()),works:[],expenses:[],personnel:[],materials:[],fuel:[],visitors:[],photos:[]};
  try{ const r=await api("POST","/reports",data); S.creating=null; await loadProjectData(S.pid); openReport(r.id); }
  catch(e){ toast("ვერ შეიქმნა: "+errMsg(e)); }
}

/* ---------- REPORT EDITOR ---------- */
const SECTION_KEYS=["conditions","issues","hse","works","expenses","personnel","materials","fuel","visitors","photos"];
function ctx(){ const idx=boqIndex(P()); return {idx,item:c=>c?idx.get(normCode(c)):null}; }
function autoItem(field,missing="ვერ მოიძებნა"){ return (r,c)=>{ if(!r.code) return ""; const it=c.item(r.code); if(!it) return {warn:missing}; return it[field]??""; }; }
const listOpt=k=>()=>S.lists[k]||[];
/* small line icons (24x24, stroke) for section headers and fields */
const ICONS={
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  calendar:'<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M7 13.5h4M7 17h7"/>',
  building:'<path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/><path d="M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4"/>',
  pin:'<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  pulse:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  checkc:'<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
  conditions:'<path d="M12 2v2M4.9 4.9l1.4 1.4M20 12h2M17.7 6.3l1.4-1.4"/><path d="M16 12a4 4 0 0 0-7.4-2.1"/><path d="M17 20H8a4 4 0 1 1 .8-7.9A5 5 0 0 1 18 14a3 3 0 0 1-1 6z"/>',
  issues:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  hse:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  works:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  expenses:'<rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20M16 15h2"/>',
  personnel:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  materials:'<path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
  fuel:'<path d="M3 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M3 22h12M6 6h6v5H6z"/><path d="M15 9h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
  visitors:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  photos:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  temp:'<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pause:'<circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/>',
  plus:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  pdf:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/>',
  folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  chart:'<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  table:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  report:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  print:'<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>'
};
function icon(name){
  const sp=document.createElement("span"); sp.className="ico"; sp.setAttribute("aria-hidden","true");
  sp.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||"")+'</svg>';
  return sp;
}
const amount=r=>num(r.qty)*num(r.price);
const amountText=r=>r.price===""||r.price==null?"":fmtNum(amount(r));
const SECTIONS={
  conditions:{title:"სამუშაო პირობები",en:"Working Conditions",kind:"conditions"},
  issues:{title:"კრიტიკული საკითხები",en:"Open Issues",add:"+ საკითხი",cols:[
    {k:"code",l:"BoQ #",t:"code",w:"92px"},
    {k:"_ch",l:"BoQ თავი",auto:autoItem("chapter"),w:"150px"},
    {k:"_nm",l:"სამუშაოს დასახელება",auto:autoItem("name",""),w:"200px"},
    {k:"desc",l:"კრიტიკული საკითხის აღწერა",t:"area",w:"240px"},
    {k:"_pl",l:"დასრულება გეგმით",auto:(r,c)=>{ if(!r.code) return ""; const it=c.item(r.code); return it&&it.end?fmtDate(it.end):"მონაცემი არაა"; },w:"96px"},
    {k:"updatedDate",l:"განახლებული თარიღი",t:"date",w:"140px"},
    {k:"from",l:"📌-დან",t:"text",w:"80px"},{k:"to",l:"📌-მდე",t:"text",w:"80px"},
    {k:"comment",l:"შენიშვნა",t:"area",w:"200px"}]},
  hse:{title:"უსაფრთხოება",en:"HSE",fixed:true,noIndex:true,cols:[
    {k:"status",l:"ჩატარდა",t:"check",w:"64px"},
    {k:"desc",l:"დასახელება / აღწერა",t:"area",w:"320px",lang:"ka",ro:true},
    {k:"descEn",l:"აღწერა / Description",t:"area",w:"320px",lang:"en",ro:true},
    {k:"comment",l:"შენიშვნა",t:"area",w:"120px"}]},
  works:{title:"შესრულებული სამუშაოები",en:"Ongoing and Additional Works",add:"+ სამუშაო",cols:[
    {k:"code",l:"BoQ #",t:"code",w:"92px"},
    {k:"_ch",l:"BoQ თავი",auto:autoItem("chapter"),w:"140px"},
    {k:"_nm",l:"სამუშაოს დასახელება",auto:autoItem("name",""),w:"220px"},
    {k:"_un",l:"განზ.",auto:autoItem("unit",""),w:"56px"},
    {k:"qty",l:"რაოდ.",t:"num",w:"86px",sum:true,recalc:true},
    {k:"_tot",l:"სულ მოცულობა",auto:(r,c)=>{const it=c.item(r.code); return it&&it.qty!==""&&it.qty!=null?fmtNum(num(it.qty)):"";},w:"86px"},
    {k:"staff",l:"დასაქმებულთა რაოდ.",t:"num",w:"80px",sum:true},
    {k:"from",l:"📌-დან",t:"text",w:"76px"},{k:"to",l:"📌-მდე",t:"text",w:"76px"},
    {k:"_st",l:"დაწყება (გეგმა)",auto:(r,c)=>{ if(!r.code) return ""; const it=c.item(r.code); return it&&it.start?fmtDate(it.start):"მონაცემი არაა"; },w:"90px"},
    {k:"_en",l:"დასრულება (გეგმა)",auto:(r,c)=>{ if(!r.code) return ""; const it=c.item(r.code); return it&&it.end?fmtDate(it.end):"მონაცემი არაა"; },w:"90px"},
    {k:"price",l:"ერთ. ღირებულება",t:"num",w:"100px",admin:true,recalc:true},
    {k:"_amt",l:"ღირებულება",auto:r=>amountText(r),sumFn:rows=>rows.reduce((a,r)=>a+amount(r),0),w:"110px",admin:true},
    {k:"comment",l:"კომენტარი",t:"area",w:"180px"}]},
  expenses:{title:"ხარჯები",en:"Expenses",add:"+ ხარჯი",cols:[
    {k:"code",l:"BoQ #",t:"code",w:"92px"},
    {k:"_nm",l:"სამუშაოს დასახელება",auto:autoItem("name"),w:"180px"},
    {k:"type",l:"ხარჯის ტიპი",t:"select",opts:listOpt("costCats"),w:"130px",structural:true},
    {k:"desc",l:"ხარჯის აღწერა",t:"area",w:"200px"},
    {k:"unit",l:"განზ.",t:"select",opts:listOpt("units"),w:"80px"},
    {k:"qty",l:"რაოდ.",t:"num",w:"80px",recalc:true},
    {k:"fuelType",l:"საწვავის ტიპი",t:"select",opts:listOpt("fuelTypes"),w:"110px",when:r=>r.type==="ტექნიკა"},
    {k:"fuelQty",l:"საწვავის რაოდ.",t:"num",w:"86px",sum:true,when:r=>r.type==="ტექნიკა"},
    {k:"country",l:"ქვეყანა",t:"select",opts:()=>COUNTRIES,w:"130px"},
    {k:"price",l:"ერთ. ღირებულება",t:"num",w:"100px",admin:true,recalc:true},
    {k:"_amt",l:"ღირებულება",auto:r=>amountText(r),sumFn:rows=>rows.reduce((a,r)=>a+amount(r),0),w:"110px",admin:true},
    {k:"comment",l:"კომენტარი",t:"area",w:"170px"}]},
  personnel:{title:"პერსონალი",en:"Personnel on site",add:"+ თანამშრომელი",cols:[
    {k:"name",l:"სახელი გვარი",t:"text",w:"180px"},
    {k:"position",l:"პოზიცია",t:"select",opts:listOpt("positions"),w:"140px"},
    {k:"start",l:"დაწყების დრო",t:"time",w:"100px"},
    {k:"end",l:"დასრულების დრო",t:"time",w:"100px"},
    {k:"work",l:"სამუშაოს დასახელება",t:"area",w:"240px"},
    {k:"meal",l:"კვება (1/0)",t:"select",opts:()=>["1","0"],w:"76px",sum:true}]},
  materials:{title:"მიღებული მასალა",en:"Received Materials",add:"+ მასალა",cols:[
    {k:"name",l:"მასალის სახელწოდება",t:"text",w:"200px"},
    {k:"unit",l:"განზ.",t:"select",opts:listOpt("units"),w:"80px"},
    {k:"qty",l:"რაოდენობა",t:"num",w:"90px"},
    {k:"driver",l:"მძღოლი, საკონტაქტო",t:"text",w:"190px"},
    {k:"plate",l:"ავტომობილის ნომერი",t:"text",w:"110px"},
    {k:"comment",l:"შენიშვნა",t:"area",w:"170px"}]},
  fuel:{title:"მიღებული საწვავი",en:"Fuel Received at Site",add:"+ საწვავი",cols:[
    {k:"name",l:"დასახელება",t:"select",opts:listOpt("fuelTypes"),w:"140px"},
    {k:"unit",l:"განზ.",t:"select",opts:listOpt("units"),w:"80px"},
    {k:"qty",l:"რაოდენობა",t:"num",w:"90px",sum:true},
    {k:"driver",l:"მძღოლი, საკონტაქტო",t:"text",w:"190px"},
    {k:"plate",l:"ავტომობილის ნომერი",t:"text",w:"110px"},
    {k:"comment",l:"შენიშვნა",t:"area",w:"170px"}]},
  visitors:{title:"ვიზიტორები",en:"Site Visitors",add:"+ ვიზიტორი",cols:[
    {k:"name",l:"სახელი და გვარი",t:"text",w:"180px"},
    {k:"company",l:"კომპანია",t:"text",w:"150px"},
    {k:"position",l:"პოზიცია",t:"text",w:"130px"},
    {k:"time",l:"ვიზიტის დრო",t:"time",w:"100px"},
    {k:"purpose",l:"ვიზიტის მიზანი",t:"area",w:"200px"},
    {k:"comment",l:"შენიშვნა",t:"area",w:"170px"}]},
  photos:{title:"ფოტო მასალა",en:"Photos",kind:"photos"}
};

function repEditable(){
  const p=P(), r=S.rep; if(!p||!r||p.archived||S.oldRev!=null) return false;
  if(canReview(p)) return r.status!=="approved";
  return canWorkOn(p) && r.status==="draft";
}
/* which sections already have something in them (for the progress bar under the report header) */
function sectionFilled(k,r){
  if(k==="conditions") return !!(r.conditions&&r.conditions.weather);
  if(k==="hse") return (r.hse||[]).some(x=>x.status==="კი");
  if(k==="works") return (r.works||[]).some(x=>x.code);
  return (r[k]||[]).some(x=>Object.values(x||{}).some(v=>v!==""&&v!=null));
}
function renderSecProgress(){
  const r=S.rep, done=SECTION_KEYS.filter(k=>sectionFilled(k,r));
  return h("div",{class:"rep-prog",id:"rep-prog",title:done.map(k=>tr(SECTIONS[k].title)).join(", ")},
    h("div",{class:"rep-prog-bar"},SECTION_KEYS.map(k=>h("button",{type:"button",class:"seg"+(done.includes(k)?" on":""),title:SECTIONS[k].title,onclick:()=>document.getElementById("sec-"+k)?.scrollIntoView({behavior:"smooth"})},h("span",{class:"seg-bar"}),h("span",{class:"seg-l"},SECTIONS[k].title)))),
    h("span",{class:"small muted"},"შევსებულია "+done.length+" / "+SECTION_KEYS.length));
}
function markDirty(sec){
  S.dirty.add(sec); setSave("შენახვა…");
  const pg=document.getElementById("rep-prog"); if(pg&&S.rep) pg.replaceWith(renderSecProgress());
  clearTimeout(S.saveTimer); S.saveTimer=setTimeout(flush,900);
}
function setSave(t,err){ const el=document.getElementById("savest"); if(el){ el.textContent=tr(t); el.classList.toggle("err",!!err); } }
async function flush(){
  if(!S.dirty.size||S.saving||!S.repId) return;
  S.saving=true; const secs=[...S.dirty]; S.dirty.clear(); const id=S.repId;
  const patch={}; for(const s of secs) patch[s]=clone(S.rep[s]);
  try{ const r=await api("PATCH","/reports/"+encodeURIComponent(id),patch); S.reports.set(id,r);
       if(S.rep&&S.repId===id){ S.rep.updatedBy=r.updatedBy; S.rep.updatedAt=r.updatedAt; }
       setSave("შენახულია "+new Date().toLocaleTimeString(LOCALE(),{hour:"2-digit",minute:"2-digit"})); }
  catch(e){ secs.forEach(s=>S.dirty.add(s)); setSave("ვერ შეინახა: "+errMsg(e),true); }
  S.saving=false; if(S.dirty.size){ clearTimeout(S.saveTimer); S.saveTimer=setTimeout(flush,3000); }
}
function flushNow(){ clearTimeout(S.saveTimer); flush(); }
window.addEventListener("pagehide",flushNow);
window.addEventListener("beforeunload",e=>{ if(S.dirty.size){ flushNow(); e.preventDefault(); e.returnValue=""; } });

function renderReport(){
  const p=P(), r=S.rep;
  if(!p||!r) return h("div",{class:"empty"},h("h2",null,"ანგარიში ვერ მოიძებნა"),h("button",{class:"btn",type:"button",onclick:()=>go("project",{pid:S.pid,tab:"reports"})},"ანგარიშების სია"));
  const ed=repEditable();
  const actions=[];
  const setStatus=async(action,msg)=>{
    clearTimeout(S.saveTimer); await flush();
    try{ const nr=await api("POST","/reports/"+encodeURIComponent(S.repId)+"/status",{action}); S.reports.set(nr.id,nr); S.rep=clone(nr); toast(msg); render(); if(action==="reopen") loadRevisions(); }
    catch(e){ toast("ვერ შესრულდა: "+errMsg(e)); } };
  const old=S.oldRev!=null;
  if(!old&&r.status==="draft" && canWorkOn(p) && !p.archived)
    actions.push(h("button",{class:"btn primary",type:"button",onclick:()=>setStatus("submit","ანგარიში გაიგზავნა დასადასტურებლად")},"გაგზავნა"));
  if(!old&&canReview(p) && r.status==="submitted"){
    actions.push(h("button",{class:"btn",type:"button",onclick:()=>setStatus("return","ანგარიში დაბრუნდა შესავსებად")},"დაბრუნება"));
    actions.push(h("button",{class:"btn ok",type:"button",onclick:()=>setStatus("approve","ანგარიში დადასტურდა")},"დადასტურება"));
  }
  if(!old&&canReview(p) && r.status==="approved")
    actions.push(h("button",{class:"btn",type:"button",onclick:()=>setStatus("reopen","გაიხსნა ახალი რევიზია")},"ახალი რევიზია (REV+1)"));
  actions.push(h("button",{class:"btn",type:"button",onclick:()=>printReport(p,S.rep)},icon("print"),"ბეჭდვა"));
  actions.push(h("button",{class:"btn",type:"button",onclick:e=>pdfReport(p,S.rep,e.currentTarget)},icon("pdf"),"PDF"));
  if(window.XLSX) actions.push(h("button",{class:"btn",type:"button",onclick:()=>exportReport(p)},"Excel"));
  if(!old&&S.admin && r.status!=="approved") actions.push(deleteControl());
  const cur=S.reports.get(S.repId)||r;
  const revSel=S.revs&&S.revs.length?h("select",{class:"inp rev-sel","aria-label":"ვერსია",onchange:e=>showRevision(e.target.value)},
    h("option",{value:"cur"},"REV"+String(cur.rev||0).padStart(2,"0")+" — მიმდინარე"),
    S.revs.map(x=>h("option",{value:String(x.rev)},"REV"+String(x.rev).padStart(2,"0")+" — დადასტურებული"+(x.approvedAt?" "+fmtDate(x.approvedAt.slice(0,10)):"")))):null;
  if(revSel) revSel.value=old?String(S.oldRev):"cur";

  const head=h("div",{class:"rep-head"},
    h("div",{style:"display:flex;flex-direction:column;gap:3px;min-width:0;flex:1 1 280px"},
      h("div",{class:"row",style:"gap:10px"},h("div",{class:"doc-code"},docCode(p,r)),revSel),
      h("div",{class:"row small"},h("strong",null,fmtDate(r.date)),chip(r.status),
        h("span",{class:"muted"},"ავტორი: "),who(r.createdBy),
        r.submittedBy?[h("span",{class:"muted"},"· გაგზავნა: "),who(r.submittedBy)]:null,
        r.approvedBy&&r.status==="approved"?[h("span",{class:"muted"},"· დაადასტურა: "),who(r.approvedBy)]:null)),
    h("span",{class:"savest",id:"savest"},ed?"ცვლილებები ავტომატურად ინახება":"მხოლოდ ნახვა"),
    h("div",{class:"row"},actions));

  const notice = old ? h("div",{class:"notice"},"ეს არის ძველი ვერსია (REV"+String(S.oldRev).padStart(2,"0")+") — მხოლოდ ნახვა. მიმდინარე ვერსიაზე დასაბრუნებლად აირჩიეთ ის ჩამოსაშლელში.")
    : !ed ? h("div",{class:"notice info"},
      r.status==="submitted"?"ანგარიში გაგზავნილია და ელოდება დადასტურებას. ცვლილებისთვის ადმინისტრატორმა უნდა დააბრუნოს.":
      r.status==="approved"?"ანგარიში დადასტურებულია. ცვლილებისთვის ადმინისტრატორი ხსნის ახალ რევიზიას.":
      "ამ ანგარიშის რედაქტირება შეუძლიათ მხოლოდ პროექტის გუნდის წევრებს.") : null;

  const datalist=h("datalist",{id:"boq-dl"},[...ctx().idx.values()].filter(it=>it.type!=="თავი"&&it.type!=="ქვეთავი").map(it=>h("option",{value:it.code},it.name)));
  return [head,renderSecProgress(),notice,datalist,h("div",{class:"secs"},SECTION_KEYS.map(renderSection))];
}
/* printing: a clean document built from the report data, laid out like the DPR form */
function printReport(p,r){
  flushNow();
  document.querySelectorAll(".print-doc").forEach(e=>e.remove());
  const doc=buildPrintDoc(p,r); document.body.append(doc);
  const imgs=[...doc.querySelectorAll("img")];
  Promise.all(imgs.map(im=>im.complete?0:new Promise(res=>{ im.onload=im.onerror=res; }))).then(()=>{
    window.print();
    setTimeout(()=>doc.remove(),1000);
  });
}
/* PDF download: the same print document, handed to html2pdf (loaded on first use), which renders and saves it */
let html2pdfLoading=null;
function loadHtml2pdf(){
  if(window.html2pdf) return Promise.resolve();
  return html2pdfLoading||(html2pdfLoading=new Promise((res,rej)=>{ const sc=document.createElement("script"); sc.src="/vendor/html2pdf.bundle.min.js"; sc.onload=res; sc.onerror=()=>{ html2pdfLoading=null; rej(new Error("PDF ბიბლიოთეკა ვერ ჩაიტვირთა")); }; document.head.append(sc); }));
}
async function pdfReport(p,r,btn){
  flushNow();
  if(btn) btn.disabled=true;
  const doc=buildPrintDoc(p,r); doc.classList.add("pdf-doc");
  try{
    await loadHtml2pdf();
    await Promise.all([...doc.querySelectorAll("img")].map(im=>im.complete?0:new Promise(res=>{ im.onload=im.onerror=res; })));
    await window.html2pdf().set({margin:8,filename:docCode(p,r)+".pdf",image:{type:"jpeg",quality:0.95},
      html2canvas:{scale:2,backgroundColor:"#ffffff"},jsPDF:{unit:"mm",format:"a4",orientation:"landscape"},
      pagebreak:{mode:["css","legacy"],avoid:[".pd-sec:not(.long)","tr",".pd-head",".pd-sign"]}}).from(doc).save();
  }catch(e){ toast("PDF ვერ შეიქმნა: "+errMsg(e)); }
  if(btn) btn.disabled=false;
}
function buildPrintDoc(p,r){
  const c=ctx(), it=code=>c.item(code)||{}, parts=p.participants||{}, cond=r.conditions||{};
  const n=v=>v===""||v==null?"":fmtNum(num(v));
  const T=(head,rows,foot)=>h("table",{class:"pd-t"},h("thead",null,h("tr",null,head.map(x=>h("th",null,x)))),h("tbody",null,rows),foot?h("tfoot",null,foot):null);
  const td=(v,cls)=>h("td",{class:cls||null},v==null||v===""?"":v);
  const sec=(key,title,body,long)=>h("section",{class:"pd-sec"+(long?" long":"")},h("h3",null,title),body);
  const empty=[];
  const table=(key,title,head,rows,foot)=>{ if(!rows.length){ empty.push(tr(title)); return null; } return sec(key,title,T(head,rows,foot),rows.length>8); };
  const priced=canReview(p);
  const kv=list=>h("table",{class:"pd-t"},h("tbody",null,list.map(([k,v])=>h("tr",null,h("td",{class:"k"},k),td(v)))));
  const info=h("table",{class:"pd-t pd-info"},h("tbody",null,
    [[["პროექტის დასახელება / Project Title",p.name],["დამკვეთი / Client",p.client],["ადგილმდებარეობა / Location",p.location]],
     [["თარიღი / Date",fmtDate(r.date)],["სტატუსი / Status",STATUS[r.status]+" · REV"+String(r.rev||0).padStart(2,"0")],["ბუღალტრული კოდი / Accounting Code",p.accountingCode]]]
      .map(row=>h("tr",null,row.map(([l,v])=>h("td",null,h("span",{class:"l"},l),h("span",{class:"v"},v||"—")))))));
  const temp=[cond.tempMin,cond.tempMax].some(Boolean)?(cond.tempMin||"—")+" / "+(cond.tempMax||"—")+" °C":"";
  const top=h("div",{class:"pd-two"},
    sec("parts","პროექტში ჩართული პირები / Project Participants",kv(PARTICIPANTS.map(([k,ka,en])=>[ka+" / "+en,parts[k]]))),
    sec("conditions","სამუშაო პირობები / Working Conditions",kv([["ამინდი / Weather",cond.weather],["ტემპ / Temp (min / max)",temp],["სამუშაო საათები / Working Hours",cond.hours],["არა სამუშაო საათები / Non-Working Hours",cond.breakHours],["დამატებითი სამუშაო საათი / Overtime hours",cond.overtime]])));
  const hse=table("hse","უსაფრთხოება / HSE",["#","დასახელება / აღწერა","ჩატარდა","შენიშვნა"],
    (r.hse||[]).map((x,i)=>h("tr",null,td(i+1,"c"),td((LANG==="en"?x.descEn:x.desc)||x.desc||x.descEn),td(x.status==="კი"?"✔":"—","c"),td(x.comment))));
  const issues=table("issues","კრიტიკული საკითხები / Open Issues",["BoQ #","BoQ თავი","სამუშაოს დასახელება","კრიტიკული საკითხის აღწერა","დასრულება გეგმით","განახლებული თარიღი","📌-დან","📌-მდე","შენიშვნა"],
    (r.issues||[]).map(x=>h("tr",null,td(x.code),td(it(x.code).chapter),td(it(x.code).name),td(x.desc),td(fmtDate(it(x.code).end)),td(fmtDate(x.updatedDate)),td(x.from),td(x.to),td(x.comment))));
  const wrows=(r.works||[]).filter(x=>x.code||x.qty);
  const works=table("works","შესრულებული სამუშაოები / Ongoing and Additional Works",
    ["BoQ #","სამუშაოს დასახელება","განზ.","რაოდ.","სულ მოცულობა","დასაქმებულთა რაოდ.","📌-დან","📌-მდე","კომენტარი",...(priced?["ერთ. ღირებულება","ღირებულება"]:[])],
    wrows.map(x=>h("tr",null,td(x.code),td(it(x.code).name),td(it(x.code).unit),td(n(x.qty),"n"),td(n(it(x.code).qty),"n"),td(n(x.staff),"n"),td(x.from),td(x.to),td(x.comment),...(priced?[td(n(x.price),"n"),td(amountText(x),"n")]:[]))),
    priced&&wrows.some(x=>x.price!==""&&x.price!=null)?h("tr",null,h("td",{colspan:"10"},"სულ"),td(fmtNum(wrows.reduce((a,x)=>a+amount(x),0)),"n")):null);
  const erows=r.expenses||[];
  const expenses=table("expenses","ხარჯები / Expenses",
    ["BoQ #","ხარჯის ტიპი","ხარჯის აღწერა","განზ.","რაოდ.","საწვავის ტიპი","საწვავის რაოდ.","ქვეყანა","კომენტარი",...(priced?["ერთ. ღირებულება","ღირებულება"]:[])],
    erows.map(x=>h("tr",null,td(x.code),td(x.type),td(x.desc),td(x.unit),td(n(x.qty),"n"),td(x.fuelType),td(n(x.fuelQty),"n"),td(x.country),td(x.comment),...(priced?[td(n(x.price),"n"),td(amountText(x),"n")]:[]))),
    priced&&erows.some(x=>x.price!==""&&x.price!=null)?h("tr",null,h("td",{colspan:"10"},"სულ"),td(fmtNum(erows.reduce((a,x)=>a+amount(x),0)),"n")):null);
  const personnel=table("personnel","პერსონალი / Personnel on site",["#","სახელი გვარი","პოზიცია","დაწყების დრო","დასრულების დრო","სამუშაოს დასახელება","კვება (1/0)"],
    (r.personnel||[]).filter(x=>x.name||x.work).map((x,i)=>h("tr",null,td(i+1,"c"),td(x.name),td(x.position),td(x.start,"c"),td(x.end,"c"),td(x.work),td(x.meal,"c"))));
  const mf=rows=>rows.map((x,i)=>h("tr",null,td(i+1,"c"),td(x.name),td(x.unit),td(n(x.qty),"n"),td(x.driver),td(x.plate),td(x.comment)));
  const mhead=["#","დასახელება","განზ.","რაოდენობა","მძღოლი, საკონტაქტო","ავტომობილის ნომერი","შენიშვნა"];
  const materials=table("materials","მიღებული მასალა / Received Materials",mhead,mf(r.materials||[]));
  const fuel=table("fuel","მიღებული საწვავი / Fuel Received at Site",mhead,mf(r.fuel||[]));
  const visitors=table("visitors","ვიზიტორები / Site Visitors",["სახელი და გვარი","კომპანია","პოზიცია","ვიზიტის დრო","ვიზიტის მიზანი","შენიშვნა"],
    (r.visitors||[]).map(x=>h("tr",null,td(x.name),td(x.company),td(x.position),td(x.time,"c"),td(x.purpose),td(x.comment))));
  const photos=(r.photos||[]).length?sec("photos","ფოტო მასალა / Photos",h("div",{class:"pd-ph"},r.photos.map((x,i)=>h("figure",null,h("img",{src:x.url,alt:""}),h("figcaption",null,"Foto #"+(i+1)+(x.desc?" — "+x.desc:""))))),true):(empty.push(tr("ფოტო მასალა / Photos")),null);
  return h("div",{class:"print-doc"},
    h("div",{class:"pd-head"},h("img",{src:"/logo.png",alt:"Tesen Group"}),
      h("div",{class:"pd-title"},h("b",null,"ყოველდღიური ანგარიში / Daily Progress Report"),h("span",{class:"pd-code"},docCode(p,r)))),
    info,top,hse,issues,works,expenses,personnel,materials,fuel,visitors,photos,
    empty.length?h("div",{class:"pd-empty"},"ჩანაწერის გარეშე: ",empty.join(", ")):null,
    h("div",{class:"pd-sign"},h("div",null,"ობიექტის საქმეთა მწარმოებელი / Site Supervisor"),h("div",null,"საიტის მენეჯერი / Site Manager"),h("div",null,"დაადასტურა / Approved by",": ",r.status==="approved"&&r.approvedBy?nameOf(r.approvedBy):"")));
}
function deleteControl(){
  const wrap=h("span",{class:"confirm"});
  const ask=()=>{ wrap.replaceChildren(h("span",null,"წავშალო ანგარიში?"),
      h("button",{class:"btn sm danger",type:"button",onclick:async()=>{ try{ clearTimeout(S.saveTimer); S.dirty.clear(); await api("DELETE","/reports/"+encodeURIComponent(S.repId)); S.reports.delete(S.repId); await loadProjectData(S.pid).catch(()=>{}); toast("ანგარიში წაიშალა"); go("project",{pid:S.pid,tab:"reports"}); }catch(e){ toast("ვერ წაიშალა: "+errMsg(e)); } }},"დიახ, წაშლა"),
      h("button",{class:"btn sm ghost",type:"button",onclick:()=>wrap.replaceChildren(btn)}, "არა")); };
  const btn=h("button",{class:"btn ghost",type:"button",onclick:ask},"წაშლა");
  wrap.append(btn); return wrap;
}
/* fixed project data laid out like the DPR sheet header: title band, codes, participants */
function renderProjectSheet(p){
  const parts=p.participants||{};
  const band=h("div",{class:"sh-band"},
    [["პროექტის დასახელება / Project Title",p.name],["დამკვეთის დასახელება / Client Name",p.client],["ადგილმდებარეობა / Location",p.location]]
      .map(([l,v])=>h("div",{class:"sh-cell"},h("div",{class:"sh-th"},l),h("div",{class:"sh-td"},v||"—"))));
  const row=(l,v,mono)=>h("div",{class:"sh-row"},h("div",{class:"sh-lbl"},l),h("div",{class:"sh-val"+(mono?" mono":"")},v||""));
  const parts_=h("section",{class:"sh-box"},
    h("div",{class:"sh-hd"},
      h("div",{class:"sh-title"},"👥 პროექტში ჩართული პირი / პოზიცია",h("span",{class:"en"},"Project Participant / Position")),
      h("div",{class:"sh-sub"},"კომპანიის სახელი: პასუხისმგებელი პირის გვარი, ტელეფონი, ელ. ფოსტა")),
    PARTICIPANTS.map(([k,ka,en])=>row(ka+" / "+en,parts[k])));
  const codes=h("section",{class:"sh-box"},
    h("div",{class:"sh-hd"},h("div",{class:"sh-title"},"🏷️ კოდები",h("span",{class:"en"},"Codes"))),
    row("პროექტის ბუღალტრული კოდი / Accounting Code",p.accountingCode,true),
    row("კომპანიის კოდი / Company Code",p.companyCode,true),
    row("პროექტის კოდი / Project Code",p.projectCode,true),
    row("პირველი DPR ნომერი / First DPR number","DPR-"+String(p.dprStart||1).padStart(3,"0"),true));
  const hse=h("section",{class:"sh-box"},
    h("div",{class:"sh-hd"},h("div",{class:"sh-title"},"🦺 უსაფრთხოების (HSE) პუნქტები",h("span",{class:"en"},"HSE")),h("div",{class:"sh-sub"},"ყოველი ახალი ანგარიში ამ პუნქტებით იწყება.")),
    (p.hse||[]).length?h("ol",{class:"hse-list"},(p.hse||[]).map(x=>h("li",null,(LANG==="en"?x.descEn:x.desc)||x.desc||x.descEn))):h("div",{class:"muted small"},"პუნქტები არ არის."));
  return h("div",{class:"sheet-head"},band,h("div",{class:"sh-grid"},parts_,codes),hse);
}

function renderSection(key){
  const def=SECTIONS[key], r=S.rep, ed=repEditable();
  let body;
  if(def.kind==="conditions") body=h("div",{class:"panel-b"},renderConditions(ed));
  else if(def.kind==="photos") body=renderPhotos(ed);
  else body=renderRows(key,def,r[key]||(r[key]=[]),ed);
  return h("section",{class:"panel sec sec-"+key,id:"sec-"+key},
    h("div",{class:"panel-h sec-h"},h("h2",null,icon(key),def.title,h("span",{class:"en"},def.en)),
      key==="hse"&&ed&&!(r.hse||[]).length&&(P().hse||[]).length?h("button",{class:"btn sm",type:"button",onclick:()=>fillHseFromProject()},"პროექტის HSE პუნქტები"):null),
    body);
}
function fillHseFromProject(){
  S.rep.hse=hseFromProject(P()); markDirty("hse");
  document.getElementById("sec-hse").replaceWith(renderSection("hse"));
}
function renderConditions(ed){
  const c=S.rep.conditions||(S.rep.conditions={});
  const fld=(ic,label,cls,...ctrls)=>{ const id=uid(); ctrls[0].id=id; return h("div",{class:"cond-f"+(cls?" "+cls:"")},h("label",{for:id},icon(ic),label),h("div",{class:"cond-c"},ctrls)); };
  const inp=(k,type,ph,cls)=>{ const el=h("input",{class:"inp"+(cls?" "+cls:""),type:type||"text",disabled:!ed,placeholder:ph||"",oninput:e=>{c[k]=e.target.value;markDirty("conditions");}}); el.value=c[k]??""; return el; };
  const weather=h("select",{class:"inp",disabled:!ed,onchange:e=>{c.weather=e.target.value;markDirty("conditions");}},h("option",{value:""},"—"),(S.lists.weather||[]).map(o=>h("option",{value:o},o)));
  weather.value=c.weather??"";
  return h("div",{class:"cond"},
    fld("conditions","ამინდი / Weather","",weather),
    fld("temp","ტემპ / Temp (min / max)","",inp("tempMin","number","min","t"),h("span",{class:"muted"},"–"),inp("tempMax","number","max","t"),h("span",{class:"muted small"},"°C")),
    fld("clock","სამუშაო საათები / Working Hours","",inp("hours","text","")),
    fld("pause","არა სამუშაო საათები / Non-Working Hours","",inp("breakHours","text","")),
    fld("plus","დამატებითი სამუშაო საათი / Overtime hours","wide",inp("overtime","text","")));
}

function renderRows(key,def,rows,ed){
  const c=ctx();
  const cols=def.cols.filter(col=>(!col.lang||col.lang===LANG)&&(!col.admin||canReview(P())));
  const amtCol=cols.find(col=>col.k==="_amt");
  const refreshAmount=i=>{ if(!amtCol) return;
    const td=document.getElementById(key+"-"+i+"-_amt"); if(td) td.textContent=amountText(rows[i]);
    const ft=document.getElementById(key+"-sum-_amt"); if(ft) ft.textContent=fmtNum(amtCol.sumFn(rows)); };
  const rerender=()=>{ document.getElementById("sec-"+key).replaceWith(renderSection(key)); };
  const cell=(row,col,i)=>{
    if(col.auto){ const v=col.auto(row,c); const warn=v&&typeof v==="object"; return h("td",{id:key+"-"+i+"-"+col.k,class:"auto"+(warn?" warn":"")+(col.sumFn?" num":""),"data-l":col.l},warn?v.warn:v); }
    const active=!col.when||col.when(row);
    const val=row[col.k]??"";
    if(col.t==="check"){ const id=key+"-"+i+"-"+col.k;
      return h("td",{"data-l":col.l,class:"chk"+(ed&&active?" ed":"")},h("label",{class:"ck-wrap",for:id},h("input",{id,type:"checkbox",checked:val==="კი",disabled:!ed||!active,"aria-label":col.l,onchange:e=>{ row[col.k]=e.target.checked?"კი":""; markDirty(key); }}))); }
    if(!ed||!active||col.ro){ return h("td",{"data-l":col.l},h("span",{class:"ro"+(col.t==="num"?" num":"")},active?(col.t==="date"?fmtDate(val):col.t==="num"&&val!==""?fmtNum(num(val)):val):"")); }
    const id=key+"-"+i+"-"+col.k;
    const needPrice=col.k==="price"&&S.rep&&S.rep.status==="submitted"&&(key!=="works"||row.code);
    const onIn=e=>{ if(needPrice) e.target.parentElement.classList.toggle("need",e.target.value==="");  row[col.k]=e.target.value; markDirty(key); if(col.recalc) refreshAmount(i); };
    let el;
    if(col.t==="select"){ const opts=col.opts(); el=h("select",{id,onchange:e=>{onIn(e); if(col.structural) rerender();}},h("option",{value:""},"—"),opts.map(o=>h("option",{value:o},o)),val&&!opts.includes(val)?h("option",{value:val},val):null); el.value=val; }
    else if(col.t==="area") el=h("textarea",{id,rows:1,oninput:onIn,value:val});
    else if(col.t==="code") el=h("input",{id,list:"boq-dl",class:"mono",value:val,autocomplete:"off",oninput:onIn,onchange:e=>{row.code=normCode(e.target.value);markDirty(key);rerender();}});
    else el=h("input",{id,type:col.t==="num"?"number":col.t==="date"?"date":col.t==="time"?"time":"text",step:col.t==="num"?"any":null,inputmode:col.t==="num"?"decimal":null,value:val,oninput:onIn});
    el.setAttribute("aria-label",col.l);
    return h("td",{"data-l":col.l,class:"ed"+(needPrice&&val===""?" need":"")},el);
  };
  const table=h("table",{class:"rt stack"},
    h("thead",null,h("tr",null,def.noIndex?null:h("th",null,"#"),cols.map(col=>h("th",{style:"min-width:"+col.w},col.l)),ed&&!def.fixed?h("th",null,""):null)),
    h("tbody",null,rows.map((row,i)=>h("tr",null,def.noIndex?null:h("td",{class:"ix"},i+1),cols.map(col=>cell(row,col,i)),
      ed&&!def.fixed?h("td",null,h("button",{class:"btn sm ghost del",type:"button","aria-label":"სტრიქონის წაშლა",title:"წაშლა",onclick:()=>{rows.splice(i,1);markDirty(key);rerender();}},"✕")):null))),
    cols.some(c=>c.sum||c.sumFn)&&rows.length?h("tfoot",null,h("tr",null,h("td",null,"Σ"),cols.map(col=>h("td",{id:col.sumFn?key+"-sum-"+col.k:null,class:"num","data-l":col.sum||col.sumFn?col.l+" — ჯამი":null},col.sumFn?fmtNum(col.sumFn(rows)):col.sum?fmtNum(rows.reduce((a,r)=>a+num(r[col.k]),0)):"")),ed&&!def.fixed?h("td",null):null)):null);
  const empty=!rows.length?h("div",{class:"panel-b muted small"},ed?"ჩანაწერი არ არის. დაამატეთ ქვემოთ ღილაკით.":"ჩანაწერი არ არის."):null;
  const foot=ed&&!def.fixed?h("div",{class:"tbl-foot"},
    h("button",{class:"btn sm",type:"button",onclick:()=>{ const nr={}; if(key==="personnel"){ nr.meal="1"; const last=rows[rows.length-1]; if(last){nr.start=last.start;nr.end=last.end;} } if(key==="expenses") nr.country="საქართველო"; rows.push(nr); markDirty(key); rerender(); setTimeout(()=>{ const f=document.querySelector("#sec-"+key+" tbody tr:last-child input, #sec-"+key+" tbody tr:last-child select, #sec-"+key+" tbody tr:last-child textarea"); f&&f.focus(); },0); }},def.add),
    key==="works"||key==="issues"||key==="expenses"?additionalControl(key,rows,rerender):null):null;
  return [rows.length?h("div",{class:"tw"},table):null,empty,foot].filter(Boolean);
}

/* additional work (not in the BoQ): pick a chapter (existing BoQ chapters or "სხვა"), name and unit; the server numbers it დ1, დ2 … */
function additionalControl(key,rows,after){
  const wrap=h("span",{class:"row add-work"});
  const open=()=>{
    const chapters=[...new Set((P().boq||[]).filter(x=>x.type==="თავი").map(x=>x.name).filter(Boolean))];
    const chapter=h("select",{class:"inp","aria-label":"BoQ თავი",style:"width:230px"},h("option",{value:""},"აირჩიეთ თავი…"),chapters.map(c=>h("option",{value:c},c)),h("option",{value:"სხვა"},"სხვა"));
    const name=h("input",{class:"inp",placeholder:"სამუშაოს დასახელება","aria-label":"სამუშაოს დასახელება",style:"width:260px"});
    const unit=h("select",{class:"inp","aria-label":"განზომილება",style:"width:90px"},h("option",{value:""},"განზ."),(S.lists.units||[]).map(u=>h("option",{value:u},u)));
    wrap.replaceChildren(chapter,name,unit,
      h("button",{class:"btn sm primary",type:"button",onclick:async()=>{
        if(!chapter.value){ chapter.focus(); toast("აირჩიეთ თავი"); return; }
        if(!name.value.trim()){ name.focus(); toast("შეიყვანეთ სამუშაოს დასახელება"); return; }
        try{ const d=await api("POST","/projects/"+encodeURIComponent(S.pid)+"/additional",{chapter:chapter.value,name:name.value.trim(),unit:unit.value});
          S.additional.push(d); rows.push({code:d.code}); markDirty(key); toast("დამატებითი სამუშაო "+d.code+" დაემატა"); after(); }
        catch(e){ toast("ვერ დაემატა: "+errMsg(e)); } }},"დამატება"),
      h("button",{class:"btn sm ghost",type:"button",onclick:()=>wrap.replaceChildren(btn)},"გაუქმება"));
    chapter.focus();
  };
  const btn=h("button",{class:"btn sm ghost",type:"button",onclick:open,title:"სამუშაო, რომელიც ხარჯთაღრიცხვაში არ არის"},"+ დამატებითი სამუშაო");
  wrap.append(btn); return wrap;
}

/* photos */
async function shrink(file){
  if(!/^image\/(jpeg|png|webp)/.test(file.type)) return file;
  try{
    const bmp=await createImageBitmap(file);
    const k=Math.min(1,1800/Math.max(bmp.width,bmp.height));
    const cv=document.createElement("canvas"); cv.width=Math.round(bmp.width*k); cv.height=Math.round(bmp.height*k);
    cv.getContext("2d").drawImage(bmp,0,0,cv.width,cv.height);
    return await new Promise(res=>cv.toBlob(b=>res(b||file),"image/jpeg",0.85));
  }catch(e){ return file; }
}
function renderPhotos(ed){
  const list=S.rep.photos||(S.rep.photos=[]);
  const rerender=()=>document.getElementById("sec-photos").replaceWith(renderSection("photos"));
  const grid=h("div",{class:"photos"},list.map((ph,i)=>{
    const id="ph-"+i;
    return h("figure",{class:"ph",style:"margin:0"},
      h("a",{href:ph.url,target:"_blank",rel:"noopener"},h("img",{src:ph.url,alt:ph.desc||("ფოტო #"+(i+1)),loading:"lazy"})),
      h("div",{class:"phb"},h("div",{class:"row"},h("span",{class:"cap"},"Foto #"+(i+1)),h("span",{class:"spacer"}),
          ed?h("button",{class:"btn sm ghost",type:"button","aria-label":"ფოტოს წაშლა",onclick:()=>{ list.splice(i,1); markDirty("photos"); rerender(); if(ph.id) api("DELETE","/uploads/"+encodeURIComponent(ph.id)).catch(()=>{}); }},"✕"):null),
        ed?h("textarea",{id,class:"inp",rows:2,placeholder:"აღწერა / Description","aria-label":"ფოტოს აღწერა",value:ph.desc||"",oninput:e=>{ph.desc=e.target.value;markDirty("photos");}})
          :h("figcaption",{class:"small"},ph.desc||"")));
  }));
  const inputId=uid();
  const status=h("span",{class:"small muted"});
  const input=h("input",{id:inputId,type:"file",accept:"image/*",multiple:true,hidden:true,onchange:async e=>{
    const files=[...e.target.files]; if(!files.length) return;
    for(let i=0;i<files.length;i++){
      status.textContent="იტვირთება "+(i+1)+" / "+files.length+"…";
      try{ const blob=await shrink(files[i]); const res=await api("POST","/uploads",undefined,blob); list.push({id:res.id,url:res.url,desc:""}); markDirty("photos"); }
      catch(err){ toast("ფოტო ვერ აიტვირთა: "+errMsg(err)); }
    }
    rerender();
  }});
  const foot=ed?h("div",{class:"tbl-foot"},input,h("label",{for:inputId,class:"btn sm",role:"button",tabindex:"0",onkeydown:e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();input.click();}}},"+ ფოტოების ატვირთვა"),status):null;
  return [list.length?h("div",{class:"panel-b"},grid):h("div",{class:"panel-b muted small"},"ფოტო არ არის."),foot].filter(Boolean);
}

/* ---------- PROGRESS ---------- */
function computeProgress(p){
  const done=new Map();
  const reps=[...S.reports.values()].filter(r=>!S.onlyApproved||r.status==="approved");
  for(const r of reps) for(const w of r.works||[]){ if(!w.code) continue; const k=normCode(w.code); const e=done.get(k)||{qty:0,last:"",days:[]}; e.qty+=num(w.qty); if(r.date>e.last) e.last=r.date; e.days.push([r.date,num(w.qty),num(w.staff)]); done.set(k,e); }
  return {done,reps};
}
function renderProgress(p){
  const {done,reps}=computeProgress(p);
  const today=todayISO();
  const idx=boqIndex(p);
  const positions=[...idx.values()].filter(it=>it.type==="პოზიცია"||it.type==="დამატებითი");
  let complete=0,late=0,started=0;
  const stat=it=>{ const d=done.get(it.code); const q=d?d.qty:0; const tot=num(it.qty); const pct=tot>0?q/tot*100:(q>0?100:0);
    let s="none",lbl="არ დაწყებულა";
    if(tot>0&&q>=tot){s="approved";lbl="დასრულებული";}
    else if(it.end&&it.end<today){s="late";lbl="ვადაგადაცილებული";}
    else if(q>0){s="submitted";lbl="მიმდინარე";}
    return {d,q,tot,pct,s,lbl}; };
  for(const it of positions){ const x=stat(it); if(x.s==="approved") complete++; if(x.s==="late") late++; if(x.q>0) started++; }
  const last=reps.map(r=>r.date).sort().pop();
  const tiles=h("div",{class:"tiles"},
    h("div",{class:"tile"},h("div",{class:"v"},reps.length),h("div",{class:"l"},S.onlyApproved?"დადასტურებული ანგარიში":"ანგარიში სულ")),
    h("div",{class:"tile"},h("div",{class:"v"},complete+" / "+positions.length),h("div",{class:"l"},"დასრულებული პოზიცია")),
    h("div",{class:"tile"},h("div",{class:"v"},started),h("div",{class:"l"},"დაწყებული პოზიცია")),
    h("div",{class:"tile"},h("div",{class:"v",style:late?"color:var(--bad)":""},late),h("div",{class:"l"},"ვადაგადაცილებული")),
    h("div",{class:"tile"},h("div",{class:"v",style:"font-size:1.15rem"},last?fmtDate(last):"—"),h("div",{class:"l"},"ბოლო ანგარიში")));
  const tid=uid();
  const toggle=h("label",{class:"check small",for:tid},h("input",{id:tid,type:"checkbox",checked:S.onlyApproved,onchange:e=>{S.onlyApproved=e.target.checked;render();}}),"მხოლოდ დადასტურებული ანგარიშები");
  const rows=[];
  for(const it of idx.values()){
    if(it.type==="თავი"){ rows.push(h("tr",{class:"chap"},h("td",{class:"mono"},it.code),h("td",{colspan:"8"},it.name))); continue; }
    if(it.type==="ქვეთავი"){ rows.push(h("tr",{class:"sub"},h("td",{class:"mono"},it.code),h("td",{colspan:"8"},it.name))); continue; }
    const x=stat(it);
    const hist=x.d?x.d.days.sort((a,b)=>a[0]<b[0]?-1:1).map(([dt,q])=>fmtDate(dt,true)+": "+fmtNum(q)).join(" · "):"";
    rows.push(h("tr",{class:"prog"},
      h("td",{class:"mono"},it.code),
      h("td",{style:"min-width:240px"},it.name,it.additional?h("span",{class:"code-tag",style:"margin-left:6px"},"დამატ."):null,hist?h("div",{class:"hist"},hist):null),
      h("td",null,it.unit||""),
      h("td",{class:"num"},x.tot?fmtNum(x.tot):"—"),
      h("td",{class:"num"},fmtNum(x.q)),
      h("td",{style:"min-width:120px"},h("div",{class:"row",style:"gap:6px;flex-wrap:nowrap"},h("div",{class:"bar-track",style:"flex:1"},h("div",{class:"bar-fill"+(x.pct>100?" over":x.pct>=100?" done":""),style:"width:"+Math.min(100,x.pct)+"%"})),h("span",{class:"num small"},x.tot?Math.round(x.pct)+"%":""))),
      h("td",{class:"small",style:"white-space:nowrap"},it.start?fmtDate(it.start):"—"," → ",it.end?fmtDate(it.end):"—"),
      h("td",{class:"small"},x.d?fmtDate(x.d.last):"—"),
      h("td",null,h("span",{class:"chip st-"+x.s},x.lbl))));
  }
  const table=idx.size?h("div",{class:"tw"},h("table",{class:"rt"},
    h("thead",null,h("tr",null,["BoQ #","სამუშაო (დღიური ჩანაწერები)","განზ.","სულ","შესრულდა","%","გეგმა","ბოლო","სტატუსი"].map(t=>h("th",null,t)))),
    h("tbody",null,rows))):h("div",{class:"panel-b muted"},"ხარჯთაღრიცხვა ჯერ არ არის ატვირთული — „ხარჯთაღრიცხვა (BoQ)“ ჩანართში ატვირთეთ Excel ფაილი.");
  return [tiles,h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"შესრულება BoQ პოზიციების მიხედვით"),toggle),table)];
}

/* ---------- BOQ ---------- */
const BOQ_COLS=[
  {k:"code",l:"BoQ #",t:"text",w:"80px"},
  {k:"type",l:"ტიპი",t:"select",opts:()=>["თავი","ქვეთავი","პოზიცია"],w:"110px"},
  {k:"name",l:"დასახელება",t:"area",w:"340px"},
  {k:"unit",l:"განზ.",t:"text",w:"70px"},
  {k:"qty",l:"რაოდ.",t:"num",w:"90px"},
  {k:"start",l:"დაწყება",t:"date",w:"140px"},
  {k:"end",l:"დასრულება",t:"date",w:"140px"}];
function saveBoqSoon(){ const pid=S.pid; clearTimeout(S.boqTimer); S.boqTimer=setTimeout(()=>{ const p=S.projects.get(pid); saveProject(pid,{boq:clone(p.boq)},"ხარჯთაღრიცხვა შენახულია").catch(()=>{}); },1000); }
function renderBoq(p){
  const ed=S.admin;
  p.boq=p.boq||[];
  const holder=h("div");
  const draw=()=>{
    const rows=p.boq;
    const table=h("table",{class:"rt stack"},
      h("thead",null,h("tr",null,BOQ_COLS.map(c=>h("th",{style:"min-width:"+c.w},c.l)),ed?h("th",null,""):null)),
      h("tbody",null,rows.map((row,i)=>h("tr",{class:row.type==="თავი"?"chap":row.type==="ქვეთავი"?"sub":""},BOQ_COLS.map(col=>{
        const val=row[col.k]??"";
        if(!ed) return h("td",{"data-l":col.l,class:col.t==="num"?"num":""},col.t==="date"?fmtDate(val):col.t==="num"&&val!==""?fmtNum(num(val)):val);
        const set=e=>{ row[col.k]=col.k==="code"?normCode(e.target.value):col.t==="num"&&e.target.value!==""?num(e.target.value):e.target.value; saveBoqSoon(); };
        let el;
        if(col.t==="select"){ el=h("select",{onchange:e=>{set(e);draw();}},col.opts().map(o=>h("option",{value:o},o))); el.value=val||"პოზიცია"; }
        else if(col.t==="area") el=h("textarea",{rows:1,value:val,oninput:set});
        else el=h("input",{type:col.t==="num"?"number":col.t==="date"?"date":"text",step:"any",value:val,class:col.k==="code"?"mono":"",oninput:set});
        el.setAttribute("aria-label",col.l);
        return h("td",{"data-l":col.l},el);
      }),ed?h("td",null,h("button",{class:"btn sm ghost del",type:"button","aria-label":"წაშლა",onclick:()=>{rows.splice(i,1);saveBoqSoon();draw();}},"✕")):null))));
    holder.replaceChildren(rows.length?h("div",{class:"tw"},table):h("div",{class:"panel-b muted"},ed?"ხარჯთაღრიცხვა ცარიელია. ატვირთეთ Excel ფაილი ან დაამატეთ სტრიქონები ხელით.":"ხარჯთაღრიცხვა ჯერ არ არის ატვირთული."),
      ed?h("div",{class:"tbl-foot"},h("button",{class:"btn sm",type:"button",onclick:()=>{rows.push({code:"",type:"პოზიცია",name:"",unit:"",qty:"",start:"",end:""});draw();}},"+ სტრიქონი")):null);
  };
  draw();
  const importer=ed?renderBoqImport(p):null;
  const addl=S.additional.length?h("section",{class:"panel"},h("div",{class:"panel-h"},h("h3",null,"დამატებითი სამუშაოები",h("span",{class:"en"},"Additional Works — რომლებიც ხარჯთაღრიცხვაში არ არის"))),
    h("div",{class:"tw"},h("table",{class:"rt"},h("thead",null,h("tr",null,["კოდი","BoQ თავი","სამუშაოს დასახელება","განზ.",""].map(t=>h("th",null,t)))),
      h("tbody",null,S.additional.map(a=>h("tr",null,h("td",{class:"mono"},a.code),h("td",null,a.chapter||""),h("td",null,a.name),h("td",null,a.unit||""),
        h("td",null,S.admin&&a.id?h("button",{class:"btn sm ghost",type:"button","aria-label":"წაშლა",onclick:async()=>{try{await api("DELETE","/additional/"+encodeURIComponent(a.id)); S.additional=S.additional.filter(x=>x.id!==a.id); render();}catch(e){toast(errMsg(e));}}},"✕"):null))))))):null;
  return [importer,h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"ხარჯთაღრიცხვა",h("span",{class:"en cnt-sub"},(p.boq||[]).filter(x=>x.type==="პოზიცია").length+" პოზიცია")),ed?h("span",{class:"small muted"},"ცვლილებები ავტომატურად ინახება"):null),holder),addl].filter(Boolean);
}
function excelDate(v){
  if(v==null||v==="") return "";
  if(typeof v==="number"&&v>20000&&v<80000){ const d=new Date(Math.round((v-25569)*864e5)); return d.toISOString().slice(0,10); }
  if(v instanceof Date) return isoDay(v);
  const m=/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{2,4})$/.exec(String(v).trim()); if(m){ const y=m[3].length===2?"20"+m[3]:m[3]; return y+"-"+pad(m[2])+"-"+pad(m[1]); }
  if(/^\d{4}-\d{2}-\d{2}/.test(String(v))) return String(v).slice(0,10);
  return "";
}
function parseBoqSheet(ws){
  const rows=XLSX.utils.sheet_to_json(ws,{header:1,raw:true,defval:""});
  let hr=-1,map={};
  const pats={code:/boq\s*#|^კოდი|^#$|№/i,type:/ტიპი|type/i,name:/დასახელ|description|name/i,unit:/განზ|unit/i,qty:/რაოდ|q-?ty|quantity/i,start:/დაწყ|start/i,end:/დასრ|finish|end/i};
  for(let i=0;i<Math.min(rows.length,40);i++){
    const m={}; rows[i].forEach((c,j)=>{ const s=String(c).trim(); if(!s) return; for(const k in pats) if(m[k]==null&&pats[k].test(s)) m[k]=j; });
    if(m.name!=null&&(m.code!=null||m.unit!=null)){ hr=i; map=m; if(m.code==null) map.code=0; break; }
  }
  if(hr<0) return {error:"სათაურის სტრიქონი ვერ მოიძებნა. საჭიროა სვეტები: „BoQ #“ (ან „კოდი“), „დასახელება“, „განზ.“, „რაოდ.“"};
  const out=[];
  for(const r of rows.slice(hr+1)){
    const name=String(r[map.name]??"").replace(/\s+/g," ").trim(); if(!name) continue;
    const code=normCode(r[map.code]); const unit=map.unit!=null?String(r[map.unit]??"").trim():"";
    const qv=map.qty!=null?r[map.qty]:""; const qty=qv===""?"":num(qv);
    let type=map.type!=null?String(r[map.type]??"").trim():"";
    if(!["თავი","ქვეთავი","პოზიცია"].includes(type)) type=(!unit&&qty==="")?(/^თავი/i.test(name)||/00$/.test(code)?"თავი":"ქვეთავი"):"პოზიცია";
    out.push({code,type,name,unit,qty,start:map.start!=null?excelDate(r[map.start]):"",end:map.end!=null?excelDate(r[map.end]):""});
  }
  return {items:out,cols:map};
}
function renderBoqImport(p){
  const id=uid(); const st=h("div",{class:"small"}); let parsed=null;
  const apply=h("button",{class:"btn primary sm",type:"button",hidden:true,onclick:async()=>{
    if(!parsed) return; try{ await saveProject(S.pid,{boq:parsed},"ხარჯთაღრიცხვა ჩანაცვლდა ("+parsed.length+" სტრიქონი)"); render(); }catch(e){} }},"ჩანაცვლება");
  const sheetSel=h("select",{class:"inp",style:"width:auto","aria-label":"ფურცელი",hidden:true});
  let wb=null;
  const parse=()=>{ const res=parseBoqSheet(wb.Sheets[sheetSel.value]);
    if(res.error){ st.textContent=res.error; st.className="small notice"; apply.hidden=true; parsed=null; return; }
    parsed=res.items; const c={თავი:0,ქვეთავი:0,პოზიცია:0}; parsed.forEach(x=>c[x.type]++);
    st.className="small"; st.textContent="ნაპოვნია "+parsed.length+" სტრიქონი: "+c.თავი+" თავი, "+c.ქვეთავი+" ქვეთავი, "+c.პოზიცია+" პოზიცია"+((res.cols.start!=null)?", თარიღებით":", თარიღების გარეშე")+". „ჩანაცვლება“ ჩაანაცვლებს არსებულ ხარჯთაღრიცხვას; ანგარიშებში ჩაწერილი სამუშაოები BoQ #-ით დარჩება."; apply.hidden=false; };
  sheetSel.onchange=parse;
  const input=h("input",{id,type:"file",accept:".xlsx,.xlsm,.xls,.csv",hidden:true,onchange:async e=>{
    const f=e.target.files[0]; if(!f) return;
    if(!window.XLSX){ st.textContent="Excel-ის ბიბლიოთეკა ვერ ჩაიტვირთა."; return; }
    try{ wb=XLSX.read(await f.arrayBuffer(),{type:"array",cellDates:false}); }catch(ex){ st.textContent="ფაილი ვერ წაიკითხა"; return; }
    sheetSel.replaceChildren(...wb.SheetNames.map(n=>h("option",{value:n},n)));
    sheetSel.value=wb.SheetNames.includes("project")?"project":wb.SheetNames[0]; sheetSel.hidden=false; parse(); }});
  return h("section",{class:"panel"},h("div",{class:"panel-h"},h("h3",null,"Excel-იდან იმპორტი"),
      input,h("label",{for:id,class:"btn sm",role:"button",tabindex:"0",onkeydown:e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();input.click();}}},"ფაილის არჩევა"),sheetSel,apply),
    h("div",{class:"panel-b small muted"},"ფურცელზე უნდა იყოს სვეტები: BoQ # · ტიპი (თავი/ქვეთავი/პოზიცია) · დასახელება · განზ. · რაოდ. · დაწყება · დასრულება. ტიპის სვეტის გარეშე თავები და ქვეთავები ამოიცნობა ცარიელი განზომილებით. DPR ფაილიდან ავტომატურად აირჩევა „project“ ფურცელი.",st));
}

/* ---------- SCHEDULE (გეგმა-გრაფიკი) ---------- */
/* BoQ positions with their resources (material, machinery, labour) below them, and a day grid on the right:
   a number typed in a day cell is the quantity planned for that day; filled cells are coloured, which draws the timeline.
   The grid works like a spreadsheet: arrows/Tab/Enter move, typing edits, Delete clears, Shift/drag selects a range, Ctrl+C/Ctrl+V copy and paste. */
const RES_TYPES=[["შრომა","lab"],["ტექნიკა","eq"],["მასალა","mat"],["ქვეკონტრაქტორი","subc"]];
/* taxes on a resource: VAT (დღგ) or income tax (საშ.); labour carries income tax by default, everything else VAT */
const taxDef=t=>({vat:t!=="შრომა",pit:t==="შრომა"});
const taxOf=(x,k)=>typeof x[k]==="boolean"?x[k]:taxDef(x.type)[k];
/* payment terms per resource type: when a resource used on a day has to be paid */
/* payment terms: per resource type (and per named subcontractor) a list of parts, each a % paid at a due point:
   adv in advance · 0 same day · d:N after N days · eom end of the month · nmd:N next month on day N · nme end of next month */
const DUE_OPTS=[["adv","წინასწარ"],["0","იმავე დღეს"],["d:7","7 დღეში"],["d:14","14 დღეში"],["d:30","30 დღეში"],["d:60","60 დღეში"],["d","დღეების რაოდენობა"],["eom","თვის ბოლოს"],["nmd","მომდევნო თვის რიცხვი"],["nme","მომდევნო თვის ბოლოს"]];
const DUE_RE=/^(adv|0|eom|nme|d:\d{1,3}|nmd:\d{1,2})$/;
const dueLabel=t=>{ if(!t) return "—"; let m;
  if((m=/^d:(\d+)$/.exec(t))) return m[1]+" "+tr("დღეში"); if((m=/^nmd:(\d+)$/.exec(t))) return tr("მომდევნო თვის")+" "+m[1]+" "+tr("რიცხვში");
  const f=DUE_OPTS.find(x=>x[0]===t); return f?tr(f[1]):"—"; };
/* older data stored one code per type ("7", "custom:45", …) */
const normParts=v=>{ if(Array.isArray(v)) return v.map(x=>({pct:num(x.pct),t:String(x.t||"")})).filter(x=>x.t);
  if(typeof v==="string"&&v){ const t=/^custom:(\d+)$/.test(v)?"d:"+v.slice(7):/^\d+$/.test(v)&&v!=="0"?"d:"+v:v; return [{pct:100,t}]; } return []; };
/* {types:{type:parts}, items:{type:{resource name:parts}}}: a resource with its own terms overrides the type's ("the rest") */
const normTerms=raw=>{ raw=raw||{}; const types={}, items={};
  if(raw.types||raw.items||raw.subs){
    for(const [k,v] of Object.entries(raw.types||{})) types[k]=normParts(v);
    for(const [t,o] of Object.entries(raw.items||{})){ items[t]={}; for(const [n,v] of Object.entries(o||{})) items[t][n]=normParts(v); }
    if(raw.subs){ const o=items["ქვეკონტრაქტორი"]||(items["ქვეკონტრაქტორი"]={}); for(const [n,v] of Object.entries(raw.subs)) o[n]=normParts(v); } }
  else for(const [k,v] of Object.entries(raw)) types[k]=normParts(v);
  return {types,items}; };
const partsLabel=parts=>parts&&parts.length?parts.map(x=>(parts.length>1||x.pct!==100?fmtNum(x.pct)+"% ":"")+dueLabel(x.t)).join(" + "):"—";
/* an item's unit price is not typed: it is the cost of all its resources (qty × unit price) divided by the item's quantity */
/* money in Georgian lari: 2 880,00 ₾ */
const gel=n=>{ const neg=n<0, [i,d]=Math.abs(Math.round(n*100)/100).toFixed(2).split("."); return (neg?"−":"")+i.replace(/\B(?=(\d{3})+(?!\d))/g,"\u00a0")+","+d+"\u00a0₾"; };
/* a resource's quantity is not typed: it is the sum of what is planned for it in the day grid */
const resQty=x=>Object.values((x&&x.plan)||{}).reduce((a,v)=>a+num(v),0);
const posUnitPrice=(sr,q)=>{ const t=((sr&&sr.res)||[]).reduce((a,x)=>a+resQty(x)*num(x.price),0); return q>0&&t>0?t/q:null; };
const MONTHS_KA=["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"];
const MONTHS_EN=["January","February","March","April","May","June","July","August","September","October","November","December"];
const WD_KA=["კვ","ორ","სა","ოთ","ხუ","პა","შა"], WD_EN=["Su","Mo","Tu","We","Th","Fr","Sa"];
const addDays=(iso,n)=>{ const d=new Date(iso+"T00:00"); d.setDate(d.getDate()+n); return isoDay(d); };
async function loadSchedule(pid){
  if(S.schedLoading===pid) return; S.schedLoading=pid;
  try{ S.sched=await api("GET","/projects/"+encodeURIComponent(pid)+"/schedule"); S.schedPid=pid; S.gsel=null; S.gscroll=null; }
  catch(e){ toast("გეგმა-გრაფიკი ვერ ჩაიტვირთა: "+errMsg(e)); }
  S.schedLoading=null; if(S.view==="project"&&(S.tab==="schedule"||S.tab==="exec")&&!typing()) render();
}
function saveSchedule(){
  clearTimeout(S.schedTimer); const pid=S.schedPid; schedStatus("ინახება…");
  S.schedTimer=setTimeout(async()=>{
    try{ const sc=S.sched; for(const r of Object.values(sc.rows||{})) for(const x of r.res||[]) x.qty=resQty(x)||null; await api("PUT","/projects/"+encodeURIComponent(pid)+"/schedule",{start:sc.start,end:sc.end,rows:sc.rows,exec:sc.exec,terms:sc.terms}); schedStatus("შენახულია"); }
    catch(e){ schedStatus("ვერ შეინახა: "+errMsg(e),true); }
  },600);
}
function schedStatus(t,bad){ const el=document.getElementById("sched-status"); if(el){ el.textContent=tr(t); el.style.color=bad?"var(--bad)":""; } }
function gTip(){ let t=document.getElementById("g-tip"); if(!t){ t=h("div",{id:"g-tip",class:"g-tip",role:"tooltip",hidden:true}); document.body.append(t); } return t; }
const planDays=pl=>Object.keys(pl||{}).filter(d=>num(pl[d])).sort();
/* a position is worked on every day one of its resources is used (quantities are entered on the resources only) */
const posDays=r=>[...new Set(r.sr.res.flatMap(x=>planDays(x.plan)))].sort();
const ddmm=d=>d.slice(8)+"."+d.slice(5,7);
function renderSchedule(p){
  if(S.schedPid!==S.pid){ loadSchedule(S.pid); return h("div",{class:"empty"},h("p",{class:"muted"},"იტვირთება…")); }
  const sc=S.sched; sc.rows=sc.rows||{};
  const edit=canReview(p)&&!p.archived;
  if(S.gview==="terms") return renderTermsPage(sc,edit);
  const zoom=S.gzoom||"day", dayMode=zoom==="day";
  const shut=S.gshut||(S.gshut=new Set());
  const items=p.boq||[], today=todayISO();
  const wd=d=>new Date(d+"T00:00").getDay();

  /* rows: chapter headings (with the positions under them), positions, resources.
     Headings and positions fold like Excel groups; S.gfold holds folded headings, S.gshut positions with hidden resources. */
  const fold=S.gfold||(S.gfold=new Set());
  const all=[]; let chap=null, sub=null;
  items.forEach((it,i)=>{
    if(it.type==="თავი"||it.type==="ქვეთავი"){ const top1=it.type==="თავი"; const r={kind:"head",it,kids:[],key:"h"+i,lvl:top1?1:2,chap:top1?null:chap};
      all.push(r); if(top1){ chap=r; sub=null; } else sub=r; return; }
    if(it.type!=="პოზიცია") return;
    const code=normCode(it.code);
    const sr=sc.rows[code]||(sc.rows[code]={price:null,plan:{},res:[]}); sr.plan=sr.plan||{}; sr.res=sr.res||[];
    const pr={kind:"pos",it,code,sr,plan:sr.plan,qty:num(it.qty),price:num(posUnitPrice(sr,num(it.qty))),chap,sub};
    all.push(pr); if(chap) chap.kids.push(pr); if(sub) sub.kids.push(pr);
    for(const x of sr.res){ x.plan=x.plan||{}; all.push({kind:"res",it,code,sr,x,plan:x.plan,qty:resQty(x),price:num(x.price),pos:pr}); }
  });
  const hidden=r=>!!((r.chap&&fold.has(r.chap.key))||(r.sub&&fold.has(r.sub.key)));
  const rows=all.filter(r=>r.kind==="head"?!hidden(r):r.kind==="pos"?!hidden(r):!hidden(r.pos)&&!shut.has(r.code));
  /* outline levels, as in Excel: 1 chapters, (2 sub-chapters), positions, everything */
  const hasSub=items.some(i=>i.type==="ქვეთავი"), posLvl=hasSub?3:2, levels=[...Array(posLvl+2).keys()].slice(1);
  const lvlName={1:"მხოლოდ თავები",[posLvl]:"პოზიციები, რესურსების გარეშე",[posLvl+1]:"სრულად გაშლილი"}; if(hasSub) lvlName[2]="თავები და ქვეთავები";
  const setLevel=L=>{ fold.clear(); shut.clear();
    for(const r of all){ if(r.kind==="head"&&((L===1&&r.lvl===1)||(hasSub&&L===2&&r.lvl===2))) fold.add(r.key); if(r.kind==="pos"&&L<=posLvl) shut.add(r.code); }
    S.gsel=null; rebuild(); };
  const outline=h("div",{class:"g-lvls",role:"group","aria-label":"დაჯგუფების დონე"},h("span",{class:"hb-l"},"დონე"),
    levels.map(L=>h("button",{type:"button",class:"g-lvl tip","data-tip":tr(lvlName[L]),"aria-label":tr(lvlName[L]),onclick:()=>setLevel(L)},String(L))));
  const positions=all.filter(r=>r.kind==="pos"), planned=positions.filter(r=>posDays(r).length);
  const editRows=rows.map((r,i)=>r.kind==="res"?i:-1).filter(i=>i>=0);
  const cls=r=>r.kind==="pos"?"pos":(RES_TYPES.find(t=>t[0]===r.x.type)||RES_TYPES[0])[1];

  /* period: chosen dates, else from today (or the earliest plan / BoQ date) for at least 60 days */
  const used=positions.flatMap(r=>[...planDays(r.plan),...r.sr.res.flatMap(x=>planDays(x.plan))]).sort();
  const bs=items.map(i=>i.start).filter(Boolean).sort(), be=items.map(i=>i.end).filter(Boolean).sort();
  const from=sc.start||[used[0],bs[0],today].filter(Boolean).sort()[0];
  let to=sc.end||[used[used.length-1],be[be.length-1],addDays(from,59)].filter(Boolean).sort().pop();
  if(to<from) to=addDays(from,59);
  const days=[]; for(let d=from; d<=to&&days.length<731; d=addDays(d,1)) days.push(d);
  /* columns: days, weeks (from Monday) or months */
  let cols;
  if(dayMode) cols=days.map(d=>({from:d,to:d,days:[d]}));
  else { cols=[]; for(const d of days){ const k=zoom==="week"?addDays(d,-((wd(d)+6)%7)):d.slice(0,7); const l=cols[cols.length-1];
    if(l&&l.k===k){ l.to=d; l.days.push(d); } else cols.push({k,from:d,to:d,days:[d]}); } }
  const isWe=c=>dayMode&&(wd(c.from)===0||wd(c.from)===6), isTd=c=>c.from<=today&&today<=c.to;
  const MN=LANG==="en"?MONTHS_EN:MONTHS_KA, WD=LANG==="en"?WD_EN:WD_KA;

  const rebuild=()=>{ S.gscroll={x:wrap.scrollLeft,y:wrap.scrollTop}; render(); };
  const changed=()=>{ saveSchedule(); setTimeout(()=>{ const a=document.activeElement, key=a&&a.dataset?a.dataset.f:null; rebuild();
    if(key){ const n=document.querySelector('[data-f="'+key+'"]'); if(n) n.focus(); } },0); };
  const inp=(val,on,attrs={})=>h("input",{class:"g-in",value:val??"",disabled:!edit,onchange:e=>on(e.target.value),...attrs});
  const numOrNull=v=>v.trim()===""?null:num(v);

  /* top: title and counts, period, zoom, today, plan */
  const seg=h("div",{class:"vswitch g-zoom"},[["day","დღე"],["week","კვირა"],["month","თვე"]].map(([k,l])=>
    h("button",{type:"button",class:"vbtn vtxt"+(zoom===k?" on":""),"aria-pressed":String(zoom===k),onclick:()=>{ S.gzoom=k; S.gscroll=null; S.gsel=null; render(); }},l)));
  /* header: today, view and outline levels (one width) | item counts | resources with their payment terms | plan, help */
  const T=normTerms(sc.terms);
  const top=h("div",{class:"g-head2"},
    h("div",{class:"gh-col gh-left"},
      h("div",{class:"vswitch",role:"group","aria-label":"ჩვენება"},[["qty","რაოდ."],["val","ღირ."]].map(([k,l])=>
        h("button",{type:"button",class:"vbtn vtxt tip"+((S.gmode||"qty")===k?" on":""),"data-tip":tr(k==="qty"?"რაოდენობა":"ღირებულება (რაოდენობა × ერთ. ფასი)"),"aria-pressed":String((S.gmode||"qty")===k),onclick:()=>{ S.gmode=k; S.gscroll={x:wrap.scrollLeft,y:wrap.scrollTop}; render(); }},l))),
      seg,outline),
    h("div",{class:"gh-col gh-stats"},
      h("div",null,h("span",null,"სულ პოზიცია:")," ",h("b",null,String(positions.length))),
      h("div",null,h("span",null,"დაგეგმილი:")," ",h("b",null,String(planned.length))),
      h("div",null,h("span",null,"დაუგეგმავი:")," ",h("b",null,String(positions.length-planned.length)))),
    h("button",{class:"gh-col gh-terms",type:"button",title:tr("ანაზღაურების პირობების შეცვლა"),onclick:()=>{ S.gview="terms"; render(); window.scrollTo(0,0); }},
      h("div",{class:"gh-term gh-thead"},h("span",{class:"gh-th1"},"რესურსები"),h("span",{class:"gh-cost"},"ღირებულება"),h("span",null,"ანაზღაურების პირობები")),
      RES_TYPES.map(([t,c])=>{
        /* cost of this resource type (qty × unit price) and how many of its resources still have no price */
        const list=positions.flatMap(r=>r.sr.res.filter(x=>x.type===t));
        const cost=list.reduce((a,x)=>a+resQty(x)*num(x.price),0), miss=list.filter(x=>!num(x.price)).length;
        return h("div",{class:"gh-term"},h("i",{class:"g-sw "+c}),h("span",{class:"gh-tn"},t),
        h("span",{class:"gh-cost"+(cost?"":" nil")},cost?gel(cost):"—",
          miss?h("span",{class:"gh-warn tip","data-tip":miss+" "+tr("რესურსზე ფასი შევსებული არაა"),"aria-label":miss+" "+tr("რესურსზე ფასი შევსებული არაა")},"!"):null),
        h("span",{class:"gh-tv"},partsLabel(T.types[t])+(Object.keys(T.items[t]||{}).length?" (+"+Object.keys(T.items[t]).length+" "+tr("ცალკე")+")":""))); })),
    renderChecks(positions,T),
    h("span",{class:"spacer"}),
    h("span",{id:"sched-status",class:"small muted gh-status"},edit?"":"მხოლოდ ნახვა"));

  /* header: months (years in month view) above, days / weeks / months below */
  const grp=[]; for(const c of cols){ const k=zoom==="month"?c.from.slice(0,4):c.from.slice(0,7); const l=grp[grp.length-1]; if(l&&l.k===k) l.n++; else grp.push({k,n:1}); }
  const fz=["BoQ","დასახელება","დღგ","საშ.","რაოდენობა","განზ.","ერთ. ფასი","ვადა"];
  /* each date column is as wide as its longest number (and never narrower than the header) */
  const base=dayMode?36:zoom==="week"?60:84;
  /* quantities or values (quantity × the resource's unit price) in the day cells */
  const valMode=S.gmode==="val", mult=x=>valMode?num(x.price):1;
  const colPx=cols.map(c=>{ let len=0; for(const r of all) if(r.kind==="res"){ const v=c.days.reduce((a,d)=>a+num(r.plan[d]),0)*mult(r.x); if(v) len=Math.max(len,fmtNum(v).length); }
    return Math.max(base,Math.ceil(len*6.6+14)); });
  const thead=h("thead",null,
    h("tr",null,fz.map((l,i)=>h("th",{class:"g-fz f"+i+(i===7?" g-fz-last":""),rowspan:"2"},l)),
      grp.map(x=>h("th",{class:"gm",colspan:String(x.n)},h("span",{class:"gm-l"},zoom==="month"?x.k:MN[+x.k.slice(5)-1]+" "+x.k.slice(0,4))))),
    h("tr",null,cols.map((c,ci)=>h("th",{class:"gd"+(isWe(c)?" we":"")+(isTd(c)?" td":""),"data-ci":String(ci),style:"width:"+colPx[ci]+"px;min-width:"+colPx[ci]+"px;max-width:"+colPx[ci]+"px",title:dayMode?fmtDate(c.from):fmtDate(c.from)+" – "+fmtDate(c.to)},
      dayMode?[h("b",null,String(+c.from.slice(8))),h("span",null,WD[wd(c.from)])]
      :zoom==="week"?[h("b",null,ddmm(c.from)),h("span",null,"– "+ddmm(c.to))]
      :[h("b",null,MN[+c.from.slice(5,7)-1])]))));

  /* body */
  const colVals=pl=>cols.map(c=>c.days.reduce((a,d)=>a+num(pl[d]),0));
  const lbl=ds=>ds.length?ddmm(ds[0])+" – "+ddmm(ds[ds.length-1]):"";
  const gridCells=(r,ri)=>{
    if(r.kind==="head"){
      const ds=r.kids.flatMap(posDays).sort(), a=ds[0], b=ds[ds.length-1];
      const on=cols.map(c=>!!a&&c.to>=a&&c.from<=b), last=on.lastIndexOf(true);
      return cols.map((c,ci)=>h("td",{class:"gc gh"+(isWe(c)?" we":"")+(isTd(c)?" td":"")},
        on[ci]?h("div",{class:"gb sum"+(!on[ci-1]?" rs":"")+(!on[ci+1]?" re":"")}):null,
        ci===last+1&&last>=0?h("span",{class:"g-lbl"},ddmm(a)+" – "+ddmm(b)):null));
    }
    const c=cls(r);
    /* resources: editable quantities; positions: a thin bar over the days their resources are used */
    if(r.kind==="res"){ const v=colVals(r.plan).map(x=>x*mult(r.x));
      return cols.map((cl,ci)=>h("td",{class:"gc"+(isWe(cl)?" we":"")+(isTd(cl)?" td":"")+(v[ci]?" f":""),"data-ri":String(ri),"data-ci":String(ci)},
        v[ci]?h("div",{class:"gb "+c},fmtNum(v[ci])):null)); }
    const resV=r.sr.res.map(x=>colVals(x.plan));
    const on=cols.map((cl,ci)=>resV.some(a=>a[ci])), last=on.lastIndexOf(true);
    return cols.map((cl,ci)=>{
      return h("td",{class:"gc gp"+(isWe(cl)?" we":"")+(isTd(cl)?" td":"")},
        on[ci]?h("div",{class:"gb "+c+(!on[ci-1]?" rs":"")+(!on[ci+1]?" re":"")}):null,
        r.kind==="pos"&&ci===last+1&&last>=0?h("span",{class:"g-lbl"},lbl(posDays(r))):null,
        r.kind==="pos"&&last<0&&ci===0&&edit?h("button",{class:"g-planbtn",type:"button",onclick:()=>{ S.gplan={code:r.code}; render(); }},"+ დაგეგმვა"):null); });
  };
  /* outline tree like Excel / MS Project: each level is indented; ◢ open group, ▷ folded group */
  const IND=14;
  const codeCell=(r,toggle)=>h("td",{class:"g-fz f0 mono"},h("div",{class:"g-code",style:"padding-left:"+depth(r)*IND+"px"},toggle||triGap(),
    r.kind==="res"?null:h("span",{class:r.kind==="pos"?"g-cpos":"g-chead"},r.it.code||"")));
  const depth=r=>r.kind==="head"?r.lvl-1:r.kind==="pos"?(r.sub?2:r.chap?1:0):depth(r.pos)+1;
  const tri=(open,toggle,label)=>h("button",{class:"g-fold",type:"button","aria-expanded":String(open),"aria-label":(open?tr("აკეცვა"):tr("გაშლა"))+(label?": "+label:""),onclick:toggle},open?"◢":"▷");
  const triGap=()=>h("span",{class:"g-fold-gap","aria-hidden":"true"});
  const dur=ds=>{ const n=ds.length; return n?h("span",null,String(n)," ",h("span",null,"დღე")):"—"; };
  const body=rows.map((r,ri)=>{
    if(r.kind==="head"){ const n=r.kids.filter(k=>posDays(k).length).length;
      return h("tr",{class:"g-head"+(r.it.type==="ქვეთავი"?" sub":"")},
        codeCell(r,tri(!fold.has(r.key),()=>{ fold.has(r.key)?fold.delete(r.key):fold.add(r.key); rebuild(); },r.it.name)),
        h("td",{class:"g-fz f1"},h("div",{class:"g-hname g-tipsrc","data-tip":r.it.name||""},r.it.name||"")),
        h("td",{class:"g-fz g-hsum",colspan:"6"},r.kids.length?[String(n)," / ",String(r.kids.length)," ",h("span",null,"დაგეგმილი")]:""),
        gridCells(r,ri)); }
    if(r.kind==="pos"){ const n=r.sr.res.length, open=!shut.has(r.code);
      return h("tr",{class:"g-pos"},
        codeCell(r,n?tri(open,()=>{ open?shut.add(r.code):shut.delete(r.code); rebuild(); },r.it.name):null),
        h("td",{class:"g-fz f1"},h("div",{class:"g-pname"},
          edit?h("button",{class:"g-plus",type:"button",title:tr("რესურსის დამატება"),"aria-label":tr("რესურსის დამატება")+": "+(r.it.name||""),onclick:()=>{ const id=Math.random().toString(36).slice(2,8); r.sr.res.push({id,type:"შრომა",name:"",unit:"",qty:null,price:null,plan:{}}); shut.delete(r.code); S.gfocusNew=id; changed(); }},"+"):null,
          h("div",{class:"g-name g-tipsrc","data-tip":r.it.name||""},r.it.name))),
        h("td",{class:"g-fz f2"}),h("td",{class:"g-fz f3"}),
        h("td",{class:"g-fz f4 num"},r.qty?fmtNum(r.qty):"—"),
        h("td",{class:"g-fz f5 g-unit"},r.it.unit||""),
        h("td",{class:"g-fz f6 num g-calc",title:tr("რესურსების ღირებულება ÷ რაოდენობა")},r.price?fmtNum(r.price):"—"),
        h("td",{class:"g-fz f7 num"},dur(posDays(r))),
        gridCells(r,ri)); }
    const c=cls(r), isNew=!!S.gfocusNew&&S.gfocusNew===r.x.id;
    return h("tr",{class:"g-res"},
      codeCell(r,null),
      h("td",{class:"g-fz f1"},h("div",{class:"g-resname"},
        h("select",{class:"g-chip "+c,disabled:!edit,"aria-label":"რესურსის ტიპი","data-f":ri+":t",onchange:e=>{ r.x.type=e.target.value; changed(); }},
          RES_TYPES.map(([t])=>{ const o=h("option",{value:t},t); if(t===r.x.type) o.selected=true; return o; })),
        inp(r.x.name,v=>{ r.x.name=v; changed(); },{class:"g-in g-rn",placeholder:"დასახელება არაა","aria-label":"რესურსის დასახელება","data-f":ri+":n","data-new":isNew?"1":null}),
        edit?h("button",{class:"g-del",type:"button",tabindex:"-1","aria-label":"რესურსის წაშლა",title:"წაშლა",onclick:()=>{ r.sr.res.splice(r.sr.res.indexOf(r.x),1); changed(); }},"✕"):null)),
      ...["vat","pit"].map((k,j)=>h("td",{class:"g-fz f"+(2+j)+" g-tax"},h("input",{type:"checkbox",checked:taxOf(r.x,k),disabled:!edit,"aria-label":(k==="vat"?"დღგ":"საშ.")+": "+(r.x.name||""),
        onchange:e=>{ r.x[k]=e.target.checked; saveSchedule(); }}))),
      h("td",{class:"g-fz f4 num g-calc",title:tr("ბადეში ჩაწერილი რაოდენობების ჯამი")},r.qty?fmtNum(r.qty):"—"),
      h("td",{class:"g-fz f5 g-unit"},inp(r.x.unit,v=>{ r.x.unit=v; changed(); },{class:"g-in g-un","aria-label":"განზ.",placeholder:"—",list:"g-units","data-f":ri+":u"})),
      h("td",{class:"g-fz f6"},inp(r.x.price??"",v=>{ r.x.price=numOrNull(v); changed(); },{class:"g-in num","aria-label":"ერთ. ფასი",placeholder:"—",inputmode:"decimal","data-f":ri+":rp"})),
      h("td",{class:"g-fz f7 num"},dur(planDays(r.plan))),
      gridCells(r,ri));
  });
  const table=h("table",{class:"gtable z-"+zoom},thead,h("tbody",null,body));
  colResize(table,"sched3");

  /* selection and editing (day view) */
  const wrap=h("div",{class:"gwrap",tabindex:"0","aria-label":"გეგმა-გრაფიკის ბადე",onscroll:()=>{ S.gscroll={x:wrap.scrollLeft,y:wrap.scrollTop}; gTip().hidden=true; }},table);
  const frozenW=()=>{ const t=wrap.querySelector("th.g-fz-last"); return t?t.offsetLeft+t.offsetWidth:0; };
  function scrollToday(warn){ const i=cols.findIndex(isTd); if(i<0){ if(warn) toast("დღევანდელი თარიღი პერიოდში არ შედის"); return; }
    const th=wrap.querySelector('th.gd[data-ci="'+i+'"]'); if(th) wrap.scrollLeft=Math.max(0,th.offsetLeft-frozenW()-2*th.offsetWidth); }
  const cell=(ri,ci)=>wrap.querySelector('td.gc[data-ri="'+ri+'"][data-ci="'+ci+'"]');
  const range=()=>{ const s=S.gsel; if(!s) return null; const a=s.anchor||s;
    return {r1:Math.min(a.ri,s.ri),r2:Math.max(a.ri,s.ri),d1:Math.min(a.ci,s.ci),d2:Math.max(a.ci,s.ci)}; };
  const paint=()=>{ wrap.querySelectorAll("td.gc.sel,td.gc.cur").forEach(t=>t.classList.remove("sel","cur")); const g=range(); if(!g) return;
    for(const ri of editRows) if(ri>=g.r1&&ri<=g.r2) for(let ci=g.d1;ci<=g.d2;ci++){ const t=cell(ri,ci); if(t) t.classList.add("sel"); }
    const c=cell(S.gsel.ri,S.gsel.ci); if(c) c.classList.add("cur"); };
  const reveal=()=>{ const c=cell(S.gsel.ri,S.gsel.ci); if(!c) return; const wr=wrap.getBoundingClientRect(), fzr=wr.left+frozenW()-wrap.scrollLeft*0;
    const cr=c.getBoundingClientRect(), hd=wrap.querySelector("thead").getBoundingClientRect().bottom, left=wrap.querySelector("th.g-fz-last").getBoundingClientRect().right;
    if(cr.left<left) wrap.scrollLeft-=left-cr.left; else if(cr.right>wr.right) wrap.scrollLeft+=cr.right-wr.right+2;
    if(cr.top<hd) wrap.scrollTop-=hd-cr.top; else if(cr.bottom>wr.bottom) wrap.scrollTop+=cr.bottom-wr.bottom+2; };
  const select=(ri,ci,extend)=>{ ci=Math.max(0,Math.min(cols.length-1,ci));
    const anchor=extend?(S.gsel&&(S.gsel.anchor||{ri:S.gsel.ri,ci:S.gsel.ci})):null; S.gsel={ri,ci,anchor}; paint(); reveal(); };
  const step=(ri,dir)=>{ const k=editRows.indexOf(ri)+dir; return editRows[Math.max(0,Math.min(editRows.length-1,k))]; };
  const setVal=(ri,ci,val)=>{ const r=rows[ri]; if(!r||r.kind==="head"||ci<0||ci>=cols.length) return false;
    const t=String(val??"").trim(); const d=cols[ci].from;
    if(t===""||t==="0"){ delete r.plan[d]; return true; }
    const n=parseFloat(t.replace(/\s/g,"").replace(",",".")); if(!isFinite(n)) return false; r.plan[d]=n; return true; };
  const commitAll=()=>{ saveSchedule(); rebuild(); requestAnimationFrame(()=>{ const w=document.querySelector(".gwrap"); if(w) w.focus({preventScroll:true}); }); };
  const dayOnly=()=>{ if(valMode){ toast("რაოდენობის შესაცვლელად აირჩიეთ „რაოდ.“"); return false; } if(dayMode) return true; toast("შესავსებად აირჩიეთ „დღე“ ხედი"); return false; };
  const startEdit=(initial)=>{ if(!edit||!S.gsel||!dayOnly()) return; const {ri,ci}=S.gsel; const c=cell(ri,ci); if(!c) return;
    const old=rows[ri].plan[cols[ci].from]; const typed=initial!=null;
    const box=h("input",{class:"g-edit",inputmode:"decimal",value:typed?initial:(old!=null?String(old):"")});
    let done=false;
    const finish=(save,move)=>{ if(done) return; done=true; if(save&&!setVal(ri,ci,box.value)) toast("შეიყვანეთ რიცხვი");
      if(move==="down") S.gsel={ri:step(ri,1),ci}; else if(move==="up") S.gsel={ri:step(ri,-1),ci};
      else if(move==="right") S.gsel={ri,ci:Math.min(cols.length-1,ci+1)}; else if(move==="left") S.gsel={ri,ci:Math.max(0,ci-1)};
      commitAll(); };
    box.onkeydown=e=>{ e.stopPropagation();
      if(e.key==="Enter"){ e.preventDefault(); finish(true,e.shiftKey?"up":"down"); }
      else if(e.key==="Tab"){ e.preventDefault(); finish(true,e.shiftKey?"left":"right"); }
      else if(e.key==="Escape"){ e.preventDefault(); finish(false); }
      else if(typed&&/^Arrow/.test(e.key)){ e.preventDefault(); finish(true,{ArrowDown:"down",ArrowUp:"up",ArrowLeft:"left",ArrowRight:"right"}[e.key]); } };
    box.onblur=()=>finish(true);
    c.replaceChildren(box); box.focus(); if(!typed) box.select(); };
  if(S.gsel&&(!rows[S.gsel.ri]||S.gsel.ci>=cols.length)) S.gsel=null;
  if(!S.gMouseUp){ S.gMouseUp=true; document.addEventListener("mouseup",()=>{ S.gdrag=false; }); }
  wrap.addEventListener("mousedown",e=>{ const c=e.target.closest("td.gc[data-ri]"); if(!c||e.target.closest(".g-edit,button")) return; e.preventDefault(); wrap.focus({preventScroll:true});
    select(+c.dataset.ri,+c.dataset.ci,e.shiftKey); S.gdrag=true; });
  wrap.addEventListener("mouseover",e=>{
    const t=e.target.closest(".g-tipsrc"), tip=gTip();
    if(t&&t.dataset.tip){ const r=t.getBoundingClientRect(); tip.textContent=t.dataset.tip; tip.hidden=false;
      tip.style.left=Math.min(r.left,window.innerWidth-tip.offsetWidth-12)+"px"; tip.style.top=(r.bottom+6)+"px"; } else tip.hidden=true;
    if(!S.gdrag) return; const c=e.target.closest("td.gc[data-ri]"); if(c){ const a=S.gsel.anchor||{ri:S.gsel.ri,ci:S.gsel.ci}; S.gsel={ri:+c.dataset.ri,ci:+c.dataset.ci,anchor:a}; paint(); } });
  wrap.addEventListener("mouseleave",()=>{ gTip().hidden=true; });
  wrap.addEventListener("dblclick",e=>{ if(e.target.closest("td.gc[data-ri]")) startEdit(); });
  wrap.addEventListener("keydown",e=>{
    if(e.target!==wrap) return;
    if(!S.gsel){ if(/^Arrow|Enter|Tab/.test(e.key)&&editRows.length){ e.preventDefault(); select(editRows[0],Math.max(0,cols.findIndex(isTd))); } return; }
    const {ri,ci}=S.gsel, sh=e.shiftKey;
    const mv={ArrowDown:[step(ri,1),ci],ArrowUp:[step(ri,-1),ci],ArrowRight:[ri,ci+1],ArrowLeft:[ri,ci-1]}[e.key];
    if(mv){ e.preventDefault(); select(mv[0],mv[1],sh); return; }
    if(e.key==="Tab"){ e.preventDefault(); select(ri,ci+(sh?-1:1)); return; }
    if(e.key==="Enter"){ e.preventDefault(); select(step(ri,sh?-1:1),ci); return; }
    if(e.key==="F2"){ e.preventDefault(); startEdit(); return; }
    if((e.key==="Delete"||e.key==="Backspace")&&edit){ e.preventDefault(); if(!dayOnly()) return; const g=range();
      for(const r of editRows) if(r>=g.r1&&r<=g.r2) for(let d=g.d1;d<=g.d2;d++) setVal(r,d,""); commitAll(); return; }
    if(edit&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&/^[0-9.,\-]$/.test(e.key)){ e.preventDefault(); S.gsel.anchor=null; paint(); startEdit(e.key); }
  });
  wrap.addEventListener("copy",e=>{ if(e.target!==wrap||!S.gsel) return; const g=range(); const out=[];
    for(const r of editRows) if(r>=g.r1&&r<=g.r2){ const line=[]; for(let d=g.d1;d<=g.d2;d++){ const v=colVals(rows[r].plan)[d]; line.push(v?String(v):""); } out.push(line.join("\t")); }
    e.clipboardData.setData("text/plain",out.join("\n")); e.preventDefault(); });
  wrap.addEventListener("paste",e=>{ if(e.target!==wrap||!S.gsel||!edit) return; e.preventDefault(); if(!dayOnly()) return;
    const txt=(e.clipboardData.getData("text/plain")||"").replace(/\r/g,"").replace(/\n$/,""); const grid=txt.split("\n").map(l=>l.split("\t")); const g=range();
    if(grid.length===1&&grid[0].length===1){ for(const r of editRows) if(r>=g.r1&&r<=g.r2) for(let d=g.d1;d<=g.d2;d++) setVal(r,d,grid[0][0]); }
    else { let r=g.r1; for(const line of grid){ if(r==null) break; line.forEach((v,j)=>setVal(r,g.d1+j,v)); const nx=step(r,1); r=nx===r?null:nx; } }
    commitAll(); });
  requestAnimationFrame(()=>{ if(S.gscroll){ wrap.scrollLeft=S.gscroll.x; wrap.scrollTop=S.gscroll.y; } else scrollToday(false);
    paint();
    if(S.gfocusNew){ S.gfocusNew=false; const n=wrap.querySelector('input[data-new="1"]'); if(n) n.focus(); } });
  const units=h("datalist",{id:"g-units"},((S.lists&&S.lists.units)||[]).map(u=>h("option",{value:u})));
  return h("div",{class:"sched"},top,
    rows.length?wrap:h("div",{class:"empty"},h("p",{class:"muted"},"ჯერ ატვირთეთ ხარჯთაღრიცხვა „ხარჯთაღრიცხვის“ ჩანართზე.")),units,
    S.gplan?renderPlanDialog(sc,positions,from,to):null);
}
/* "+ დაგეგმვა": spread a quantity evenly over a date range (optionally skipping weekends) */
/* Excel-like column resizing for the schedule and execution plan tables: drag the right edge of a header
   to resize, double-click it to fit the content. Frozen columns are CSS variables --w0…--w5 on the table;
   date columns size themselves to their content. Widths are remembered per table in this browser. */
function colResize(table,kind){
  const key="dpr.colw."+kind;
  let saved={}; try{ saved=JSON.parse(localStorage.getItem(key)||"{}")||{}; }catch(e){}
  for(const [v,w] of Object.entries(saved)) if(/^--/.test(v)&&w>0) table.style.setProperty(v,w+"px");
  const store=(v,w)=>{ saved[v]=Math.round(w); try{ localStorage.setItem(key,JSON.stringify(saved)); }catch(e){} };
  const handle=(th,v,cells)=>{
    const rs=h("span",{class:"col-rs","aria-hidden":"true",title:tr("გაწევა; ორჯერ დაჭერა — მორგება")});
    rs.addEventListener("mousedown",e=>{ e.preventDefault(); e.stopPropagation(); const x0=e.clientX, w0=th.getBoundingClientRect().width; rs.classList.add("on");
      const move=ev=>{ const w=Math.max(28,Math.min(900,w0+ev.clientX-x0)); table.style.setProperty(v,w+"px"); };
      const up=()=>{ document.removeEventListener("mousemove",move); document.removeEventListener("mouseup",up); rs.classList.remove("on");
        store(v,th.getBoundingClientRect().width); };
      document.addEventListener("mousemove",move); document.addEventListener("mouseup",up); });
    rs.addEventListener("click",e=>e.stopPropagation());
    rs.addEventListener("dblclick",e=>{ e.preventDefault(); e.stopPropagation();
      /* fit: let the column take its natural width for a moment, measure it, then fix it */
      const list=cells(); list.forEach(c=>c.classList.add("fitc")); table.classList.add("fitting");
      const w=Math.max(28,Math.min(900,Math.ceil(Math.max(...list.map(c=>c.getBoundingClientRect().width)))+2));
      table.classList.remove("fitting"); list.forEach(c=>c.classList.remove("fitc"));
      table.style.setProperty(v,w+"px"); store(v,w); });
    th.append(rs);
  };
  table.querySelectorAll("thead th.g-fz").forEach(th=>{ const m=/\bf(\d)\b/.exec(th.className); if(!m) return;
    handle(th,"--w"+m[1],()=>[...table.querySelectorAll(".f"+m[1])]); });
}
/* schedule checks: what is missing or inconsistent, listed in the header (✓ when all is filled in) */
function renderChecks(positions,T){
  const res=positions.flatMap(r=>r.sr.res.map(x=>({x,r})));
  const lbl=x=>(x.r.it.code||"")+" · "+(x.x.name||tr("დასახელება არაა"));
  const issues=[];
  const add=(text,list)=>{ if(list.length) issues.push({text,n:list.length,tip:list.slice(0,8).join("\n")+(list.length>8?"\n…":"")}); };
  const plbl=r=>(r.it.code||"")+" · "+String(r.it.name||"").slice(0,50);
  add("დასაგეგმი პოზიცია",positions.filter(r=>!posDays(r).length).map(plbl));
  add("პოზიციას რაოდენობა არ აქვს",positions.filter(r=>!num(r.it.qty)).map(plbl));
  add("პოზიციას განზომილება არ აქვს",positions.filter(r=>!(r.it.unit||"").trim()).map(plbl));
  add("რესურსს ფასი არ აქვს",res.filter(x=>!num(x.x.price)).map(lbl));
  add("რესურსს დასახელება არ აქვს",res.filter(x=>!(x.x.name||"").trim()).map(x=>(x.r.it.code||"")+" · "+tr(x.x.type)));
  add("რესურსს განზომილება არ აქვს",res.filter(x=>!(x.x.unit||"").trim()).map(lbl));
  add("რესურსი არ არის დაგეგმილი",res.filter(x=>!resQty(x.x)).map(lbl));
  const usedTypes=[...new Set(res.map(x=>x.x.type))];
  add("ანაზღაურების პირობა არ აქვს",usedTypes.filter(t=>!(T.types[t]||[]).length).map(t=>tr(t)));
  add("გეგმა სცდება BoQ-ის ვადას",positions.filter(r=>{ const ds=posDays(r); return r.it.end&&ds.length&&ds[ds.length-1]>r.it.end; }).map(r=>(r.it.code||"")+" · "+tr("ვადა")+" "+fmtDate(r.it.end)));
  return h("div",{class:"gh-col gh-checks"},
    h("div",{class:"gh-thead"},"კონტროლი"),
    /* at most four lines per column, then the list continues in the next column */
    h("div",{class:"gh-chks"},issues.length?issues.map(i=>h("div",{class:"gh-chk bad",title:i.tip},h("span",{class:"gh-ci"},"!"),h("span",null,tr(i.text)+": "),h("b",null,String(i.n))))
      :h("div",{class:"gh-chk ok"},h("span",{class:"gh-ci"},"✓"),h("span",null,"ყველაფერი შევსებულია"))));
}
/* payment terms page (opened from the schedule): a card per resource type with parts (%, due point);
   individual resources (by name) can get their own terms, the rest share the type's */
function renderTermsPage(sc,edit){
  const W=S.gtermsDraft||(S.gtermsDraft=normTerms(clone(sc.terms)));
  const back=()=>{ S.gview=null; S.gtermsDraft=null; render(); };
  /* keep the field the user moved to focused across the redraw */
  const redraw=()=>{ const a=document.activeElement, lbl=a&&a.getAttribute&&a.getAttribute("aria-label"); render(); if(lbl){ const n=[...document.querySelectorAll(".tp [aria-label]")].find(e=>e.getAttribute("aria-label")===lbl); if(n) n.focus(); } };
  const partsEditor=(parts,label)=>{
    if(!parts.length) parts.push({pct:100,t:""});
    const sum=parts.reduce((a,x)=>a+num(x.pct),0);
    return h("div",{class:"tp-parts"},
      parts.map((x,i)=>{
        const kind=/^d:/.test(x.t)&&!DUE_OPTS.some(o=>o[0]===x.t)?"d":/^nmd:/.test(x.t)?"nmd":x.t;
        const extra=kind==="d"||kind==="nmd"?h("input",{class:"inp num tp-n",type:"number",min:"1",max:kind==="nmd"?"31":"365",value:x.t.split(":")[1]||"",disabled:!edit,
          "aria-label":kind==="nmd"?tr("თვის რიცხვი"):tr("დღეები"),onchange:e=>{ const n=parseInt(e.target.value,10); x.t=kind+":"+(n>0?Math.min(n,kind==="nmd"?31:365):""); }},):null;
        const sel=h("select",{class:"inp",disabled:!edit,"aria-label":label+": "+tr("ვადა"),onchange:e=>{ const v=e.target.value; x.t=v==="d"?"d:":v==="nmd"?"nmd:":v; redraw(); }},
          h("option",{value:""},"აირჩიეთ ვადა"),DUE_OPTS.map(([v,l])=>h("option",{value:v},l)));
        sel.value=kind;
        return h("div",{class:"tp-row"},
          h("label",{class:"tp-pct"},h("input",{class:"inp num",type:"number",min:"0",max:"100",step:"any",value:String(x.pct),disabled:!edit,"aria-label":label+": %",
            onchange:e=>{ x.pct=Math.max(0,Math.min(100,num(e.target.value))); setTimeout(redraw,0); }}),h("span",null,"%")),
          sel,extra,
          edit&&parts.length>1?h("button",{class:"g-del",type:"button","aria-label":tr("ნაწილის წაშლა"),onclick:()=>{ parts.splice(i,1); redraw(); }},"✕"):null); }),
      h("div",{class:"tp-foot"},
        Math.abs(sum-100)>1e-9?h("span",{class:"tp-warn"},tr("ჯამი")+" "+fmtNum(sum)+"% — "+tr("უნდა იყოს 100%")):h("span",{class:"tp-ok"},"100%"),
        edit&&sum<100?h("button",{class:"btn sm",type:"button",onclick:()=>{ parts.push({pct:Math.round((100-sum)*100)/100,t:""}); redraw(); }},"+ ნაწილი ("+fmtNum(100-sum)+"%)"):null)); };
  /* resources with their own terms are listed separately; "the rest" share the type's terms */
  const namesOf=t=>[...new Set(Object.values(sc.rows||{}).flatMap(r=>(r.res||[]).filter(x=>x.type===t&&x.name&&x.name.trim()).map(x=>x.name.trim())))].sort((a,b)=>a.localeCompare(b,"ka"));
  const cards=RES_TYPES.map(([t,c])=>{
    const parts=W.types[t]||(W.types[t]=[]);
    const own=W.items[t]||(W.items[t]={});
    const names=namesOf(t), rest=names.filter(n=>!own[n]);
    const pick=h("select",{class:"inp","aria-label":tr(t)+": "+tr("რესურსი")},h("option",{value:""},rest.length?tr("აირჩიეთ რესურსი…"):tr("სხვა რესურსი არ არის")),rest.map(n=>h("option",{value:n},n)));
    return h("section",{class:"panel tp-card"},
      h("div",{class:"panel-h"},h("h3",null,h("i",{class:"g-sw "+c}),t)),
      h("div",{class:"panel-b tp-body"},
        Object.entries(own).map(([n,ps])=>h("div",{class:"tp-sub"},
          h("div",{class:"tp-sub-h"},h("b",null,n),edit?h("button",{class:"btn sm ghost",type:"button",onclick:()=>{ delete own[n]; redraw(); }},"დანარჩენებთან გაერთიანება"):null),
          partsEditor(ps,n))),
        h("div",{class:"tp-rest"},
          h("div",{class:"tp-sub-h"},h("b",null,Object.keys(own).length?"დანარჩენები":"ყველა"),
            h("span",{class:"small muted tp-names"},rest.length?rest.join(", "):names.length?"":tr("დასახელებული რესურსი ჯერ არ არის"))),
          partsEditor(parts,t)),
        edit&&names.length?h("div",{class:"row",style:"gap:8px;flex-wrap:nowrap"},pick,
          h("button",{class:"btn sm",type:"button",onclick:()=>{ if(!pick.value){ toast("აირჩიეთ რესურსი"); return; } own[pick.value]=clone(parts.filter(x=>x.t)).length?clone(parts):[{pct:100,t:""}]; redraw(); }},"+ ცალკე პირობა")):null)); });
  const save=()=>{
    const all=[...Object.entries(W.types),...Object.values(W.items).flatMap(o=>Object.entries(o))];
    for(const [k,ps] of all){ const used=ps.filter(x=>x.t);
      if(ps.some(x=>x.t&&!DUE_RE.test(x.t))){ toast(tr("შეავსეთ დღეები / რიცხვი")+": "+tr(k)); return; }
      if(used.length&&Math.abs(used.reduce((a,x)=>a+num(x.pct),0)-100)>1e-9){ toast(tr("ჯამი უნდა იყოს 100%")+": "+tr(k)); return; } }
    const clean=o=>Object.fromEntries(Object.entries(o).map(([k,ps])=>[k,ps.filter(x=>x.t&&DUE_RE.test(x.t)).map(x=>({pct:num(x.pct),t:x.t}))]).filter(([k,ps])=>ps.length));
    const items=Object.fromEntries(Object.entries(W.items).map(([t,o])=>[t,clean(o)]).filter(([t,o])=>Object.keys(o).length));
    sc.terms={types:clean(W.types),items}; saveSchedule(); toast("შენახულია"); back(); };
  return h("div",{class:"sched tp"},
    h("div",{class:"g-top"},
      h("div",{class:"row",style:"gap:10px;align-items:center"},h("button",{class:"btn ghost",type:"button",onclick:back},"← გეგმა-გრაფიკი"),
        h("div",null,h("h2",{style:"margin:0"},"ანაზღაურების პირობები"),h("div",{class:"small muted"},"შესრულებიდან როდის ხდება გადახდა — რესურსის ტიპის მიხედვით, ნაწილებად."))),
      edit?h("div",{class:"g-ctrls"},h("button",{class:"btn ghost",type:"button",onclick:back},"გაუქმება"),h("button",{class:"btn primary",type:"button",onclick:save},"შენახვა")):null),
    h("div",{class:"tp-grid"},cards));
}
/* "+ დაგეგმვა": spread a resource quantity evenly over a period (optionally skipping weekends);
   the resource can be one the position already has or a new one */
function renderPlanDialog(sc,positions,from,to){
  const pos=positions.find(r=>r.code===S.gplan.code)||positions[0];
  if(!pos){ S.gplan=null; return null; }
  const close=()=>{ S.gplan=null; render(); };
  const ids={p:uid(),r:uid(),n:uid(),a:uid(),b:uid(),q:uid(),w:uid()};
  const res=pos.sr.res;
  const pick=S.gplan.res||(res[0]?res[0].id:"new:შრომა");
  const target=res.find(x=>x.id===pick);
  const ds=target?planDays(target.plan):[];
  const start=ds[0]||(todayISO()>=from&&todayISO()<=to?todayISO():from);
  const pSel=h("select",{id:ids.p,class:"inp",onchange:e=>{ S.gplan={code:e.target.value}; render(); }},
    positions.map(r=>{ const o=h("option",{value:r.code},r.it.code+" — "+String(r.it.name||"").slice(0,70)); if(r===pos) o.selected=true; return o; }));
  const rSel=h("select",{id:ids.r,class:"inp",onchange:e=>{ S.gplan={code:pos.code,res:e.target.value}; render(); }},
    res.map(x=>h("option",{value:x.id},tr(x.type)+" — "+(x.name||tr("დასახელება არაა")))),
    RES_TYPES.map(([t])=>h("option",{value:"new:"+t},tr("ახალი რესურსი")+": "+tr(t))));
  rSel.value=pick;
  const nIn=pick.startsWith("new:")?h("input",{id:ids.n,class:"inp",placeholder:"მაგ. მუშა, ექსკავატორი, ბეტონი"}):null;
  const aIn=h("input",{id:ids.a,type:"date",class:"inp",value:start});
  const bIn=h("input",{id:ids.b,type:"date",class:"inp",value:ds[ds.length-1]||addDays(start,13)});
  const qIn=h("input",{id:ids.q,class:"inp num",inputmode:"decimal",value:target&&target.qty?String(target.qty):""});
  const wIn=h("input",{id:ids.w,type:"checkbox",checked:true});
  const info=h("div",{class:"small muted"});
  const unit=()=>target?(target.unit||""):"";
  const workDays=()=>{ const out=[]; if(!aIn.value||!bIn.value||bIn.value<aIn.value) return out;
    for(let d=aIn.value; d<=bIn.value&&out.length<731; d=addDays(d,1)){ const w=new Date(d+"T00:00").getDay(); if(!wIn.checked||(w!==0&&w!==6)) out.push(d); } return out; };
  const upd=()=>{ const n=workDays().length, q=num(qIn.value); info.textContent=n?(n+" "+tr("სამუშაო დღე")+(q?" · "+tr("დღეში ≈ ")+fmtNum(q/n)+" "+unit():"")):tr("აირჩიეთ სწორი პერიოდი"); };
  [aIn,bIn,qIn,wIn].forEach(x=>x.addEventListener("input",upd)); upd();
  const ok=()=>{ const list=workDays(), q=num(qIn.value);
    if(!list.length){ toast("აირჩიეთ სწორი პერიოდი"); return; } if(!(q>0)){ toast("მიუთითეთ მოცულობა"); qIn.focus(); return; }
    let x=target;
    if(!x){ x={id:Math.random().toString(36).slice(2,8),type:pick.slice(4),name:(nIn&&nIn.value.trim())||"",unit:"",qty:null,price:null,plan:{}}; res.push(x); (S.gshut||new Set()).delete(pos.code); }
    for(const d of Object.keys(x.plan)) if(d>=aIn.value&&d<=bIn.value) delete x.plan[d];
    const per=Math.round(q/list.length*100)/100;
    list.forEach((d,i)=>{ x.plan[d]=i<list.length-1?per:Math.round((q-per*(list.length-1))*100)/100; });
    if(aIn.value<from) sc.start=aIn.value; if(bIn.value>to) sc.end=bIn.value;
    S.gplan=null; saveSchedule(); render(); };
  return h("div",{class:"g-modal",onkeydown:e=>{ if(e.key==="Escape") close(); },onclick:e=>{ if(e.target===e.currentTarget) close(); }},
    h("div",{class:"g-dlg",role:"dialog","aria-modal":"true","aria-labelledby":ids.p+"h"},
      h("h3",{id:ids.p+"h"},"დაგეგმვა"),
      h("div",{class:"field"},h("label",{for:ids.p},"პოზიცია"),pSel),
      h("div",{class:"field"},h("label",{for:ids.r},"რესურსი"),rSel),
      nIn?h("div",{class:"field"},h("label",{for:ids.n},"რესურსის დასახელება"),nIn):null,
      h("div",{class:"row",style:"gap:10px;flex-wrap:nowrap"},
        h("div",{class:"field",style:"flex:1"},h("label",{for:ids.a},"დან"),aIn),
        h("div",{class:"field",style:"flex:1"},h("label",{for:ids.b},"მდე"),bIn)),
      h("div",{class:"field"},h("label",{for:ids.q},"მოცულობა"+(unit()?" ("+unit()+")":"")),qIn),
      h("label",{class:"check",for:ids.w},wIn,"შაბათ-კვირის გარეშე"),
      info,
      h("p",{class:"small muted",style:"margin:0"},"მოცულობა თანაბრად განაწილდება არჩეულ დღეებზე. ამ პერიოდში რესურსის არსებული გეგმა ჩანაცვლდება."),
      h("div",{class:"row",style:"justify-content:flex-end"},h("button",{class:"btn ghost",type:"button",onclick:close},"გაუქმება"),h("button",{class:"btn primary",type:"button",onclick:ok},"დაგეგმვა"))));
}

/* ---------- EXECUTION PLAN (შესრულების გეგმა) ---------- */
/* BoQ chapters and positions on the left; on the right one column per chosen date with the quantity
   planned to be executed by then. Kept in the project's schedule document (sc.exec) and saved with it. */
function renderExec(p){
  if(S.schedPid!==S.pid){ loadSchedule(S.pid); return h("div",{class:"empty"},h("p",{class:"muted"},"იტვირთება…")); }
  const sc=S.sched; sc.rows=sc.rows||{};
  const ex=sc.exec||(sc.exec={dates:[],vals:{}}); ex.dates=ex.dates||[]; ex.vals=ex.vals||{};
  const edit=canReview(p)&&!p.archived;
  const boq=p.boq||[];
  const save=()=>{ saveSchedule(); };
  const redraw=()=>{ const w=document.querySelector(".gwrap"); S.xscroll=w?{x:w.scrollLeft,y:w.scrollTop}:null; render(); };
  const numOrNull=v=>v.trim()===""?null:num(v);
  /* rows with depth (indentation of the BoQ number) and the chapter / sub-chapter they belong to;
     folding is shared with the schedule tab (same keys in S.gfold) */
  const fold=S.gfold||(S.gfold=new Set());
  const all=[]; let chap=null, sub=null;
  boq.forEach((it,i)=>{
    if(it.type==="თავი"){ chap={it,d:0,key:"h"+i,lvl:1}; sub=null; all.push(chap); }
    else if(it.type==="ქვეთავი"){ sub={it,d:1,key:"h"+i,lvl:2,chap}; all.push(sub); }
    else if(it.type==="პოზიცია") all.push({it,d:sub?2:1,code:normCode(it.code),chap,sub});
  });
  const rows=all.filter(r=>!((r.chap&&fold.has(r.chap.key))||(r.sub&&fold.has(r.sub.key))));
  const hasSub=all.some(r=>r.lvl===2), maxL=hasSub?3:2;
  const lvlName={1:"მხოლოდ თავები",[maxL]:"სრულად გაშლილი"}; if(hasSub) lvlName[2]="თავები და ქვეთავები";
  const setLevel=L=>{ fold.clear(); for(const r of all) if(r.key&&((L===1&&r.lvl===1)||(hasSub&&L===2&&r.lvl===2))) fold.add(r.key); redraw(); };
  const outline=h("div",{class:"g-lvls",role:"group","aria-label":"დაჯგუფების დონე"},h("span",{class:"hb-l"},"დონე"),
    [...Array(maxL).keys()].map(i=>i+1).map(L=>h("button",{type:"button",class:"g-lvl tip","data-tip":tr(lvlName[L]),"aria-label":tr(lvlName[L]),onclick:()=>setLevel(L)},String(L))));
  /* "+ თარიღი" adds an empty column labelled "თარიღი"; it becomes a real date column once a date is picked */
  const pend=S.xpend&&S.xpend.pid===S.pid?S.xpend:(S.xpend={pid:S.pid,n:0});
  /* "+ თარიღი" opens the calendar right away (an invisible date field under the button);
     browsers without showPicker get an empty "თარიღი" column to pick the date in */
  const addBtn=(cls)=>{ const picker=h("input",{type:"date",class:"x-hidpick",tabindex:"-1","aria-hidden":"true",onchange:e=>pickNew(e.target.value)});
    return h("span",{class:"x-addw"},h("button",{class:cls+" x-sq tip",type:"button","data-tip":tr("თარიღის დამატება"),"aria-label":tr("თარიღის დამატება"),onclick:()=>{ picker.value=ex.dates[ex.dates.length-1]||""; try{ picker.showPicker(); }catch(e){ pend.n++; redraw(); } }},"+"),picker); };
  /* several dates at once: N more dates every K days after the last one */
  const seriesBtn=cls=>h("button",{class:cls+" x-sq tip",type:"button","data-tip":tr("რამდენიმე თარიღის დამატება"),"aria-label":tr("რამდენიმე თარიღის დამატება"),onclick:()=>{ S.xseries=true; redraw(); }},"++");
  const seriesDlg=()=>{
    const ids={n:uid(),k:uid(),s:uid()};
    const last=ex.dates[ex.dates.length-1];
    const close=()=>{ S.xseries=false; redraw(); };
    const nIn=h("input",{id:ids.n,class:"inp num",type:"number",min:"1",max:"60",value:String(S.xserN||4)});
    const kIn=h("input",{id:ids.k,class:"inp num",type:"number",min:"1",max:"365",value:String(S.xserK||7)});
    const sIn=h("input",{id:ids.s,type:"date",class:"inp",value:last?addDays(last,S.xserK||7):todayISO()});
    const prev=h("div",{class:"small muted"});
    const list=()=>{ const n=Math.min(60,Math.max(0,parseInt(nIn.value,10)||0)), k=Math.max(1,parseInt(kIn.value,10)||1), out=[];
      if(!sIn.value) return out; for(let i=0;i<n;i++){ const d=addDays(sIn.value,i*k); if(!ex.dates.includes(d)) out.push(d); } return out; };
    const upd=()=>{ const l=list(); prev.textContent=l.length?l.map(d=>fmtDate(d)).join(", "):tr("ახალი თარიღი არ დაემატება"); };
    kIn.addEventListener("input",()=>{ if(last) sIn.value=addDays(last,Math.max(1,parseInt(kIn.value,10)||1)); upd(); });
    [nIn,sIn].forEach(x=>x.addEventListener("input",upd)); upd();
    const ok=()=>{ const l=list(); if(!l.length){ toast("ახალი თარიღი არ დაემატება"); return; }
      S.xserN=parseInt(nIn.value,10); S.xserK=parseInt(kIn.value,10);
      ex.dates=[...ex.dates,...l].sort(); S.xseries=false; save(); redraw(); };
    return h("div",{class:"g-modal",onkeydown:e=>{ if(e.key==="Escape") close(); },onclick:e=>{ if(e.target===e.currentTarget) close(); }},
      h("div",{class:"g-dlg",role:"dialog","aria-modal":"true","aria-labelledby":ids.n+"h"},
        h("h3",{id:ids.n+"h"},"რამდენიმე თარიღის დამატება"),
        h("div",{class:"row",style:"gap:10px;flex-wrap:nowrap"},
          h("div",{class:"field",style:"flex:1"},h("label",{for:ids.n},"რამდენი თარიღი"),nIn),
          h("div",{class:"field",style:"flex:1"},h("label",{for:ids.k},"რამდენ დღეში ერთხელ"),kIn)),
        h("div",{class:"field"},h("label",{for:ids.s},last?"პირველი ახალი თარიღი (ბოლოს შემდეგ)":"პირველი თარიღი"),sIn),
        h("div",null,h("div",{class:"hb-l"},"დაემატება"),prev),
        h("div",{class:"row",style:"justify-content:flex-end"},h("button",{class:"btn ghost",type:"button",onclick:close},"გაუქმება"),h("button",{class:"btn primary",type:"button",onclick:ok},"დამატება")))); };
  const pickNew=nw=>{ if(!nw) return; if(ex.dates.includes(nw)){ toast("ეს თარიღი უკვე დამატებულია"); return; }
    pend.n=Math.max(0,pend.n-1); ex.dates=[...ex.dates,nw].sort(); save(); redraw(); };
  /* a date cell shows dd.mm.yyyy and turns into a date picker while it has focus */
  const dateBox=(d,onPick,label)=>h("input",{type:"text",class:"x-din"+(d?"":" pending"),value:d?fmtDate(d):"",placeholder:tr("თარიღი"),readonly:true,disabled:!edit,"aria-label":label,
    onfocus:e=>{ const t=e.target; t.readOnly=false; t.type="date"; t.value=d||""; try{ t.showPicker&&t.showPicker(); }catch(x){} },
    onblur:e=>{ const t=e.target; if(t.type==="date"&&(t.value||"")===(d||"")){ t.type="text"; t.readOnly=true; t.value=d?fmtDate(d):""; } },
    onchange:e=>onPick(e.target.value)});
  const moveDate=(old,nw)=>{ if(!nw||nw===old) return; if(ex.dates.includes(nw)){ toast("ეს თარიღი უკვე დამატებულია"); redraw(); return; }
    ex.dates=ex.dates.map(d=>d===old?nw:d).sort();
    for(const v of Object.values(ex.vals)) if(old in v){ v[nw]=v[old]; delete v[old]; }
    save(); redraw(); };
  const dropDate=d=>{ const has=Object.values(ex.vals).some(v=>num(v[d])); if(has&&!confirm(tr("წავშალო სვეტი")+" "+fmtDate(d)+"? "+tr("მასში ჩაწერილი რაოდენობები წაიშლება."))) return;
    ex.dates=ex.dates.filter(x=>x!==d); for(const v of Object.values(ex.vals)) delete v[d]; save(); redraw(); };
  const setVal=(code,d,raw)=>{ const n=numOrNull(raw); const v=ex.vals[code]||(ex.vals[code]={}); if(n==null||n===0) delete v[d]; else v[d]=n; save(); };
  /* Enter moves to the same date in the next position, like a spreadsheet */
  const onKey=e=>{ if(e.key!=="Enter") return; e.preventDefault(); const all=[...document.querySelectorAll('.xtable input.x-in[data-col="'+e.target.dataset.col+'"]')];
    const i=all.indexOf(e.target); const n=all[i+(e.shiftKey?-1:1)]; if(n){ n.focus(); n.select(); } else e.target.blur(); };
  /* month and year once above the dates of that month; a stronger line where a new month starts */
  const MN=LANG==="en"?MONTHS_EN:MONTHS_KA;
  const months=[]; ex.dates.forEach(d=>{ const k=d.slice(0,7), l=months[months.length-1]; if(l&&l.k===k) l.n++; else months.push({k,n:1}); });
  /* a date column is as wide as its longest quantity, at least as wide as the date */
  const qtyOf=new Map(boq.filter(it=>it.type==="პოზიცია").map(it=>[normCode(it.code),num(it.qty)]));
  const vm=S.xmode==="val", pr=code=>num(posUnitPrice(sc.rows[code],qtyOf.get(code)));
  const dpx=ex.dates.map(d=>{ let len=0, all$=0;
    for(const [code,v] of Object.entries(ex.vals)) if(v[d]!=null){ const x=vm?num(v[d])*pr(code):num(v[d]); all$+=x; len=Math.max(len,fmtNum(x).length); }
    if(vm) len=Math.max(len,fmtNum(all$).length);
    return Math.max(78,Math.ceil(len*7.4+22)); });
  const ms=ex.dates.map((d,i)=>i>0&&d.slice(0,7)!==ex.dates[i-1].slice(0,7)?" ms":"");
  const thead=h("thead",null,h("tr",null,
    ["BoQ","დასახელება",[h("span",null,"ჯამური"),h("br"),h("span",null,"რაოდ.")],"განზ.","ერთ. ფასი","სულ"].map((l,i)=>h("th",{class:"g-fz f"+i+(i===5?" g-fz-last":""),rowspan:"2"},l)),
    months.map((m,i)=>{ const full=MN[+m.k.slice(5)-1]+" "+m.k.slice(0,4);
      return h("th",{class:"x-month"+(i>0?" ms":""),colspan:String(m.n),title:full},h("span",{class:"gm-l"},m.n>1?full:MN[+m.k.slice(5)-1].slice(0,3)+". "+m.k.slice(0,4))); }),
    edit&&pend.n?h("th",{class:"x-month ms",colspan:String(pend.n)}):null,
    edit?h("th",{class:"x-add",rowspan:"2"},h("div",{class:"x-addrow"},addBtn("btn x-tall"),seriesBtn("btn x-tall"))):null),
    h("tr",null,
    ex.dates.map((d,i)=>h("th",{class:"x-date"+ms[i],style:"width:"+dpx[i]+"px;min-width:"+dpx[i]+"px"},h("div",{class:"x-dh"},
      dateBox(d,nw=>moveDate(d,nw),tr("თარიღი")+" "+fmtDate(d)),
      edit?h("button",{class:"g-del",type:"button",title:tr("სვეტის წაშლა"),"aria-label":tr("სვეტის წაშლა")+" "+fmtDate(d),onclick:()=>dropDate(d)},"✕"):null))),
    Array.from({length:edit?pend.n:0},()=>h("th",{class:"x-date"},h("div",{class:"x-dh"},
      dateBox("",pickNew,tr("ახალი თარიღი")),
      h("button",{class:"g-del",type:"button",title:tr("სვეტის წაშლა"),"aria-label":tr("სვეტის წაშლა"),onclick:()=>{ pend.n=Math.max(0,pend.n-1); redraw(); }},"✕"))))));
  /* quantities or values (quantity × unit price); in values the chapter and sub-chapter rows show sums */
  const valMode=S.xmode==="val";
  const priceOf=pr;
  const cellVal=(code,d)=>{ const q=num((ex.vals[code]||{})[d]); return valMode?q*priceOf(code):q; };
  const kidsOf=r=>all.filter(x=>x.code&&(x.chap===r||x.sub===r));
  const mode=h("div",{class:"vswitch",role:"group","aria-label":"ჩვენება"},[["qty","რაოდენობა"],["val","ღირებულება"]].map(([k,l])=>
    h("button",{type:"button",class:"vbtn vtxt"+((S.xmode||"qty")===k?" on":""),"aria-pressed":String((S.xmode||"qty")===k),onclick:()=>{ S.xmode=k; redraw(); }},l)));
  const body=rows.map(r=>{
    const it=r.it, head=it.type!=="პოზიცია";
    const toggle=head?h("button",{class:"g-fold",type:"button","aria-expanded":String(!fold.has(r.key)),"aria-label":(fold.has(r.key)?tr("გაშლა"):tr("აკეცვა"))+": "+(it.name||""),
      onclick:()=>{ fold.has(r.key)?fold.delete(r.key):fold.add(r.key); redraw(); }},fold.has(r.key)?"▷":"◢"):h("span",{class:"g-fold-gap","aria-hidden":"true"});
    const code=h("td",{class:"g-fz f0 mono"},h("div",{class:"g-code",style:"padding-left:"+r.d*14+"px"},toggle,h("span",{class:head?"g-chead":"g-cpos"},it.code||"")));
    if(head) return h("tr",{class:"g-head"+(it.type==="ქვეთავი"?" sub":"")},code,
      h("td",{class:"g-fz f1"},h("div",{class:"g-hname g-tipsrc","data-tip":it.name||""},it.name||"")),
      h("td",{class:"g-fz f2"}),h("td",{class:"g-fz f3"}),h("td",{class:"g-fz f4"}),
      (()=>{ if(!valMode) return h("td",{class:"g-fz f5 x-sum"}); const k=kidsOf(r); const t=ex.dates.reduce((a,d)=>a+k.reduce((b,x)=>b+cellVal(x.code,d),0),0);
        return h("td",{class:"g-fz f5 x-sum num"},t?fmtNum(t):""); })(),
      ex.dates.map((d,i)=>{ if(!valMode) return h("td",{class:"x-c"+ms[i]}); const t=kidsOf(r).reduce((b,x)=>b+cellVal(x.code,d),0);
        return h("td",{class:"x-c x-hv num"+ms[i]},t?fmtNum(t):""); }),Array.from({length:edit?pend.n:0},()=>h("td",{class:"x-c"})),edit?h("td",{class:"x-add"}):null);
    const sr=sc.rows[r.code]||(sc.rows[r.code]={price:null,plan:{},res:[]});
    const v=ex.vals[r.code]||{}, tot=ex.dates.reduce((a,d)=>a+num(v[d]),0), q=num(it.qty);
    const vtot=ex.dates.reduce((a,d)=>a+cellVal(r.code,d),0);
    return h("tr",{class:"g-pos"},code,
      h("td",{class:"g-fz f1"},h("div",{class:"g-name g-tipsrc","data-tip":it.name||""},it.name||"")),
      h("td",{class:"g-fz f2 num"},q?fmtNum(q):"—"),
      h("td",{class:"g-fz f3"},it.unit||""),
      h("td",{class:"g-fz f4 num g-calc",title:tr("რესურსების ღირებულება ÷ რაოდენობა")},pr(r.code)?fmtNum(pr(r.code)):"—"),
      valMode?h("td",{class:"g-fz f5 x-sum num"},vtot?fmtNum(vtot):""):h("td",{class:"g-fz f5 x-sum num"+(q&&tot>q+1e-9?" over":"")},tot?fmtNum(tot):""),
      valMode?ex.dates.map((d,ci)=>{ const x=cellVal(r.code,d); return h("td",{class:"x-c x-v num"+ms[ci]+(num(v[d])&&!priceOf(r.code)?" noprice":""),title:num(v[d])&&!priceOf(r.code)?tr("ერთეულის ფასი არ არის მითითებული"):null},x?fmtNum(x):(num(v[d])?"—":"")); }):
      ex.dates.map((d,ci)=>h("td",{class:"x-c"+ms[ci]},h("input",{class:"g-in num x-in",value:v[d]??"",inputmode:"decimal",disabled:!edit,"data-col":String(ci),"aria-label":(it.code||"")+" "+fmtDate(d),
        onkeydown:onKey,onchange:e=>{ setVal(r.code,d,e.target.value);
          const th=document.querySelectorAll(".xtable thead th.x-date")[ci], need=Math.max(78,Math.ceil(String(e.target.value).trim().length*7.4+22));
          if(th&&th.getBoundingClientRect().width<need){ th.style.width=need+"px"; th.style.minWidth=need+"px"; } const td=e.target.closest("tr").querySelector("td.x-sum"); const nv=ex.vals[r.code]||{}; const t=ex.dates.reduce((a,x)=>a+num(nv[x]),0); td.textContent=t?fmtNum(t):""; td.classList.toggle("over",!!q&&t>q+1e-9); }}))),
      Array.from({length:edit?pend.n:0},()=>h("td",{class:"x-c x-wait"})),
      edit?h("td",{class:"x-add"}):null);
  });
  const xt=h("table",{class:"gtable xtable"},thead,h("tbody",null,body));
  colResize(xt,"exec");
  const wrap=h("div",{class:"gwrap",onscroll:()=>{ gTip().hidden=true; }},xt);
  wrap.addEventListener("mouseover",e=>{ const t=e.target.closest(".g-tipsrc"), tip=gTip();
    if(t&&t.dataset.tip){ const r=t.getBoundingClientRect(); tip.textContent=t.dataset.tip; tip.hidden=false; tip.style.left=Math.min(r.left,window.innerWidth-tip.offsetWidth-12)+"px"; tip.style.top=(r.bottom+6)+"px"; } else tip.hidden=true; });
  wrap.addEventListener("mouseleave",()=>{ gTip().hidden=true; });
  requestAnimationFrame(()=>{ if(S.xscroll){ wrap.scrollLeft=S.xscroll.x; wrap.scrollTop=S.xscroll.y; S.xscroll=null; } });
  const top=h("div",{class:"g-top"},
    h("div",{class:"g-title"},h("h2",null,"შესრულების გეგმა"),h("div",{class:"small muted"},"თითო თარიღზე ჩაწერეთ, რა რაოდენობის შესრულებას გეგმავთ.")),
    h("div",{class:"g-ctrls"},mode,outline,h("span",{id:"sched-status",class:"small muted"},edit?"":"მხოლოდ ნახვა"),
      edit?addBtn("btn primary"):null,edit?seriesBtn("btn primary"):null));
  return h("div",{class:"sched"},top,
    !all.length?h("div",{class:"empty"},h("p",{class:"muted"},"ჯერ ატვირთეთ ხარჯთაღრიცხვა „ხარჯთაღრიცხვის“ ჩანართზე."))
    :null,S.xseries&&edit?seriesDlg():null,
    !all.length?null:!ex.dates.length&&!pend.n?[wrap,h("div",{class:"empty"},h("p",{class:"muted"},edit?"დაამატეთ პირველი თარიღი ღილაკით „+“.":"თარიღები ჯერ არ არის დამატებული."))]:wrap);
}

/* ---------- TEAM ---------- */
/* each member has a position (job title) and an access level in this project; admins have full rights everywhere */
function renderTeam(p){
  const members=p.members||{}; const ids=p.memberIds||[];
  const save=async(memberIds,mem,msg)=>{ try{ await saveProject(S.pid,{memberIds,members:mem},msg); render(); }catch(e){} };
  const posSel=(val,on)=>{ const el=h("select",{class:"inp","aria-label":"თანამდებობა",disabled:!S.admin,onchange:on},h("option",{value:""},"—"),PROJECT_ROLES.map(r=>h("option",{value:r},r))); el.value=val||""; return el; };
  const accSel=(val,on)=>{ const el=h("select",{class:"inp","aria-label":"უფლება",disabled:!S.admin,onchange:on},Object.entries(ACCESS_NAMES).map(([k,l])=>h("option",{value:k},l))); el.value=val||"executor"; return el; };
  const upd=(id,patch,msg)=>{ const m=clone(members); m[id]={...(m[id]||{}),...patch}; save(ids,m,msg); };
  const rows=ids.map(id=>{
    const m=members[id]||{}; const u=S.names.get(id); const isAdm=u&&u.role==="admin";
    return h("tr",null,
      h("td",{"data-l":"თანამშრომელი"},h("div",{class:"tm-who"},h("span",{class:"avatar"},initials(u&&u.name)),
        h("div",null,h("b",null,u?u.name:"წაშლილი მომხმარებელი"),h("div",{class:"small muted mono"},u?u.username:""),u&&!u.active?h("span",{class:"chip st-none"},"გათიშული"):null))),
      h("td",{"data-l":"თანამდებობა"},posSel(m.role,e=>upd(id,{role:e.target.value},"თანამდებობა შეიცვალა"))),
      h("td",{"data-l":"უფლება"},isAdm?h("span",{class:"chip st-approved"},"ადმინი — სრული უფლება")
        :h("div",null,accSel(m.access,e=>upd(id,{access:e.target.value},"უფლება შეიცვალა")),h("div",{class:"small muted",style:"margin-top:3px"},ACCESS_HINT[m.access||"executor"]))),
      S.admin?h("td",{"data-l":""},h("button",{class:"btn sm ghost",type:"button",onclick:()=>{ const mm=clone(members); delete mm[id]; save(ids.filter(x=>x!==id),mm,"ამოღებულია გუნდიდან"); }},"ამოღება")):null);
  });
  const table=ids.length?h("div",{class:"tw"},h("table",{class:"rt team-t stack"},
      h("thead",null,h("tr",null,["თანამშრომელი","თანამდებობა","უფლება",...(S.admin?[""]:[])].map(l=>h("th",null,l)))),
      h("tbody",null,rows)))
    :h("div",{class:"panel-b muted"},"გუნდი ცარიელია.");
  let adder=null;
  if(S.admin){
    const avail=[...S.names.values()].filter(u=>u.active&&!ids.includes(u.id)&&u.role!=="admin");
    const uId=uid(), rId=uid(), aId=uid();
    const userSel=h("select",{id:uId,class:"inp"},h("option",{value:""},avail.length?"აირჩიეთ…":"ყველა თანამშრომელი უკვე გუნდშია"),avail.map(u=>h("option",{value:u.id},u.name+" ("+u.username+")")));
    const roleSel=posSel("საქმეთა მწარმოებელი"); roleSel.id=rId;
    const accessSel=accSel("executor"); accessSel.id=aId;
    adder=h("section",{class:"panel"},h("div",{class:"panel-h"},h("h3",null,"თანამშრომლის დამატება"),h("button",{class:"btn sm ghost",type:"button",onclick:()=>go("users")},"მომხმარებლების მართვა")),
      h("div",{class:"panel-b",style:"display:flex;flex-direction:column;gap:10px"},
        h("div",{class:"row",style:"align-items:flex-end"},
          h("div",{class:"field",style:"flex:1;min-width:220px"},h("label",{for:uId},"თანამშრომელი"),userSel),
          h("div",{class:"field"},h("label",{for:rId},"თანამდებობა"),roleSel),
          h("div",{class:"field"},h("label",{for:aId},"უფლება"),accessSel),
          h("button",{class:"btn primary",type:"button",onclick:()=>{ if(!userSel.value){ toast("აირჩიეთ თანამშრომელი"); return; } const m=clone(members); m[userSel.value]={role:roleSel.value,access:accessSel.value,addedAt:new Date().toISOString()}; save([...ids,userSel.value],m,"დაემატა გუნდში"); }},"დამატება")),
        h("p",{class:"small muted",style:"margin:0"},"შემსრულებელი ქმნის და ავსებს ანგარიშებს · რივიუერი ასევე ადასტურებს და წერს ფასებს · მნახველი მხოლოდ ათვალიერებს. ადმინისტრატორებს გუნდში დამატება არ სჭირდებათ — მათ ყველა პროექტზე სრული უფლება აქვთ.")));
  }
  return [adder,h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"პროექტის გუნდი",h("span",{class:"en cnt-sub"},ids.length+" წევრი"))),table)].filter(Boolean);
}

/* ---------- INFO ---------- */
function renderInfo(p){
  if(!(S.admin&&S.editInfo)) return [
    S.admin?h("div",{class:"row",style:"justify-content:flex-end"},h("button",{class:"btn",type:"button",onclick:()=>{S.editInfo=true;render();}},"რედაქტირება")):null,
    renderProjectSheet(p)];
  const out=[renderProjectForm(S.pid)];
  return out;
}

/* ---------- ANALYSIS (admin): revenue = priced works, cost = priced expenses ---------- */
function analysisData(){
  const A=S.analysis||{reports:[],additional:[]}, F=S.anFilter||(S.anFilter={approvedOnly:true,from:"",to:""});
  const reps=A.reports.filter(r=>(!F.approvedOnly||r.status==="approved")&&(!F.from||r.date>=F.from)&&(!F.to||r.date<=F.to));
  const out=new Map();
  for(const [pid,p] of S.projects){
    const idx=new Map((p.boq||[]).map(it=>[normCode(it.code),it]));
    for(const a of A.additional.filter(a=>a.projectId===pid)) if(!idx.has(normCode(a.code))) idx.set(normCode(a.code),{name:a.name,unit:a.unit});
    out.set(pid,{p,idx,rev:0,cost:0,unpriced:0,works:new Map(),costs:new Map(),months:new Map(),reports:0});
  }
  for(const r of reps){
    const d=out.get(r.projectId); if(!d) continue; d.reports++;
    const m=r.date.slice(0,7); if(!d.months.has(m)) d.months.set(m,{rev:0,cost:0});
    for(const w of r.works){ if(!w.code) continue;
      if(w.price===""||w.price==null){ if(num(w.qty)) d.unpriced++; continue; }
      const a=amount(w), code=normCode(w.code), it=d.idx.get(code)||{};
      const g=d.works.get(code)||{code,name:it.name||"",unit:it.unit||"",qty:0,amt:0}; g.qty+=num(w.qty); g.amt+=a; d.works.set(code,g);
      d.rev+=a; d.months.get(m).rev+=a; }
    for(const x of r.expenses){
      if(x.price===""||x.price==null){ if(num(x.qty)) d.unpriced++; continue; }
      const a=amount(x), t=x.type||"სხვა";
      const g=d.costs.get(t)||{type:t,amt:0,lines:new Map()}; g.amt+=a;
      const lk=(x.desc||"—")+"|"+(x.unit||""); const l=g.lines.get(lk)||{desc:x.desc||"—",unit:x.unit||"",qty:0,amt:0}; l.qty+=num(x.qty); l.amt+=a; g.lines.set(lk,l);
      d.costs.set(t,g); d.cost+=a; d.months.get(m).cost+=a; }
  }
  return [...out.values()].sort((a,b)=>String(a.p.name).localeCompare(String(b.p.name),"ka"));
}
function renderAnalysis(){
  if(!S.admin&&!S.reviewer) return renderMissing();
  const F=S.anFilter||(S.anFilter={approvedOnly:true,from:"",to:""});
  const data=analysisData();
  const money=n=>fmtNum(n)+" ₾";
  const pct=(a,b)=>b?fmtNum(a/b*100)+"%":"—";
  const tot=data.reduce((t,d)=>({rev:t.rev+d.rev,cost:t.cost+d.cost}),{rev:0,cost:0});
  const fId=uid(), tId=uid(), cId=uid();
  const filters=h("section",{class:"panel"},h("div",{class:"panel-b an-filters"},
    h("div",{class:"field"},h("label",{for:fId},"თარიღიდან"),h("input",{id:fId,type:"date",class:"inp",value:F.from,onchange:e=>{F.from=e.target.value;render();}})),
    h("div",{class:"field"},h("label",{for:tId},"თარიღამდე"),h("input",{id:tId,type:"date",class:"inp",value:F.to,onchange:e=>{F.to=e.target.value;render();}})),
    h("label",{class:"check",for:cId},h("input",{id:cId,type:"checkbox",checked:F.approvedOnly,onchange:e=>{F.approvedOnly=e.target.checked;render();}}),"მხოლოდ დადასტურებული ანგარიშები"),
    h("button",{class:"btn sm ghost",type:"button",onclick:async()=>{ try{ S.analysis=await api("GET","/analysis"); render(); }catch(e){ toast(errMsg(e)); } }},"განახლება")));
  const kpi=h("div",{class:"an-kpis"},
    [["შემოსავალი",money(tot.rev)],["ხარჯი",money(tot.cost)],["სხვაობა",money(tot.rev-tot.cost)],["მარჟა",pct(tot.rev-tot.cost,tot.rev)]]
      .map(([l,v])=>h("div",{class:"an-kpi"},h("div",{class:"muted small"},l),h("div",{class:"an-kpi-v"},v))));
  S.anOpen=S.anOpen||new Set();
  const summary=h("section",{class:"panel"},
    h("div",{class:"panel-h"},h("h2",null,"პროექტების მიხედვით")),
    h("div",{class:"tw"},h("table",{class:"rt an-t"},
      h("thead",null,h("tr",null,["პროექტი","ანგარიში","შემოსავალი","ხარჯი","სხვაობა","მარჟა"].map((l,i)=>h("th",{class:i>1?"num":null},l)))),
      h("tbody",null,data.map(d=>{
        const open=S.anOpen.has(d.p.id);
        return [h("tr",{class:"an-row",tabindex:"0",onclick:()=>{ open?S.anOpen.delete(d.p.id):S.anOpen.add(d.p.id); render(); },onkeydown:e=>{ if(e.key==="Enter") e.currentTarget.click(); }},
            h("td",null,h("span",{class:"an-caret"},open?"▾":"▸")," ",d.p.name,d.unpriced?h("span",{class:"chip st-draft",style:"margin-left:8px"},d.unpriced+" ფასის გარეშე"):null),
            h("td",{class:"num"},d.reports),h("td",{class:"num"},money(d.rev)),h("td",{class:"num"},money(d.cost)),
            h("td",{class:"num"+(d.rev-d.cost<0?" neg":"")},money(d.rev-d.cost)),h("td",{class:"num"},pct(d.rev-d.cost,d.rev))),
          open?h("tr",{class:"an-detail"},h("td",{colspan:"6"},renderAnalysisDetail(d,money))):null];
      })),
      h("tfoot",null,h("tr",null,h("td",null,"სულ"),h("td",{class:"num"},data.reduce((a,d)=>a+d.reports,0)),h("td",{class:"num"},money(tot.rev)),h("td",{class:"num"},money(tot.cost)),h("td",{class:"num"},money(tot.rev-tot.cost)),h("td",{class:"num"},pct(tot.rev-tot.cost,tot.rev)))))));
  return [h("div",{class:"head"},h("div",null,h("div",{class:"eyebrow"},"Reports & Analytics"),h("h1",null,"ანალიტიკა"))),filters,kpi,summary,
    h("p",{class:"small muted"},"შემოსავალი = შესრულებული სამუშაოს რაოდენობა × ერთ. ღირებულება; ხარჯი = ხარჯის რაოდენობა × ერთ. ღირებულება. ფასს ანგარიშის დადასტურებისას რივიუერი უწერს.")];
}
function renderAnalysisDetail(d,money){
  const works=[...d.works.values()].sort((a,b)=>a.code.localeCompare(b.code,undefined,{numeric:true}));
  const costs=[...d.costs.values()].sort((a,b)=>b.amt-a.amt);
  const months=[...d.months.entries()].sort((a,b)=>a[0].localeCompare(b[0]));
  const tbl=(head,rows,foot)=>h("table",{class:"rt an-sub"},h("thead",null,h("tr",null,head.map((l,i)=>h("th",{class:i>=head.length-2?"num":null},l)))),h("tbody",null,rows),foot?h("tfoot",null,foot):null);
  return h("div",{class:"an-grid"},
    h("div",null,h("h3",null,"შემოსავალი — სამუშაოების მიხედვით"),
      works.length?tbl(["BoQ #","დასახელება","განზ.","რაოდ.","ღირებულება"],works.map(w=>h("tr",null,h("td",{class:"mono"},w.code),h("td",null,w.name),h("td",null,w.unit),h("td",{class:"num"},fmtNum(w.qty)),h("td",{class:"num"},money(w.amt)))),
        h("tr",null,h("td",{colspan:"4"},"სულ"),h("td",{class:"num"},money(d.rev)))):h("p",{class:"muted small"},"ფასიანი სამუშაო არ არის.")),
    h("div",null,h("h3",null,"ხარჯები — ტიპის მიხედვით"),
      costs.length?tbl(["ტიპი / აღწერა","განზ.","რაოდ.","ღირებულება"],costs.map(g=>[
          h("tr",{class:"an-grp"},h("td",{colspan:"3"},g.type),h("td",{class:"num"},money(g.amt))),
          [...g.lines.values()].map(l=>h("tr",null,h("td",{class:"an-ind"},l.desc),h("td",null,l.unit),h("td",{class:"num"},fmtNum(l.qty)),h("td",{class:"num"},money(l.amt))))]),
        h("tr",null,h("td",{colspan:"3"},"სულ"),h("td",{class:"num"},money(d.cost)))):h("p",{class:"muted small"},"ფასიანი ხარჯი არ არის.")),
    months.length?h("div",null,h("h3",null,"თვეების მიხედვით"),
      tbl(["თვე","შემოსავალი","ხარჯი"],months.map(([m,v])=>h("tr",null,h("td",null,new Date(m+"-01T00:00").toLocaleDateString(LOCALE(),{month:"long",year:"numeric"})),h("td",{class:"num"},money(v.rev)),h("td",{class:"num"},money(v.cost)))))):null);
}

/* ---------- USERS (admin) ---------- */
function renderUsers(){
  if(!S.admin) return renderMissing();
  const refresh=async()=>{ try{ S.users=await api("GET","/users"); await loadNames(); }catch(e){ toast(errMsg(e)); } render(); };
  const ids={u:uid(),n:uid(),r:uid(),p:uid(),t:uid(),e:uid()};
  const eIn=h("input",{id:ids.e,class:"inp",type:"email",autocomplete:"off",placeholder:"name@tesengroup.ge"});
  const tIn=h("input",{id:ids.t,class:"inp mono",type:"tel",autocomplete:"off",placeholder:"5XX XX XX XX"});
  const uIn=h("input",{id:ids.u,class:"inp",autocomplete:"off",autocapitalize:"none",placeholder:"მაგ. g.beridze"});
  const nIn=h("input",{id:ids.n,class:"inp",placeholder:"სახელი გვარი"});
  const rIn=h("select",{id:ids.r,class:"inp"},h("option",{value:"employee"},"თანამშრომელი"),h("option",{value:"admin"},"ადმინისტრატორი"));
  const pIn=h("input",{id:ids.p,class:"inp mono",inputmode:"numeric",maxlength:"4",pattern:"[0-9]{4}",value:genPassword()});
  const created=h("div");
  const createForm=h("form",{class:"panel-b users-form",style:"display:flex;flex-direction:column;gap:12px",onsubmit:async e=>{
    e.preventDefault();
    const body={username:uIn.value.trim(),name:nIn.value.trim(),role:rIn.value,password:pIn.value,phone:tIn.value.trim(),email:eIn.value.trim()};
    try{ const res=await api("POST","/users",body); await refresh();
      toast("მომხმარებელი შეიქმნა");
      const c=document.getElementById("created-box"); if(c) c.replaceChildren(h("div",{class:"notice info"},"გადაეცით თანამშრომელს: მომხმარებელი ",h("span",{class:"pw"},body.username)," · დროებითი პაროლი ",h("span",{class:"pw"},body.password),". პირველი შესვლისას საკუთარ პაროლს დააყენებს.",mailNotice(res,((S.users||[]).find(x=>x.username===body.username)||{}).email,body.name,body.username,body.password)));
    }catch(ex){ toast(errMsg(ex)); } }},
    h("div",{class:"fgrid"},
      h("div",{class:"field"},h("label",{for:ids.u},"მომხმარებლის სახელი (ლათინურად)"),uIn),
      h("div",{class:"field"},h("label",{for:ids.n},"სახელი და გვარი"),nIn),
      h("div",{class:"field"},h("label",{for:ids.e},"ელფოსტა"),eIn),
      h("div",{class:"field"},h("label",{for:ids.t},"ტელეფონი"),tIn),
      h("div",{class:"field"},h("label",{for:ids.r},"როლი"),rIn),
      h("div",{class:"field"},h("label",{for:ids.p},"დროებითი პაროლი"),h("div",{class:"row",style:"flex-wrap:nowrap"},pIn,h("button",{class:"btn sm",type:"button",onclick:()=>{pIn.value=genPassword();}},"ახალი")))),
    h("p",{class:"small muted",style:"margin:0"},"ადმინისტრატორს ყველა პროექტზე სრული უფლება აქვს. თანამშრომლის უფლება (შემსრულებელი, რივიუერი ან მნახველი) ინიშნება თითოეული პროექტის „გუნდის“ ჩანართზე."),
    h("div",{class:"row"},h("button",{class:"btn primary",type:"submit"},"მომხმარებლის შექმნა")));
  const rows=S.users.map(u=>{
    const self=u.id===S.me.id;
    const box=h("span",{class:"confirm"});
    const reset=()=>{ const pw=genPassword(); box.replaceChildren(h("span",null,"ახალი დროებითი პაროლი: "),h("span",{class:"pw"},pw),
      h("button",{class:"btn sm primary",type:"button",onclick:async()=>{ try{ const res=await api("PATCH","/users/"+u.id,{password:pw}); box.replaceChildren(h("span",{class:"small"},"პაროლი შეიცვალა: "),h("span",{class:"pw"},pw),mailNotice(res,u.email,u.name,u.username,pw,true)); }catch(e){ toast(errMsg(e)); } }},"დადასტურება"),
      h("button",{class:"btn sm ghost",type:"button",onclick:()=>box.replaceChildren()},"გაუქმება")); };
    const roleSel=h("select",{class:"inp",style:"width:auto","aria-label":"როლი",disabled:self,onchange:async e=>{ try{ await api("PATCH","/users/"+u.id,{role:e.target.value}); toast("როლი შეიცვალა"); refresh(); }catch(ex){ toast(errMsg(ex)); } }},
      h("option",{value:"employee"},"თანამშრომელი"),h("option",{value:"admin"},"ადმინისტრატორი")); roleSel.value=u.role==="admin"?"admin":"employee";
    const projs=u.role==="admin"?[]:[...S.projects.values()].filter(p=>(p.memberIds||[]).includes(u.id))
      .map(p=>p.name+" — "+tr(ACCESS_NAMES[((p.members||{})[u.id]||{}).access]||ACCESS_NAMES.executor));
    return h("tr",null,
      h("td",{"data-l":"სახელი"},h("strong",null,u.name),h("div",{class:"small muted mono"},u.username)),
      h("td",{"data-l":"კონტაქტი",class:"small contact"},
        h("div",null,h("span",null,u.email||"—"),editBtn(u,"email","ელფოსტა")),
        h("div",null,h("span",{class:"mono"},u.phone||"—"),editBtn(u,"phone","ტელეფონი"))),
      h("td",{"data-l":"როლი"},roleSel),
      h("td",{"data-l":"პროექტები",class:"small"},u.role==="admin"?h("span",{class:"muted"},"ყველა პროექტი"):projs.length?projs.map(x=>h("div",null,x)):h("span",{class:"muted"},"—")),
      h("td",{"data-l":"ბოლო შესვლა",class:"small"},u.lastLogin?fmtDateTime(u.lastLogin):"არასდროს",u.mustChange?h("div",{class:"small",style:"color:var(--signal)"},"დროებითი პაროლი"):null),
      h("td",{"data-l":"სტატუსი"},u.active?h("span",{class:"chip st-approved"},"აქტიური"):h("span",{class:"chip st-none"},"გათიშული")),
      h("td",{"data-l":"მოქმედება"},h("div",{class:"row"},
        h("button",{class:"btn sm",type:"button",onclick:reset},"პაროლის განახლება"),
        self?null:h("button",{class:"btn sm ghost",type:"button",onclick:async()=>{ try{ await api("PATCH","/users/"+u.id,{active:!u.active}); toast(u.active?"წვდომა გაითიშა":"წვდომა აღდგა"); refresh(); }catch(e){ toast(errMsg(e)); } }},u.active?"გათიშვა":"ჩართვა"),
        box)));
  });
  return [h("div",{class:"head"},h("div",null,h("div",{class:"eyebrow"},"ადმინისტრირება"),h("h1",null,"მომხმარებლები"))),
    h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"ახალი მომხმარებელი")),createForm,h("div",{id:"created-box",class:"panel-b",style:"padding-top:0"},created)),
    h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"ყველა მომხმარებელი",h("span",{class:"en cnt-sub"},S.users.length))),
      h("div",{class:"tw"},h("table",{class:"rt stack users"},h("thead",null,h("tr",null,["სახელი","კონტაქტი","როლი","პროექტები","ბოლო შესვლა","სტატუსი",""].map(t=>h("th",null,t)))),h("tbody",null,rows))))];
}

/* after creating a user or resetting a password: say whether the login details went out by e-mail,
   otherwise offer to open the admin's mail app with the message filled in */
function mailNotice(res,email,name,username,password,reset){
  if(res&&res.emailed) return h("span",{class:"mail-ok"},icon("mail"),"გაიგზავნა ელფოსტაზე: "+email);
  if(!email) return null;
  const subject="Tesen Group DPR — "+tr(reset?"ახალი დროებითი პაროლი":"შესვლის მონაცემები");
  const body=tr("საიტი")+": "+location.origin+"\n"+tr("მომხმარებელი")+": "+username+"\n"+tr("დროებითი პაროლი")+": "+password;
  return h("span",{class:"row",style:"gap:6px;display:inline-flex;margin-left:8px"},
    res&&res.emailError?h("span",{class:"small",style:"color:var(--bad)"},res.emailError):null,
    h("a",{class:"btn sm primary",href:"mailto:"+email+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body)},icon("mail"),"ელფოსტით გაგზავნა"));
}
function editBtn(u,field,label){
  return h("button",{class:"btn sm ghost",type:"button","aria-label":label,title:label,onclick:async()=>{
    const v=prompt(tr(label),u[field]||""); if(v==null) return;
    try{ await api("PATCH","/users/"+u.id,{[field]:v.trim()}); toast("შენახულია"); S.users=await api("GET","/users"); render(); }catch(e){ toast(errMsg(e)); } }},"✎");
}

/* ---------- SETTINGS ---------- */
function renderSettings(){
  if(!S.admin) return renderMissing();
  const names={weather:"ამინდი",costCats:"ხარჯის კატეგორია",fuelTypes:"საწვავის ტიპი",positions:"პერსონალის პოზიცია",units:"ერთეული (განზ.)"};
  const fields={};
  const grid=h("div",{class:"fgrid"},Object.keys(names).map(k=>{ const id=uid(); const ta=h("textarea",{id,rows:8,value:(S.lists[k]||[]).join("\n")}); fields[k]=ta; return h("div",{class:"field"},h("label",{for:id},names[k]),ta); }));
  return [h("div",{class:"head"},h("div",null,h("div",{class:"eyebrow"},"ჩამოსაშლელი სიები"),h("h1",null,"სიები"))),
    h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"ანგარიშის სიები"),h("button",{class:"btn primary",type:"button",onclick:async()=>{
      const data={}; for(const k in fields) data[k]=fields[k].value.split("\n").map(s=>s.trim()).filter(Boolean);
      try{ S.lists=await api("PUT","/config/lists",data); toast("სიები შენახულია"); }catch(e){ toast("ვერ შეინახა: "+errMsg(e)); } }},"შენახვა")),
      h("div",{class:"panel-b"},h("p",{class:"small muted",style:"margin-top:0"},"თითო მნიშვნელობა თითო სტრიქონზე. სიები ყველა პროექტის ანგარიშში გამოიყენება."),grid))];
}

/* ---------- EXCEL EXPORT ---------- */
function sheet(aoa,widths){ const ws=XLSX.utils.aoa_to_sheet(aoa); if(widths) ws["!cols"]=widths.map(w=>({wch:w})); return ws; }
function reportSheets(wb,p,r){
  const c=ctx(); const it=code=>c.item(code)||{};
  const title=[[p.name],[docCode(p,r)],[]];
  const cond=r.conditions||{}; const parts=p.participants||{};
  const condRows=[["ამინდი / Weather",cond.weather],["ტემპ / Temp (min / max)",(cond.tempMin?"+"+cond.tempMin+"°C":"")+" / "+(cond.tempMax?"+"+cond.tempMax+"°C":"")],["სამუშაო საათები / Working Hours",cond.hours],["არა სამუშაო საათები / Non-Working Hours",cond.breakHours],["დამატებითი სამუშაო საათი / Overtime",cond.overtime],["ბუღალტრული კოდი / Accounting Code",p.accountingCode]];
  const head=[...title,["პროექტის დასახელება / Project Title",p.name,"დამკვეთი / Client",p.client,"ადგილმდებარეობა / Location",p.location],[],
    ...PARTICIPANTS.map(([k,ka,en],i)=>[ka+" — "+en,parts[k]||"",...(condRows[i]||[])]),
    [],["კრიტიკული საკითხები / Open Issues"],["BoQ #","BoQ თავი","BOQ სამუშაოს დასახელება","კრიტიკული საკითხის აღწერა","დასრულების თარიღი გეგმით","განახლებული თარიღი","📌-დან","📌-მდე","შენიშვნა"],
    ...(r.issues||[]).map(x=>[x.code||"",it(x.code).chapter||"",it(x.code).name||"",x.desc||"",fmtDate(it(x.code).end)||"",fmtDate(x.updatedDate),x.from||"",x.to||"",x.comment||""]),
    [],["უსაფრთხოება / HSE"],["დასახელება / Description","სტატუსი / Status","თარიღი / Date","შენიშვნა / Comments"],
    ...(r.hse||[]).map(x=>[[x.desc,x.descEn].filter(Boolean).join("  "),x.status||"",x.status?fmtDate(r.date):"",x.comment||""])];
  const n=v=>v===""||v==null?"":num(v);
  XLSX.utils.book_append_sheet(wb,sheet(head,[42,40,22,40,22,22,10,10,30]),"Open Issues-HSE");
  XLSX.utils.book_append_sheet(wb,sheet([...title,["თარიღი / Date","BoQ #","BoQ თავი","BOQ სამუშაოს დასახელება","განზ. / Unit","რაოდ. / Q-ty","სულ მოცულობა / Total Volumes","დასაქმებულთა რაოდ. / Staff","📌-დან","📌-მდე","დაწყების თარიღი","დასრულების თარიღი","კომენტარი"],
    ...(r.works||[]).map(x=>[fmtDate(r.date),x.code||"",it(x.code).chapter||"",it(x.code).name||"",it(x.code).unit||"",n(x.qty),n(it(x.code).qty),n(x.staff),x.from||"",x.to||"",fmtDate(it(x.code).start)||"მონაცემი არაა",fmtDate(it(x.code).end)||"მონაცემი არაა",x.comment||""])],[11,8,28,50,7,9,12,10,9,9,12,12,30]),"Work Completed");
  XLSX.utils.book_append_sheet(wb,sheet([...title,["თარიღი / Date","BoQ #","BoQ თავი","BOQ სამუშაოს დასახელება","ხარჯის ტიპი","ხარჯის აღწერა","განზ.","რაოდ.","საწვავის ტიპი","საწვავის რაოდ.","ქვეყანა","კომენტარი"],
    ...(r.expenses||[]).map(x=>[fmtDate(r.date),x.code||"",it(x.code).chapter||"",it(x.code).name||"",x.type||"",x.desc||"",x.unit||"",n(x.qty),x.fuelType||"",n(x.fuelQty),x.country||"",x.comment||""])],[11,8,28,40,14,30,7,9,12,10,14,30]),"Expenses");
  XLSX.utils.book_append_sheet(wb,sheet([...title,["თარიღი / Date","დაწყების დრო","დასრულების დრო","სამუშაოს დასახელება","კვება (1/0)","სახელი გვარი","პოზიცია","ხელმოწერა"],
    ...(r.personnel||[]).map(x=>[fmtDate(r.date),x.start||"",x.end||"",x.work||"",n(x.meal),x.name||"",x.position||"",""]),[],["ობიექტის საქმეთა მწარმოებელი: ____________________","","","","","საიტ მენეჯერი: ____________________"]],[11,10,10,36,8,26,16,14]),"Personnel");
  const mf=rows=>rows.map((x,i)=>[i+1,x.name||"",x.unit||"",n(x.qty),x.driver||"",x.plate||"",x.comment||""]);
  XLSX.utils.book_append_sheet(wb,sheet([...title,["ობიექტზე მიღებული მასალები / Received Materials"],["#","მასალის სახელწოდება","განზ","რაოდენობა","მძღოლის სახელი, გვარი, კონტაქტი","ავტომობილის ნომერი","შენიშვნა"],...mf(r.materials||[]),[],["ობიექტზე მიღებული საწვავი / Fuel Received at Site"],["#","დასახელება","განზ","რაოდენობა","მძღოლის სახელი, გვარი, კონტაქტი","ავტომობილის ნომერი","შენიშვნა"],...mf(r.fuel||[])],[4,30,8,10,30,14,30]),"Received Mat & Fuel");
  XLSX.utils.book_append_sheet(wb,sheet([...title,["ვიზიტორის სახელი და გვარი","კომპანია","პოზიცია","ვიზიტის დრო","ვიზიტის მიზანი","შენიშვნა"],...(r.visitors||[]).map(x=>[x.name||"",x.company||"",x.position||"",x.time||"",x.purpose||"",x.comment||""])],[26,22,18,10,30,30]),"Visitors");
  XLSX.utils.book_append_sheet(wb,sheet([...title,["Foto #","აღწერა / Description","ბმული"],...(r.photos||[]).map((x,i)=>["Foto #"+(i+1),x.desc||"",location.origin+x.url])],[10,60,60]),"Photos");
}
function saveXlsx(wb,filename){
  const data=XLSX.write(wb,{bookType:"xlsx",type:"array"});
  const url=URL.createObjectURL(new Blob([data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}));
  const a=h("a",{href:url,download:filename}); document.body.append(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),5000);
}
function exportReport(p){ flushNow(); const wb=XLSX.utils.book_new(); reportSheets(wb,p,S.rep); saveXlsx(wb,docCode(p,S.rep)+".xlsx"); }
function exportProject(p){
  if(!window.XLSX){ toast("Excel-ის ბიბლიოთეკა ვერ ჩაიტვირთა"); return; }
  const c=ctx(); const it=code=>c.item(code)||{};
  const reps=sortedReports().map(e=>e[1]).reverse();
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,sheet([["თარიღი","DPR #","REV","სტატუსი","BoQ #","BoQ თავი","სამუშაოს დასახელება","განზ.","რაოდ.","დასაქმებულთა რაოდ.","📌-დან","📌-მდე","კომენტარი","ავტორი"],
    ...reps.flatMap(r=>(r.works||[]).filter(w=>w.code).map(w=>[fmtDate(r.date),r.num,r.rev||0,STATUS[r.status],w.code,it(w.code).chapter||"",it(w.code).name||"",it(w.code).unit||"",num(w.qty),num(w.staff),w.from||"",w.to||"",w.comment||"",nameOf(r.createdBy)]))],[11,6,5,14,8,28,50,7,9,10,9,9,30,20]),"სამუშაოები");
  XLSX.utils.book_append_sheet(wb,sheet([["თარიღი","DPR #","სტატუსი","BoQ #","სამუშაოს დასახელება","ხარჯის ტიპი","ხარჯის აღწერა","განზ.","რაოდ.","საწვავის ტიპი","საწვავის რაოდ.","ქვეყანა","კომენტარი"],
    ...reps.flatMap(r=>(r.expenses||[]).map(x=>[fmtDate(r.date),r.num,STATUS[r.status],x.code||"",it(x.code).name||"",x.type||"",x.desc||"",x.unit||"",num(x.qty),x.fuelType||"",num(x.fuelQty),x.country||"",x.comment||""]))],[11,6,14,8,40,14,30,7,9,12,10,14,30]),"ხარჯები");
  XLSX.utils.book_append_sheet(wb,sheet([["თარიღი","DPR #","სახელი გვარი","პოზიცია","დაწყება","დასრულება","სამუშაო","კვება"],
    ...reps.flatMap(r=>(r.personnel||[]).filter(x=>x.name).map(x=>[fmtDate(r.date),r.num,x.name,x.position||"",x.start||"",x.end||"",x.work||"",num(x.meal)]))],[11,6,26,16,9,9,36,7]),"პერსონალი");
  const {done}=computeProgress(p);
  XLSX.utils.book_append_sheet(wb,sheet([["BoQ #","ტიპი","დასახელება","განზ.","სულ","შესრულდა","%","დაწყება","დასრულება"],
    ...[...c.idx.values()].map(x=>{ const d=done.get(x.code); const q=d?d.qty:0; const t=num(x.qty); return [x.code,x.type,x.name,x.unit||"",x.qty===""?"":t,x.type==="თავი"||x.type==="ქვეთავი"?"":q,t?Math.round(q/t*1000)/10:"",fmtDate(x.start),fmtDate(x.end)]; })],[8,10,60,7,10,10,7,11,11]),"პროგრესი");
  saveXlsx(wb,[p.companyCode,p.projectCode,p.accountingCode,"DPR-რეესტრი",fmtDate(todayISO(),true)].filter(Boolean).join("-")+".xlsx");
}

/* ---------- boot ---------- */
document.getElementById("brand").addEventListener("click",()=>{ if(S.me&&!S.me.mustChange) go("home"); });
document.documentElement.lang=LANG; document.title=tr("პროექტები")+" · Tesen Group";
(async function boot(){
  try{ const r=await api("GET","/me"); await onLoggedIn(r.user); }
  catch(e){ if(!S.me) render(); }
})();
