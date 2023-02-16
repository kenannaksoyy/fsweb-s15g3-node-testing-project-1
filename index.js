/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  // ✨ kodlar buraya
  const trimObject = {};
  for(let key in obj){
    trimObject[key] = obj[key].trim();
  }
  return trimObject;
}
console.log("nesneyiTrimle",nesneyiTrimle({ isim: '  jane  ' }));

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya
  const trimObject = {};
  for(let key in obj){
    key == prop ? trimObject[key] = obj[key].trim() : trimObject[key] = obj[key];
  }
  return trimObject;
}
console.log("verileniTrimle",verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim'));

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  let max = tamsayilar[0].tamsayi;
  tamsayilar.forEach(t => {
    t.tamsayi > max && (max = t.tamsayi);
  });
  return max;
}
console.log("enBuyukTamsayiyiBul",enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]));

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */
  
  // ✨ gerekli propları ekleyin
  

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.ilkSayi = ilkSayi;
  this.asagiSay = () => {
    // ✨ kodlar buraya
    return this.ilkSayi <= 0 ?  0 : this.ilkSayi--; //dondurme -- operatoru değer dondurultem sonra değişim sağlar
    //this.ilkSayi = this.ilkSayi -1 an değişir
  }
}
const sayici = new Sayici(5);
for(let i = 0; i<=6 ; i++){
  console.log(`asagiSay${i}`,sayici.asagiSay());
};


function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.index = 0;
  this.mevsimler = ["ilkbahar", "yaz", "sonbahar", "kış"];
  this.sonraki = () => {
    // ✨ kodlar buraya
    this.index = (this.index +1) % this.mevsimler.length;
    return this.mevsimler[this.index];
  }
}
const mevsimler = new Mevsimler();
for(let i=0 ; i<8;i++){
  console.log(`mevsimler${i}`,mevsimler.sonraki());
}

function Araba(/*kodlar buraya */isim,depo,kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */
 
    this.odometer = 0 // araba 0 kilometrede yüklenecek
    this.depo = depo // araba full depoyla yüklenecek
    // ✨ gerekli propları ekleyin
    this.isim = isim;
    this.kml = kml;
    this.depoKapasite = depo;
  

  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    const yolKapasite = this.depo * this.kml;
    if(gidilecekyol<=yolKapasite){
      this.odometer = this.odometer + gidilecekyol;
      this.depo = this.depo - gidilecekyol/this.kml
      return this.odometer;
    }
    this.depo = 0;
    this.odometer = this.odometer + yolKapasite;
    return this.odometer;
  }


  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya
    const depoBosLitre = this.depoKapasite - this.depo;
    let kapasiteKm;
    if(litre <= depoBosLitre){
      this.depo = this.depo + litre;
      kapasiteKm = this.depo * this.kml;
      return kapasiteKm;
    }
    this.depo = this.depoKapasite;
    kapasiteKm = this.depo * this.kml;
    return kapasiteKm;
  }
}
const focus = new Araba('focus', 20, 30)
const kmArr = [100,100,100,200,200];
kmArr.forEach(km => {
  console.log("sur", focus.sur(km));
})
const c3 = new Araba('c3', 20, 30)
console.log("c3 sur",c3.sur(600)) // 600 döndürür
console.log("c3 sur",c3.sur(1)) // 600 döndürür (depo boş olduğundan yol gidilemedi)
console.log("c3 benzinal",c3.benzinal(99) )// 600 döndürür (depo yalnızca 20 litre alabiliyor)
/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  return new Promise(res => {
    if(sayi%2 == 0){
      res(true)
    }
    res(false)
    // Promise bekle beni söz
  });
}
asenkronCiftSayi(1).then(res => {
  console.log("asenkronCiftSayi1",res);
});
asenkronCiftSayi(2).then(res => {
  console.log("asenkronCiftSayi2",res); 
});



module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
}
