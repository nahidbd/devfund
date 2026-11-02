/* DevFund: page drawing, routing, filters and forms. Content lives in data.js (window.DF). */
(function(){
'use strict';
const D = window.DF;
const L = D.LISTINGS;
const NOW = Date.now();
const DAY = 864e5;
const $ = s => document.querySelector(s);
const main = $('#main');

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function store(k, v){ try{ if(v === undefined) return JSON.parse(localStorage.getItem(k) || 'null'); localStorage.setItem(k, JSON.stringify(v)); }catch(e){ return null; } }
function toast(msg){ const t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role','status'); t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 3200); }

/* ---------- dates ---------- */
const dhakaFmt = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Dhaka', day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit', hour12:false});
const dhakaDay = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Dhaka', day:'numeric', month:'short', year:'numeric'});
function closeMs(o){ return o.close ? Date.parse(o.close) : null; }
function isOpen(o){ const c = closeMs(o); return c === null || c >= NOW; }
const dayNum = ms => Math.floor((ms + 6 * 3600e3) / DAY); // Dhaka calendar day
function daysLeft(o){ const c = closeMs(o); if(c === null) return null; if(c < NOW) return -1; return dayNum(c) - dayNum(NOW); }
function dhaka(o){ const c = closeMs(o); return c === null ? '' : dhakaFmt.format(new Date(c)) + ' Dhaka time'; }
function fmtDay(iso){ return dhakaDay.format(new Date(iso + 'T06:00:00Z')); }
function dueBox(o){
  const d = daysLeft(o);
  if(d === null) return `<div class="due"><b>—</b><span>ongoing</span></div>`;
  if(d < 0) return `<div class="due closed"><b>Closed</b></div>`;
  if(d === 0) return `<div class="due soon"><b>Today</b><span>closes</span></div>`;
  return `<div class="due${d <= 7 ? ' soon' : ''}"><b>${d}</b><span>${d === 1 ? 'day left' : 'days left'}</span></div>`;
}
function typeBadge(o){ return `<span class="badge b-${o.type}">${esc(D.TYPES[o.type].one)}</span>`; }
function checkBadge(o){ return o.check === 'official' ? `<span class="badge b-official">Checked on official notice</span>` : `<span class="badge b-platform">Official link via platform</span>`; }

/* ---------- listing row ---------- */
function row(o){
  const d = daysLeft(o);
  return `<article class="item">${dueBox(o)}<div class="stack" style="gap:6px">
    <div class="row" style="gap:6px">${typeBadge(o)}${o.bd ? '<span class="badge b-bd">Open to Bangladesh</span>' : ''}${d !== null && d >= 0 && d <= 7 ? '<span class="badge b-soon">Closing soon</span>' : ''}</div>
    <h3><a href="#o/${esc(o.id)}">${esc(o.title)}</a></h3>
    <div class="meta"><span><b>${esc(o.issuer)}</b></span>${o.amount ? `<span>${esc(o.amount)}</span>` : ''}${o.location ? `<span>${esc(o.location)}</span>` : ''}<span>Deadline: ${esc(o.closeText)}</span></div>
  </div></article>`;
}
function sortByClose(a, b){ const x = closeMs(a), y = closeMs(b); if(x === null) return 1; if(y === null) return -1; return x - y; }
const OPEN = L.filter(isOpen).sort(sortByClose);

/* ---------- pages ---------- */
const V = {};

const ICON = {
  grant: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>',
  tender: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
  job: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
  fund: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/></svg>',
  philanthropy: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l3 3h4a2 2 0 0 0 0-4h-3M7 12V8a5 5 0 0 1 10 0v1"/><path d="M3 18h12l6-4"/></svg>'
};
const TILE_NOTE = {grant:'Calls for proposals and fellowships', tender:'RFPs, EOIs and procurement', job:'Staff posts and consultancies', fund:'New funds and donor commitments', philanthropy:'Foundations and CSR'};
V.home = () => {
  const week = OPEN.filter(o => { const d = daysLeft(o); return d !== null && d <= 7; });
  const newest = L.filter(o => o.added === D.TODAY && isOpen(o));
  const byType = t => OPEN.filter(o => o.type === t).length;
  const bd = OPEN.filter(o => o.bd).length;
  return `
  <section class="hero stack" style="gap:18px">
    <span class="kicker">Open opportunities, checked every day</span>
    <h1>Funding for people who change things</h1>
    <p>Grants, tenders, jobs and consultancies from UN agencies, development banks, donors and foundations. Every listing shows who can apply, the deadline in Dhaka time, and a link to the official notice.</p>
    <form class="searchbar" id="heroSearch" role="search"><label class="sr" for="hq">Search opportunities</label><input id="hq" type="search" placeholder="Search grants, tenders, jobs…" autocomplete="off"><button class="btn" type="submit"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><span>Search</span></button></form>
    <div class="quick"><a href="#bangladesh">Open to Bangladesh</a><a href="#opportunities?type=job">Consultancies</a><a href="#opportunities?type=grant">Grants for NGOs</a><a href="#calendar">Closing soon</a></div>
    <div class="stats">
      <div class="stat"><b>${OPEN.length}</b><span>open now</span></div>
      <div class="stat"><b>${week.length}</b><span>closing within 7 days</span></div>
      <div class="stat"><b>${bd}</b><span>open to Bangladesh</span></div>
      <div class="stat"><b>${D.DONORS.length}</b><span>donor profiles</span></div>
    </div>
  </section>
  <section class="section"><div class="sechead"><h2>What are you looking for?</h2><a href="#opportunities">See everything →</a></div>
    <div class="tiles">${Object.keys(D.TYPES).map(t => `<a class="tile t-${t}" href="#opportunities?type=${t}"><span class="ic">${ICON[t]}</span><b>${byType(t)}</b><span>${esc(D.TYPES[t].label)}</span><small>${esc(TILE_NOTE[t])}</small></a>`).join('')}</div>
  </section>
  <section class="section"><div class="sechead"><h2>Closing this week</h2><a href="#calendar">Deadline calendar →</a></div>
    ${week.length ? `<div class="list">${week.map(row).join('')}</div>` : '<p class="empty">Nothing closes in the next seven days.</p>'}
  </section>
  <section class="section"><div class="sechead"><h2>New today</h2><a href="#opportunities">All opportunities →</a></div>
    ${newest.length ? `<div class="list">${newest.slice(0, 6).map(row).join('')}</div>` : '<p class="empty">No new listings yet today. The board is updated every morning.</p>'}
  </section>
  <section class="section">
    <div class="box red stack"><span class="eyebrow" style="color:var(--sun-ink)">Bangladesh Desk</span><h2>Winning foreign funds? Plan for NGO Affairs Bureau approval.</h2>
    <p class="prose">Organisations in Bangladesh need the Bureau's registration and project approval before they receive or spend foreign donations for voluntary activities. Foreign-funded grants on DevFund carry a reminder.</p>
    <a class="btn btn-teal" href="#bangladesh" style="align-self:flex-start">Open the Bangladesh Desk</a></div>
  </section>
  <section class="section"><div class="sechead"><h2>This week's digest</h2><a href="#digest">Read the digest →</a></div>
    <p class="prose">${esc(D.DIGEST.note)}</p>
  </section>
  <section class="section"><div class="cards">
    <a class="card" href="#donors"><span class="eyebrow">Donor profiles</span><h3>Who funds what, and where they post notices</h3><p class="muted">UN agencies, banks, embassies and foundations active in Bangladesh.</p></a>
    <a class="card" href="#bid-desk"><span class="eyebrow">Proposal help</span><h3>Need help with a proposal or EOI?</h3><p class="muted">Proposal writing, EOIs, CVs and compliance support from Synapse Consulting.</p></a>
    <a class="card" href="#scams"><span class="eyebrow">Stay safe</span><h3>Real funders never charge a fee</h3><p class="muted">Learn the warning signs of fake grants and job offers.</p></a>
  </div></section>`;
};
function bindHome(){
  const f = $('#heroSearch'); if(!f) return;
  f.onsubmit = e => { e.preventDefault(); F = Object.assign({}, F_DEFAULT, {q: $('#hq').value}); store('devfund-filters', F); location.hash = '#opportunities'; };
}

/* opportunities board with filters */
const F_DEFAULT = {type:'', q:'', sector:'', applicant:'', window:'', bd:false, official:false, closed:false};
let F = Object.assign({}, F_DEFAULT, store('devfund-filters') || {});
function boardResults(){
  const q = F.q.trim().toLowerCase();
  return L.filter(o => {
    if(!F.closed && !isOpen(o)) return false;
    if(F.type && o.type !== F.type) return false;
    if(F.sector && !(o.sectors || []).includes(F.sector)) return false;
    if(F.applicant && !(o.applicants || []).includes(F.applicant)) return false;
    if(F.bd && !o.bd) return false;
    if(F.official && o.check !== 'official') return false;
    if(F.window){ const d = daysLeft(o); if(d === null || d < 0 || d > +F.window) return false; }
    if(q && !(o.title + ' ' + o.issuer + ' ' + o.summary + ' ' + (o.location || '') + ' ' + (o.ref || '')).toLowerCase().includes(q)) return false;
    return true;
  }).sort(sortByClose);
}
function opts(map, val, all){ return `<option value="">${all}</option>` + Object.keys(map).map(k => `<option value="${k}"${k === val ? ' selected' : ''}>${esc(map[k].label || map[k])}</option>`).join(''); }
V.opportunities = (param) => {
  const p = new URLSearchParams(param || '');
  if(p.has('type')) F.type = p.get('type');
  const res = boardResults();
  const counts = t => L.filter(o => (F.closed || isOpen(o)) && (!t || o.type === t)).length;
  return `
  <div class="pagehead"><span class="kicker">Opportunity Board</span><h1>All opportunities</h1><p class="muted prose">Filter by type, sector, who can apply and how soon the deadline is. Your filters are remembered on this device.</p></div>
  <div class="filters" role="search">
    <div class="row" role="group" aria-label="Type">
      <button class="chip" data-type="" aria-pressed="${!F.type}">All <span class="n">${counts('')}</span></button>
      ${Object.keys(D.TYPES).map(t => `<button class="chip" data-type="${t}" aria-pressed="${F.type === t}">${esc(D.TYPES[t].label)} <span class="n">${counts(t)}</span></button>`).join('')}
    </div>
    <div class="grid">
      <div class="field"><label for="fq">Search</label><input id="fq" type="search" value="${esc(F.q)}" placeholder="Title, organisation, place"></div>
      <div class="field"><label for="fs">Sector</label><select id="fs">${opts(D.SECTORS, F.sector, 'All sectors')}</select></div>
      <div class="field"><label for="fa">Who can apply</label><select id="fa">${opts(D.APPLICANTS, F.applicant, 'Anyone')}</select></div>
      <div class="field"><label for="fw">Deadline</label><select id="fw"><option value="">Any time</option>${[['7','Next 7 days'],['14','Next 14 days'],['30','Next 30 days'],['60','Next 60 days']].map(([v,t]) => `<option value="${v}"${F.window === v ? ' selected' : ''}>${t}</option>`).join('')}</select></div>
    </div>
    <div class="row" style="gap:18px">
      <label class="toggle"><input type="checkbox" id="fbd"${F.bd ? ' checked' : ''}> Open to Bangladesh only</label>
      <label class="toggle"><input type="checkbox" id="fof"${F.official ? ' checked' : ''}> Checked on official notice only</label>
      <label class="toggle"><input type="checkbox" id="fcl"${F.closed ? ' checked' : ''}> Include closed</label>
      <button class="btn btn-line" id="freset" style="min-height:38px">Clear filters</button>
    </div>
  </div>
  <p class="count" style="margin:16px 0 4px" aria-live="polite">${res.length} ${res.length === 1 ? 'opportunity' : 'opportunities'}</p>
  ${res.length ? `<div class="list">${res.map(row).join('')}</div>` : `<div class="empty">No opportunities match these filters. ${F.type === 'tender' ? 'Tender listings from UNGM, the World Bank, ADB and Bangladesh e-GP are being added through the daily scan.' : 'Try clearing a filter.'}</div>`}`;
};
function bindBoard(){
  const set = (k, v) => { F[k] = v; store('devfund-filters', F); const id = document.activeElement && document.activeElement.id; render(true); if(id){ const el = document.getElementById(id); if(el){ el.focus(); if(el.setSelectionRange && el.type === 'search') el.setSelectionRange(el.value.length, el.value.length); } } };
  main.querySelectorAll('[data-type]').forEach(b => b.onclick = () => { F.type = b.dataset.type; store('devfund-filters', F); history.replaceState(null, '', F.type ? '#opportunities?type=' + F.type : '#opportunities'); render(true); });
  const q = $('#fq'); if(q){ let t; q.oninput = () => { clearTimeout(t); t = setTimeout(() => set('q', q.value), 250); }; }
  [['#fs','sector'],['#fa','applicant'],['#fw','window']].forEach(([s,k]) => { const el = $(s); if(el) el.onchange = () => set(k, el.value); });
  [['#fbd','bd'],['#fof','official'],['#fcl','closed']].forEach(([s,k]) => { const el = $(s); if(el) el.onchange = () => set(k, el.checked); });
  const r = $('#freset'); if(r) r.onclick = () => { F = Object.assign({}, F_DEFAULT); store('devfund-filters', F); history.replaceState(null, '', '#opportunities'); render(true); };
}

/* single listing */
V.o = (id) => {
  const o = L.find(x => x.id === id);
  if(!o) return notFound();
  const d = daysLeft(o), open = isOpen(o);
  const appl = (o.applicants || []).map(a => D.APPLICANTS[a]).join(', ');
  const sect = (o.sectors || []).map(s => D.SECTORS[s]).join(', ');
  const rel = o.related ? L.find(x => x.id === o.related) : null;
  return `
  <p class="crumb"><a href="#opportunities">Opportunities</a> › <a href="#opportunities?type=${o.type}">${esc(D.TYPES[o.type].label)}</a></p>
  <div class="detail">
    <article class="stack" style="gap:18px">
      <div class="row" style="gap:6px">${typeBadge(o)}${o.bd ? '<span class="badge b-bd">Open to Bangladesh</span>' : ''}${checkBadge(o)}${!open ? '<span class="badge b-closed">Closed</span>' : ''}</div>
      <h1>${esc(o.title)}</h1>
      <p style="font-size:1.12rem">${esc(o.summary)}</p>
      <dl class="facts">
        <dt>Issued by</dt><dd>${esc(o.issuer)}${o.issuerKind ? ` <span class="muted">(${esc(o.issuerKind)})</span>` : ''}</dd>
        ${o.ref ? `<dt>Reference</dt><dd>${esc(o.ref)}</dd>` : ''}
        <dt>Deadline</dt><dd>${esc(o.closeText)}${o.close ? `<br><span class="muted">${esc(dhaka(o))}</span>` : ''}</dd>
        ${o.amount ? `<dt>Amount or grade</dt><dd>${esc(o.amount)}</dd>` : ''}
        ${o.duration ? `<dt>Duration</dt><dd>${esc(o.duration)}</dd>` : ''}
        ${o.location ? `<dt>Location</dt><dd>${esc(o.location)}</dd>` : ''}
        <dt>Who is eligible</dt><dd>${esc(o.countries)}</dd>
        ${appl ? `<dt>Applicant type</dt><dd>${esc(appl)}</dd>` : ''}
        ${sect ? `<dt>Sector</dt><dd>${esc(sect)}</dd>` : ''}
      </dl>
      ${o.steps ? `<div class="stack"><h2>How to apply</h2><ol class="prose">${o.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>` : ''}
      ${o.foreign ? `<div class="box red"><b>For organisations in Bangladesh:</b> foreign funds for voluntary activities need NGO Affairs Bureau registration and project approval before the money is received or spent. <a href="#bangladesh">What this means</a>.</div>` : ''}
      ${rel ? `<div class="box"><b>Related listing:</b> <a href="#o/${esc(rel.id)}">${esc(rel.title)}</a></div>` : ''}
      <div class="box amber small"><b>Before you apply:</b> the official notice is the final word. Read it in full, apply only through the issuer's own channel, and never pay a fee to apply. ${o.check === 'platform' ? 'DevFund took the official link for this listing from a job or grant platform; open it to confirm the details.' : ''}</div>
      <p class="small muted">Summary written by DevFund. Last checked ${esc(fmtDay(o.checked))}. ${o.via ? `Found via <a href="${esc(o.via)}" rel="noopener" target="_blank">${esc(new URL(o.via).hostname.replace(/^www\./,''))}</a>.` : ''} Spotted an error? <a href="#report?id=${esc(o.id)}">Report a problem</a>.</p>
    </article>
    <aside class="side">
      <div class="card">
        ${o.close ? (open ? `<span class="eyebrow">Time left</span><div class="countdown${d <= 7 ? ' soon' : ''}">${d === 0 ? 'Closes today' : d + (d === 1 ? ' day' : ' days')}</div>` : '<span class="eyebrow">Status</span><div class="countdown" style="color:var(--muted)">Closed</div>') : '<span class="eyebrow">Status</span><div class="countdown" style="font-size:1.4rem">Ongoing</div>'}
        ${o.close ? `<p class="small muted">${esc(dhaka(o))}</p>` : ''}
        <a class="btn" href="${esc(o.url)}" rel="noopener" target="_blank">View official notice</a>
        ${o.close && open ? `<button class="btn btn-line" id="ics">Add deadline to calendar</button>` : ''}
        <button class="btn btn-line" id="share">Copy link</button>
      </div>
      <div class="card"><span class="eyebrow">Need help applying?</span><p class="small">The Proposal and Bid Desk can help with proposals, EOIs, CVs and NGO Affairs Bureau paperwork.</p><a href="#bid-desk?id=${esc(o.id)}">Request support</a></div>
    </aside>
  </div>`;
};
function bindListing(id){
  const o = L.find(x => x.id === id); if(!o) return;
  const s = $('#share'); if(s) s.onclick = () => { const u = location.href; (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(() => toast('Link copied'), () => toast(u)); };
  const i = $('#ics'); if(i) i.onclick = () => {
    const t = new Date(closeMs(o)), z = x => x.toISOString().replace(/[-:]/g,'').replace(/\.\d+/,'');
    const start = new Date(closeMs(o) - 3600e3);
    const ics = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//DevFund//EN','BEGIN:VEVENT','UID:' + o.id + '@devfund','DTSTAMP:' + z(new Date()),'DTSTART:' + z(start),'DTEND:' + z(t),'SUMMARY:Deadline: ' + o.title.replace(/[,;]/g,' '),'DESCRIPTION:' + (o.issuer + ' - ' + o.url).replace(/[,;]/g,' '),'URL:' + o.url,'BEGIN:VALARM','TRIGGER:-P2D','ACTION:DISPLAY','DESCRIPTION:Deadline in 2 days','END:VALARM','END:VEVENT','END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], {type:'text/calendar'})); a.download = 'devfund-' + o.id + '.ics'; document.body.appendChild(a); a.click(); a.remove();
  };
}

/* deadline calendar */
V.calendar = () => {
  const dated = OPEN.filter(o => o.close);
  const groups = {};
  dated.forEach(o => {
    const c = new Date(closeMs(o) + 6 * 3600e3); // Dhaka calendar
    const dow = (c.getUTCDay() + 6) % 7; const mon = new Date(Date.UTC(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate() - dow));
    const k = mon.toISOString().slice(0, 10); (groups[k] = groups[k] || []).push(o);
  });
  const keys = Object.keys(groups).sort();
  const wk = k => { const a = new Date(k + 'T00:00:00Z'), b = new Date(a.getTime() + 6 * DAY); const f = x => x.toLocaleDateString('en-GB', {day:'numeric', month:'short', timeZone:'UTC'}); return `Week of ${f(a)} – ${f(b)}`; };
  return `<div class="pagehead"><span class="kicker">Deadline calendar</span><h1>Every open deadline, week by week</h1><p class="muted prose">Times are shown in Dhaka time (GMT+6). Open a listing to add its deadline to your own calendar, with a reminder two days before.</p></div>
  ${keys.length ? keys.map(k => `<section class="week section" style="margin-top:20px"><h3>${wk(k)}</h3>${groups[k].map(o => `<div class="cal-row"><span class="small"><b>${esc(dhakaFmt.format(new Date(closeMs(o))).replace(/,? \d{4}/, ''))}</b></span><span>${typeBadge(o)} <a href="#o/${esc(o.id)}">${esc(o.title)}</a> <span class="muted small">· ${esc(o.issuer)}</span></span></div>`).join('')}</section>`).join('') : '<p class="empty">No open deadlines right now.</p>'}`;
};

/* Bangladesh Desk */
V.bangladesh = () => {
  const bd = OPEN.filter(o => o.bd);
  return `<div class="pagehead"><span class="kicker">Bangladesh Desk</span><h1>Opportunities and rules for applicants in Bangladesh</h1><p class="muted prose">Open calls, tenders and jobs that applicants from Bangladesh can apply for, the local portals to watch, and a plain-language reminder of the rules on foreign donations.</p></div>
  <div class="stack prose">
    <div class="box red stack"><h2>Foreign funds need NGO Affairs Bureau approval</h2>
      <p>Under the Foreign Donations (Voluntary Activities) Regulation Act, 2016, organisations in Bangladesh that receive foreign donations for voluntary activities must be registered with the NGO Affairs Bureau, and each project must be approved by the Bureau before the funds are received and used.</p>
      <p>Build the approval time into your project start date when you apply for a foreign-funded grant, and keep the donor informed. The Bureau publishes its current forms, procedures and guidance at <a href="https://ngoab.gov.bd/" rel="noopener" target="_blank">ngoab.gov.bd</a>; always follow the Bureau's own guidance.</p>
      <p class="small muted">This is general information drawn from published rules, not legal advice.</p>
    </div>
    <h2>Where Bangladesh notices are published</h2>
    <ul>
      <li><a href="https://www.eprocure.gov.bd/" rel="noopener" target="_blank">Bangladesh e-GP</a>: government tenders, including many donor-funded projects.</li>
      <li><a href="https://www.bppa.gov.bd/" rel="noopener" target="_blank">Bangladesh Public Procurement Authority (BPPA)</a>: advertisements, including requests for expressions of interest under World Bank-financed projects.</li>
      <li><a href="https://www.unicef.org/bangladesh/en/supply-and-logistics" rel="noopener" target="_blank">UNICEF Bangladesh</a>, <a href="https://bangladesh.unfpa.org/en/call-for-submissions" rel="noopener" target="_blank">UNFPA Bangladesh</a> and <a href="https://procurement-notices.undp.org/" rel="noopener" target="_blank">UNDP procurement notices</a>: UN calls, RFPs and consultancies.</li>
      <li><a href="https://www.ungm.org/Public/Notice" rel="noopener" target="_blank">UN Global Marketplace</a>: tenders from all UN agencies.</li>
    </ul>
  </div>
  <section class="section"><div class="sechead"><h2>Open to applicants from Bangladesh</h2><a href="#opportunities">Open the full board</a></div>
    ${bd.length ? `<div class="list">${bd.map(row).join('')}</div>` : '<p class="empty">No open listings right now.</p>'}
  </section>`;
};

/* donors */
V.donors = () => `<div class="pagehead"><span class="kicker">Donor profiles</span><h1>Who funds what, and where they post notices</h1><p class="muted prose">Short profiles of donors and agencies that fund work in Bangladesh: what they fund, where their notices appear and how to apply. Every fact links to the page it came from.</p></div>
  <div class="cards">${D.DONORS.map(d => { const n = OPEN.filter(o => o.issuer.toLowerCase().includes(d.name.split(' ')[0].toLowerCase())).length; return `<a class="card" href="#donor/${esc(d.id)}"><span class="eyebrow">${esc(d.kind)}</span><h3>${esc(d.name)}</h3><p class="muted small">${esc(d.what)}</p>${n ? `<span class="badge b-job" style="align-self:flex-start">${n} open now</span>` : ''}</a>`; }).join('')}</div>`;
V.donor = (id) => {
  const d = D.DONORS.find(x => x.id === id); if(!d) return notFound();
  const key = d.name.split(' ')[0].toLowerCase();
  const open = OPEN.filter(o => o.issuer.toLowerCase().includes(key));
  return `<p class="crumb"><a href="#donors">Donor profiles</a></p>
  <div class="pagehead"><span class="kicker">${esc(d.kind)}</span><h1>${esc(d.name)}</h1></div>
  <div class="stack prose">
    <h2>What they fund</h2><p>${esc(d.what)}</p>
    <h2>Where notices appear</h2><p>${esc(d.where)}</p>
    <h2>How to apply</h2><p>${esc(d.how)}</p>
    ${d.recent.length ? `<h2>Recent calls</h2><ul>${d.recent.map(r => `<li>${esc(r)}</li>`).join('')}</ul>` : ''}
    <h2>Sources</h2><ol class="small">${d.sources.map(s => `<li><a href="${esc(s[1])}" rel="noopener" target="_blank">${esc(s[0])}</a></li>`).join('')}</ol>
    <p class="small muted">Profile last checked ${esc(fmtDay(d.checked))}.</p>
  </div>
  ${open.length ? `<section class="section"><div class="sechead"><h2>Open now</h2></div><div class="list">${open.map(row).join('')}</div></section>` : ''}`;
};

/* digest */
V.digest = () => {
  const pick = ids => ids.map(id => L.find(o => o.id === id)).filter(Boolean);
  return `<div class="pagehead"><span class="kicker">Weekly Opportunity Digest</span><h1>${esc(D.DIGEST.week)}</h1><p class="prose" style="font-size:1.1rem">${esc(D.DIGEST.note)}</p></div>
  <section class="section"><div class="sechead"><h2>Top picks this week</h2></div><div class="list">${pick(D.DIGEST.top).map(row).join('')}</div></section>
  <section class="section"><div class="sechead"><h2>Also open</h2></div><div class="list">${pick(D.DIGEST.also).map(row).join('')}</div></section>
  <p class="muted small" style="margin-top:18px">The digest is refreshed every Monday. <a href="#subscribe">Get it by email</a> once email delivery starts.</p>`;
};

/* forms */
function formPage(name, kicker, title, intro, fields, button, after){
  return `<div class="pagehead"><span class="kicker">${kicker}</span><h1>${title}</h1><p class="muted prose">${intro}</p></div>
  <form class="stack" style="max-width:720px" data-form="${name}" novalidate>
    <p hidden><label>Leave empty <input name="bot-field"></label></p>
    ${fields}
    <button class="btn" type="submit" style="align-self:flex-start">${button}</button>
    <p class="small muted">${after || 'We use what you send only to handle this request. We never sell or share it.'}</p>
  </form>`;
}
const fld = (n, l, t, req, extra) => `<div class="field"><label for="f-${n}">${l}${req ? '' : ' <span class="muted">(optional)</span>'}</label>${t === 'textarea' ? `<textarea id="f-${n}" name="${n}"${req ? ' required' : ''}>${extra || ''}</textarea>` : `<input id="f-${n}" name="${n}" type="${t}"${req ? ' required' : ''} value="${esc(extra || '')}">`}</div>`;
const sel = (n, l, options, val) => `<div class="field"><label for="f-${n}">${l}</label><select id="f-${n}" name="${n}">${options.map(o => `<option${o === val ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select></div>`;
function idParam(param){ return new URLSearchParams(param || '').get('id') || ''; }

V.submit = () => formPage('submit-opportunity', 'Post an opportunity', 'Tell us about a call, tender or job',
  'Donors, UN agencies, government projects, NGOs and firms can send an opportunity for listing. It is free. We publish it after checking it against your official notice.',
  `<div class="grid2">${fld('org','Organisation','text',true)}${fld('name','Your name','text',true)}</div>
   ${fld('email','Work email','email',true)}
   ${sel('type','Type',['Grant or call for proposals','Tender, RFP or EOI','Job or consultancy','Funding release','Philanthropy or CSR'])}
   ${fld('title','Title of the opportunity','text',true)}
   ${fld('url','Link to the official notice','url',true)}
   ${fld('deadline','Deadline (with time zone)','text',true)}
   ${fld('notes','Anything else we should know','textarea',false)}`,
  'Send for review');
V.report = (param) => { const id = idParam(param); const o = L.find(x => x.id === id); return formPage('report-problem', 'Report a problem', 'Report an error or a suspicious listing',
  'Tell us about a wrong date, a broken link, a closed call, or anything that looks like a scam. We fix errors within 24 hours and log them publicly.',
  `${fld('listing','Listing','text',true, o ? o.title + ' (' + o.id + ')' : '')}
   ${sel('problem','What is wrong',['Wrong deadline or details','Broken link','Call is closed or cancelled','Looks like a scam','Other'])}
   ${fld('details','Details','textarea',true)}
   ${fld('email','Email, if you want a reply','email',false)}`, 'Send report'); };
V['bid-desk'] = (param) => { const id = idParam(param); const o = L.find(x => x.id === id); return formPage('bid-desk', 'Proposal and Bid Desk', 'Get help with a proposal, EOI or application',
  'Synapse Consulting and partner experts help NGOs, firms and consultants with concept notes, full proposals, expressions of interest, technical proposals, CVs and NGO Affairs Bureau paperwork. Tell us what you need and we will reply with a quote.',
  `<div class="grid2">${fld('name','Your name','text',true)}${fld('org','Organisation','text',false)}</div>
   ${fld('email','Email','email',true)}
   ${sel('service','Service',['Concept note or full proposal','Expression of interest (EOI)','Technical and financial proposal for a tender','CV and cover letter for a consultancy','NGO Affairs Bureau compliance','Other'])}
   ${fld('listing','Which opportunity','text',false, o ? o.title + ' (' + o.id + ')' : '')}
   ${fld('deadline','Your deadline','text',false, o ? o.closeText : '')}
   ${fld('details','What do you need?','textarea',true)}`, 'Request a quote',
  'Using the Desk has no effect on what DevFund lists or how it is shown. We use your details only to reply.'); };
V.subscribe = () => formPage('subscribe', 'Weekly Digest by email', 'Get the Weekly Opportunity Digest',
  'Email delivery of the digest and saved-search alerts is coming soon. Leave your email and the topics you care about, and we will write when it starts. You can read the current digest on the site now.',
  `${fld('email','Email','email',true)}
   ${fld('interests','Topics, countries or types you want (for example: grants for NGOs in Bangladesh, digital governance consultancies)','text',false)}`, 'Keep me posted',
  'One email when the service starts, then only what you ask for. Unsubscribe any time.');
function bindForm(){
  const f = main.querySelector('form[data-form]'); if(!f) return;
  f.onsubmit = e => {
    e.preventDefault();
    if(!f.checkValidity()){ f.reportValidity(); return; }
    const data = Object.fromEntries(new FormData(f)); data['form-name'] = f.dataset.form;
    const b = f.querySelector('button[type=submit]'); b.disabled = true;
    fetch('/api/form', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
      .then(r => r.json().then(j => { if(!r.ok || !j.ok) throw 0; }).then(() => { f.outerHTML = `<div class="box stack" style="max-width:720px"><h2>Thank you</h2><p>Your message has been received. ${f.dataset.form === 'submit-opportunity' ? 'We will check it against the official notice before publishing.' : f.dataset.form === 'subscribe' ? 'We will write when email delivery starts.' : 'We will get back to you soon.'}</p><a href="#">Back to the home page</a></div>`; }))
      .catch(() => { b.disabled = false; toast('Could not send right now. Please try again in a minute.'); });
  };
}

/* trust and info pages */
const page = (kicker, title, body) => `<div class="pagehead"><span class="kicker">${kicker}</span><h1>${title}</h1></div><div class="prose">${body}</div>`;
V.methodology = () => page('How DevFund works', 'How we find, check and publish opportunities', `
  <p>DevFund scans an approved list of official portals every morning: UN agency procurement and career sites, development bank procurement, donor government portals, foundations and Bangladesh's public procurement sites. Software tools, including AI, help us read notices and draft listings. Every listing is checked against its source before it goes on the board.</p>
  <h2>What we check</h2>
  <ol><li><b>Source:</b> the notice must exist on the issuer's own website or an approved portal. Opportunities found on aggregators or social media are published only once we have traced them to the issuer.</li>
  <li><b>Details:</b> deadline, time zone, amount, eligibility and reference number are read from the notice. Deadlines are shown as the issuer states them and converted to Dhaka time.</li>
  <li><b>Freshness:</b> listings close automatically at their deadline. Every open listing is re-checked regularly for extensions, addenda and cancellations.</li>
  <li><b>Scam screening:</b> we do not publish anything that charges an application fee, asks for bank or ID details, uses only free email or messaging apps, or has no matching page on the issuer's site. See <a href="#scams">Scam alerts</a>.</li></ol>
  <h2>What the labels mean</h2>
  <ul><li><span class="badge b-official">Checked on official notice</span> We read the issuer's own notice.</li>
  <li><span class="badge b-platform">Official link via platform</span> We found the opportunity on a recognised job or grant platform that links to the issuer's own page, and copied that link. Open the official notice to confirm the details.</li>
  <li><span class="badge b-bd">Open to Bangladesh</span> The notice allows applicants from Bangladesh, or does not exclude them.</li></ul>
  <h2>Our rules</h2>
  <ul><li>Summaries are short and written in our own words. We link to tender documents and terms of reference; we never copy or re-host them.</li>
  <li>The official notice always decides. If our summary differs, we correct it within 24 hours and log the correction.</li>
  <li>DevFund never accepts applications, CVs or fees on anyone's behalf.</li>
  <li>Every visitor sees every listing at the same time. Nobody gets early access.</li></ul>`);
V.sources = () => { const li = a => a.map(s => `<li>${s[1] ? `<a href="${esc(s[1])}" rel="noopener" target="_blank">${esc(s[0])}</a>` : esc(s[0])}</li>`).join(''); return page('Our sources', 'Where DevFund looks', `
  <p>The source list is reviewed every month. <a href="#submit">Suggest a source</a>.</p>
  <h2>Tier 1: issuer portals</h2><p>Official portals of the organisations that issue notices. A listing can be published on one official notice.</p><ul>${li(D.SOURCES.tier1)}</ul>
  <h2>Tier 2: recognised sector platforms</h2><p>Platforms run by recognised institutions. Published with a link to the issuer's notice where one exists.</p><ul>${li(D.SOURCES.tier2)}</ul>
  <h2>Tier 3: discovery only</h2><p>Aggregators and newsletters help us find opportunities. Nothing is published from them alone: we trace each one to the issuer's own notice.</p><ul>${li(D.SOURCES.tier3)}</ul>`); };
V.scams = () => page('Scam alerts', 'How to spot a fake grant or job', `
  <p>Fake grant and job offers target NGOs and job seekers in Bangladesh and elsewhere. Real donors, UN agencies and development banks never charge you to apply, to be shortlisted or to receive a contract.</p>
  <h2>Warning signs</h2>
  <ul><li>Any fee: application, processing, registration, "visa", training or "legal" charges.</li>
  <li>Contact only through free email accounts or messaging apps, not the organisation's own domain.</li>
  <li>No matching notice on the organisation's own website.</li>
  <li>A guaranteed award or job, or an amount far above what the funder normally gives.</li>
  <li>Requests for bank details, passport or national ID before any formal selection.</li>
  <li>Look-alike website addresses and logos, or heavy pressure to act within hours.</li></ul>
  <h2>What to do</h2>
  <ul><li>Find the notice yourself on the organisation's official website before you reply.</li>
  <li>Apply only through the channel named in the official notice.</li>
  <li>If something on DevFund looks wrong, <a href="#report">report it</a>. We take suspicious listings down while we check.</li></ul>`);
V.corrections = () => page('Corrections log', 'Corrections', D.CORRECTIONS.length ? `<div class="tablebox"><table><thead><tr><th>Date</th><th>Listing</th><th>What changed</th></tr></thead><tbody>${D.CORRECTIONS.map(c => `<tr><td>${esc(c.date)}</td><td><a href="#o/${esc(c.id)}">${esc(c.id)}</a></td><td>${esc(c.what)}</td></tr>`).join('')}</tbody></table></div>` : '<p>No corrections yet. When we fix an error in a published listing, it is logged here with the date and what changed.</p><p><a href="#report">Report a problem</a></p>');
V.coi = () => page('Conflict of interest', 'Our conflict-of-interest statement', `
  <p>DevFund is owned and run by Synapse Consulting, a development and management consulting practice in Dhaka. Synapse Consulting sometimes bids for tenders and consultancies of the kind DevFund lists, and offers paid proposal support through the Proposal and Bid Desk.</p>
  <h2>Our safeguards</h2>
  <ul><li>Every listing is published to all visitors at the same moment. Synapse Consulting has no early access and no private feed.</li>
  <li>We use only information already public on the issuer's own site.</li>
  <li>Using the Proposal and Bid Desk has no effect on what is listed or how it is shown.</li>
  <li>Sponsored or featured placement, if introduced, will always be labelled and will never change verification.</li></ul>
  <p>Questions about this statement: <a href="#report">contact us</a>.</p>`);
V.about = () => page('About', 'About DevFund', `
  <p>DevFund is a free portal for development-sector funding, tenders and jobs. It serves local NGOs and civil society organisations, international NGOs, consulting firms, individual consultants and job seekers, starting with Bangladesh and covering international opportunities open to Bangladeshi applicants.</p>
  <p>It is a venture of Synapse Consulting ("Think. Connect. Transform.") and the sister site of <a href="https://digivern.pages.dev">Digivern</a>, which covers news and analysis on digital governance.</p>
  <h2>During the beta</h2><p>Everything on DevFund is free. Email alerts, organisation profiles that rank open calls by fit, and a Bangla interface are planned next.</p>
  <h2>Read more</h2><ul><li><a href="#methodology">How DevFund works</a></li><li><a href="#sources">Our sources</a></li><li><a href="#coi">Conflict of interest</a></li><li><a href="#corrections">Corrections log</a></li></ul>`);
function notFound(){ return `<div class="empty stack"><h1>Page not found</h1><p>This page or listing does not exist, or it has been removed.</p><a href="#opportunities">Browse open opportunities</a></div>`; }

/* ---------- router ---------- */
const TITLES = {opportunities:'Opportunities', calendar:'Deadlines', bangladesh:'Bangladesh Desk', donors:'Donors', digest:'Weekly Digest', submit:'Post an opportunity', report:'Report a problem', 'bid-desk':'Proposal Desk', subscribe:'Get the digest', methodology:'How DevFund works', sources:'Our sources', scams:'Scam alerts', corrections:'Corrections', coi:'Conflict of interest', about:'About'};
const NAVMAP = {o:'opportunities', donor:'donors'};
function parse(){
  const h = decodeURIComponent(location.hash.replace(/^#/, ''));
  const [path, param] = h.split('?');
  const [view, id] = path.split('/');
  return {view: view || 'home', id, param};
}
let firstView = true;
function hit(view, id){
  try{
    const p = (view === 'home' ? 'home' : view + (id ? '-' + id : '')).toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 60);
    let r = ''; if(firstView && document.referrer){ try{ const h = new URL(document.referrer).hostname; if(h !== location.hostname) r = h.replace(/^www\./, ''); }catch(e){} }
    const body = JSON.stringify({p, r, v: firstView ? 1 : 0}); firstView = false;
    if(location.protocol === 'https:' && /pages\.dev$|devfund/.test(location.hostname)) navigator.sendBeacon ? navigator.sendBeacon('/api/hit', new Blob([body], {type:'application/json'})) : fetch('/api/hit', {method:'POST', body, keepalive:true});
  }catch(e){}
}
function render(keep){
  const {view, id, param} = parse();
  if(!keep) hit(view, id);
  const fn = V[view];
  main.innerHTML = fn ? fn(id || param, param) : notFound();
  const navKey = NAVMAP[view] || (view === 'home' ? '' : view);
  document.querySelectorAll('.nav a').forEach(a => { if(a.dataset.n === navKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  let t = TITLES[view];
  if(view === 'o'){ const o = L.find(x => x.id === id); t = o ? o.title : 'Not found'; }
  if(view === 'donor'){ const d = D.DONORS.find(x => x.id === id); t = d ? d.name : 'Not found'; }
  document.title = (t ? t + ' — ' : '') + 'DevFund';
  if(view === 'home') bindHome();
  if(view === 'opportunities') bindBoard();
  if(view === 'o') bindListing(id);
  bindForm();
  if(!keep){ window.scrollTo(0, 0); }
  const nav = $('#nav'); nav.dataset.open = 'false'; $('#menuBtn').setAttribute('aria-expanded', 'false');
}
$('#upd').textContent = D.UPDATED;
$('#menuBtn').onclick = () => { const n = $('#nav'), o = n.dataset.open === 'true'; n.dataset.open = String(!o); $('#menuBtn').setAttribute('aria-expanded', String(!o)); };
window.addEventListener('hashchange', () => render(false));
render(false);
})();
