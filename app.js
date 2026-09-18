const Store = {
  key: 'sageAI_final_2026',
  defaults: {
    page: 'home', explored: [], discovered: [], observationTime: 0, observationDone: false,
    prediction: '', confidence: '', predictionReason: '', lab: { heat:'Medium', amount:'Medium', air:'Medium', temp:'Normal' },
    experimentA: null, evidence: false, cycleSeq: [], cycle: false, reasonText: '', environment: false,
    envChoice: '', envReason: '', reflection: { r1:'', r2:'', r3:'' }, achievements: []
  },
  load(){
    try {
      const saved = JSON.parse(localStorage.getItem(this.key) || 'null');
      if(!saved) return JSON.parse(JSON.stringify(this.defaults));
      return {
        ...structuredClone(this.defaults), ...saved,
        lab:{...this.defaults.lab, ...(saved.lab||{})},
        reflection:{...this.defaults.reflection, ...(saved.reflection||{})}
      };
    } catch { return JSON.parse(JSON.stringify(this.defaults)); }
  },
  save(){ localStorage.setItem(this.key, JSON.stringify(App.state)); }
};

const REQUIRED_OBJECTS = ['sun','cloud','mountain','plant','lake','river','soil','ocean'];
const STEPS = ['world','explore','predict','lab','evidence','challenge','environment','reflect'];
const STEP_LABELS = ['Explore','Observe','Predict','Experiment','Analyze','Explain','Connect','Reflect'];
const CYCLE = ['Evaporasi','Kondensasi','Presipitasi','Infiltrasi'];

const UI = {
  modal(html){ document.getElementById('modalContent').innerHTML=html; document.getElementById('modal').classList.remove('hidden'); },
  closeModal(){ document.getElementById('modal').classList.add('hidden'); },
  toast(message){
    document.querySelectorAll('.toast').forEach(x=>x.remove());
    const el=document.createElement('div'); el.className='toast'; el.textContent=message; document.body.appendChild(el);
    setTimeout(()=>el.remove(),1900);
  }
};

const App = {
  state: Store.load(),
  init(){ this.render(); },
  isComplete(step){
    const s=this.state;
    return ({
      world: REQUIRED_OBJECTS.every(k=>s.explored.includes(k)),
      explore: s.observationDone,
      predict: Boolean(s.prediction && s.predictionReason.trim() && s.confidence),
      lab: Boolean(s.experimentA),
      evidence: s.evidence,
      challenge: Boolean(s.cycle && s.reasonText.trim().length>=10),
      environment: Boolean(s.environment),
      reflect: Object.values(s.reflection||{}).every(v=>String(v).trim().length>=5)
    })[step] || false;
  },
  canAccess(step){
    if(step==='home') return true;
    if(step==='profile') return this.isComplete('reflect');
    const i=STEPS.indexOf(step);
    if(i<0) return false;
    return i===0 || this.isComplete(STEPS[i-1]);
  },
  next(step){ const i=STEPS.indexOf(step); return i>=0 && i<STEPS.length-1 ? STEPS[i+1] : 'profile'; },
  go(step){
    if(!this.canAccess(step)){ UI.toast('Tahap ini masih terkunci. Selesaikan tahap sebelumnya dulu.'); return; }
    this.state.page=step; Store.save(); this.render(); window.scrollTo?.(0,0);
  },
  reset(){
    if(confirm('Mulai dari awal? Progress yang tersimpan akan dihapus.')){
      localStorage.removeItem(Store.key); this.state=Store.load(); this.render();
    }
  },
  progress(){ return Math.round(STEPS.filter(s=>this.isComplete(s)).length/STEPS.length*100); },
  unlock(id){
    if(!this.state.achievements.includes(id)){ this.state.achievements.push(id); Store.save(); }
  },
  render(){
    const views={home:this.home,world:this.world,explore:this.explore,predict:this.predict,lab:this.lab,evidence:this.evidence,challenge:this.challenge,environment:this.environment,reflect:this.reflect,profile:this.profile};
    const fn=views[this.state.page]||this.home;
    document.getElementById('screen').innerHTML=fn.call(this);
    this.afterRender();
  },
  afterRender(){
    const p=this.progress();
    document.getElementById('progressBar').style.width=p+'%';
    document.getElementById('progressLabel').textContent=p+'% perjalanan';
    document.querySelectorAll('[data-nav]').forEach(btn=>{
      const target=btn.dataset.nav, locked=!this.canAccess(target);
      btn.classList.toggle('active',target===this.state.page); btn.classList.toggle('locked',locked); btn.disabled=locked;
    });
    document.querySelectorAll('.obj').forEach(el=>this.bindObject(el));
    const obs=document.getElementById('obsTime'); if(obs) this.observeTime(obs.value, false);
    if(this.state.experimentA) this.paintExperiment(this.state.experimentA);
    if(!document.getElementById('sageBox')) document.body.insertAdjacentHTML('beforeend',SAGE.box());
  },
  home(){
    const p=this.progress();
    const next=STEPS.find(s=>this.canAccess(s)&&!this.isComplete(s))||'profile';
    const nextText=p===100?'Lihat Profil Ilmuwan →':`Lanjut: ${STEP_LABELS[STEPS.indexOf(next)]} →`;
    return `<div class="page home-page">
      <section class="home-hero panel">
        <div class="eyebrow">LABORATORIUM SAINS DIGITAL</div>
        <div class="brand-large"><span>🌿</span><div><h1>SAGE-AI</h1><small>Smart Adaptive Guide for Environmental Learning</small></div></div>
        <h2>Selidiki ke mana perginya air.</h2>
        <p class="lead">Kamu akan mengamati, membuat prediksi, menguji dengan eksperimen, lalu menjelaskan temuanmu.</p>
        <div class="mission"><b>MISI ILMUWAN</b><span>Gunakan bukti, bukan sekadar tebakan.</span></div>
        <button class="btn primary big" onclick="App.go('${p===100?'profile':next}')">${p===0?'Mulai Investigasi →':nextText}</button>
      </section>
      <section class="home-journey panel">
        <div class="section-title"><div><b>Jalur Investigasi</b><small>Ikuti satu langkah pada satu waktu.</small></div><strong>${p}%</strong></div>
        <div class="journey-list">${STEPS.map((s,i)=>`<div class="journey-item ${this.isComplete(s)?'done':''} ${!this.canAccess(s)?'locked':''}"><span class="num">${String(i+1).padStart(2,'0')}</span><span class="jname">${STEP_LABELS[i]}</span><span class="jstate">${this.isComplete(s)?'✓':(this.canAccess(s)?'→':'🔒')}</span></div>`).join('')}</div>
        <div class="progress-note"><div class="bar"><i style="width:${p}%"></i></div><small>${p===100?'Semua tahap selesai.':'Tahap berikutnya terbuka setelah tugas saat ini selesai.'}</small></div>
      </section>
    </div>`;
  },
  world(){
    const found=this.state.explored.filter(x=>REQUIRED_OBJECTS.includes(x)).length;
    const obj=(key,icon,name,cls,left,top)=>`<button class="obj ${cls} ${this.state.explored.includes(key)?'found':''}" data-key="${key}" style="left:${left};top:${top}" aria-label="Selidiki ${name}"><span class="obj-icon">${icon}</span><span class="obj-label">${name}</span>${this.state.explored.includes(key)?'<b class="check">✓</b>':''}</button>`;
    return `<div class="page world-page">
      <div class="page-head compact-head"><div><div class="eyebrow">01 · EXPLORE</div><h2>Dunia Air</h2><p><b>Ketuk</b> setiap objek untuk menemukan petunjuk. Kamu boleh menggesernya.</p></div><div class="counter">${found}/${REQUIRED_OBJECTS.length} ditemukan</div></div>
      <div class="world-wrap panel"><div class="world" id="worldScene">
        <div class="sky-glow"></div><div class="world-title">🔎 <b>Temukan semua petunjuk</b></div>
        ${obj('sun','☀️','Matahari','sun','84%','13%')}
        ${obj('cloud','☁️','Awan','cloud','27%','15%')}
        ${obj('mountain','🏔️','Pegunungan','mountain','12%','55%')}
        ${obj('plant','🌳','Tumbuhan','plant','42%','72%')}
        ${obj('lake','💧','Danau','lake','13%','80%')}
        ${obj('river','🏞️','Sungai','river','82%','79%')}
        ${obj('soil','🌱','Tanah','soil','58%','80%')}
        ${obj('ocean','🌊','Laut','ocean','57%','55%')}
        <div class="rain" aria-hidden="true">💧 💧</div>
      </div></div>
      <div class="world-footer"><div class="discoveries"><span class="footer-label">Petunjuk:</span>${['Evaporasi','Transpirasi','Kondensasi','Presipitasi','Infiltrasi','Runoff'].map(x=>`<span class="tag ${this.state.discovered.includes(x)?'found':''}">${this.state.discovered.includes(x)?'✓':'○'} ${x}</span>`).join('')}</div><button class="btn primary" onclick="App.go('explore')" ${found<REQUIRED_OBJECTS.length?'disabled':''}>Lanjut Pengamatan →</button></div>
    </div>`;
  },
  bindObject(el){
    if(el.dataset.bound) return; el.dataset.bound='1';
    let startX=0,startY=0,startL=0,startT=0,moved=false;
    el.addEventListener('pointerdown',e=>{ if(e.button!==undefined&&e.button!==0)return; moved=false; startX=e.clientX; startY=e.clientY; startL=parseFloat(el.style.left); startT=parseFloat(el.style.top); el.setPointerCapture?.(e.pointerId); el.classList.add('dragging'); });
    el.addEventListener('pointermove',e=>{
      if(!el.hasPointerCapture?.(e.pointerId)) return;
      const parent=el.parentElement; const dx=(e.clientX-startX)/parent.clientWidth*100; const dy=(e.clientY-startY)/parent.clientHeight*100;
      if(Math.abs(dx)+Math.abs(dy)>3)moved=true;
      if(moved){ el.style.left=Math.max(5,Math.min(95,startL+dx))+'%'; el.style.top=Math.max(8,Math.min(88,startT+dy))+'%'; }
    });
    el.addEventListener('pointerup',e=>{ el.classList.remove('dragging'); if(!moved)this.inspect(el.dataset.key); });
    el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); this.inspect(el.dataset.key); } });
  },
  inspect(key){
    const o=DATA.objects[key]; if(!o)return;
    if(!this.state.explored.includes(key))this.state.explored.push(key);
    const process={sun:'Evaporasi',ocean:'Evaporasi',cloud:'Kondensasi',plant:'Transpirasi',river:'Runoff',soil:'Infiltrasi',mountain:'Runoff',lake:'Evaporasi'}[key];
    if(process&&!this.state.discovered.includes(process))this.state.discovered.push(process);
    this.unlock('explore'); Store.save(); this.render();
    UI.modal(`<div class="eyebrow">PETUNJUK DITEMUKAN</div><div class="modal-icon">${o.icon}</div><h2>${o.name}</h2><p>${o.info}</p><div class="notice"><b>Coba pikirkan</b><br>${o.q}</div><div class="modal-actions"><button class="btn soft" onclick="UI.closeModal();SAGE.show('${o.q.replaceAll("'","\\'")}')">Petunjuk SAGE</button><button class="btn primary" onclick="UI.closeModal()">Aku paham ✓</button></div>`);
  },
  explore(){
    const t=this.state.observationTime||0;
    return `<div class="page activity-page"><div class="page-head compact-head"><div><div class="eyebrow">02 · OBSERVE</div><h2>Amati Sebelum Menebak</h2><p>Geser waktu. Perhatikan apa yang berubah pada genangan.</p></div><div class="counter">${t}/3 waktu diamati</div></div>
      <div class="observe panel"><div class="observe-scene"><div class="sun-art">☀️</div><div class="cloud-art">☁️</div><div class="ground"></div><div class="puddle" id="puddle"><span>💧</span></div><div class="vapor" id="obsVapor">· · ·</div></div><div class="time-control"><b>Waktu</b><input id="obsTime" type="range" min="0" max="3" step="1" value="${t}" oninput="App.observeTime(this.value)"><span id="obsLabel">Awal</span></div><div class="observe-note" id="obsNote">Genangan masih terlihat jelas.</div></div>
      <div class="action-row"><button class="btn soft" onclick="SAGE.show('Perhatikan ukuran genangan. Apa yang berubah ketika waktu berlalu?')">Petunjuk SAGE</button><button class="btn primary" onclick="App.finishObserve()" ${t<1?'disabled':''}>Selesai Mengamati →</button></div></div>`;
  },
  observeTime(v,save=true){
    const n=Number(v),sizes=[72,58,42,25],labels=['Awal','Beberapa menit','Lebih lama','Setelah cukup lama'],notes=['Genangan masih terlihat jelas.','Permukaan air mulai berkurang.','Genangan tampak semakin kecil.','Sebagian air tidak lagi terlihat di permukaan.'];
    document.getElementById('puddle')?.style.setProperty('width',sizes[n]+'%');
    const l=document.getElementById('obsLabel'); if(l)l.textContent=labels[n]; const note=document.getElementById('obsNote');if(note)note.textContent=notes[n];
    const vapor=document.getElementById('obsVapor');if(vapor)vapor.style.opacity=n>0?'1':'0';
    this.state.observationTime=n;if(save)Store.save();
    const btn=document.querySelector('.action-row .primary');if(btn&&this.state.page==='explore')btn.disabled=n<1;
  },
  finishObserve(){ if(this.state.observationTime<1){UI.toast('Geser waktu untuk melihat perubahan dulu.');return;} this.state.observationDone=true;this.unlock('observe');Store.save();this.go('predict'); },
  predict(){
    const answers=['Air menghilang begitu saja','Air berubah menjadi uap','Air berubah menjadi tanah','Belum yakin'];
    return `<div class="page activity-page"><div class="page-head compact-head"><div><div class="eyebrow">03 · PREDICT</div><h2>Buat Prediksimu</h2><p>Pilih dugaanmu berdasarkan pengamatan. Kamu boleh mengubahnya.</p></div><span class="status-dot">● Dugaan</span></div>
      <div class="predict panel"><section><div class="question-label">PERTANYAAN</div><h3>Ke mana perginya air dari genangan?</h3><div class="answer-grid">${answers.map(a=>`<button class="answer ${this.state.prediction===a?'selected':''}" onclick='App.selectPrediction(${JSON.stringify(a)})'>${a}</button>`).join('')}</div></section><section class="side-form"><label>Alasanmu <small>1–2 kalimat cukup.</small></label><textarea id="predReason" class="input" placeholder="Menurutku karena..." oninput="App.state.predictionReason=this.value;Store.save()">${this.state.predictionReason}</textarea><b>Seberapa yakin?</b><div class="confidence">${['Belum yakin','Cukup yakin','Sangat yakin'].map(c=>`<button class="${this.state.confidence===c?'active':''}" onclick="App.selectConfidence('${c}')">${c}</button>`).join('')}</div><div class="edit-tip">💡 Belum yakin juga boleh. Yang penting kamu punya alasan.</div></section></div>
      <div class="action-row"><button class="btn soft" onclick="SAGE.show('Prediksi bukan jawaban akhir. Setelah ini kita uji dengan eksperimen.')">Petunjuk SAGE</button><button class="btn primary" onclick="App.savePrediction()">Simpan & ke Eksperimen →</button></div></div>`;
  },
  selectPrediction(a){this.state.prediction=a;Store.save();this.render();SAGE.show(SAGE.prediction(a));},
  selectConfidence(c){this.state.confidence=c;Store.save();this.render();},
  savePrediction(){const r=document.getElementById('predReason')?.value.trim()||'';this.state.predictionReason=r;if(!this.state.prediction||!r||!this.state.confidence){Store.save();UI.toast('Lengkapi prediksi, alasan, dan keyakinan dulu.');return;}this.unlock('predict');Store.save();this.go('lab');},
  lab(){
    const vals=[['heat','☀️ Panas',['Low','Medium','High']],['amount','💧 Jumlah air',['Low','Medium','High']],['air','💨 Pergerakan udara',['Low','Medium','High']],['temp','🌡️ Suhu',['Cool','Normal','Warm']]];
    return `<div class="page lab-page"><div class="page-head compact-head"><div><div class="eyebrow">04 · EXPERIMENT</div><h2>Laboratorium Penguapan</h2><p>Ubah kondisi, jalankan simulasi, lalu baca datanya.</p></div><span class="status-dot">● Eksperimen</span></div>
      <div class="lab panel"><section class="controls">${vals.map(c=>`<div class="control"><label>${c[1]}<span>${this.state.lab[c[0]]}</span></label><select id="${c[0]}" onchange="App.previewLab()">${c[2].map(v=>`<option ${this.state.lab[c[0]]===v?'selected':''}>${v}</option>`).join('')}</select></div>`).join('')}<button class="btn primary" onclick="App.runExperiment()">▶ Jalankan Simulasi</button></section>
      <section class="experiment"><div class="beaker"><div class="steam" id="steam">♨️</div><div class="glass"><div class="water" id="water"></div></div></div><div class="experiment-message" id="experimentMessage">${this.state.experimentA?'Hasil terakhir tersimpan.':'Atur kondisi lalu jalankan simulasi.'}</div><div id="results">${this.state.experimentA?this.resultHTML(this.state.experimentA):'<div class="empty">Belum ada data.</div>'}</div></section></div>
      <div class="action-row"><button class="btn soft" onclick="SAGE.show('Coba bandingkan hasil ketika panas atau pergerakan udara diubah.')">Tips SAGE</button><button class="btn primary" onclick="App.go('evidence')" ${this.state.experimentA?'':'disabled'}>Analisis Data →</button></div></div>`;
  },
  previewLab(){ ['heat','amount','air','temp'].forEach(id=>{const el=document.getElementById(id);if(el){const label=el.closest('.control')?.querySelector('label span');if(label)label.textContent=el.value;this.state.lab[id]=el.value;}});Store.save(); },
  resultHTML(r){return `<div class="data-grid"><div class="metric"><small>Laju penguapan</small><strong>${r.rate}%</strong></div><div class="metric"><small>Uap air</small><strong>${r.vapor}</strong></div><div class="metric"><small>Waktu</small><strong>${r.time} mnt</strong></div></div><div class="bar"><i style="width:${r.rate}%"></i></div>`;},
  runExperiment(){this.previewLab();const r=Simulation.run(this.state.lab);this.state.experimentA={...r,settings:{...this.state.lab}};this.unlock('experiment');Store.save();this.render();this.paintExperiment(this.state.experimentA);SAGE.show(SAGE.result(r));},
  paintExperiment(r){const water=document.getElementById('water'),steam=document.getElementById('steam');if(water)water.style.height=Math.max(12,r.remaining)+'%';if(steam){steam.classList.toggle('show',true);steam.style.opacity=Math.min(1,.35+r.rate/120);}},
  evidence(){const r=this.state.experimentA;return `<div class="page activity-page"><div class="page-head compact-head"><div><div class="eyebrow">05 · ANALYZE</div><h2>Temukan Buktinya</h2><p>Gunakan data eksperimen untuk memperkuat kesimpulan.</p></div><span class="status-dot">● Data</span></div>
    <div class="analyze panel"><section class="data-panel"><div class="card-head"><b>Data percobaan</b><small>${r?`${r.settings.heat} panas · ${r.settings.air} udara · ${r.settings.temp}`:'Belum ada'}</small></div>${r?this.resultHTML(r):'<div class="empty">Belum ada data.</div>'}</section><section class="question-panel"><div class="question-label">BUKTI TERKUAT</div><h3>Data mana yang paling membantu menjelaskan penguapan?</h3><div class="answer-grid one">${['Laju penguapan','Waktu percobaan','Semua data di atas'].map((x,i)=>`<button class="answer ${this.state.evidence&&i===2?'correct':''}" onclick="App.markEvidence(${i})">${x}</button>`).join('')}</div><div class="notice">Gunakan beberapa data sekaligus sebelum membuat kesimpulan.</div></section></div>
    <div class="action-row"><button class="btn soft" onclick="SAGE.show('Bandingkan laju, uap air, dan waktu. Ketiganya saling melengkapi.')">Bantuan SAGE</button><button class="btn primary" onclick="App.go('challenge')" ${this.state.evidence?'':'disabled'}>Lanjut Explain →</button></div></div>`;},
  markEvidence(i){if(i===2){this.state.evidence=true;this.unlock('evidence');Store.save();this.render();SAGE.show('Kamu menggunakan seluruh data sebelum membuat kesimpulan.');}else SAGE.show('Coba lihat ketiga data sekaligus.');},
  challenge(){const seq=this.state.cycleSeq||[];return `<div class="page activity-page"><div class="page-head compact-head"><div><div class="eyebrow">06 · EXPLAIN</div><h2>Susun Siklus Air</h2><p>Pilih proses dari kiri ke kanan. Salah? Bisa diulang.</p></div><div class="counter">${seq.length}/4</div></div>
    <div class="cycle panel"><div class="cycle-slots">${CYCLE.map((_,i)=>`<button class="cycle-slot ${seq[i]?'filled':''}" onclick="App.removeCycle(${i})">${seq[i]||'?'}${seq[i]?'<small>× hapus</small>':''}</button>${i<3?'<span class="arrow">→</span>':''}`).join('')}</div><div class="processes">${CYCLE.map(x=>`<button class="process ${seq.includes(x)?'used':''}" ${seq.includes(x)?'disabled':''} onclick="App.chooseCycle('${x}')">${x}</button>`).join('')}</div><div class="cycle-status ${this.state.cycle?'ok':''}">${this.state.cycle?'✓ Urutan tepat!':'Mulai dari proses setelah air menerima panas.'}</div><button class="retry" onclick="App.resetCycle()">↻ Ulangi susunan</button></div>
    <div class="reason panel"><label><b>Jelaskan temuanmu</b><small>Hubungkan dengan eksperimen.</small></label><textarea id="reason" class="input" placeholder="Panas membuat air..." oninput="App.state.reasonText=this.value;Store.save()">${this.state.reasonText}</textarea></div>
    <div class="action-row"><button class="btn soft" onclick="SAGE.show('Setelah air menguap, uap air mendingin dan dapat mengalami kondensasi.')">Petunjuk SAGE</button><button class="btn primary" onclick="App.saveReason()" ${this.state.cycle?'':'disabled'}>Simpan Penjelasan →</button></div></div>`;},
  chooseCycle(x){const seq=[...(this.state.cycleSeq||[])];if(seq.includes(x))return;seq.push(x);this.state.cycleSeq=seq;this.state.cycle=seq.length===4&&seq.join('|')===CYCLE.join('|');if(this.state.cycle)this.unlock('cycle');Store.save();this.render();if(seq.length===4&&!this.state.cycle)SAGE.show('Urutannya belum tepat. Tekan “Ulangi susunan” untuk mencoba lagi.');},
  removeCycle(i){const seq=[...(this.state.cycleSeq||[])];if(i!==seq.length-1){UI.toast('Hapus proses terakhir dulu supaya urutannya tetap rapi.');return;}seq.pop();this.state.cycleSeq=seq;this.state.cycle=false;Store.save();this.render();},
  resetCycle(){this.state.cycleSeq=[];this.state.cycle=false;Store.save();this.render();},
  saveReason(){const t=document.getElementById('reason')?.value.trim()||'';this.state.reasonText=t;if(!this.state.cycle){UI.toast('Perbaiki urutan siklus dulu.');return;}if(t.length<10){UI.toast('Jelaskan temuanmu sedikit lebih lengkap.');return;}this.unlock('reason');Store.save();this.go('environment');},
  environment(){const options=['Tanaman dapat kekurangan air','Air tanah dan permukaan dapat berubah','Kondisi lingkungan dapat terpengaruh','Semua kemungkinan perlu dipertimbangkan'];return `<div class="page activity-page"><div class="page-head compact-head"><div><div class="eyebrow">07 · CONNECT</div><h2>Sains di Lingkungan</h2><p>Hubungkan siklus air dengan keadaan sekitar.</p></div><span class="status-dot">● Lingkungan</span></div>
    <div class="environment panel"><div class="env-scene"><span>☁️</span><span>🌧️</span><span>🌱</span></div><section><div class="question-label">SITUASI</div><h3>Hujan sangat sedikit selama beberapa minggu.</h3><p>Apa yang mungkin terjadi pada lingkungan?</p><div class="answer-grid one">${options.map(x=>`<button class="answer ${this.state.envChoice===x?'selected':''}" onclick='App.envAnswer(${JSON.stringify(x)})'>${x}</button>`).join('')}</div></section><section class="env-reason"><label>Alasanmu <small>Jelaskan hubungan sebab-akibat.</small></label><textarea id="envText" class="input" placeholder="Karena..." oninput="App.state.envReason=this.value;Store.save()">${this.state.envReason}</textarea></section></div>
    <div class="action-row"><button class="btn soft" onclick="SAGE.show('Pikirkan hubungan hujan, tanah, tumbuhan, dan ketersediaan air.')">Petunjuk SAGE</button><button class="btn primary" onclick="App.saveEnv()" ${this.state.envChoice?'':'disabled'}>Lanjut Refleksi →</button></div></div>`;},
  envAnswer(x){this.state.envChoice=x;Store.save();this.render();},
  saveEnv(){const t=document.getElementById('envText')?.value.trim()||'';this.state.envReason=t;if(!this.state.envChoice){UI.toast('Pilih salah satu kemungkinan dulu.');return;}if(t.length<10){UI.toast('Tambahkan alasan singkat.');return;}this.state.environment=true;this.unlock('environment');Store.save();this.go('reflect');},
  reflect(){const r=this.state.reflection||{};const qs=[['r1','Apa hal baru yang kamu temukan?'],['r2','Apakah hasil eksperimen sesuai prediksi?'],['r3','Apa yang akan kamu ubah jika mengulang?']];return `<div class="page activity-page"><div class="page-head compact-head"><div><div class="eyebrow">08 · REFLECT</div><h2>Refleksi Ilmuwan</h2><p>Tuliskan apa yang kamu pelajari dari penyelidikan.</p></div><div class="counter">3 jawaban</div></div>
    <div class="reflection panel">${qs.map((q,i)=>`<section class="reflection-card"><span>${i+1}</span><label>${q[1]}</label><textarea id="${q[0]}" class="input" placeholder="Tulis jawabanmu..." oninput="App.state.reflection['${q[0]}']=this.value;Store.save()">${r[q[0]]||''}</textarea></section>`).join('')}</div>
    <div class="action-row"><button class="btn soft" onclick="SAGE.show('Refleksi membantu ilmuwan melihat apa yang berhasil dan apa yang bisa diperbaiki.')">Petunjuk SAGE</button><button class="btn primary" onclick="App.saveReflection()">Selesaikan Perjalanan 🏆</button></div></div>`;},
  saveReflection(){const r={r1:document.getElementById('r1')?.value.trim()||'',r2:document.getElementById('r2')?.value.trim()||'',r3:document.getElementById('r3')?.value.trim()||''};this.state.reflection=r;if(Object.values(r).some(v=>v.length<5)){Store.save();UI.toast('Isi ketiga refleksi terlebih dahulu.');return;}this.unlock('sage');Store.save();this.go('profile');},
  profile(){const s=this.state,p=this.progress();return `<div class="page profile-page"><section class="profile panel"><div><div class="eyebrow">YOUR SCIENTIST PROFILE</div><h1>Profil Ilmuwan</h1><p>Jejak belajar berdasarkan aktivitas yang kamu selesaikan.</p></div><div class="profile-score"><strong>${p}%</strong><small>selesai</small></div></section><div class="stats">${[['Objek',s.explored.filter(x=>REQUIRED_OBJECTS.includes(x)).length],['Eksperimen',s.experimentA?1:0],['Petunjuk',s.discovered.length],['Badge',s.achievements.length+'/8']].map(x=>`<div class="stat"><b>${x[1]}</b><small>${x[0]}</small></div>`).join('')}</div><section class="badges panel">${DATA.achievements.map(a=>`<div class="badge ${s.achievements.includes(a[0])?'':'locked'}"><div>${a[1]}</div><b>${a[2]}</b><small>${s.achievements.includes(a[0])?'Terbuka':'Terkunci'}</small></div>`).join('')}</section><div class="completion panel"><b>🏆 ${p===100?'Perjalanan investigasi selesai!':'Perjalanan masih berlangsung.'}</b><button class="btn primary" onclick="App.go('home')">Kembali ke Beranda</button></div></div>`;}
};

document.addEventListener('DOMContentLoaded',()=>App.init());
