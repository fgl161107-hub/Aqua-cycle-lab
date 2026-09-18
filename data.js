const DATA = {
  materials: {
    air: {
      id:'air', title:'Siklus Air', subtitle:'Perjalanan air di alam',
      desc:'Amati air, telusuri prosesnya, lalu buktikan perubahan melalui eksperimen.',
      cover:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Telaga%20Sarangan%20dan%20Gunung%20Lawu%20-%20Maret%202026.jpg?width=1280'
    },
    ecosystem: {
      id:'ecosystem', title:'Ekosistem', subtitle:'Kehidupan di sawah',
      desc:'Selidiki makhluk hidup, lingkungan, dan hubungan yang menjaga keseimbangan sawah.',
      cover:'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Pemandangan_udara_sawah_subur_Indonesia_dengan_pegunungan_megah.jpg/1280px-Pemandangan_udara_sawah_subur_Indonesia_dengan_pegunungan_megah.jpg'
    }
  },
  waterObjects:[
    {id:'sun',name:'Matahari',kind:'Abiotik',role:'Sumber energi',process:'Evaporasi',x:83,y:10,cls:'sun',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Telaga%20Sarangan%20dan%20Gunung%20Lawu%20-%20Maret%202026.jpg?width=1280',info:'Panas matahari memberi energi yang membantu air di permukaan berubah menjadi uap.'},
    {id:'cloud',name:'Awan',kind:'Abiotik',role:'Tempat kondensasi',process:'Kondensasi',x:27,y:15,cls:'cloud',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arak-arakan%20awan%20yang%20berkumpul%20ke%20segara%20anak%2C%20TN%20Gn.%20Rinjani.jpg?width=1280',info:'Uap air yang naik dan mendingin dapat mengalami kondensasi menjadi titik-titik air yang membentuk awan.'},
    {id:'mountain',name:'Pegunungan',kind:'Abiotik',role:'Daerah tinggi',process:'Runoff',x:45,y:42,cls:'mountain',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Telaga%20Sarangan%20dan%20Gunung%20Lawu%20-%20Maret%202026.jpg?width=1280',info:'Air hujan di daerah tinggi dapat mengalir ke tempat yang lebih rendah dan menjadi bagian dari aliran permukaan.'},
    {id:'waterfall',name:'Air Terjun',kind:'Abiotik',role:'Aliran permukaan',process:'Runoff',x:79,y:52,cls:'waterfall',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pemandangan%20Curug%20Sewu%20di%20Kabupaten%20Kendal.jpg?width=960',info:'Air yang mengalir dari tempat tinggi dapat membentuk air terjun dan terus menuju sungai atau danau.'},
    {id:'lake',name:'Danau',kind:'Abiotik',role:'Penyimpan air',process:'Evaporasi',x:29,y:69,cls:'lake',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Telaga%20Sarangan%20dan%20Gunung%20Lawu%20-%20Maret%202026.jpg?width=1280',info:'Danau menyimpan air permukaan. Sebagian airnya dapat menguap kembali ketika menerima energi panas.'},
    {id:'river',name:'Sungai',kind:'Abiotik',role:'Jalur aliran',process:'Runoff',x:73,y:76,cls:'river',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pemandangan%20Curug%20Sewu%20di%20Kabupaten%20Kendal.jpg?width=960',info:'Air permukaan dapat mengalir melalui sungai menuju danau, laut, atau tempat penampungan lain.'},
    {id:'soil',name:'Tanah',kind:'Abiotik',role:'Media infiltrasi',process:'Infiltrasi',x:48,y:86,cls:'soil',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pemandangan_udara_sawah_subur_Indonesia_dengan_pegunungan_megah.jpg?width=1280',info:'Sebagian air hujan masuk ke pori-pori tanah melalui infiltrasi dan dapat menjadi air tanah.'},
    {id:'plant',name:'Tumbuhan',kind:'Biotik',role:'Melepaskan uap air',process:'Transpirasi',x:13,y:72,cls:'plant',photo:'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Pemandangan_udara_sawah_subur_Indonesia_dengan_pegunungan_megah.jpg/1280px-Pemandangan_udara_sawah_subur_Indonesia_dengan_pegunungan_megah.jpg',info:'Tumbuhan melepaskan uap air melalui stomata daun. Proses ini disebut transpirasi.'}
  ],
  waterStages:[
    ['explore','Eksplorasi','Temukan komponen siklus air'],
    ['classify','Klasifikasi','Kelompokkan peran komponen'],
    ['connect','Hubungkan','Susun urutan proses air'],
    ['experiment','Eksperimen','Ubah kondisi dan amati'],
    ['analysis','Analisis','Baca bukti dari data'],
    ['challenge','Tantangan','Pecahkan masalah lingkungan'],
    ['reflect','Refleksi','Jelaskan kembali temuanmu']
  ],
  ecoObjects:[
    {id:'padi',name:'Padi',type:'Biotik',role:'Produsen',info:'Padi membuat makanan sendiri melalui fotosintesis dan menjadi sumber energi bagi organisme lain.',x:22,y:55,cls:'rice'},
    {id:'belalang',name:'Belalang',type:'Biotik',role:'Konsumen I',info:'Belalang memakan tumbuhan, termasuk padi. Perubahannya dapat memengaruhi tanaman.',x:68,y:62,cls:'grasshopper'},
    {id:'katak',name:'Katak',type:'Biotik',role:'Konsumen II',info:'Katak memakan serangga seperti belalang sehingga membantu mengendalikan populasi serangga.',x:82,y:78,cls:'frog'},
    {id:'ikan',name:'Ikan',type:'Biotik',role:'Konsumen',info:'Ikan hidup di perairan sawah atau saluran irigasi dan menjadi bagian dari jaring-jaring makanan.',x:50,y:86,cls:'fish'},
    {id:'burung',name:'Burung',type:'Biotik',role:'Konsumen',info:'Burung dapat memakan serangga atau organisme kecil lain dan menjadi bagian dari jaring-jaring makanan.',x:73,y:25,cls:'bird'},
    {id:'air',name:'Air',type:'Abiotik',role:'Lingkungan',info:'Air dibutuhkan organisme untuk hidup. Ketersediaannya memengaruhi kondisi ekosistem sawah.',x:34,y:82,cls:'water'},
    {id:'tanah',name:'Tanah',type:'Abiotik',role:'Lingkungan',info:'Tanah menjadi tempat tumbuh padi dan menyediakan air serta mineral yang dibutuhkan tumbuhan.',x:14,y:76,cls:'soil'}
  ],
  ecoStages:[
    ['explore','Eksplorasi','Temukan komponen ekosistem'],['classify','Klasifikasi','Bedakan biotik dan abiotik'],['connect','Hubungkan','Susun hubungan makan dan dimakan'],['simulate','Simulasi','Uji perubahan ekosistem'],['analysis','Analisis','Baca data dan temukan pola'],['challenge','Tantangan','Pecahkan masalah ekosistem'],['reflect','Refleksi','Tulis apa yang kamu pelajari']
  ]
};
