// CottonFinder — Main JavaScript

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Close mobile menu on link click
document.addEventListener('click', function(e) {
  const link = e.target.closest('.mobile-menu a');
  if (link) {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.remove('open');
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
  // Fallback: load all images
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

// Track product views on product pages
document.addEventListener('DOMContentLoaded', function() {
  const productTitle = document.querySelector('.product-title');
  const productLink = document.querySelector('a[href^="/product/"]');
  if (productTitle && productLink) {
    const id = productLink.href.split('/product/')[1];
    if (id) trackProductView(id, productTitle.textContent);
  }
});

// Console branding
console.log('%c 🌿 CottonFinder ', 'background: linear-gradient(45deg, #4ade80, #22c55e); color: #000; font-size: 16px; font-weight: bold; padding: 6px 12px; border-radius: 4px;');
console.log('%c Find 100% cotton products from top retailers', 'color: #a0a0a0; font-size: 11px;');
