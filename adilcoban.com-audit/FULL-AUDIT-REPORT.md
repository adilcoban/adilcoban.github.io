# SEO Audit — https://www.adilcoban.com/

Date: 2026-09-30 · Business type: Local Service (brick-and-mortar women's hair salon, Kırşehir, TR) · Site: single-page static site on GitHub Pages

**Method note:** the plugin's Python scripts (render, CWV, crawl) need Python 3.10+ and this Mac has 3.9.6, so they did not run. This audit is a manual review of the live HTML, the local source, and HTTP checks (curl). Subagents were not spawned. Core Web Vitals were NOT measured; the performance score is an estimate from page weight and structure.

## SEO Health Score: 61 / 100

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 70 |
| Content Quality | 23% | 45 |
| On-Page SEO | 20% | 60 |
| Schema | 10% | 75 |
| Performance (estimate) | 10% | 85 |
| AI Search Readiness | 10% | 40 |
| Images | 5% | 70 |

## Top 5 issues
1. **Thin content, one URL.** Everything is on `/`. There are no pages for services (kesim, balyaj/ombre, keratin, gelin saçı). The site cannot rank for any query except the brand and a few generic ones.
2. **Title and H1 carry no location or service keyword.** Title is `Adil Çoban — Bayan Kuaförü`. "Kırşehir" appears only in the meta description and the eyebrow text.
3. **No robots.txt, no sitemap.xml** (both 404), and **no canonical tag**.
4. **Social/OG tags incomplete.** `og:image` and the schema `image` use a relative path (`assets/img/icon-512.png`), which is invalid for crawlers. The image is a 512px square icon, not a 1200×630 share image. There is no `og:url`, `og:locale` or Twitter card.
5. **Product catalog is rendered by JavaScript** (`products.js`). The raw HTML has an empty `.products` div, so product names and descriptions are invisible to non-rendering crawlers.

## Technical SEO (70)
Works: HTTPS, `http→https` and apex→`www` 301s, `lang="tr"`, viewport, valid favicons and apple-touch-icon, clean single H1, tiny CSS/JS (27 KB).
- **High:** robots.txt and sitemap.xml missing (404).
- **Medium:** no `<link rel="canonical">`. Duplicate risk across `adilcoban.com` and `www` is mitigated by the redirect, but declare it anyway.
- **Low:** no custom 404.html (GitHub Pages default is served).
- **Low:** GitHub Pages cannot set security headers (CSP, HSTS config, X-Frame-Options). Acceptable for this site. Cloudflare in front would allow them.
- **Low:** `cache-control: max-age=600` (GitHub default). Versioned `?v=` query strings on CSS/JS are in place, which is fine.

## On-Page SEO (60)
- **High:** title lacks "Kırşehir" and any service term. Suggest: `Kırşehir Bayan Kuaförü | Adil Çoban — Kesim, Boya, Gelin Saçı` (~58 chars).
- **Medium:** H1 `Güzel saç, her zaman modadır.` has no keyword. Keep the brand line but add a visible keyword line or change the eyebrow into the H1's text, e.g. "Kırşehir'de bayan kuaförü".
- Meta description is good (113 chars, has location, services and a CTA). It could mention Tuesday closed or "randevu".
- **Medium:** heading structure is sound (H1 → H2s → H3), but H2s are all slogans (`Acele etmeden, sizi dinleyerek.`). They give search engines no topical signal.
- **Low:** internal linking is anchor-only. That is fine for one page, but it will matter once service pages exist.

## Content Quality / E-E-A-T (45)
- **High:** total visible body copy is very short; the service list (kesim, renklendirme, bakım, gelin saçı) that the meta description promises is not on the page as real content. `assets/hizmetler/` holds 6 images (7.5 MB) that are not referenced anywhere.
- **Medium:** trust signals are weak. There are no reviews or testimonials, no prices or price ranges, and the team ("Uzman ekip: 2") is unnamed. "%100 Profesyonel ürün" is a slogan, not evidence.
- **Medium:** FAQ is good for intent (4 real questions) but could cover price, hair types, bridal packages, parking or location in the İş Hanı (Kat 5 is hard to find — directions help conversions and local SEO).
- Positive: Adil Çoban is named with a portrait and role; NAP is complete and consistent between page, schema and WhatsApp/tel links.

## Schema (75)
Present: `HairSalon` JSON-LD with address, geo, phone, hours, sameAs, hasMap. Hours match the visible hours (Tuesday closed).
- **High:** `image` is relative. Use an absolute URL.
- **Medium:** missing `url`, `@id`, `priceRange`, `areaServed`, `inLanguage`, and a `logo`. `telephone` should be `+905466013241` (no spaces).
- **Low:** add `FAQPage` markup for the 4 questions. Google no longer shows FAQ rich results for most sites, but it helps AI/answer engines parse the Q&A.
- Do not add `aggregateRating` unless real, visible reviews exist on the page.

## Performance — estimate only (85)
- Page HTML 13.5 KB, CSS 18 KB, JS 8.6 KB. Hero 247 KB, gallery 6 × 200–380 KB (about 1.7 MB lazy-loaded). Hero has `fetchpriority="high"` and explicit dimensions. That's a good base.
- **Medium:** Google Fonts stylesheet is render-blocking and loads two families. Self-hosting (woff2, `font-display: swap`) removes one third-party round trip.
- **Medium:** the CTA background is fetched from `picsum.photos`, a random third-party stock image. It adds a third-party dependency and a generic look, and it is not your brand. Replace it with a local optimized photo.
- **Low:** GoatCounter is async and light. Fine.
- Run PageSpeed Insights on the live URL to get real LCP/INP/CLS. I could not measure them here.

## Images (70)
- **Medium:** gallery alts are `Salonumuzdan çalışma örneği 1…6`. Describe each (e.g. "Balyaj boyalı uzun kahverengi saç, Kırşehir"). Hero and portrait alts are good.
- **Medium:** all photos are JPG/PNG. WebP/AVIF would cut roughly 30–50%.
- **Low:** unreferenced heavy files in the repo (`logo1.PNG` 758 KB, `logo2.PNG` 232 KB, `assets/hizmetler/` 7.5 MB). They are publicly served but not linked, so they waste nothing for visitors, but clean up.
- Positive: explicit width/height (no CLS), `loading="lazy"` below the fold.

## Local SEO (brick-and-mortar)
- **High (off-page):** Google Business Profile is the main ranking lever for "Kırşehir kuaför". Confirm it is claimed and complete: categories (Hair salon, Bridal hairdresser), services, photos, hours, the website URL with UTM, and review request link. The Maps link on the page is a short link; add a `Yorum bırakın` link and an embedded map.
- **Medium:** add "Kırşehir" naturally in H2s and body, and mention landmarks/neighborhood (Ahievran Mah., Hacı Hasan Özdemir İş Hanı, Kat 5) for directions.
- **Medium:** keep NAP identical on Instagram, GBP and any directory listings (phone shown as `0546 601 32 41` on the page).

## AI Search Readiness (40)
- No robots.txt means all AI crawlers are allowed (good), but it is worth declaring explicitly.
- Very little quotable text. Add concise, factual passages (service descriptions, durations, price ranges, who does them, where the salon is). The FAQ is the best current asset.
- `llms.txt` is optional and ignored by Google. Low priority.

## Not assessed
Backlinks (no API credentials), Search Console / GA4 data (not connected), SERP rankings (no DataForSEO), hreflang (single-language site, not needed), e-commerce (not a store).
