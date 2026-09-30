# Adil Çoban Bayan Kuaförü — Web Sitesi

Bayan kuaförü için minimalist, tamamen statik (HTML/CSS/JS) web sitesi. Build adımı yoktur; GitHub Pages'da doğrudan çalışır.

## Yapı
```
index.html            # Tüm içerik (tek sayfa)
assets/css/style.css  # Renkler/fontlar en üstteki :root değişkenlerinde
assets/js/main.js     # Menü, scroll animasyonları, SSS, ürün listesi
assets/js/products.js # Ürünlerimiz bölümündeki ürünler (buradan düzenlenir)
assets/img/           # Kendi fotoğraflarınızı buraya koyun
.nojekyll             # GitHub Pages'in Jekyll işlemesini kapatır
```

## Özelleştirme
- **Fotoğraflar:** `index.html` içindeki `picsum.photos` adresleri geçici. Fotoğrafları `assets/img/` klasörüne koyup `src="assets/img/hero.jpg"` gibi **göreli** yollarla değiştirin.
- **Ürünler:** `assets/js/products.js` içindeki listeye bir blok kopyalayıp düzenleyin. `kategori` alanına yeni bir ad yazarsanız filtre sekmesi otomatik oluşur. Ürün fotoğraflarını `assets/urunler/` klasörüne koyun.
- **Telefon / WhatsApp:** 0546 601 32 41 — linklerde `905466013241` olarak geçer (tel: ve wa.me). Numara değişirse bu ifadeyi aratıp değiştirin.
- **Adres, saatler, Instagram linki:** `index.html` içinde.
- **Renkler:** `style.css` → `--accent` (bej buton rengi), `--bg`, `--ink`.

## GitHub Pages'a yayınlama
1. Repoyu GitHub'a gönderin.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
3. Site `https://<kullanıcı>.github.io/<repo>/` adresinde yayınlanır.

Tüm yollar göreli olduğu için alt klasör (repo adı) altında da sorunsuz çalışır. Başında `/` olan mutlak yollar kullanmayın.

## Önbellek (cache)
CSS veya JS dosyalarını değiştirdiğinizde `index.html` içindeki `?v=` sayısını bir artırın (ör. `?v=4` → `?v=5`). Böylece ziyaretçilerin tarayıcısı eski dosyayı göstermez.
