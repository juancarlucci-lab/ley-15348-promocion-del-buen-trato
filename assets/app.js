(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('abierto'));
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('abierto')));
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  const galeria = document.getElementById('galeria');
  const lb = document.getElementById('lightbox');
  if (!galeria || !lb) return;

  const lbImg = document.getElementById('lbImg');
  const lbPie = document.getElementById('lbPie');
  const items = Array.from(galeria.querySelectorAll('.lamina'));
  let actual = 0;

  const abrir = (i) => {
    actual = (i + items.length) % items.length;
    const fig = items[actual];
    const img = fig.querySelector('img');
    lbImg.src = img.getAttribute('src');
    lbImg.alt = img.alt;
    lbPie.textContent = fig.querySelector('figcaption').textContent + ' · ' + (actual + 1) + ' / ' + items.length;
    lb.classList.add('abierto');
    document.body.style.overflow = 'hidden';
  };

  const cerrar = () => {
    lb.classList.remove('abierto');
    document.body.style.overflow = '';
  };

  items.forEach((fig, i) => fig.addEventListener('click', () => abrir(i)));
  document.getElementById('lbCerrar').addEventListener('click', cerrar);
  document.getElementById('lbPrev').addEventListener('click', (e) => { e.stopPropagation(); abrir(actual - 1); });
  document.getElementById('lbNext').addEventListener('click', (e) => { e.stopPropagation(); abrir(actual + 1); });
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbImg) cerrar(); });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('abierto')) return;
    if (e.key === 'Escape') cerrar();
    if (e.key === 'ArrowLeft') abrir(actual - 1);
    if (e.key === 'ArrowRight') abrir(actual + 1);
  });
})();
