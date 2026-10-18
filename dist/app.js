const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Mobile menu
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#mobile-menu');
function setMenu(open) {
  if (!menu) return;
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
}
menuButton?.addEventListener('click', () => setMenu(menu.hidden));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Dialogs
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => document.getElementById(b.dataset.open).showModal()));
document.querySelectorAll('dialog').forEach(d => {
  d.querySelector('.close-dialog')?.addEventListener('click', () => d.close());
  d.addEventListener('click', e => { if (e.target === d) d.close(); });
});

// Statement: split into words so each can light up
document.querySelectorAll('.words').forEach(el => {
  // Keep the original spacing so particles like "질문에서" stay attached to the highlighted word.
  el.innerHTML = [...el.childNodes].map(n => n.textContent.split(/(\s+)/).map(t =>
    /^\s*$/.test(t) ? t : `<span class="w${n.nodeName === 'EM' ? ' hl' : ''}">${t}</span>`).join('')).join('').trim();
});

// Header: glass after scrolling, hide while scrolling down
const header = document.querySelector('.header');
let lastY = scrollY;

// Scroll-linked progress (--p) for [data-track] elements
const tracked = [...document.querySelectorAll('[data-track]')];
function frame() {
  const y = scrollY, vh = innerHeight;
  header?.classList.toggle('scrolled', y > 8);
  header?.classList.toggle('hide', y > lastY && y > 400 && menu?.hidden !== false);
  lastY = y;
  if (reduce) return;
  for (const el of tracked) {
    const r = el.getBoundingClientRect();
    const p = clamp((vh - r.top) / (vh + r.height));
    el.style.setProperty('--p', p.toFixed(4));
    if (el.classList.contains('words')) {
      const ws = el.children, lit = Math.floor(clamp((p - .2) / .45) * ws.length);
      for (let i = 0; i < ws.length; i++) ws[i].classList.toggle('on', i < lit);
    }
  }
}
let ticking = false;
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { frame(); ticking = false; }); } };
addEventListener('scroll', onScroll, {passive: true});
addEventListener('resize', onScroll);
frame();

// Reveal on enter
if ('IntersectionObserver' in window && !reduce) {
  root.classList.add('js');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .15, rootMargin: '0px 0px -8% 0px'});
  document.querySelectorAll('.r').forEach(el => io.observe(el));
}

// Tile spotlight follows the pointer
document.querySelectorAll('.tile').forEach(t => t.addEventListener('pointermove', e => {
  const r = t.getBoundingClientRect();
  t.style.setProperty('--mx', `${e.clientX - r.left}px`);
  t.style.setProperty('--my', `${e.clientY - r.top}px`);
}));
