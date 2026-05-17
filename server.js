const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./data/products');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse query params
app.use(express.urlencoded({ extended: true }));

// Global template data
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.currentUrl = req.originalUrl;
  next();
});

// ── Routes ──

// Homepage
app.get('/', (req, res) => {
  const featured = db.getFeaturedProducts();
  const trending = db.getTrendingProducts();
  const stats = db.getStats();
  const categories = db.getCategories();
  res.render('home', { featured, trending, stats, categories, title: 'CottonFinder — Find 100% Cotton Products' });
});

// Search / Browse
app.get('/search', (req, res) => {
  const { q, category, subcategory, cottonMin, organic, priceMin, priceMax, retailer, sort } = req.query;
  const filters = { category, subcategory, cottonMin, organic, priceMin, priceMax, retailer, sort };
  const results = db.searchProducts(q || '', filters);
  const categories = db.getCategories();
  const subcategories = db.getSubcategories();
  const retailers = db.getRetailers();

  res.render('search', {
    results,
    query: q || '',
    filters,
    categories,
    subcategories,
    retailers,
    resultCount: results.length,
    title: q ? `Search: ${q} — CottonFinder` : 'Browse All Products — CottonFinder'
  });
});

// Category page
app.get('/category/:category', (req, res) => {
  const category = req.params.category;
  const products = db.getProductsByCategory(category);
  const categories = db.getCategories();

  res.render('category', {
    category,
    products,
    categories,
    productCount: products.length,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} — CottonFinder`
  });
});

// Product detail page
app.get('/product/:id', (req, res) => {
  const product = db.getProductById(req.params.id);
  if (!product) {
    return res.status(404).render('error', {
      error: { status: 404, message: 'Product not found' },
      title: 'Not Found — CottonFinder'
    });
  }

  // Get related products (same category, excluding current)
  const related = db.getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  res.render('product', {
    product,
    related,
    title: `${product.name} — CottonFinder`
  });
});

// Why Cotton page
app.get('/why-cotton', (req, res) => {
  res.render('why-cotton', { title: 'Why Choose Cotton? — CottonFinder' });
});

// About page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About — CottonFinder' });
});

// Sitemap
app.get('/sitemap.xml', (req, res) => {
  const baseUrl = `https://cottonfinder.xyz`;
  const products = db.getAllProducts();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <url><loc>${baseUrl}</loc><changefreq>daily</changefreq><priority>1.0</priority></url>\n`;
  xml += `  <url><loc>${baseUrl}/search</loc><changefreq>daily</changefreq><priority>0.9</priority></url>\n`;
  xml += `  <url><loc>${baseUrl}/why-cotton</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
  xml += `  <url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>\n`;

  for (const p of products) {
    xml += `  <url><loc>${baseUrl}/product/${p.id}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>\n`;
  }

  xml += `</urlset>`;
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: https://cottonfinder.xyz/sitemap.xml`);
});

// 404
app.use((req, res) => {
  res.status(404).render('error', {
    error: { status: 404, message: 'Page not found' },
    title: '404 — CottonFinder'
  });
});

app.listen(PORT, () => {
  console.log(`🌿 CottonFinder running on http://localhost:${PORT}`);
  console.log(`   ${db.getStats().totalProducts} products loaded`);
});
