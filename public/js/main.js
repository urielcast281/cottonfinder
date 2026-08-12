// CottonFinder — Main JavaScript

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  const open = menu.classList.toggle('open');
  const btn = document.querySelector('.mobile-menu-btn');
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// Close mobile menu on link click
document.addEventListener('click', function(e) {
  const link = e.target.closest('.mobile-menu a');
  if (link) {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.remove('open');
    const btn = document.querySelector('.mobile-menu-btn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lazy loading images (fallback for older browsers)
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
} else {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.src = img.dataset.src || img.src;
  });
}

// Add to recently viewed (localStorage)
function trackProductView(productId, productName) {
  try {
    let recent = JSON.parse(localStorage.getItem('cf_recent') || '[]');
    recent = recent.filter(p => p.id !== productId);
    recent.unshift({ id: productId, name: productName, time: Date.now() });
    recent = recent.slice(0, 10);
    localStorage.setItem('cf_recent', JSON.stringify(recent));
  } catch (e) { /* ignore */ }
}

// Track product views on product pages.
// Read the id from the URL — scraping the first /product/ link on the page
// would pick up a *related* product instead of the one being viewed.
document.addEventListener('DOMContentLoaded', function() {
  const productTitle = document.querySelector('.product-title');
  if (!productTitle) return;
  const match = window.location.pathname.match(/^\/product\/([^/?#]+)/);
  if (match && match[1]) {
    trackProductView(decodeURIComponent(match[1]), productTitle.textContent.trim());
  }
});

const prefersReducedMotion = window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== Scroll-reveal: gently fade cards & titles into view =====
(function () {
  const targets = document.querySelectorAll(
    '.product-card, .category-card, .why-card, .section-title'
  );
  // No JS reveal support (or reduced motion) → show everything immediately
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('reveal-on');
    return;
  }
  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = el.parentNode ? el.parentNode.children : [el];
      const idx = Array.prototype.indexOf.call(siblings, el);
      el.style.transitionDelay = Math.min(idx % 8, 7) * 55 + 'ms';
      el.classList.add('in');
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function (t) { observer.observe(t); });
})();

// ===== Animated stat counters on the hero =====
(function () {
  const nums = document.querySelectorAll('.hero-stats .stat-number');
  if (!nums.length) return;
  nums.forEach(function (el) {
    const match = el.textContent.trim().match(/^([\d,]+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2] || '';
    if (isNaN(target)) return;
    const finalText = target.toLocaleString() + suffix;
    if (prefersReducedMotion) { el.textContent = finalText; return; }
    const duration = 1200;
    let start = null;
    el.textContent = '0' + suffix;
    function step(ts) {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = finalText;
    }
    requestAnimationFrame(step);
    // Guarantee the final value even if rAF is throttled/paused
    setTimeout(function () { el.textContent = finalText; }, duration + 250);
  });
})();

// ===== Back-to-top button + header elevation on scroll =====
(function () {
  const btn = document.querySelector('.back-to-top');
  const header = document.querySelector('.header');
  function onScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    if (btn) btn.classList.toggle('show', y > 600);
    if (header) header.classList.toggle('scrolled', y > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (btn) {
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }
})();

// ===== Image fade-in with a graceful cotton-boll fallback =====
(function () {
  const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>" +
    "<rect width='400' height='400' fill='#f1ece3'/>" +
    "<g fill='#ffffff' stroke='#e3d8c9' stroke-width='2'>" +
    "<circle cx='200' cy='180' r='46'/><circle cx='160' cy='205' r='40'/>" +
    "<circle cx='240' cy='205' r='40'/><circle cx='200' cy='226' r='44'/></g>" +
    "<circle cx='200' cy='205' r='13' fill='#cdbfa9'/>" +
    "<text x='200' y='305' font-family='sans-serif' font-size='19' fill='#b5a69a' " +
    "text-anchor='middle'>CottonFinder</text></svg>"
  );
  const imgs = document.querySelectorAll('.product-image img, .product-main-image');
  imgs.forEach(function (img) {
    function loaded() { img.classList.add('img-loaded'); }
    function failed() {
      img.onerror = null;
      if (img.getAttribute('src') !== PLACEHOLDER) img.src = PLACEHOLDER;
      img.classList.add('img-loaded');
    }
    if (img.complete) {
      if (img.naturalWidth > 0) loaded(); else failed();
    } else {
      img.addEventListener('load', loaded);
      img.addEventListener('error', failed);
    }
  });
})();
