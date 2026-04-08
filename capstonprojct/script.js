/* =========================================
   ANDHRA FOODS – COMPLETE JAVASCRIPT
   ========================================= */

// =========================================
// PRODUCT DATA
// =========================================
const products = [
  {
    id: 1, name: "Karam Podi", category: "Podis", badge: "Best Seller",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPx_RmmujV1fjVJzw3ea_y-hjaZS4LjWfBA&s",
    sizes: [{ label: "250g", price: 149 }, { label: "500g", price: 279 }, { label: "1kg", price: 499 }]
  },
  {
    id: 2, name: "rasam Podi", category: "Podis", badge: "Popular",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBhhKgrKCKhV3PKIX0RvXeRqvmO3YVOev2oVuafDEoZXTyxOODwdVUWduccunVglY2pGbY9kKdXx3Odql3rRVTZRTNvXA60J2Ao2yrO3WI9VjNw1mt6LliF_PPU0Z1ZXhUsgGSq2SVQPAX/s1600/rasam+powder+1.jpg",
    sizes: [{ label: "250g", price: 159 }, { label: "500g", price: 299 }, { label: "1kg", price: 549 }]
  },
  {
    id: 3, name: "Karapusa", category: "Snacks", badge: "Crispy",
    img: "https://i0.wp.com/ahahomefoods.com/wp-content/uploads/2023/02/sanna-karapusa.jpg?fit=600%2C600&ssl=1",
    sizes: [{ label: "250g", price: 199 }, { label: "500g", price: 399 }, { label: "1kg", price: 699 }]
  },
  {
    id: 4, name: "Ulavacharu (Horse Gram Rasam)", category: "Rasam", badge: "Traditional",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFxXXoF99q9xg1A1HG783NkNXEvyt8smsTA&s",
    sizes: [{ label: "250g", price: 199 }, { label: "500g", price: 399 }, { label: "1kg", price: 699 }]
  },
  {
    id: 5, name: "Avakai (Mango Pickle)", category: "Pickles", badge: "Classic",
    img: "https://vellankifoods.com/cdn/shop/products/andhra_avakaya_pickle_mango.jpg?v=1679897008",
    sizes: [{ label: "250g", price: 199 }, { label: "500g", price: 399 }, { label: "1kg", price: 699 }]
  },
  {
    id: 6, name: "Gongura Pickle", category: "Pickles", badge: "Tangy",
    img: "https://tulasipickles.com/wp-content/uploads/2024/11/Gongura.jpg",
    sizes: [{ label: "250g", price: 199 }, { label: "500g", price: 379 }, { label: "1kg", price: 679 }]
  },
  {
    id: 7, name: "Junnu Powder", category: "Sweets", badge: "Sweet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHr00Vi4QKU60jmTV07XQcShoQiZ_dYHeOVw&s",
    sizes: [{ label: "250g", price: 308 }, { label: "500g", price: 615 }, { label: "1kg", price: 988 }]
  },
  {
    id: 8, name: "Chitti Ariselu", category: "Sweets", badge: "Festive",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6-6_r4n-NV1PDgj3n5XdhhkbzqOwvHO_9w&s",
    sizes: [{ label: "250g", price: 199 }, { label: "500g", price: 379 }, { label: "1kg", price: 699 }]
  },
  {
    id: 9, name: "Home Made Pure Ghee", category: "Ghee", badge: "Pure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyxXa-5TPgimfj7fvsugo8lGurtO460GF4g&s",
    sizes: [{ label: "250g", price: 399 }, { label: "500g", price: 699 }, { label: "1kg", price: 1299 }]
  },
  {
    id: 10, name: "Tomato Pachadi", category: "Pickles", badge: "Fresh",
    img: "https://i.ytimg.com/vi/u_gJ5PHkYDs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5l0723kWH3YwXr4cOTOGipgdPtw",
    sizes: [{ label: "250g", price: 179 }, { label: "500g", price: 339 }, { label: "1kg", price: 599 }]
  },
  {
    id: 11, name: "Pesarattu Mix", category: "Snacks", badge: "Healthy",
    img: "https://nirmalyamfoods.com/cdn/shop/files/Instant_Red_rice_Dosa_Mix.svg?v=1761285543&width=533",
    sizes: [{ label: "250g", price: 189 }, { label: "500g", price: 359 }, { label: "1kg", price: 639 }]
  },
  {
    id: 12, name: "Andhra Sambar Powder", category: "Podis", badge: "Aromatic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqKDFEP2CM4h_DnhHxQIcAKTUXZ8b9PJRUmA&s",
    sizes: [{ label: "250g", price: 149 }, { label: "500g", price: 279 }, { label: "1kg", price: 499 }]
  },
  // --- PICKLES ---
  {
    id: 13, name: "Nimmakaya Pickle (Lemon)", category: "Pickles", badge: "Zesty",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGCVZYslaiQ_Y_HTbQqxnHmo3hVtPPwF0FQ&s",
    sizes: [{ label: "250g", price: 179 }, { label: "500g", price: 339 }, { label: "1kg", price: 599 }]
  },
  {
    id: 14, name: "Allam Pickle (Ginger)", category: "Pickles", badge: "Spicy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAel69_pXer9MbOzW_2DQrCJFtXvW66JM4hw&s",
    sizes: [{ label: "250g", price: 189 }, { label: "500g", price: 359 }, { label: "1kg", price: 649 }]
  },
  {
    id: 15, name: "Garlic Pickle", category: "Pickles", badge: "Bold",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
    sizes: [{ label: "250g", price: 199 }, { label: "500g", price: 379 }, { label: "1kg", price: 699 }]
  },
  {
    id: 16, name: "Chintakaya Pickle (Raw Tamarind)", category: "Pickles", badge: "Tangy",
    img: "https://m.media-amazon.com/images/I/61n8JOY6b7L._AC_UF894,1000_QL80_.jpg",
    sizes: [{ label: "250g", price: 159 }, { label: "500g", price: 299 }, { label: "1kg", price: 549 }]
  },
  {
    id: 17, name: "Dondakaya Pickle (Ivy Gourd)", category: "Pickles", badge: "Village Style",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFrY7lflArU_hazRsAhcmrDger8ALVy-3EQ&s",
    sizes: [{ label: "250g", price: 169 }, { label: "500g", price: 319 }, { label: "1kg", price: 579 }]
  },
  {
    id: 18, name: "Natu Kodi Pickle (Country Chicken)", category: "Pickles", badge: "Non-Veg",
    img: "https://m.media-amazon.com/images/I/41ZEWDev2xL._AC_UF894,1000_QL80_.jpg",
    sizes: [{ label: "250g", price: 299 }, { label: "500g", price: 549 }, { label: "1kg", price: 999 }]
  },
  {
    id: 19, name: "Royyala Pickle (Prawn)", category: "Pickles", badge: "Seafood",
    img: "https://tulasipickles.com/wp-content/uploads/2024/11/Gongura-Prawns.jpg",
    sizes: [{ label: "250g", price: 349 }, { label: "500g", price: 649 }, { label: "1kg", price: 1199 }]
  },
  // --- PODIS ---
  {
    id: 20, name: "Pappula Podi (Roasted Dal)", category: "Podis", badge: "Classic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jDB89NyoYyN3dhVHw7cQXCSJ1syg_Xu1bA&s",
    sizes: [{ label: "250g", price: 129 }, { label: "500g", price: 239 }, { label: "1kg", price: 449 }]
  },
  {
    id: 21, name: "Nuvvulu Podi (Sesame)", category: "Podis", badge: "Nutty",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPj4a_8aidMkZGfU7x224srdn_rY7dgDpUKA&s",
    sizes: [{ label: "250g", price: 139 }, { label: "500g", price: 259 }, { label: "1kg", price: 469 }]
  },
  {
    id: 22, name: "Karivepaku Podi (Curry Leaf)", category: "Podis", badge: "Aromatic",
    img: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Karivepaku-Podi-2-3.jpg",
    sizes: [{ label: "250g", price: 149 }, { label: "500g", price: 279 }, { label: "1kg", price: 499 }]
  },
  {
    id: 23, name: "Tomato Podi", category: "Podis", badge: "Tangy",
    img: "https://dailyfarmer.in/cdn/shop/articles/SEOon_tomato-powder-1.webp?v=1758522019",
    sizes: [{ label: "250g", price: 139 }, { label: "500g", price: 259 }, { label: "1kg", price: 469 }]
  },
  {
    id: 24, name: "Gongura Podi", category: "Podis", badge: "Sour & Spicy",
    img: "https://foodialogues.com/wp-content/uploads/2023/02/Gongura-Podi-Recipe-2-1024x1024.jpg",
    sizes: [{ label: "250g", price: 159 }, { label: "500g", price: 299 }, { label: "1kg", price: 549 }]
  },
  // --- SNACKS ---
  {
    id: 25, name: "Murukku", category: "Snacks", badge: "Crunchy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbF5VA2itvXZj3uuYzH2le9Cvu53mdtRYFA&s",
    sizes: [{ label: "250g", price: 179 }, { label: "500g", price: 339 }, { label: "1kg", price: 619 }]
  },
  {
    id: 26, name: "Chegodilu (Ring Murukku)", category: "Snacks", badge: "Traditional",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_mD8899sSUhGsVAusW8y-xSJ5EYD-I6A5w&s",
    sizes: [{ label: "250g", price: 169 }, { label: "500g", price: 319 }, { label: "1kg", price: 589 }]
  },
  {
    id: 27, name: "Bobbatlu (Puran Poli)", category: "Snacks", badge: "Festive",
    img: "https://pbs.twimg.com/media/DgSlL3qVQAAGblf.jpg",
    sizes: [{ label: "250g", price: 199 }, { label: "500g", price: 379 }, { label: "1kg", price: 699 }]
  },
  {
    id: 28, name: "Ribbon Pakoda", category: "Snacks", badge: "Crispy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc4SjTFf6tEtaIV8RhZMgNS8dWZp_EbakyQ&s",
    sizes: [{ label: "250g", price: 159 }, { label: "500g", price: 299 }, { label: "1kg", price: 549 }]
  },
  {
    id: 29, name: "Mixture (Andhra Style)", category: "Snacks", badge: "Spicy Mix",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jVr4kzDFiqpH5Eog2ymXWH99Vzgfrj47TA&s",
    sizes: [{ label: "250g", price: 189 }, { label: "500g", price: 359 }, { label: "1kg", price: 649 }]
  },
  {
    id: 30, name: "Kaju Pakoda (Cashew Fritters)", category: "Snacks", badge: "Premium",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAVzrawZi5SaxUlqXklY9LQGTE2Bj5FSIFg&s",
    sizes: [{ label: "250g", price: 299 }, { label: "500g", price: 549 }, { label: "1kg", price: 999 }]
  },
  // --- SWEETS ---
  {
    id: 31, name: "Pootharekulu (Rice Paper Sweets)", category: "Sweets", badge: "Signature",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFaIaXWg60FjTh4IhS8-iOYnl-2leFXA48g&s",
    sizes: [{ label: "250g", price: 299 }, { label: "500g", price: 549 }, { label: "1kg", price: 999 }]
  },
  {
    id: 32, name: "Boondi Laddu", category: "Sweets", badge: "Festival",
    img: "https://vismaifood.com/storage/app/uploads/public/40c/1e6/695/thumb__700_0_0_0_auto.jpg",
    sizes: [{ label: "250g", price: 249 }, { label: "500g", price: 469 }, { label: "1kg", price: 869 }]
  },
  {
    id: 33, name: "Kajjikayalu (Fried Sweet Dumplings)", category: "Sweets", badge: "Traditional",
    img: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2021/10/Kajjikayalu-8.jpg?fit=684%2C1024&ssl=1",
    sizes: [{ label: "250g", price: 219 }, { label: "500g", price: 409 }, { label: "1kg", price: 749 }]
  },
  {
    id: 34, name: "Teepi Murukku (Sweet Murukku)", category: "Sweets", badge: "Unique",
    img: "https://qickpik.com/cdn/shop/files/BellamKommulu_JaggeriedTusks_-removebg-preview-removebg-preview.jpg?v=1750409157",
    sizes: [{ label: "250g", price: 189 }, { label: "500g", price: 359 }, { label: "1kg", price: 649 }]
  },
  {
    id: 35, name: "Bellam Pappulu (Jaggery Dal)", category: "Sweets", badge: "Healthy",
    img: "https://m.media-amazon.com/images/I/412Mn1RgQOL.jpg",
    sizes: [{ label: "250g", price: 179 }, { label: "500g", price: 339 }, { label: "1kg", price: 619 }]
  },
  // --- RASAM ---
  {
    id: 36, name: "Tomato Rasam Powder", category: "Rasam", badge: "Tangy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZDaMUB7sWKtGUUP3Pr8VhUnKC84qjl-8dg&s",
    sizes: [{ label: "250g", price: 149 }, { label: "500g", price: 279 }, { label: "1kg", price: 499 }]
  },
  {
    id: 37, name: "Pepper Rasam Powder", category: "Rasam", badge: "Healing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_wLaJpcMqi3ZUAtLgQ81NJH5P69W45CfmA&s",
    sizes: [{ label: "250g", price: 159 }, { label: "500g", price: 299 }, { label: "1kg", price: 539 }]
  },
  {
    id: 38, name: "Garlic Rasam Powder", category: "Rasam", badge: "Bold",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbxlhFQUv1s93QcZUe359bxNzEBBtlfulDA&s",
    sizes: [{ label: "250g", price: 159 }, { label: "500g", price: 299 }, { label: "1kg", price: 539 }]
  },
  {
    id: 39, name: "Drumstick Rasam Powder", category: "Rasam", badge: "Healthy",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/rasam-powder-recipe-500x375.jpg",
    sizes: [{ label: "250g", price: 169 }, { label: "500g", price: 319 }, { label: "1kg", price: 579 }]
  },
  // --- GHEE ---
  {
    id: 40, name: "A2 Cow Ghee", category: "Ghee", badge: "A2 Quality",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyxXa-5TPgimfj7fvsugo8lGurtO460GF4g&s",
    sizes: [{ label: "250g", price: 449 }, { label: "500g", price: 849 }, { label: "1kg", price: 1599 }]
  },
  {
    id: 41, name: "Coconut Oil (Cold Pressed)", category: "Ghee", badge: "Cold Pressed",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3QP_yKYjN3hZzB6sUC9Lff1EYXDTVqXYvw&s",
    sizes: [{ label: "250ml", price: 199 }, { label: "500ml", price: 369 }, { label: "1L", price: 699 }]
  },
  {
    id: 42, name: "Sesame Oil (Nuvvula Nune)", category: "Ghee", badge: "Pure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7zDRgJ8f1JywjwHnvEWW6cr2J-yWy-M1_A&s",
    sizes: [{ label: "250ml", price: 229 }, { label: "500ml", price: 429 }, { label: "1L", price: 799 }]
  }
];

// =========================================
// AUTH STATE
// =========================================
let isLoggedIn = false;
let registeredUsers = []; // holds all registered users

// Pages that require login to access
const protectedPages = ['shop', 'contact', 'about', 'cart'];

// =========================================
// CART & SIZE STATE
// =========================================
let cart = [];
let selectedSizes = {};

// =========================================
// PAGE NAVIGATION
// =========================================
function showPage(pageId, linkEl) {
  // If not logged in and page is protected → redirect to login
  if (protectedPages.includes(pageId) && !isLoggedIn) {
    showToast('🔒 Please login or register to access this page!');
    pageId = 'login';
    linkEl = null;
  }

  // Hide all pages
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });

  // Show target page
  var target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(function(l) {
    l.classList.remove('active');
  });
  if (linkEl) linkEl.classList.add('active');

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render content as needed
  if (pageId === 'home') renderProducts('homeProductGrid', products.slice(0, 8));
  if (pageId === 'shop') renderProducts('shopProductGrid', products);
  if (pageId === 'cart') renderCart();
}

// Cart icon click
function goToCart() {
  if (!isLoggedIn) {
    showToast('🔒 Please login or register to access your cart!');
    showPage('login', null);
    return;
  }
  showPage('cart', null);
  renderCart();
}

// =========================================
// RENDER PRODUCT CARDS
// =========================================
function renderProducts(gridId, list) {
  var grid = document.getElementById(gridId);
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#888;font-size:1.1rem;">No products found in this category.</div>';
    return;
  }

  grid.innerHTML = list.map(function(p) {
    var selKey = gridId + '_' + p.id;
    var selIdx = selectedSizes[selKey] !== undefined ? selectedSizes[selKey] : 0;
    var qty = 1;

    return (
      '<div class="product-card" id="pcard-' + gridId + '-' + p.id + '">' +
        '<div class="product-img-wrap">' +
          '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" ' +
            'onerror="this.src=\'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80\'"/>' +
          (p.badge ? '<span class="product-badge">' + p.badge + '</span>' : '') +
        '</div>' +
        '<div class="product-info">' +
          '<div class="product-name">' + p.name + '</div>' +
          '<div class="product-sizes">' +
            p.sizes.map(function(s, i) {
              return (
                '<label class="size-option">' +
                  '<input type="radio" name="size-' + gridId + '-' + p.id + '" value="' + i + '" ' +
                    (i === selIdx ? 'checked' : '') +
                    ' onchange="selectSize(\'' + gridId + '\',' + p.id + ',' + i + ')"/>' +
                  s.label + ' – ₹' + s.price +
                '</label>'
              );
            }).join('') +
          '</div>' +
          '<div class="product-mrp">MRP: ₹' + p.sizes[selIdx].price + '</div>' +
          '<div class="product-actions">' +
            '<span>Qty</span>' +
            '<button class="qty-btn" onclick="changeQty(\'' + gridId + '\',' + p.id + ',-1)">−</button>' +
            '<span class="qty-display" id="qty-' + gridId + '-' + p.id + '">' + qty + '</span>' +
            '<button class="qty-btn" onclick="changeQty(\'' + gridId + '\',' + p.id + ',1)">+</button>' +
            '<button class="add-btn" onclick="addToCart(\'' + gridId + '\',' + p.id + ')">ADD 🛒</button>' +
          '</div>' +
          '<button class="wish-btn" id="wish-' + gridId + '-' + p.id + '" onclick="toggleWish(this)">♡ Wishlist</button>' +
        '</div>' +
        '<button class="view-more-btn" onclick="viewMore(' + p.id + ')">VIEW MORE</button>' +
      '</div>'
    );
  }).join('');
}

// =========================================
// SIZE SELECTION
// =========================================
function selectSize(gridId, productId, sizeIdx) {
  var key = gridId + '_' + productId;
  selectedSizes[key] = sizeIdx;
  var product = products.find(function(p) { return p.id === productId; });
  var mrpEl = document.querySelector('#pcard-' + gridId + '-' + productId + ' .product-mrp');
  if (mrpEl && product) {
    mrpEl.textContent = 'MRP: ₹' + product.sizes[sizeIdx].price;
  }
}

// =========================================
// QUANTITY CHANGE (on product cards)
// =========================================
function changeQty(gridId, productId, delta) {
  var qtyEl = document.getElementById('qty-' + gridId + '-' + productId);
  if (!qtyEl) return;
  var q = parseInt(qtyEl.textContent) + delta;
  if (q < 1)  q = 1;
  if (q > 20) q = 20;
  qtyEl.textContent = q;
}

// =========================================
// ADD TO CART
// =========================================
function addToCart(gridId, productId) {
  var key = gridId + '_' + productId;
  var selIdx = selectedSizes[key] !== undefined ? selectedSizes[key] : 0;
  var qtyEl = document.getElementById('qty-' + gridId + '-' + productId);
  var qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
  var product = products.find(function(p) { return p.id === productId; });
  if (!product) return;

  var existing = cart.find(function(c) { return c.id === productId && c.sizeIdx === selIdx; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id:        productId,
      name:      product.name,
      img:       product.img,
      sizeLabel: product.sizes[selIdx].label,
      price:     product.sizes[selIdx].price,
      sizeIdx:   selIdx,
      qty:       qty
    });
  }
  updateCartCount();
  showToast('✅ ' + product.name + ' (' + product.sizes[selIdx].label + ') added to cart!');
}

// =========================================
// CART COUNT BADGE
// =========================================
function updateCartCount() {
  var total = cart.reduce(function(sum, c) { return sum + c.qty; }, 0);
  document.getElementById('cartCount').textContent = total;
}

// =========================================
// RENDER CART PAGE
// =========================================
function renderCart() {
  var listEl    = document.getElementById('cartItemsList');
  var emptyEl   = document.getElementById('cartEmpty');
  var summaryEl = document.getElementById('summaryItems');
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
  } else {
    if (emptyEl) emptyEl.style.display = 'none';
    listEl.innerHTML = cart.map(function(item, idx) {
      return (
        '<div class="cart-item" id="cart-item-' + idx + '">' +
          '<img src="' + item.img + '" alt="' + item.name + '" ' +
            'onerror="this.src=\'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80\'"/>' +
          '<div class="cart-item-info">' +
            '<h4>' + item.name + '</h4>' +
            '<p>' + item.sizeLabel + '</p>' +
          '</div>' +
          '<div class="cart-item-actions">' +
            '<button class="qty-btn" onclick="cartQty(' + idx + ',-1)">−</button>' +
            '<span class="qty-display">' + item.qty + '</span>' +
            '<button class="qty-btn" onclick="cartQty(' + idx + ',1)">+</button>' +
          '</div>' +
          '<div class="cart-item-price">₹' + (item.price * item.qty).toLocaleString() + '</div>' +
          '<button class="remove-btn" onclick="removeFromCart(' + idx + ')" title="Remove">🗑️</button>' +
        '</div>'
      );
    }).join('');
  }

  // Order summary panel
  var subtotal = cart.reduce(function(sum, c) { return sum + c.price * c.qty; }, 0);
  if (summaryEl) {
    summaryEl.innerHTML = cart.map(function(c) {
      return (
        '<div class="summary-item-row">' +
          '<span>' + c.name + ' × ' + c.qty + '</span>' +
          '<span>₹' + (c.price * c.qty).toLocaleString() + '</span>' +
        '</div>'
      );
    }).join('');
  }
  var subEl = document.getElementById('subtotal');
  var gtEl  = document.getElementById('grandTotal');
  if (subEl) subEl.textContent = '₹' + subtotal.toLocaleString();
  if (gtEl)  gtEl.textContent  = '₹' + subtotal.toLocaleString();
}

// Increase / decrease qty inside cart
function cartQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty < 1) cart[idx].qty = 1;
  updateCartCount();
  renderCart();
}

// Remove item from cart
function removeFromCart(idx) {
  var name = cart[idx].name;
  cart.splice(idx, 1);
  updateCartCount();
  renderCart();
  showToast('🗑️ ' + name + ' removed from cart');
}

// =========================================
// FILTER – HOME PAGE
// =========================================
function filterCategory(cat, btn) {
  document.querySelectorAll('#page-home .pill').forEach(function(p) {
    p.classList.remove('active-pill');
  });
  if (btn) btn.classList.add('active-pill');
  var filtered = cat === 'all'
    ? products.slice(0, 8)
    : products.filter(function(p) { return p.category === cat; }).slice(0, 8);
  renderProducts('homeProductGrid', filtered);
}

// =========================================
// FILTER – SHOP PAGE
// =========================================
function filterShop(cat, btn) {
  document.querySelectorAll('#page-shop .pill').forEach(function(p) {
    p.classList.remove('active-pill');
  });
  if (btn) btn.classList.add('active-pill');
  var filtered = cat === 'all'
    ? products
    : products.filter(function(p) { return p.category === cat; });
  renderProducts('shopProductGrid', filtered);
}

// =========================================
// WISHLIST TOGGLE
// =========================================
function toggleWish(btn) {
  btn.classList.toggle('active');
  if (btn.classList.contains('active')) {
    btn.textContent = '❤️ Wishlisted';
    showToast('❤️ Added to Wishlist!');
  } else {
    btn.textContent = '♡ Wishlist';
  }
}

// =========================================
// VIEW MORE (product detail alert)
// =========================================
function viewMore(id) {
  var p = products.find(function(x) { return x.id === id; });
  if (p) {
    alert(
      '📦 ' + p.name + '\n\n' +
      'Category: ' + p.category + '\n\n' +
      'Available Sizes:\n' +
      p.sizes.map(function(s) { return '• ' + s.label + ' – ₹' + s.price; }).join('\n') +
      '\n\nNo Added Colours or Preservatives. Freshly made to order!'
    );
  }
}

// =========================================
// REGISTER
// =========================================
function doRegister() {
  var name     = document.getElementById('regName').value.trim();
  var email    = document.getElementById('regEmail').value.trim();
  var pass     = document.getElementById('regPass').value;
  var confPass = document.getElementById('regConfPass').value;
  var phone    = document.getElementById('regPhone').value.trim();
  var city     = document.getElementById('regCity').value.trim();
  var pin      = document.getElementById('regPin').value.trim();

  // Name: letters and spaces only, minimum 3 characters
  if (!name || name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)) {
    showToast('⚠️ Enter a valid full name (letters only, min 3 characters)');
    return;
  }
  // Phone: valid 10-digit Indian mobile number starting with 6–9
  if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
    showToast('⚠️ Enter a valid 10-digit Indian mobile number (starts with 6–9)');
    return;
  }
  // Email: proper format check
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Enter a valid email address (e.g. name@example.com)');
    return;
  }
  // Password: min 6 chars with at least 1 letter and 1 number
  if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(pass)) {
    showToast('⚠️ Password must be 6+ characters with at least 1 letter & 1 number');
    return;
  }
  // Passwords must match
  if (pass !== confPass) {
    showToast('⚠️ Passwords do not match!');
    return;
  }
  // City required
  if (!city) {
    showToast('⚠️ Please enter your city / town');
    return;
  }
  // PIN: exactly 6 digits
  if (!pin || !/^\d{6}$/.test(pin)) {
    showToast('⚠️ Enter a valid 6-digit PIN code');
    return;
  }
  // Prevent duplicate email registration
  var alreadyExists = registeredUsers.find(function(u) { return u.email === email; });
  if (alreadyExists) {
    showToast('⚠️ This email is already registered. Please login.');
    return;
  }

  // Save the new user
  registeredUsers.push({ name: name, email: email, pass: pass, phone: phone });

  showToast('🎉 Welcome, ' + name + '! Registration successful! Please login.');
  setTimeout(function() { showPage('login', null); }, 1600);
}

// =========================================
// LOGIN
// =========================================
function doLogin() {
  var email = document.getElementById('loginEmail').value.trim();
  var pass  = document.getElementById('loginPass').value;

  // Validate email format
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Enter a valid email address');
    return;
  }
  // Validate password length
  if (!pass || pass.length < 4) {
    showToast('⚠️ Please enter your password');
    return;
  }
  // Check credentials against registered users
  var user = registeredUsers.find(function(u) {
    return u.email === email && u.pass === pass;
  });
  if (!user) {
    showToast('❌ Invalid email or password. Please register first!');
    return;
  }

  // Login successful
  isLoggedIn = true;
  showToast('✅ Welcome back, ' + user.name + '! Login successful!');
  setTimeout(function() { showPage('home', null); }, 1200);
}

// =========================================
// PLACE ORDER
// =========================================
function placeOrder() {
  if (cart.length === 0) {
    showToast('⚠️ Your cart is empty!');
    return;
  }
  var total = cart.reduce(function(s, c) { return s + c.price * c.qty; }, 0);
  alert(
    '🎉 Order Placed Successfully!\n\n' +
    'Total: ₹' + total.toLocaleString() + '\n' +
    'Delivery: FREE\n\n' +
    'Thank you for ordering from Andhra Foods!\n' +
    'We will deliver your fresh items within 5–7 business days.'
  );
  cart = [];
  updateCartCount();
  renderCart();
  showPage('home', null);
}

// =========================================
// TOAST NOTIFICATION
// =========================================
function showToast(msg) {
  var toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 3000);
}

// =========================================
// INIT – runs when page loads
// =========================================
window.addEventListener('DOMContentLoaded', function() {
  renderProducts('homeProductGrid', products.slice(0, 8));
  renderProducts('shopProductGrid', products);
  showPage('home', document.querySelector('.nav-link'));
});