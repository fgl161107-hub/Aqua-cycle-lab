const SAGE = {
  show(text){
    const el=document.getElementById("sageBox");
    if(!el)return;
    document.getElementById("sageText").textContent=text;
    el.classList.add("show");
  },
  close(){document.getElementById("sageBox")?.classList.remove("show")},
  object(key){
    const o=DATA.objects[key];
    this.show(`${o.icon} ${o.name}: ${o.q}`);
  },
  prediction(answer, confidence){
    if(answer==="Belum yakin") return "Tidak apa-apa belum yakin. 🔎 Apa yang bisa kita lakukan untuk mendapatkan bukti?";
    if(answer==="Air berubah menjadi uap") return "Menarik! 🔬 Sekarang mari kita uji apakah hasil eksperimen mendukung prediksimu.";
    return "Itu prediksi yang berani. Jangan langsung mengubahnya—mari kita uji dengan eksperimen.";
  },
  result(result){
    if(result.rate>=65) return `Hasilmu menunjukkan laju penguapan ${result.rate}%. 🔎 Menurutmu, faktor apa yang paling membantu air menguap?`;
    return `Laju penguapan pada percobaanmu ${result.rate}%. Coba bandingkan dengan percobaan lain dan cari faktor yang membuat perbedaannya.`;
  },
  evidence(result){ return `Pada percobaanmu, laju penguapan adalah ${result.rate}% dan waktu simulasi ${result.time} menit. Bukti apa yang paling mendukung kesimpulanmu?`; }
};