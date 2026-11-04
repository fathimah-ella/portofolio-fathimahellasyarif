// Interaksi halaman: ganti bahasa, menu HP, filter keahlian, galeri, salin email, animasi muncul.
(function () {
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ----- Bahasa ----- */
  function setLang(l) {
    root.setAttribute('data-lang', l);
    root.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    $$('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === l ? 'true' : 'false');
    });
    var t = root.getAttribute('data-title-' + l);
    if (t) document.title = t;
  }
  setLang(root.getAttribute('data-lang') === 'id' ? 'id' : 'en');
  $$('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });

  /* ----- Menu HP ----- */
  var nav = $('#nav');
  var burger = $('[data-burger]');
  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('#navlinks a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  /* ----- Garis progres scroll + bayangan nav ----- */
  var bar = $('#progress');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, h.scrollTop / max) : 0) + ')';
    if (nav) nav.classList.toggle('scrolled', h.scrollTop > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Menu aktif sesuai bagian yang sedang dilihat ----- */
  var links = {};
  $$('[data-nav]').forEach(function (a) { links[a.getAttribute('data-nav')] = a; });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.toggle('active', k === en.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (k) { var s = document.getElementById(k); if (s) spy.observe(s); });
  }

  /* ----- Filter keahlian ----- */
  var filters = $$('.filter');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      var key = f.getAttribute('data-filter');
      filters.forEach(function (x) { x.setAttribute('aria-pressed', x === f ? 'true' : 'false'); });
      $$('.skill-group').forEach(function (g) {
        g.hidden = !(key === 'all' || g.getAttribute('data-group') === key);
      });
      var shown = 0;
      $$('.skills__col').forEach(function (c) {
        var any = $$('.skill-group', c).some(function (g) { return !g.hidden; });
        c.hidden = !any;
        if (any) shown++;
      });
      var grid = $('#skillsgrid');
      if (grid) grid.classList.toggle('single', shown === 1);
    });
  });

  /* ----- Galeri proyek: geser (swipe / drag / tombol / titik) ----- */
  var dragMoved = false;
  $$('[data-gallery]').forEach(function (g) {
    var track = $('.gallery__track', g);
    var count = $('[data-gal-count]', g);
    var dots = $$('.gal-dot', g);
    var n = track.children.length;
    function cur() { return Math.min(n - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth))); }
    function go(i) { i = Math.min(n - 1, Math.max(0, i)); track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' }); }
    function update() {
      var i = cur();
      if (count) count.textContent = (i + 1) + ' / ' + n;
      dots.forEach(function (d, k) { d.classList.toggle('on', k === i); });
    }
    track.addEventListener('scroll', update, { passive: true });
    $$('[data-gal]', g).forEach(function (b) {
      b.addEventListener('click', function () {
        var i = cur() + Number(b.getAttribute('data-gal'));
        if (i < 0) i = n - 1; if (i > n - 1) i = 0;
        go(i);
      });
    });
    dots.forEach(function (d) { d.addEventListener('click', function () { go(Number(d.getAttribute('data-gal-to'))); }); });
    // Geser dengan mouse (di layar sentuh sudah otomatis bisa digeser)
    var down = false, sx = 0, sl = 0;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; dragMoved = false; sx = e.clientX; sl = track.scrollLeft;
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - sx;
      if (Math.abs(dx) > 6) { dragMoved = true; track.classList.add('dragging'); }
      if (dragMoved) track.scrollLeft = sl - dx;
    });
    window.addEventListener('pointerup', function () {
      if (!down) return;
      down = false;
      if (dragMoved) { track.classList.remove('dragging'); go(cur()); setTimeout(function () { dragMoved = false; }, 0); }
    });
  });

  /* ----- Salin email ----- */
  $$('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      function done() {
        b.classList.add('copied');
        setTimeout(function () { b.classList.remove('copied'); }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta); done();
      }
    });
  });

  /* ----- Animasi muncul saat di-scroll ----- */
  var items = $$('.reveal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    root.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }


  /* ----- Pratinjau layar penuh: gambar, video, PDF (bisa digeser antar file) ----- */
  var lb = $('#lightbox'), stage = $('#lb-stage'), lbTitle = $('#lb-title'), lbOpen = $('#lb-open'), lbCount = $('#lb-count');
  var lbPrev = $('#lb-prev'), lbNext = $('#lb-next');
  var list = [], idx = 0, lastFocus = null, fromGallery = null;
  function itemOf(a) { return { src: a.getAttribute('href'), type: a.getAttribute('data-type'), title: a.getAttribute('data-title') || '' }; }
  function show(i, dir) {
    if (!list.length) return;
    idx = (i + list.length) % list.length;
    var it = list[idx], el;
    stage.innerHTML = '';
    if (it.type === 'video') { el = document.createElement('video'); el.src = it.src; el.controls = true; el.autoplay = true; el.playsInline = true; }
    else if (it.type === 'pdf') { el = document.createElement('iframe'); el.src = it.src; el.title = it.title; }
    else { el = document.createElement('img'); el.src = it.src; el.alt = it.title; el.draggable = false; }
    el.className = 'lb-item' + (dir ? (dir > 0 ? ' from-right' : ' from-left') : '');
    stage.appendChild(el);
    lbTitle.textContent = it.title;
    lbOpen.href = it.src;
    var multi = list.length > 1;
    lbCount.textContent = multi ? (idx + 1) + ' / ' + list.length : '';
    lbPrev.hidden = lbNext.hidden = !multi;
  }
  function openPreview(a) {
    if (!lb) return;
    var g = a.closest('[data-gallery]');
    fromGallery = g;
    var all = g ? $$('[data-preview]', g) : [a];
    list = all.map(itemOf);
    lastFocus = document.activeElement;
    lb.hidden = false;
    root.classList.add('lb-open');
    show(Math.max(0, all.indexOf(a)), 0);
    var c = $('#lb-close'); if (c) c.focus();
  }
  function closePreview() {
    if (!lb || lb.hidden) return;
    lb.hidden = true; stage.innerHTML = '';
    root.classList.remove('lb-open');
    if (fromGallery) {
      var tr = $('.gallery__track', fromGallery);
      if (tr) tr.scrollTo({ left: idx * tr.clientWidth, behavior: 'instant' });
    }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-preview]') : null;
    if (a) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      if (dragMoved) return;
      openPreview(a);
      return;
    }
    if (lb && !lb.hidden && (e.target === lb || e.target === stage || e.target.classList.contains('lightbox__main'))) closePreview();
  });
  var lbClose = $('#lb-close'); if (lbClose) lbClose.addEventListener('click', closePreview);
  if (lbPrev) lbPrev.addEventListener('click', function () { show(idx - 1, -1); });
  if (lbNext) lbNext.addEventListener('click', function () { show(idx + 1, 1); });
  document.addEventListener('keydown', function (e) {
    if (!lb || lb.hidden) return;
    if (e.key === 'Escape') closePreview();
    else if (e.key === 'ArrowLeft') show(idx - 1, -1);
    else if (e.key === 'ArrowRight') show(idx + 1, 1);
  });
  // Geser di layar pratinjau (sentuh atau mouse)
  var tsx = null;
  if (stage) {
    stage.addEventListener('pointerdown', function (e) { if (e.target.tagName !== 'IFRAME' && e.target.tagName !== 'VIDEO') tsx = e.clientX; });
    window.addEventListener('pointerup', function (e) {
      if (tsx === null) return;
      var dx = e.clientX - tsx; tsx = null;
      if (Math.abs(dx) > 60 && list.length > 1) show(idx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    });
  }

  /* ----- Latar graf bergerak (node + garis, mengikuti kursor) ----- */
  var cv = $('#bg');
  if (cv && cv.getContext) {
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, nodes = [], pulses = [], mouse = { x: -9999, y: -9999 };
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var LINK = 150;
    function build() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.max(26, Math.min(95, (W * H) / 15000)));
      nodes = [];
      for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2, sp = 0.12 + Math.random() * 0.32;
        nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, r: 1.3 + Math.random() * 1.9, hot: Math.random() < 0.14 });
      }
      pulses = [];
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      var i, j, a, b, dx, dy, d, al;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        if (!still) {
          dx = a.x - mouse.x; dy = a.y - mouse.y; d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140 && d > 0.1) { a.x += (dx / d) * 0.6; a.y += (dy / d) * 0.6; }
          a.x += a.vx; a.y += a.vy;
          if (a.x < -20) a.x = W + 20; else if (a.x > W + 20) a.x = -20;
          if (a.y < -20) a.y = H + 20; else if (a.y > H + 20) a.y = -20;
        }
      }
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        for (j = i + 1; j < nodes.length; j++) {
          b = nodes[j]; dx = a.x - b.x; dy = a.y - b.y; d = dx * dx + dy * dy;
          if (d < LINK * LINK) {
            al = (1 - Math.sqrt(d) / LINK) * 0.32;
            ctx.strokeStyle = (a.hot || b.hot) ? 'rgba(11,143,124,' + (al * 1.8) + ')' : 'rgba(36,87,230,' + al + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        dx = a.x - mouse.x; dy = a.y - mouse.y; d = Math.sqrt(dx * dx + dy * dy);
        if (d < 190) {
          ctx.strokeStyle = 'rgba(36,87,230,' + (1 - d / 190) * 0.55 + ')';
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        ctx.fillStyle = a.hot ? '#0b8f7c' : 'rgba(36,87,230,0.55)';
        ctx.beginPath(); ctx.arc(a.x, a.y, a.hot ? a.r + 1 : a.r, 0, 6.2832); ctx.fill();
      }
      if (!still) {
        if (pulses.length < 6 && Math.random() < 0.05) {
          a = nodes[(Math.random() * nodes.length) | 0];
          for (j = 0; j < nodes.length; j++) {
            b = nodes[j]; dx = a.x - b.x; dy = a.y - b.y;
            if (b !== a && dx * dx + dy * dy < LINK * LINK) { pulses.push({ a: a, b: b, t: 0 }); break; }
          }
        }
        for (i = pulses.length - 1; i >= 0; i--) {
          var p = pulses[i]; p.t += 0.02;
          if (p.t >= 1) { pulses.splice(i, 1); continue; }
          ctx.fillStyle = '#e08a00';
          ctx.beginPath(); ctx.arc(p.a.x + (p.b.x - p.a.x) * p.t, p.a.y + (p.b.y - p.a.y) * p.t, 2.6, 0, 6.2832); ctx.fill();
        }
      }
    }
    var raf = 0;
    function loop() { frame(); raf = requestAnimationFrame(loop); }
    function start() { if (still) { frame(); } else if (!raf) { loop(); } }
    build(); start();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { build(); if (still) frame(); }, 150); });
    window.addEventListener('mousemove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    window.addEventListener('mouseleave', function () { mouse.x = mouse.y = -9999; });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else { start(); }
    });
  }
})();
