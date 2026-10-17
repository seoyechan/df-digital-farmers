const root = document.documentElement;
const themeButton = document.querySelector('.theme-button');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
// Theme is intentionally kept in memory: this reference site sets no storage or cookies.
function updateThemeLabel(){ const dark = root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches; themeButton?.setAttribute('aria-label', dark ? '밝은 화면으로 변경' : '어두운 화면으로 변경'); }
updateThemeLabel();
themeButton?.addEventListener('click', () => { const dark = root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches; root.dataset.theme = dark ? 'light' : 'dark'; updateThemeLabel(); });
systemTheme.addEventListener('change', updateThemeLabel);
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#mobile-menu');
function closeMenu(){if(menu){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.textContent='메뉴';}}
menuButton?.addEventListener('click',()=>{menu.hidden=!menu.hidden;menuButton.setAttribute('aria-expanded',String(!menu.hidden));menuButton.textContent=menu.hidden?'메뉴':'닫기';});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>document.getElementById(button.dataset.open).showModal()));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){root.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
