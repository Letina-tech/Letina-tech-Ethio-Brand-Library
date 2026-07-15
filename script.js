
// ---------- Data ----------
const docs = [
  {title:"ብራንድን በምሳሌ!", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/15pbKpg8KJHfbBwe491abUR1_GszC8IGV/view?usp=drive_link"},
  {title:"Zemen GEBEYA Brand Toolkit", cat:"ZemenGEBEYA", type:"doc", updated:"Jun 2026", owner:"Platform Team", url:"https://drive.google.com/file/d/14UhYY-880v5NSEKcbA0AL1r1PNMQH1gu/view?usp=drive_link"},
  {title:"Zooming into Zemen GEBEYA #2.pdf", cat:"ZemenGEBEYA", type:"pdf", updated:"Jun 2026", owner:"Eng Leadership", url:"https://drive.google.com/file/d/1BK11b6K9lKf_iUatcPVdSdFGkYoB0gsB/view?usp=drive_link"},
  {title:"Brand Promise Kept Though Action.pdf", cat:"Compliance", type:"pdf", updated:"Jun 2026", owner:"Legal", url:"https://drive.google.com/file/d/1xgewRk8c_W1vqp-M3NwXeBbGBx9J9BuO/view?usp=drive_link"},
  {title:"telebirr at a glance.pdf", cat:"Telebirr", type:"pdf", updated:"Jun 2026", owner:"Design Team", url:"https://drive.google.com/file/d/14Psc0VFaawVa7Ndk4fDPedO-0BICAStb/view?usp=drive_link"},
  {title:"xx", cat:"Telebirr", type:"slides", updated:"Jun 2026", owner:"Design Team", url:"https://yourcompany.sharepoint.com/sites/design/design-system.pptx"},
  {title:"Turning Service into Trust.pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1MWeOR4TpLTcZdIlBmizBJTIHzQcRHgh7/view?usp=drive_link"},
  {title:"Brand Protection in the Age of AI.pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1KdWnRTW3R5z5rKVPS_-F90EC5XQshEvk/view?usp=drive_link"},
  {title:"Are We Walking the Walk_.pdf", cat:"Onboarding", type:"pdf", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1QvnDzz08Rmy9nM7zjLOdBj9DbBPVB7lp/view?usp=drive_link"},
  {title:"The Power of Brand Consistency .pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1y5QDiQnRCOahundcEq_3a6BQnvpBLJwj/view?usp=drive_link"},
  {title:"Work Culture of Professionalism!.pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1docg8XXMRdcYm6JJFVHQefIOu4Bcnqvr/view?usp=drive_link"},
  {title:"One Brand One Standard Every Where.pdf", cat:"Onboarding", type:"pdf", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/17mVmMW2X02MIqOYI0nYn1zeHCZR05ARG/view?usp=drive_link"},
  {title:"Work Culture Professionalism.pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1jXqaRfu8ByBjRDKXbL54bRi1NojyGu9H/view?usp=drive_link"},
  {title:"The Power of Brand Consistency.pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1-i3EwcH3b9Et5BAOipOfT5DZNftCMS7J/view?usp=drive_link"},
  {title:"Our Brand Our Strength.pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1FH_VRhwAh3j9z97ouGj5LBd4YChyYZvC/view?usp=drive_link"},
  {title:"Personal Brand Matters.pdf", cat:"Onboarding", type:"doc", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1rkuJAAX3Vz9bJtMXhHdvhL0EykcX9SZf/view?usp=drive_link"},
  {title:"Owning Our Brand Experience.pdf", cat:"Onboarding", type:"pdf", updated:"Jun 2026", owner:"People Ops", url:"https://drive.google.com/file/d/1dnbTWJbsqasago1F2aIcIQBCfrNlN2N8/view?usp=drive_link"},
  
];

const typeIcon = {pdf:"PDF", doc:"DOC", slides:"SL"};

// ---------- Render doc tabs + list ----------
const docCats = ["All", ...new Set(docs.map(d=>d.cat))];
const docTabsEl = document.getElementById('doc-tabs');
let activeCat = "All";

function renderDocTabs(){
  docTabsEl.innerHTML = '';
  docCats.forEach(cat=>{
    const t = document.createElement('div');
    t.className = 'tab' + (cat===activeCat ? ' active' : '');
    t.textContent = cat;
    t.onclick = ()=>{ activeCat = cat; renderDocTabs(); renderDocs(); };
    docTabsEl.appendChild(t);
  });
}

function renderDocs(){
  const list = document.getElementById('doc-list');
  list.innerHTML = '';
  const filtered = docs.filter(d => activeCat==="All" || d.cat===activeCat);
  document.getElementById('doc-count').textContent = filtered.length + (filtered.length===1?' doc':' docs');
  filtered.forEach(d=>{
    const row = document.createElement('a');
    row.className = 'doc-item';
    row.href = d.url;
    row.target = '_blank';
    row.rel = 'noopener noreferrer';
    row.innerHTML = `
      <div class="doc-icon ${d.type}">${typeIcon[d.type]}</div>
      <div class="doc-meta">
        <h4>${d.title}</h4>
        <p>${d.owner} · Updated ${d.updated}</p>
      </div>
      <div class="doc-tag">${d.cat}</div>
      <span class="doc-open">Open ↗</span>`;
    list.appendChild(row);
  });
}

renderDocTabs();
renderDocs();

// ---------- Global search ----------
const searchInput = document.getElementById('global-search');
const resultsPanel = document.getElementById('results-panel');

searchInput.addEventListener('input', (e)=>{
  const q = e.target.value.trim().toLowerCase();
  if(!q){ resultsPanel.classList.remove('show'); resultsPanel.innerHTML=''; return; }

  const matchedDocs = docs.filter(x => x.title.toLowerCase().includes(q) || x.cat.toLowerCase().includes(q) || x.owner.toLowerCase().includes(q));

  if(matchedDocs.length === 0){
    resultsPanel.innerHTML = `<div id="no-results">No results for "${e.target.value}". Try a different term.</div>`;
    resultsPanel.classList.add('show');
    return;
  }

  let html = `<div class="results-group"><div class="results-group-title">Learning &amp; Documents</div>`;
  matchedDocs.forEach(x=>{
    html += `<a class="result-row" href="${x.url}" target="_blank" rel="noopener noreferrer"><span>${x.title}</span><span class="result-tag">${x.cat}</span></a>`;
  });
  html += `</div>`;
  resultsPanel.innerHTML = html;
  resultsPanel.classList.add('show');
});
