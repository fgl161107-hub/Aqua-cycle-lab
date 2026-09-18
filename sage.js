const SAGE = {
  box(){return `<div id="sageBox" class="sage" aria-live="polite"><div class="sage-head"><div class="sage-avatar">🌿</div><div><strong>SAGE</strong><small>Pendamping Investigasi</small></div><button class="sage-close" onclick="SAGE.close()" aria-label="Tutup">×</button></div><p id="sageText"></p></div>`;},
  show(text){const el=document.getElementById('sageBox');if(!el)return;document.getElementById('sageText').textContent=text;el.classList.add('show');},
  close(){document.getElementById('sageBox')?.classList.remove('show');},
  prediction(answer){if(answer==='Belum yakin')return 'Belum yakin juga boleh. Pilih alasan yang paling sesuai dengan pengamatanmu.';if(answer==='Air berubah menjadi uap')return 'Prediksimu masuk akal. Sekarang kita uji dengan eksperimen.';return 'Menarik. Jangan langsung menganggapnya benar—kita cari buktinya.';},
  result(r){return `Hasilmu: laju penguapan ${r.rate}% dalam ${r.time} menit. Coba hubungkan hasil ini dengan kondisi yang kamu pilih.`;}
};
