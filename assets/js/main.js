(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');

  // Header: transparent over hero, solid after scrolling past it
  var hero = document.querySelector('.hero');
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle('scrolled', !entries[0].isIntersecting);
    }, { rootMargin: '-80px 0px 0px 0px' }).observe(hero);
  } else {
    header.classList.add('scrolled');
  }

  // Mobile menu
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
    menu.hidden = !open;
    header.classList.toggle('menu-open', open);
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  // Sadece genişlik değişince çalış; telefonda adres çubuğu gizlenirken yükseklik değişir, onu yok say
  var lastWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    if (lastWidth > 1140) setMenu(false);
  });

  // Products: render from window.PRODUCTS (assets/js/products.js) with category filters
  var productGrid = document.querySelector('.products');
  var filterBar = document.querySelector('.product-filters');
  var products = window.PRODUCTS || [];
  if (productGrid && products.length) {
    var esc = function (str) {
      return String(str || '').replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    };
    productGrid.innerHTML = products.map(function (p) {
      return '<article class="product reveal" data-cat="' + esc(p.kategori) + '">' +
        '<div class="product-media' + (p.kirp ? ' is-cover' : '') + '"><img src="' + esc(p.gorsel) + '" alt="' + esc(p.marka + ' ' + p.ad) + '" loading="lazy"></div>' +
        '<div class="product-body">' +
          '<span class="tag">' + esc(p.kategori) + '</span>' +
          '<p class="product-brand" lang="en">' + esc(p.marka) + '</p>' +
          '<h3>' + esc(p.ad) + '</h3>' +
          (p.aciklama ? '<p class="product-desc">' + esc(p.aciklama) + '</p>' : '') +
        '</div></article>';
    }).join('');

    var cats = products.map(function (p) { return p.kategori; })
      .filter(function (c, i, all) { return c && all.indexOf(c) === i; });
    filterBar.innerHTML = ['Tümü'].concat(cats).map(function (c, i) {
      return '<button type="button" data-cat="' + (i ? esc(c) : '') + '" aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>';
    }).join('');

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var cat = btn.getAttribute('data-cat');
      filterBar.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      productGrid.querySelectorAll('.product').forEach(function (card) {
        card.hidden = !!cat && card.getAttribute('data-cat') !== cat;
      });
      productGrid.scrollLeft = 0;
    });
  } else if (filterBar) {
    filterBar.hidden = true;
  }

  // Scroll reveal with stagger per parent
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var parents = new Map();
    items.forEach(function (el) {
      var p = el.parentElement;
      var i = parents.get(p) || 0;
      el.style.setProperty('--i', i);
      parents.set(p, i + 1);
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // FAQ: keep only one open
  document.querySelectorAll('.faq details').forEach(function (d, _, all) {
    d.addEventListener('toggle', function () {
      if (d.open) all.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
