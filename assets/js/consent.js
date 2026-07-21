/*
 * Cookie-consent gate for Google Analytics (GA4).
 * GA loads ONLY after the visitor explicitly accepts; declining stores the
 * choice and never loads GA. The choice persists in localStorage and can be
 * changed via the "cookie preferences" link on the privacy page.
 */
(function () {
  var STORAGE_KEY = 'sdl-analytics-consent'; // 'granted' | 'denied'
  var GA_ID = 'G-6KMGVQXQ23';

  function getChoice() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return 'denied'; // storage unavailable → treat as declined
    }
  }

  function setChoice(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  function loadAnalytics() {
    if (window.dataLayer) return; // already loaded
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function removeBanner() {
    var el = document.getElementById('sdl-consent-banner');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function showBanner() {
    if (document.getElementById('sdl-consent-banner')) return;

    var style = document.createElement('style');
    style.textContent =
      '#sdl-consent-banner{position:fixed;left:0;right:0;bottom:0;z-index:1000;' +
      'background:var(--c-surface,#fff);border-top:1px solid var(--c-line-2,rgba(15,22,32,.12));' +
      'box-shadow:0 -4px 24px rgba(15,22,32,.08);padding:14px 20px;font-size:14px;color:var(--c-ink,#0f1620);}' +
      '#sdl-consent-banner .sdl-consent-inner{max-width:960px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center;}' +
      '#sdl-consent-banner p{flex:1 1 320px;margin:0;line-height:1.45;}' +
      '#sdl-consent-banner a{color:var(--c-accent,#2c4866);}' +
      '#sdl-consent-banner button{cursor:pointer;border-radius:6px;padding:8px 16px;font-size:14px;font-family:inherit;}' +
      '#sdl-consent-accept{background:var(--c-accent,#2c4866);color:#fff;border:1px solid var(--c-accent,#2c4866);}' +
      '#sdl-consent-decline{background:transparent;color:var(--c-ink,#0f1620);border:1px solid var(--c-line-2,rgba(15,22,32,.12));}';
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.id = 'sdl-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<div class="sdl-consent-inner">' +
      '<p>We use Google Analytics to understand how visitors find this site. ' +
      'It sets cookies, and only runs if you accept. ' +
      '<a href="/privacy">Privacy policy</a></p>' +
      '<button id="sdl-consent-decline" type="button">Decline</button>' +
      '<button id="sdl-consent-accept" type="button">Accept analytics</button>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById('sdl-consent-accept').addEventListener('click', function () {
      setChoice('granted');
      removeBanner();
      loadAnalytics();
    });
    document.getElementById('sdl-consent-decline').addEventListener('click', function () {
      setChoice('denied');
      removeBanner();
    });
  }

  // Exposed for the "cookie preferences" link on the privacy page.
  window.sdlManageConsent = function () {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    showBanner();
  };

  function init() {
    var choice = getChoice();
    if (choice === 'granted') {
      loadAnalytics();
    } else if (choice !== 'denied') {
      showBanner();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
