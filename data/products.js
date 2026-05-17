// CottonFinder Product Database
// Each product has: id, name, description, category, cottonPercent, price, currency, image, affiliateUrl, retailer, tags, featured

const products = [
  // ── CLOTHING: T-SHIRTS ──
  {
    id: "ts-001",
    name: "Classic 100% Cotton T-Shirt",
    description: "A timeless essential made from 100% organic cotton. Pre-shrunk, breathable, and incredibly soft. Perfect for everyday wear.",
    category: "clothing",
    subcategory: "t-shirts",
    cottonPercent: 100,
    organic: true,
    price: 24.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Comfort Colors",
    tags: ["organic", "basics", "mens", "womens", "casual"],
    featured: true,
    rating: 4.5,
    reviews: 2847
  },
  {
    id: "ts-002",
    name: "Heavyweight Cotton Pocket Tee",
    description: "Thick, durable 100% cotton tee with a relaxed fit. 7.2oz heavyweight fabric that holds its shape wash after wash.",
    category: "clothing",
    subcategory: "t-shirts",
    cottonPercent: 100,
    organic: false,
    price: 19.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B07ZPC9Q4D?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Carhartt",
    tags: ["heavyweight", "pocket", "mens", "workwear", "durable"],
    featured: true,
    rating: 4.7,
    reviews: 5123
  },
  {
    id: "ts-003",
    name: "Supima Cotton V-Neck T-Shirt",
    description: "Luxurious Supima cotton V-neck. Longer staple fibers create an ultra-smooth, pill-resistant fabric with a refined drape.",
    category: "clothing",
    subcategory: "t-shirts",
    cottonPercent: 100,
    organic: false,
    price: 34.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
    affiliateUrl: "https://www.target.com/p/supima-cotton-v-neck-tee/-/A-12345678?tag=cottonfinder-20",
    retailer: "Target",
    brand: "Goodfellow & Co",
    tags: ["supima", "v-neck", "mens", "premium", "smooth"],
    featured: false,
    rating: 4.3,
    reviews: 892
  },
  {
    id: "ts-004",
    name: "Organic Cotton Crop Top",
    description: "Sustainable 100% organic cotton crop top. Relaxed fit with a raw hem. GOTS certified organic.",
    category: "clothing",
    subcategory: "t-shirts",
    cottonPercent: 100,
    organic: true,
    price: 28.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600",
    affiliateUrl: "https://www.pact.com/products/organic-cotton-crop-top?ref=cottonfinder",
    retailer: "Pact",
    brand: "Pact",
    tags: ["organic", "crop-top", "womens", "sustainable", "gots"],
    featured: true,
    rating: 4.4,
    reviews: 1243
  },
  {
    id: "ts-005",
    name: "Cotton-Poly Blend Performance Tee",
    description: "80% cotton / 20% polyester blend. Moisture-wicking, quick-dry fabric with the softness of cotton and the performance of poly.",
    category: "clothing",
    subcategory: "t-shirts",
    cottonPercent: 80,
    organic: false,
    price: 22.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08L5S3K7R?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Hanes",
    tags: ["blend", "performance", "mens", "active", "moisture-wicking"],
    featured: false,
    rating: 4.2,
    reviews: 3456
  },

  // ── CLOTHING: JEANS ──
  {
    id: "jn-001",
    name: "100% Cotton Selvedge Denim Jeans",
    description: "Raw selvedge denim made from 100% cotton. Made in Japan on vintage shuttle looms. Develops unique fades over time.",
    category: "clothing",
    subcategory: "jeans",
    cottonPercent: 100,
    organic: false,
    price: 189.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Unbranded",
    tags: ["selvedge", "raw", "denim", "mens", "japanese", "premium"],
    featured: true,
    rating: 4.8,
    reviews: 678
  },
  {
    id: "jn-002",
    name: "Organic Cotton Skinny Jeans",
    description: "Stretchy organic cotton denim with 2% elastane for comfort. 98% organic cotton, sustainably produced.",
    category: "clothing",
    subcategory: "jeans",
    cottonPercent: 98,
    organic: true,
    price: 79.95,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    affiliateUrl: "https://www.pact.com/products/organic-cotton-skinny-jeans?ref=cottonfinder",
    retailer: "Pact",
    brand: "Pact",
    tags: ["organic", "skinny", "womens", "stretch", "sustainable"],
    featured: false,
    rating: 4.3,
    reviews: 2134
  },
  {
    id: "jn-003",
    name: "Classic Straight Leg Jeans",
    description: "100% cotton rigid denim with a classic straight leg cut. No stretch, no synthetic — just pure cotton denim.",
    category: "clothing",
    subcategory: "jeans",
    cottonPercent: 100,
    organic: false,
    price: 59.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1584370848010-d7cc81e6e2c6?w=600",
    affiliateUrl: "https://www.walmart.com/ip/Levis-501-Original-Fit-Jeans/123456789?tag=cottonfinder-20",
    retailer: "Walmart",
    brand: "Levi's",
    tags: ["classic", "straight", "rigid", "mens", "501"],
    featured: true,
    rating: 4.6,
    reviews: 8923
  },

  // ── CLOTHING: UNDERWEAR & SOCKS ──
  {
    id: "uw-001",
    name: "100% Cotton Boxer Briefs (3-Pack)",
    description: "Ultra-soft 100% cotton boxer briefs. Breathable, tag-free, with a comfortable waistband. No synthetic materials.",
    category: "clothing",
    subcategory: "underwear",
    cottonPercent: 100,
    organic: false,
    price: 29.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B07PGL8NXC?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Hanes",
    tags: ["boxer-briefs", "mens", "basics", "breathable", "3-pack"],
    featured: true,
    rating: 4.5,
    reviews: 12453
  },
  {
    id: "uw-002",
    name: "Organic Cotton Bikini Underwear (5-Pack)",
    description: "GOTS certified organic cotton bikini underwear. Soft, breathable, and free from harmful chemicals.",
    category: "clothing",
    subcategory: "underwear",
    cottonPercent: 100,
    organic: true,
    price: 34.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1586295190774-79c2a8088df1?w=600",
    affiliateUrl: "https://www.pact.com/products/organic-cotton-bikini-5-pack?ref=cottonfinder",
    retailer: "Pact",
    brand: "Pact",
    tags: ["organic", "bikini", "womens", "gots", "5-pack"],
    featured: false,
    rating: 4.4,
    reviews: 3456
  },
  {
    id: "sk-001",
    name: "100% Cotton Crew Socks (6-Pack)",
    description: "Premium 100% cotton crew-length socks. Cushioned sole, reinforced heel and toe. No synthetic blends.",
    category: "clothing",
    subcategory: "socks",
    cottonPercent: 100,
    organic: false,
    price: 18.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B07CVF3Q2R?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Dickies",
    tags: ["socks", "crew", "mens", "cushioned", "6-pack"],
    featured: false,
    rating: 4.3,
    reviews: 5678
  },

  // ── HOME: TOWELS ──
  {
    id: "tw-001",
    name: "100% Cotton Turkish Bath Towel Set",
    description: "Luxurious 700 GSM Turkish cotton towel set. Includes 2 bath towels, 2 hand towels, and 4 washcloths. Oeko-Tex certified.",
    category: "home",
    subcategory: "towels",
    cottonPercent: 100,
    organic: false,
    price: 79.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Coyuchi",
    tags: ["turkish", "bath", "luxury", "set", "700gsm"],
    featured: true,
    rating: 4.7,
    reviews: 2345
  },
  {
    id: "tw-002",
    name: "Organic Cotton Waffle Weave Towel",
    description: "Lightweight organic cotton waffle weave towel. Quick-drying, highly absorbent, and gets softer with every wash.",
    category: "home",
    subcategory: "towels",
    cottonPercent: 100,
    organic: true,
    price: 36.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=600",
    affiliateUrl: "https://www.coyuchi.com/products/organic-waffle-towel?ref=cottonfinder",
    retailer: "Coyuchi",
    brand: "Coyuchi",
    tags: ["organic", "waffle", "lightweight", "quick-dry", "sustainable"],
    featured: true,
    rating: 4.6,
    reviews: 1567
  },

  // ── HOME: BEDDING ──
  {
    id: "bd-001",
    name: "100% Cotton Percale Sheet Set",
    description: "Crisp, cool 100% cotton percale sheets. 300 thread count. Gets softer with every wash. Fits mattresses up to 16\" deep.",
    category: "home",
    subcategory: "bedding",
    cottonPercent: 100,
    organic: false,
    price: 129.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Brooklinen",
    tags: ["percale", "sheets", "cooling", "300tc", "queen", "king"],
    featured: true,
    rating: 4.5,
    reviews: 4567
  },
  {
    id: "bd-002",
    name: "Organic Cotton Sateen Duvet Cover",
    description: "GOTS certified organic cotton sateen duvet cover. Silky smooth with a subtle sheen. Button closure, corner ties.",
    category: "home",
    subcategory: "bedding",
    cottonPercent: 100,
    organic: true,
    price: 159.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600",
    affiliateUrl: "https://www.coyuchi.com/products/organic-sateen-duvet-cover?ref=cottonfinder",
    retailer: "Coyuchi",
    brand: "Coyuchi",
    tags: ["organic", "sateen", "duvet", "luxury", "gots"],
    featured: false,
    rating: 4.7,
    reviews: 2345
  },
  {
    id: "bd-003",
    name: "100% Cotton Muslin Throw Blanket",
    description: "Lightweight, breathable cotton muslin throw. Perfect for layering or warm weather. Gets softer with every wash.",
    category: "home",
    subcategory: "bedding",
    cottonPercent: 100,
    organic: false,
    price: 49.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    affiliateUrl: "https://www.target.com/p/cotton-muslin-throw-blanket/-/A-12345678?tag=cottonfinder-20",
    retailer: "Target",
    brand: "Threshold",
    tags: ["muslin", "throw", "blanket", "lightweight", "layering"],
    featured: false,
    rating: 4.4,
    reviews: 1234
  },

  // ── BABY ──
  {
    id: "bb-001",
    name: "Organic Cotton Baby Onesie (3-Pack)",
    description: "GOTS certified organic cotton baby onesies. Snap closure, tag-free, and incredibly soft on sensitive skin.",
    category: "baby",
    subcategory: "clothing",
    cottonPercent: 100,
    organic: true,
    price: 24.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Burt's Bees Baby",
    tags: ["organic", "baby", "onesie", "gots", "3-pack", "newborn"],
    featured: true,
    rating: 4.8,
    reviews: 8901
  },
  {
    id: "bb-002",
    name: "100% Cotton Muslin Swaddle Blankets (4-Pack)",
    description: "Large 47\"x47\" cotton muslin swaddle blankets. Breathable, versatile, and get softer with every wash.",
    category: "baby",
    subcategory: "bedding",
    cottonPercent: 100,
    organic: false,
    price: 34.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B07CVF3Q2R?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Aden + Anais",
    tags: ["muslin", "swaddle", "baby", "4-pack", "breathable"],
    featured: true,
    rating: 4.7,
    reviews: 6789
  },

  // ── ACCESSORIES ──
  {
    id: "ac-001",
    name: "100% Cotton Canvas Tote Bag",
    description: "Heavy-duty 100% cotton canvas tote. Reinforced handles, interior pocket. Perfect for groceries, beach, or everyday carry.",
    category: "accessories",
    subcategory: "bags",
    cottonPercent: 100,
    organic: false,
    price: 19.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Baggu",
    tags: ["tote", "canvas", "bags", "everyday", "durable"],
    featured: false,
    rating: 4.5,
    reviews: 3456
  },
  {
    id: "ac-002",
    name: "Organic Cotton Beanie",
    description: "100% organic cotton ribbed beanie. Double-layered for warmth. One size fits most.",
    category: "accessories",
    subcategory: "hats",
    cottonPercent: 100,
    organic: true,
    price: 28.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600",
    affiliateUrl: "https://www.pact.com/products/organic-cotton-beanie?ref=cottonfinder",
    retailer: "Pact",
    brand: "Pact",
    tags: ["organic", "beanie", "hats", "winter", "unisex"],
    featured: false,
    rating: 4.3,
    reviews: 890
  },
  {
    id: "ac-003",
    name: "100% Cotton Bandana (3-Pack)",
    description: "Classic cotton bandanas. 22\"x22\", pre-washed for softness. Versatile — wear as headband, neck scarf, or pocket square.",
    category: "accessories",
    subcategory: "scarves",
    cottonPercent: 100,
    organic: false,
    price: 12.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B07CVF3Q2R?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Levi's",
    tags: ["bandana", "accessories", "unisex", "3-pack", "classic"],
    featured: false,
    rating: 4.4,
    reviews: 2345
  },

  // ── MORE CLOTHING ──
  {
    id: "cl-001",
    name: "100% Cotton Oxford Button-Down Shirt",
    description: "Classic fit oxford cloth button-down. 100% cotton, single-needle tailoring. A wardrobe essential.",
    category: "clothing",
    subcategory: "shirts",
    cottonPercent: 100,
    organic: false,
    price: 69.50,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Brooks Brothers",
    tags: ["oxford", "button-down", "mens", "formal", "classic"],
    featured: true,
    rating: 4.6,
    reviews: 3456
  },
  {
    id: "cl-002",
    name: "Organic Cotton Lounge Pants",
    description: "Relaxed fit organic cotton joggers. Elastic waistband with drawstring. Perfect for lounging or light activity.",
    category: "clothing",
    subcategory: "pants",
    cottonPercent: 100,
    organic: true,
    price: 48.00,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
    affiliateUrl: "https://www.pact.com/products/organic-cotton-lounge-pants?ref=cottonfinder",
    retailer: "Pact",
    brand: "Pact",
    tags: ["organic", "lounge", "joggers", "womens", "comfortable"],
    featured: false,
    rating: 4.5,
    reviews: 2345
  },
  {
    id: "cl-003",
    name: "Cotton-Linen Blend Summer Shirt",
    description: "55% cotton / 45% linen blend. Lightweight, breathable, and perfect for warm weather. Relaxed fit with a camp collar.",
    category: "clothing",
    subcategory: "shirts",
    cottonPercent: 55,
    organic: false,
    price: 59.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
    affiliateUrl: "https://www.target.com/p/cotton-linen-summer-shirt/-/A-12345678?tag=cottonfinder-20",
    retailer: "Target",
    brand: "Goodfellow & Co",
    tags: ["linen", "blend", "summer", "mens", "breathable", "camp-collar"],
    featured: false,
    rating: 4.3,
    reviews: 1234
  },
  {
    id: "cl-004",
    name: "100% Cotton Pajama Set",
    description: "Classic 100% cotton pajama set. Button-front top with pants. Soft, breathable, and perfect for sleeping.",
    category: "clothing",
    subcategory: "sleepwear",
    cottonPercent: 100,
    organic: false,
    price: 54.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B08N5KWB9H?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "L.L.Bean",
    tags: ["pajamas", "sleepwear", "womens", "set", "classic"],
    featured: false,
    rating: 4.6,
    reviews: 4567
  },
  {
    id: "cl-005",
    name: "95% Cotton / 5% Spandex Leggings",
    description: "Soft cotton leggings with a touch of stretch. High-waisted, opaque, and comfortable for all-day wear.",
    category: "clothing",
    subcategory: "pants",
    cottonPercent: 95,
    organic: false,
    price: 34.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600",
    affiliateUrl: "https://www.amazon.com/dp/B07CVF3Q2R?tag=cottonfinder-20",
    retailer: "Amazon",
    brand: "Hanes",
    tags: ["leggings", "womens", "stretch", "high-waist", "casual"],
    featured: false,
    rating: 4.4,
    reviews: 5678
  }
];

// ── Helper functions ──

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function getProductsByCottonPercent(minPercent) {
  return products.filter(p => p.cottonPercent >= minPercent);
}

function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

function searchProducts(query, filters = {}) {
  let results = products;

  // Text search
  if (query) {
    const q = query.toLowerCase();
    results = results.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    );
  }

  // Category filter
  if (filters.category && filters.category !== 'all') {
    results = results.filter(p => p.category === filters.category);
  }

  // Subcategory filter
  if (filters.subcategory && filters.subcategory !== 'all') {
    results = results.filter(p => p.subcategory === filters.subcategory);
  }

  // Cotton percent filter
  if (filters.cottonMin) {
    results = results.filter(p => p.cottonPercent >= parseInt(filters.cottonMin));
  }

  // Organic filter
  if (filters.organic === 'true') {
    results = results.filter(p => p.organic);
  }

  // Price range
  if (filters.priceMin) {
    results = results.filter(p => p.price >= parseFloat(filters.priceMin));
  }
  if (filters.priceMax) {
    results = results.filter(p => p.price <= parseFloat(filters.priceMax));
  }

  // Retailer filter
  if (filters.retailer && filters.retailer !== 'all') {
    results = results.filter(p => p.retailer === filters.retailer);
  }

  // Sort
  if (filters.sort === 'price-low') {
    results.sort((a, b) => a.price - b.price);
  } else if (filters.sort === 'price-high') {
    results.sort((a, b) => b.price - a.price);
  } else if (filters.sort === 'rating') {
    results.sort((a, b) => b.rating - a.rating);
  } else if (filters.sort === 'reviews') {
    results.sort((a, b) => b.reviews - a.reviews);
  } else if (filters.sort === 'cotton') {
    results.sort((a, b) => b.cottonPercent - a.cottonPercent);
  }

  return results;
}

function getCategories() {
  return [...new Set(products.map(p => p.category))];
}

function getSubcategories() {
  return [...new Set(products.map(p => p.subcategory))];
}

function getRetailers() {
  return [...new Set(products.map(p => p.retailer))];
}

function getStats() {
  return {
    totalProducts: products.length,
    categories: getCategories().length,
    avgCottonPercent: Math.round(products.reduce((sum, p) => sum + p.cottonPercent, 0) / products.length),
    organicCount: products.filter(p => p.organic).length,
    retailers: getRetailers().length
  };
}

module.exports = {
  products,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getProductsByCottonPercent,
  getFeaturedProducts,
  searchProducts,
  getCategories,
  getSubcategories,
  getRetailers,
  getStats
};
