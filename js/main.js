/* ============================================
   UNOAVENTI DESIGN STUDIO — main.js
   1. Hamburger menu mobile
   2. Lightbox galleria progetti
   ============================================ */

/* ---- 1. HAMBURGER MENU ---- */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  var btn = document.createElement('button');
  btn.className = 'nav-hamburger';
  btn.setAttribute('aria-label', 'Apri menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML =
    '<span class="ham-line"></span>' +
    '<span class="ham-line"></span>' +
    '<span class="ham-line"></span>';
  nav.appendChild(btn);

  var links = nav.querySelector('.nav-links');
  var open = false;

  btn.addEventListener('click', function () {
    open = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.classList.toggle('is-open', open);
    links.classList.toggle('nav-links--open', open);
  });

  document.addEventListener('click', function (e) {
    if (open && !nav.contains(e.target)) {
      open = false;
      btn.classList.remove('is-open');
      links.classList.remove('nav-links--open');
    }
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      open = false;
      btn.classList.remove('is-open');
      links.classList.remove('nav-links--open');
    });
  });
})();


/* ---- 2. LIGHTBOX GALLERIA ---- */
(function () {

  /* Solo nelle pagine progetto */
  var galleria = document.querySelector('.progetto-galleria');
  if (!galleria) return;

  /* Raccoglie tutti i <figure class="galleria-item"> */
  var items = Array.from(galleria.querySelectorAll('figure.galleria-item'));
  if (items.length === 0) return;

  /* -------- Costruisce overlay -------- */
  var overlay = document.createElement('div');
  overlay.id = 'lb-overlay';
  overlay.innerHTML =
    '<button id="lb-close" aria-label="Chiudi">&#x2715;</button>' +
    '<button id="lb-prev"  aria-label="Precedente">&#x2039;</button>' +
    '<button id="lb-next"  aria-label="Successiva">&#x203a;</button>' +
    '<div id="lb-center">' +
      '<img id="lb-img" src="" alt="">' +
      '<p id="lb-cap"></p>' +
    '</div>' +
    '<div id="lb-count"></div>';
  document.body.appendChild(overlay);

  var lbImg    = document.getElementById('lb-img');
  var lbCap    = document.getElementById('lb-cap');
  var lbCount  = document.getElementById('lb-count');
  var btnClose = document.getElementById('lb-close');
  var btnPrev  = document.getElementById('lb-prev');
  var btnNext  = document.getElementById('lb-next');
  var lbCenter = document.getElementById('lb-center');

  var current = 0;
  var isOpen  = false;

  /* ---- render immagine corrente ---- */
  function render() {
    var fig = items[current];
    var img = fig ? fig.querySelector('img') : null;
    var cap = fig ? fig.querySelector('figcaption') : null;

    lbImg.src = img ? img.src : '';
    lbImg.alt = img ? (img.alt || '') : '';
    lbCap.textContent   = cap ? cap.textContent.trim() : '';
    lbCount.textContent = (current + 1) + ' / ' + items.length;

    btnPrev.style.visibility = items.length > 1 ? 'visible' : 'hidden';
    btnNext.style.visibility = items.length > 1 ? 'visible' : 'hidden';
  }

  function openLb(index) {
    current = index;
    render();
    overlay.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
    isOpen = true;
  }

  function closeLb() {
    overlay.classList.remove('lb-open');
    document.body.style.overflow = '';
    isOpen = false;
    /* Piccolo delay prima di azzerare src per evitare flash */
    setTimeout(function() { lbImg.src = ''; }, 300);
  }

  function goPrev() { current = (current - 1 + items.length) % items.length; render(); }
  function goNext() { current = (current + 1) % items.length; render(); }

  /* ---- Click su ogni figure ---- */
  items.forEach(function (fig, i) {
    fig.setAttribute('role', 'button');
    fig.setAttribute('tabindex', '0');
    fig.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openLb(i);
    });
    /* Accessibilità tastiera */
    fig.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); }
    });
  });

  /* ---- Controlli ---- */
  btnClose.addEventListener('click', function (e) { e.stopPropagation(); closeLb(); });
  btnPrev.addEventListener('click',  function (e) { e.stopPropagation(); goPrev(); });
  btnNext.addEventListener('click',  function (e) { e.stopPropagation(); goNext(); });

  /* Click sfondo scuro (non su contenuto centrale) → chiudi */
  overlay.addEventListener('click', function (e) {
    if (!lbCenter.contains(e.target) && e.target !== btnClose && e.target !== btnPrev && e.target !== btnNext) {
      closeLb();
    }
  });

  /* Tastiera */
  document.addEventListener('keydown', function (e) {
    if (!isOpen) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  goPrev();
    if (e.key === 'ArrowRight') goNext();
  });

})();
