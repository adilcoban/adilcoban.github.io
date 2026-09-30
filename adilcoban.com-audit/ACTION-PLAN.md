# Action Plan — adilcoban.com

## Critical
None. The site is indexable and served correctly over HTTPS.

## High (this week)
1. Add `robots.txt` (allow all + `Sitemap:` line) and `sitemap.xml` in the repo root. Submit the sitemap in Google Search Console.
2. Rewrite `<title>` to include Kırşehir and a service term. Add `<link rel="canonical" href="https://www.adilcoban.com/">`.
3. Fix `og:image` and schema `image` to absolute URLs. Create a 1200×630 share image (salon photo + logo). Add `og:url`, `og:locale=tr_TR`, `twitter:card=summary_large_image`.
4. Add a real services section to the page (kesim, renklendirme/balyaj/ombre, bakım/keratin, gelin saçı) with 2–3 sentences each and, if possible, price ranges.
5. Confirm and complete the Google Business Profile; add a review link to the site.

## Medium (within 1 month)
6. Render the product list server-side (static HTML generated once) or add a `<noscript>` fallback, so product names and descriptions are in the raw HTML.
7. Replace the `picsum.photos` CTA image with a local optimized photo.
8. Descriptive gallery alt texts; convert photos to WebP with JPG fallback.
9. Schema: add `url`, `@id`, `priceRange`, `areaServed`, `logo`, normalize `telephone`, and add `FAQPage`.
10. Self-host the two Google fonts (`font-display: swap`).
11. Add trust content: team names/roles, a few real testimonials (only if real), before/after photos with consent.
12. Expand the FAQ (prices, bridal package, where to find Kat 5, payment).

## Low (backlog)
13. Dedicated pages later: `/gelin-sacı`, `/balyaj-ombre`, `/kesim`, each with its own title, schema `Service` and images, linked from the nav.
14. Custom `404.html`.
15. Delete unused files: `assets/hizmetler/`, `assets/img/logo1.PNG`, `logo2.PNG`, `.DS_Store` files.
16. Optional `llms.txt`.

## Monitoring
- Run PageSpeed Insights on the live URL and record LCP/INP/CLS.
- Connect Search Console; check Index coverage and queries after 4 weeks.
- To run the plugin's scripts (CWV, crawl, PDF report) install Python 3.10+ (`brew install python@3.12`) then `/seo setup`.
