/* =========================================================
   ÜRÜNLERİMİZ — ürün listesi
   Yeni ürün eklemek için aşağıdaki listeye bir blok kopyalayın.

   kategori : Filtre sekmesinde görünen ad. Aynı yazılan ürünler
              aynı sekmede toplanır; yeni bir ad yazarsanız yeni
              sekme otomatik oluşur.
   gorsel   : assets/urunler/ klasörüne koyduğunuz fotoğrafın
              yolu, ör. "assets/urunler/sampuan.jpg"
   kirp     : (isteğe bağlı) true yazarsanız fotoğraf kartı tamamen
              doldurur (kenarlar kırpılır). Arka planı renkli olan
              fotoğraflar için. Yazmazsanız ürün, beyaz zemin
              üzerinde bütünüyle görünür.
   ========================================================= */
window.PRODUCTS = [
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Absolut Repair Şampuan',
    aciklama: 'Protein ve altın kinoa içerir. Kuru ve yıpranmış saçı ilk yıkamadan itibaren onarır.',
    gorsel: 'assets/urunler/absolut-repair-shampoo.webp'
  },
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Absolut Repair Maske',
    aciklama: 'Protein ve altın kinoalı yoğun bakım maskesi. Kuru ve yıpranmış saça yumuşaklık ve parlaklık verir.',
    gorsel: 'assets/urunler/absolut-repair-mask.webp'
  },
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Absolut Repair Bakım Yağı',
    aciklama: '10\'u 1 arada durulanmayan yağ. Uçları besler, elektriklenmeyi azaltır.',
    gorsel: 'assets/urunler/absolut-repair-oil.webp'
  },
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Absolut Repair Molecular Şampuan',
    aciklama: 'Peptit bağlayıcı ve 5 amino asit içerir. Saçın yapısını molekül düzeyinde onarır, gücünü ve esnekliğini geri kazandırır.',
    gorsel: 'assets/urunler/absolut-repair-molecular-shampoo.webp'
  },
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Absolut Repair Molecular Serum',
    aciklama: 'Yıkama sırasında uygulanan, durulanan profesyonel serum. Saçın derinine işler, yıpranmış yapıyı güçlendirir.',
    gorsel: 'assets/urunler/absolut-repair-molecular-serum.webp'
  },
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Absolut Repair Molecular Durulanmayan Maske',
    aciklama: 'Durulanmayan onarıcı maske. Saça güç ve hareket kazandırır, ısıya karşı korur.',
    gorsel: 'assets/urunler/absolut-repair-molecular-mask.webp'
  },
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Metal Detox Maske',
    aciklama: 'Boya, balyaj ve açma sonrası saçta metal birikimini önler. Kırılmayı azaltır, rengi korur.',
    gorsel: 'assets/urunler/metal-detox-mask.webp'
  },
  {
    kategori: 'Bakım',
    marka: "L'Oréal Professionnel",
    ad: 'Metal Detox Profesyonel Bakım',
    aciklama: 'Boya, balyaj ve açma işlemlerinden sonra salonda uygulanan koruyucu bakım.',
    gorsel: 'assets/urunler/metal-detox-professional-care.webp'
  },
  {
    kategori: 'Boya',
    marka: 'Schwarzkopf',
    ad: 'Igora Royal Saç Boyası',
    aciklama: 'Geniş renk kartelası, yoğun ve kalıcı renk. Beyazları tam kapatır.',
    gorsel: 'assets/urunler/igora-hair-color.webp',
    kirp: true
  },
  {
    kategori: 'Boya',
    marka: 'Schwarzkopf',
    ad: 'BlondMe Açıcı 9+',
    aciklama: '9 tona kadar açma. Bağ koruma teknolojisiyle balyaj ve röflede saçı yıpratmadan aydınlatır.',
    gorsel: 'assets/urunler/blond-me-bleach.webp',
    kirp: true
  },
  {
    kategori: 'Boya',
    marka: 'Keune',
    ad: 'Tinta Color Saç Boyası',
    aciklama: 'İpek proteini ve UV korumalı profesyonel boya. Canlı, uzun süre solmayan renk.',
    gorsel: 'assets/urunler/keune-tinta-color.webp',
    kirp: true
  },
  {
    kategori: 'Bakım',
    marka: 'Jasumi',
    ad: '11 Flash Magic Bakım Spreyi',
    aciklama: 'Durulanmayan yoğun bakım kremi. Tüm saç tiplerinde kolay tarama ve yumuşaklık sağlar.',
    gorsel: 'assets/urunler/jasumi-11-intense.webp',
    kirp: true
  }
];
