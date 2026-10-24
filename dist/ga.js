// Google Analytics 4 for cochan.co.kr. Every page loads this one file.
// Runs only on the live domain, so local previews don't send test traffic.
const GA_ID = 'G-36ZBBDDE2M'; // GA4 property "Digital Farmers 홈페이지", web stream cochan.co.kr

window.dataLayer = window.dataLayer || [];
window.gtag = function () { dataLayer.push(arguments); };

if (location.hostname === 'cochan.co.kr' && !GA_ID.includes('XXXX')) {
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.append(s);
  gtag('js', new Date());
  gtag('config', GA_ID);
}

// Custom events (farm harvest, game start). Safe to call even when GA is off.
window.dfTrack = (name, params = {}) => gtag('event', name, params);
