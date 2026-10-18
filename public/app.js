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
/* Georgian capitals (Mtavruli) for menu-style labels; browsers do not uppercase Georgian themselves */
const mtavruli=s=>String(s).replace(/[\u10D0-\u10FA\u10FD-\u10FF]/g,c=>String.fromCharCode(c.charCodeAt(0)+0xBC0));
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
function genPassword(){ const a="abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789"; const b=new Uint32Array(10); crypto.getRandomValues(b); return [...b].map(x=>a[x%a.length]).join(""); }

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
function canWorkOn(p){ return S.admin || isMember(p); }
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
  if(S.view==="report" && view!=="report") flushNow();
  Object.assign(S,{view},opts);
  if(view!=="report"){ S.rep=null; S.repId=null; S.dirty.clear(); }
  try{ localStorage.setItem("dpr.nav",JSON.stringify({view:["project","report"].includes(S.view)?"project":"home",pid:S.pid,tab:S.tab})); }catch(e){}
  if((view==="project"||view==="report") && S.pid && S.loadedPid!==S.pid){
    S.reports=new Map(); S.additional=[];
    main.replaceChildren(h("div",{class:"empty"},h("h2",null,"იტვირთება…")));
    try{ await loadProjectData(S.pid); }catch(e){ toast("ანგარიშები ვერ ჩაიტვირთა: "+errMsg(e)); }
  }
  if(view==="analysis"&&S.admin){ try{ S.analysis=await api("GET","/analysis"); }catch(e){ S.analysis=null; toast(errMsg(e)); } }
  if(view==="users"&&S.admin){ try{ S.users=await api("GET","/users"); }catch(e){ toast(errMsg(e)); } }
  render(); window.scrollTo(0,0);
}
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
  if(S.view==="analysis") add("ანალიზი");
  if(S.view==="account") add("ჩემი ანგარიში");
  if((S.view==="project"||S.view==="report") && p) add(p.name,()=>go("project",{pid:S.pid,tab:"reports"}));
  if(S.view==="report" && S.rep) add("DPR-"+String(S.rep.num||0).padStart(3,"0")+" · "+fmtDate(S.rep.date));
  const me=document.getElementById("me"); me.replaceChildren();
  document.querySelector(".brand-name").textContent=tr("პროექტები");
  me.append(h("button",{class:"lang-btn",type:"button",title:LANG==="en"?"ქართული":"English","aria-label":LANG==="en"?"ქართული":"English",onclick:()=>setLang(LANG==="en"?"ka":"en")},LANG==="en"?"ქა":"EN"));
  if(S.me){
    me.append(h("button",{class:"me-btn",type:"button",title:"ჩემი ანგარიში",onclick:()=>go("account")},
      h("span",{class:"avatar"},initials(S.me.name)),h("span",null,S.me.name),h("span",{class:"role-tag"},S.admin?"ადმინი":"თანამშრომელი")));
  }
}

/* ---------- render root ---------- */
function render(){
  renderBar();
  let v;
  if(!S.me) v=renderLogin();
  else if(S.me.mustChange||S.view==="account") v=renderAccount();
  else if(S.view==="home") v=renderHome();
  else if(S.view==="settings") v=renderSettings();
  else if(S.view==="users") v=renderUsers();
  else if(S.view==="analysis") v=renderAnalysis();
  else if(S.view==="project") v=P()?renderProject():renderMissing();
  else if(S.view==="report") v=renderReport();
  else v=renderHome();
  main.replaceChildren(...[v].flat(Infinity).filter(Boolean));
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
  S.me=user; S.admin=user.role==="admin";
  if(user.mustChange){ S.view="account"; render(); return; }
  await loadAll();
}
function onLoggedOut(){
  S.me=null; S.admin=false; clearInterval(S.pollTimer); S.projects=new Map(); S.reports=new Map(); S.loadedPid=null; S.rep=null; S.repId=null; S.dirty.clear();
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
  if(nav&&nav.view==="project"&&nav.pid&&S.projects.has(nav.pid)) go("project",{pid:nav.pid,tab:nav.tab||"reports"});
  else go("home");
}

/* ---------- ACCOUNT ---------- */
function renderAccount(){
  const ids={cur:uid(),n1:uid(),n2:uid()};
  const err=h("div",{class:"small",role:"alert",style:"color:var(--bad);min-height:1.2em"});
  const cur=h("input",{id:ids.cur,class:"inp",type:"password",autocomplete:"current-password",required:true});
  const n1=h("input",{id:ids.n1,class:"inp",type:"password",autocomplete:"new-password",minlength:"8",required:true});
  const n2=h("input",{id:ids.n2,class:"inp",type:"password",autocomplete:"new-password",minlength:"8",required:true});
  const forced=S.me.mustChange;
  const form=h("form",{class:"panel-b",style:"display:flex;flex-direction:column;gap:12px;max-width:420px",onsubmit:async e=>{
    e.preventDefault(); err.textContent="";
    if(n1.value!==n2.value){ err.textContent="ახალი პაროლები არ ემთხვევა"; return; }
    if(n1.value.length<8){ err.textContent="პაროლი მინიმუმ 8 სიმბოლო უნდა იყოს"; return; }
    try{ await api("POST","/me/password",{current:cur.value,next:n1.value}); toast("პაროლი შეიცვალა"); const was=S.me.mustChange; S.me.mustChange=false; if(was) await loadAll(); else go("home"); }
    catch(ex){ err.textContent=errMsg(ex); } }},
    h("div",{class:"field"},h("label",{for:ids.cur},forced?"დროებითი პაროლი":"მიმდინარე პაროლი"),cur),
    h("div",{class:"field"},h("label",{for:ids.n1},"ახალი პაროლი (მინ. 8 სიმბოლო)"),n1),
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
    S.admin?h("div",{class:"row"},
      h("button",{class:"btn",type:"button",onclick:()=>go("analysis")},"ანალიზი"),
      h("button",{class:"btn",type:"button",onclick:()=>go("users")},"მომხმარებლები"),
      h("button",{class:"btn",type:"button",onclick:()=>go("settings")},"სიები"),
      h("button",{class:"btn primary",type:"button",onclick:()=>{S.creating="project";render();}},"+ ახალი პროექტი")):null);
  const out=[head];
  if(S.creating==="project") out.push(renderProjectForm(null));
  if(!list.length){
    out.push(S.admin
      ? h("div",{class:"empty"},h("h2",null,"ჯერ პროექტი არ არის"),h("p",{class:"muted"},"1) „მომხმარებლები“ — შექმენით თანამშრომლების ანგარიშები. 2) „+ ახალი პროექტი“ — დაამატეთ პროექტი. 3) პროექტში ატვირთეთ ხარჯთაღრიცხვა და დაამატეთ გუნდი."),
          h("button",{class:"btn primary",type:"button",onclick:()=>{S.creating="project";render();}},"+ ახალი პროექტი"))
      : h("div",{class:"empty"},h("h2",null,"ჯერ არცერთ პროექტში არ ხართ დამატებული"),h("p",{class:"muted"},"სთხოვეთ ადმინისტრატორს, დაგამატოთ პროექტის გუნდში. დამატების შემდეგ პროექტი აქ გამოჩნდება.")));
    return out;
  }
  out.push(h("div",{class:"cards"}, list.map(([id,p])=>{
    return h("button",{class:"pcard"+(p.archived?" archived":""),type:"button",onclick:()=>go("project",{pid:id,tab:"reports"})},
      h("div",{class:"row"},[p.companyCode,p.projectCode,p.accountingCode].filter(Boolean).map(c=>h("span",{class:"code-tag"},c)),h("span",{class:"spacer"}),p.archived?h("span",{class:"chip st-none"},"არქივი"):null),
      h("h3",null,p.name||"უსახელო"),
      h("div",{class:"pcard-stats"},
        h("span",null,h("span",{class:"muted"},"გუნდი"),h("b",null,(p.memberIds||[]).length)),
        h("span",null,h("span",{class:"muted"},"BoQ მუხლი"),h("b",null,(p.boq||[]).filter(x=>x.type==="პოზიცია").length))));
  })));
  return out;
}

/* ---------- project form ---------- */
async function saveProject(pid,patch,msg){
  try{ const p=await api("PATCH","/projects/"+encodeURIComponent(pid),patch); S.projects.set(pid,p); if(msg) toast(msg); return p; }
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
    [["accountingCode","პროექტის ბუღალტრული კოდი / Accounting Code"],["companyCode","კომპანიის კოდი / Company Code"],["projectCode","პროექტის კოდი / Project Code"]]
      .map(([k,l])=>{ const el=inp(f,k,p[k],l); el.classList.add("mono"); return row(l,el); }));
  const hse=clone(p.hse||[]);
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
function renderProject(){
  const p=P();
  const tabs=[["reports","ანგარიშები"],["progress","პროგრესი"],["boq","ხარჯთაღრიცხვა (BoQ)"],["info","პროექტის მონაცემები"],...(S.admin?[["team","გუნდი"]]:[])];
  if(!tabs.some(([k])=>k===S.tab)) S.tab="reports";
  const head=h("div",{class:"head"},
    h("div",{style:"min-width:0"},
      h("div",{class:"row"},[p.companyCode,p.projectCode,p.accountingCode].filter(Boolean).map(c=>h("span",{class:"code-tag"},c)),p.archived?h("span",{class:"chip st-none"},"არქივი"):null),
      h("h1",{style:"margin-top:6px"},p.name),
      h("div",{class:"muted"},[p.client,p.location].filter(Boolean).join(" · "))),
    canWorkOn(p)&&!p.archived?h("button",{class:"btn primary",type:"button",onclick:()=>openOrCreate(todayISO())},"დღევანდელი ანგარიში"):null);
  const tabBar=h("div",{class:"tabs",role:"tablist"},tabs.map(([k,l])=>h("button",{type:"button",role:"tab","aria-label":tr(l),"aria-selected":String(S.tab===k),onclick:()=>{S.tab=k;S.creating=null;S.editInfo=false;render();}},mtavruli(tr(l)))));
  let body;
  if(S.tab==="reports") body=renderReportsTab(p);
  else if(S.tab==="progress") body=renderProgress(p);
  else if(S.tab==="boq") body=renderBoq(p);
  else if(S.tab==="team") body=renderTeam(p);
  else body=renderInfo(p);
  return [head,tabBar,body];
}

function canCreateOn(date){ return S.admin || date<=todayISO(); }
function openOrCreate(date){
  const id=S.pid+"__"+date;
  if(S.reports.has(id)) return openReport(id);
  if(!canCreateOn(date)){ toast("მომავალი თარიღით ანგარიშის შექმნა შეუძლებელია"); return; }
  S.creating={date}; S.tab="reports"; render();
  setTimeout(()=>document.getElementById("create-panel")?.scrollIntoView({block:"nearest"}),0);
}
function openReport(id){ S.repId=id; S.rep=splitHse(clone(S.reports.get(id))); S.dirty.clear(); S.oldRev=null; S.revs=[]; loadRevisions(); go("report",{pid:S.pid}); }
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

function renderReportsTab(p){
  const list=sortedReports();
  const out=[];
  if(canWorkOn(p)&&!p.archived) out.push(renderCreatePanel(p));
  const cnt=(arr,f)=>(arr||[]).filter(f).length;
  out.push(h("section",{class:"panel"},
    h("div",{class:"panel-h"},h("h3",null,"ანგარიშები ",h("span",{class:"en cnt-sub"},list.length+" ჩანაწერი")),
      list.length?h("button",{class:"btn sm",type:"button",onclick:()=>exportProject(p)},"რეესტრის ექსპორტი (.xlsx)"):null),
    list.length?h("div",{class:"tw"},h("table",{class:"rt rlist-t stack"},
      h("thead",null,h("tr",null,["DPR #","თარიღი","REV","სამუშაო","ფოტო","შექმნა / Created by","დაადასტურა / Approved by","სტატუსი"].map(l=>h("th",null,l)))),
      h("tbody",null,list.map(([id,r])=>h("tr",{tabindex:"0",role:"link",onclick:()=>openReport(id),onkeydown:e=>{ if(e.key==="Enter") openReport(id); }},
        h("td",{class:"rn","data-l":"DPR #"},"DPR-"+String(r.num||0).padStart(3,"0")),
        h("td",{"data-l":"თარიღი"},fmtDate(r.date)),
        h("td",{class:"mono muted","data-l":"REV"},"REV"+String(r.rev||0).padStart(2,"0")),
        h("td",{class:"num","data-l":"სამუშაო"},cnt(r.works,w=>w.code)),
        h("td",{class:"num","data-l":"ფოტო"},(r.photos||[]).length),
        h("td",{"data-l":"შექმნა / Created by"},who(r.createdBy)),
        h("td",{"data-l":"დაადასტურა / Approved by"},r.status==="approved"?who(r.approvedBy):h("span",{class:"muted"},"—")),
        h("td",{"data-l":"სტატუსი"},chip(r.status)))))))
      :h("div",{class:"panel-b muted"},"ანგარიში ჯერ არ შექმნილა.")));
  return h("div",{style:"display:flex;flex-direction:column;gap:16px;max-width:1100px"},out);
}

function renderCreatePanel(p){
  const date=(S.creating&&S.creating.date)||todayISO();
  const dId=uid();
  const dateIn=h("input",{id:dId,type:"date",value:date,max:S.admin?null:todayISO(),class:"inp",style:"max-width:200px",onchange:e=>{S.creating={date:e.target.value};render();}});
  const exists=S.reports.has(S.pid+"__"+date); const future=!canCreateOn(date);
  return h("section",{class:"panel",id:"create-panel"},
    h("div",{class:"panel-h"},h("h3",null,"ახალი ანგარიში")),
    h("div",{class:"panel-b",style:"display:flex;flex-direction:column;gap:12px"},
      h("div",{class:"row",style:"align-items:flex-end;gap:12px"},
        h("div",{class:"field"},h("label",{for:dId},"ანგარიშის თარიღი"),dateIn),
        h("button",{class:"btn primary",type:"button",disabled:exists||future||!date,onclick:()=>createReport(date)},"ანგარიშის შექმნა"),
        exists?h("button",{class:"btn",type:"button",onclick:()=>openReport(S.pid+"__"+date)},"გახსნა"):null),
      h("div",{class:"small muted"},"ანგარიში ცარიელი შეიქმნება; HSE პუნქტები ჩაიწერება პროექტის მონაცემებიდან."),
      exists?h("div",{class:"notice"},"ამ თარიღზე ანგარიში უკვე არსებობს."):null,
      future?h("div",{class:"notice"},"მომავალი თარიღით ანგარიშის შექმნა შეუძლებელია."):null));
}
const hseFromProject=p=>(p.hse||[]).map(x=>({desc:x.desc||"",descEn:x.descEn||"",status:"",comment:""}));

async function createReport(date){
  const data={projectId:S.pid,date,
    conditions:{weather:"",tempMin:"",tempMax:"",hours:"07:00-18:00",breakHours:"13:00-14:00",overtime:""},
    issues:[],hse:hseFromProject(P()),works:[],expenses:[],personnel:[],materials:[],fuel:[],visitors:[],photos:[]};
  try{ const r=await api("POST","/reports",data); S.creating=null; S.reports.set(r.id,r); openReport(r.id); }
  catch(e){ toast("ვერ შეიქმნა: "+errMsg(e)); }
}

/* ---------- REPORT EDITOR ---------- */
const SECTION_KEYS=["conditions","issues","hse","works","expenses","personnel","materials","fuel","visitors","photos"];
function ctx(){ const idx=boqIndex(P()); return {idx,item:c=>c?idx.get(normCode(c)):null}; }
function autoItem(field,missing="ვერ მოიძებნა"){ return (r,c)=>{ if(!r.code) return ""; const it=c.item(r.code); if(!it) return {warn:missing}; return it[field]??""; }; }
const listOpt=k=>()=>S.lists[k]||[];
/* small line icons (24x24, stroke) for section headers and fields */
const ICONS={
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
  if(S.admin) return r.status!=="approved";
  return isMember(p) && r.status==="draft";
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
  if(!old&&r.status==="draft" && (S.admin||isMember(p)) && !p.archived)
    actions.push(h("button",{class:"btn primary",type:"button",onclick:()=>setStatus("submit","ანგარიში გაიგზავნა დასადასტურებლად")},"გაგზავნა"));
  if(!old&&S.admin && r.status==="submitted"){
    actions.push(h("button",{class:"btn",type:"button",onclick:()=>setStatus("return","ანგარიში დაბრუნდა შესავსებად")},"დაბრუნება"));
    actions.push(h("button",{class:"btn ok",type:"button",onclick:()=>setStatus("approve","ანგარიში დადასტურდა")},"დადასტურება"));
  }
  if(!old&&S.admin && r.status==="approved")
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
  const priced=S.admin;
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
      h("button",{class:"btn sm danger",type:"button",onclick:async()=>{ try{ clearTimeout(S.saveTimer); S.dirty.clear(); await api("DELETE","/reports/"+encodeURIComponent(S.repId)); S.reports.delete(S.repId); toast("ანგარიში წაიშალა"); go("project",{pid:S.pid,tab:"reports"}); }catch(e){ toast("ვერ წაიშალა: "+errMsg(e)); } }},"დიახ, წაშლა"),
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
    row("პროექტის კოდი / Project Code",p.projectCode,true));
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
  const cols=def.cols.filter(col=>(!col.lang||col.lang===LANG)&&(!col.admin||S.admin));
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
    const onIn=e=>{ row[col.k]=e.target.value; markDirty(key); if(col.recalc) refreshAmount(i); };
    let el;
    if(col.t==="select"){ const opts=col.opts(); el=h("select",{id,onchange:e=>{onIn(e); if(col.structural) rerender();}},h("option",{value:""},"—"),opts.map(o=>h("option",{value:o},o)),val&&!opts.includes(val)?h("option",{value:val},val):null); el.value=val; }
    else if(col.t==="area") el=h("textarea",{id,rows:1,oninput:onIn,value:val});
    else if(col.t==="code") el=h("input",{id,list:"boq-dl",class:"mono",value:val,autocomplete:"off",oninput:onIn,onchange:e=>{row.code=normCode(e.target.value);markDirty(key);rerender();}});
    else el=h("input",{id,type:col.t==="num"?"number":col.t==="date"?"date":col.t==="time"?"time":"text",step:col.t==="num"?"any":null,inputmode:col.t==="num"?"decimal":null,value:val,oninput:onIn});
    el.setAttribute("aria-label",col.l);
    return h("td",{"data-l":col.l,class:"ed"},el);
  };
  const table=h("table",{class:"rt stack"},
    h("thead",null,h("tr",null,def.noIndex?null:h("th",null,"#"),cols.map(col=>h("th",{style:"min-width:"+col.w},col.l)),ed&&!def.fixed?h("th",null,""):null)),
    h("tbody",null,rows.map((row,i)=>h("tr",null,def.noIndex?null:h("td",{class:"ix"},i+1),cols.map(col=>cell(row,col,i)),
      ed&&!def.fixed?h("td",null,h("button",{class:"btn sm ghost del",type:"button","aria-label":"სტრიქონის წაშლა",title:"წაშლა",onclick:()=>{rows.splice(i,1);markDirty(key);rerender();}},"✕")):null))),
    cols.some(c=>c.sum||c.sumFn)&&rows.length?h("tfoot",null,h("tr",null,h("td",null,"Σ"),cols.map(col=>h("td",{id:col.sumFn?key+"-sum-"+col.k:null,class:"num","data-l":col.sum||col.sumFn?col.l+" — ჯამი":null},col.sumFn?fmtNum(col.sumFn(rows)):col.sum?fmtNum(rows.reduce((a,r)=>a+num(r[col.k]),0)):"")),ed&&!def.fixed?h("td",null):null)):null);
  const empty=!rows.length?h("div",{class:"panel-b muted small"},ed?"ჩანაწერი არ არის. დაამატეთ ქვემოთ ღილაკით.":"ჩანაწერი არ არის."):null;
  const foot=ed&&!def.fixed?h("div",{class:"tbl-foot"},
    h("button",{class:"btn sm",type:"button",onclick:()=>{ const nr={}; if(key==="personnel"){ nr.meal="1"; const last=rows[rows.length-1]; if(last){nr.start=last.start;nr.end=last.end;} } if(key==="expenses") nr.country="საქართველო"; rows.push(nr); markDirty(key); rerender(); setTimeout(()=>{ const f=document.querySelector("#sec-"+key+" tbody tr:last-child input, #sec-"+key+" tbody tr:last-child select, #sec-"+key+" tbody tr:last-child textarea"); f&&f.focus(); },0); }},def.add),
    key==="works"||key==="issues"||key==="expenses"?additionalControl(rerender):null):null;
  return [rows.length?h("div",{class:"tw"},table):null,empty,foot].filter(Boolean);
}

function additionalControl(after){
  const wrap=h("span",{class:"row"});
  const open=()=>{
    const code=h("input",{class:"inp mono",placeholder:"მაგ. 901","aria-label":"კოდი",style:"width:90px"});
    const chapter=h("input",{class:"inp",placeholder:"BoQ თავი","aria-label":"BoQ თავი",style:"width:170px"});
    const name=h("input",{class:"inp",placeholder:"სამუშაოს დასახელება","aria-label":"სამუშაოს დასახელება",style:"width:240px"});
    const unit=h("select",{class:"inp","aria-label":"განზომილება",style:"width:90px"},h("option",{value:""},"განზ."),(S.lists.units||[]).map(u=>h("option",{value:u},u)));
    wrap.replaceChildren(code,chapter,name,unit,
      h("button",{class:"btn sm primary",type:"button",onclick:async()=>{
        const c=normCode(code.value); if(!c||!name.value.trim()){ toast("კოდი და დასახელება სავალდებულოა"); return; }
        try{ const d=await api("POST","/projects/"+encodeURIComponent(S.pid)+"/additional",{code:c,chapter:chapter.value.trim(),name:name.value.trim(),unit:unit.value}); S.additional.push(d); toast("დამატებითი სამუშაო "+c+" დაემატა"); after(); }
        catch(e){ toast("ვერ დაემატა: "+errMsg(e)); } }},"დამატება"),
      h("button",{class:"btn sm ghost",type:"button",onclick:()=>wrap.replaceChildren(btn)},"გაუქმება"));
    code.focus();
  };
  const btn=h("button",{class:"btn sm ghost",type:"button",onclick:open,title:"სამუშაო, რომელიც ხარჯთაღრიცხვაში არ არის"},"+ დამატებითი სამუშაოს კოდი");
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

/* ---------- TEAM ---------- */
function renderTeam(p){
  const members=p.members||{}; const ids=p.memberIds||[];
  const save=async(memberIds,mem,msg)=>{ try{ await saveProject(S.pid,{memberIds,members:mem},msg); render(); }catch(e){} };
  const list=h("div",{class:"mlist"},ids.length?ids.map(id=>{
    const role=(members[id]||{}).role||"";
    const u=S.names.get(id);
    const sel=h("select",{class:"inp",style:"width:auto",disabled:!S.admin,"aria-label":"როლი",onchange:e=>{ const m=clone(members); m[id]={...(m[id]||{}),role:e.target.value}; save(ids,m,"როლი შეიცვალა"); }},h("option",{value:""},"როლი —"),PROJECT_ROLES.map(r=>h("option",{value:r},r)));
    sel.value=role;
    return h("div",{class:"mrow"},h("span",{class:"avatar"},initials(u&&u.name)),
      h("span",{class:"nm"},u?u.name:"წაშლილი მომხმარებელი",u?h("span",{class:"muted small",style:"margin-left:8px"},u.username):null,u&&!u.active?h("span",{class:"chip st-none",style:"margin-left:8px"},"გათიშული"):null),
      sel,
      S.admin?h("button",{class:"btn sm ghost",type:"button",onclick:()=>{ const m=clone(members); delete m[id]; save(ids.filter(x=>x!==id),m,"ამოღებულია გუნდიდან"); }},"გუნდიდან ამოღება"):null);
  }):h("div",{class:"panel-b muted"},"გუნდი ცარიელია."));
  let adder=null;
  if(S.admin){
    const avail=[...S.names.values()].filter(u=>u.active&&!ids.includes(u.id));
    const uId=uid(), rId=uid();
    const userSel=h("select",{id:uId,class:"inp"},h("option",{value:""},avail.length?"აირჩიეთ…":"ყველა მომხმარებელი უკვე გუნდშია"),avail.map(u=>h("option",{value:u.id},u.name+" ("+u.username+")"+(u.role==="admin"?" — ადმინი":""))));
    const roleSel=h("select",{id:rId,class:"inp"},PROJECT_ROLES.map(r=>h("option",{value:r},r))); roleSel.value="საქმეთა მწარმოებელი";
    adder=h("section",{class:"panel"},h("div",{class:"panel-h"},h("h3",null,"თანამშრომლის დამატება"),h("button",{class:"btn sm ghost",type:"button",onclick:()=>go("users")},"მომხმარებლების მართვა")),
      h("div",{class:"panel-b",style:"display:flex;flex-direction:column;gap:10px"},
        h("div",{class:"row",style:"align-items:flex-end"},
          h("div",{class:"field",style:"flex:1;min-width:220px"},h("label",{for:uId},"მომხმარებელი"),userSel),
          h("div",{class:"field"},h("label",{for:rId},"როლი პროექტში"),roleSel),
          h("button",{class:"btn primary",type:"button",onclick:()=>{ if(!userSel.value){ toast("აირჩიეთ მომხმარებელი"); return; } const m=clone(members); m[userSel.value]={role:roleSel.value,addedAt:new Date().toISOString()}; save([...ids,userSel.value],m,"დაემატა გუნდში"); }},"დამატება")),
        h("p",{class:"small muted",style:"margin:0"},"გუნდის წევრი ხედავს მხოლოდ ამ პროექტს და ავსებს მის ანგარიშებს. ახალი თანამშრომლისთვის ჯერ შექმენით ანგარიში „მომხმარებლების მართვაში“.")));
  }
  return [adder,h("section",{class:"panel"},h("div",{class:"panel-h"},h("h2",null,"პროექტის გუნდი",h("span",{class:"en cnt-sub"},ids.length+" წევრი"))),list)].filter(Boolean);
}

/* ---------- INFO ---------- */
function renderInfo(p){
  if(!(S.admin&&S.editInfo)) return [
    S.admin?h("div",{class:"row",style:"justify-content:flex-end"},h("button",{class:"btn",type:"button",onclick:()=>{S.editInfo=true;render();}},"რედაქტირება")):null,
    renderProjectSheet(p)];
  const out=[renderProjectForm(S.pid)];
  if(S.admin) out.push(h("section",{class:"panel"},h("div",{class:"panel-h"},h("h3",null,p.archived?"პროექტი დაარქივებულია":"პროექტის არქივი"),
    h("button",{class:"btn sm",type:"button",onclick:async()=>{ try{ await saveProject(S.pid,{archived:!p.archived},p.archived?"პროექტი აღდგა":"პროექტი დაარქივდა"); render(); }catch(e){} }},p.archived?"აღდგენა":"დაარქივება")),
    h("div",{class:"panel-b small muted"},"დაარქივებულ პროექტზე ახალი ანგარიში არ იქმნება და არსებულები აღარ რედაქტირდება; ნახვა რჩება.")));
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
  if(!S.admin) return renderMissing();
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
  return [h("div",{class:"head"},h("div",null,h("div",{class:"eyebrow"},"Analysis"),h("h1",null,"ანალიზი"))),filters,kpi,summary,
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
  const ids={u:uid(),n:uid(),r:uid(),p:uid()};
  const uIn=h("input",{id:ids.u,class:"inp",autocomplete:"off",autocapitalize:"none",placeholder:"მაგ. g.beridze"});
  const nIn=h("input",{id:ids.n,class:"inp",placeholder:"სახელი გვარი"});
  const rIn=h("select",{id:ids.r,class:"inp"},h("option",{value:"employee"},"თანამშრომელი"),h("option",{value:"admin"},"ადმინისტრატორი"));
  const pIn=h("input",{id:ids.p,class:"inp mono",value:genPassword()});
  const created=h("div");
  const createForm=h("form",{class:"panel-b",style:"display:flex;flex-direction:column;gap:12px",onsubmit:async e=>{
    e.preventDefault();
    const body={username:uIn.value.trim(),name:nIn.value.trim(),role:rIn.value,password:pIn.value};
    try{ await api("POST","/users",body); await refresh();
      toast("მომხმარებელი შეიქმნა");
      const c=document.getElementById("created-box"); if(c) c.replaceChildren(h("div",{class:"notice info"},"გადაეცით თანამშრომელს: მომხმარებელი ",h("span",{class:"pw"},body.username)," · დროებითი პაროლი ",h("span",{class:"pw"},body.password),". პირველი შესვლისას საკუთარ პაროლს დააყენებს."));
    }catch(ex){ toast(errMsg(ex)); } }},
    h("div",{class:"fgrid"},
      h("div",{class:"field"},h("label",{for:ids.u},"მომხმარებლის სახელი (ლათინურად)"),uIn),
      h("div",{class:"field"},h("label",{for:ids.n},"სახელი და გვარი"),nIn),
      h("div",{class:"field"},h("label",{for:ids.r},"როლი"),rIn),
      h("div",{class:"field"},h("label",{for:ids.p},"დროებითი პაროლი"),h("div",{class:"row",style:"flex-wrap:nowrap"},pIn,h("button",{class:"btn sm",type:"button",onclick:()=>{pIn.value=genPassword();}},"ახალი")))),
    h("div",{class:"row"},h("button",{class:"btn primary",type:"submit"},"მომხმარებლის შექმნა")));
  const rows=S.users.map(u=>{
    const self=u.id===S.me.id;
    const box=h("span",{class:"confirm"});
    const reset=()=>{ const pw=genPassword(); box.replaceChildren(h("span",null,"ახალი დროებითი პაროლი: "),h("span",{class:"pw"},pw),
      h("button",{class:"btn sm primary",type:"button",onclick:async()=>{ try{ await api("PATCH","/users/"+u.id,{password:pw}); box.replaceChildren(h("span",{class:"small"},"პაროლი შეიცვალა: "),h("span",{class:"pw"},pw)); }catch(e){ toast(errMsg(e)); } }},"დადასტურება"),
      h("button",{class:"btn sm ghost",type:"button",onclick:()=>box.replaceChildren()},"გაუქმება")); };
    const roleSel=h("select",{class:"inp",style:"width:auto","aria-label":"როლი",disabled:self,onchange:async e=>{ try{ await api("PATCH","/users/"+u.id,{role:e.target.value}); toast("როლი შეიცვალა"); refresh(); }catch(ex){ toast(errMsg(ex)); } }},
      h("option",{value:"employee"},"თანამშრომელი"),h("option",{value:"admin"},"ადმინისტრატორი")); roleSel.value=u.role;
    const projs=[...S.projects.values()].filter(p=>(p.memberIds||[]).includes(u.id)).map(p=>p.name);
    return h("tr",null,
      h("td",{"data-l":"სახელი"},h("strong",null,u.name),h("div",{class:"small muted mono"},u.username)),
      h("td",{"data-l":"როლი"},roleSel),
      h("td",{"data-l":"პროექტები",class:"small"},projs.length?projs.join(", "):h("span",{class:"muted"},"—")),
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
      h("div",{class:"tw"},h("table",{class:"rt stack users"},h("thead",null,h("tr",null,["სახელი","როლი","პროექტები","ბოლო შესვლა","სტატუსი",""].map(t=>h("th",null,t)))),h("tbody",null,rows))))];
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
