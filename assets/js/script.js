'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});


// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


// Product image thumbnails for every product-grid card
const FALLBACK_IMAGE = './assets/images/products/1.jpg';

const productImagePools = {
  shirt: ['./assets/images/products/shirt-1.jpg', './assets/images/products/shirt-2.jpg', './assets/images/products/clothes-1.jpg', './assets/images/products/clothes-2.jpg', './assets/images/products/clothes-3.jpg', './assets/images/products/clothes-4.jpg'],
  jacket: ['./assets/images/products/jacket-1.jpg', './assets/images/products/jacket-2.jpg', './assets/images/products/jacket-3.jpg', './assets/images/products/jacket-4.jpg', './assets/images/products/jacket-5.jpg', './assets/images/products/jacket-6.jpg'],
  shoe: ['./assets/images/products/shoe-1.jpg', './assets/images/products/shoe-1_1.jpg', './assets/images/products/shoe-2.jpg', './assets/images/products/shoe-2_1.jpg', './assets/images/products/shoe-3.jpg', './assets/images/products/shoe-4.jpg'],
  sports: ['./assets/images/products/sports-1.jpg', './assets/images/products/sports-2.jpg', './assets/images/products/sports-3.jpg', './assets/images/products/sports-4.jpg', './assets/images/products/sports-5.jpg', './assets/images/products/sports-6.jpg'],
  shorts: ['./assets/images/products/shorts-1.jpg', './assets/images/products/shorts-2.jpg', './assets/images/products/clothes-3.jpg', './assets/images/products/clothes-4.jpg', './assets/images/products/belt.jpg', './assets/images/products/1.jpg'],
  watch: ['./assets/images/products/watch-1.jpg', './assets/images/products/watch-2.jpg', './assets/images/products/watch-3.jpg', './assets/images/products/watch-4.jpg', './assets/images/products/2.jpg', './assets/images/products/3.jpg'],
  jewellery: ['./assets/images/products/jewellery-1.jpg', './assets/images/products/jewellery-2.jpg', './assets/images/products/jewellery-3.jpg', './assets/images/products/1.jpg', './assets/images/products/2.jpg', './assets/images/products/4.jpg'],
  party: ['./assets/images/products/party-wear-1.jpg', './assets/images/products/party-wear-2.jpg', './assets/images/products/shoe-3.jpg', './assets/images/products/shoe-5.jpg', './assets/images/products/jewellery-1.jpg', './assets/images/products/jewellery-2.jpg'],
  defaultPool: ['./assets/images/products/1.jpg', './assets/images/products/2.jpg', './assets/images/products/3.jpg', './assets/images/products/4.jpg', './assets/images/products/clothes-1.jpg', './assets/images/products/clothes-2.jpg']
};

// Category section images (Unsplash helper)
const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const categoryCatalog = {
  'desktop': { title: 'Desktop Electronics', images: [
    U('photo-1593640408182-31c70c8268f5'),
    U('photo-1547082299-de196ea013d6'),
    U('photo-1587831990711-23ca6441447b')
  ] },
  'laptop': { title: 'Laptops', images: [
    U('photo-1496181133206-80ce9b88a853'),
    U('photo-1517336714731-489689fd1ca8'),
    U('photo-1525547719571-a2d4ac8945e2')
  ] },
  'camera': { title: 'Cameras', images: [
    U('photo-1526170375885-4d8ecf77b99f'),
    U('photo-1516035069371-29a1b244cc32'),
    U('photo-1502920917128-1aa500764cbd')
  ] },
  'tablet': { title: 'Tablets', images: [
    U('photo-1544244015-0df4b3ffc6b0'),
    U('photo-1561154464-82e9adf32764'),
    U('photo-1585790050230-5dd28404ccb9')
  ] },
  'headphone': { title: 'Headphones', images: [
    U('photo-1505740420928-5e560c06d30e'),
    U('photo-1583394838336-acd977736f90'),
    U('photo-1484704849700-f032a568e944')
  ] },
  'smart watch': { title: 'Smart Watches', images: productImagePools.watch },
  'smart tv': { title: 'Smart TVs', images: [
    U('photo-1593359677879-a4bb92f829d1'),
    U('photo-1461151304267-38535e780c79'),
    U('photo-1593784991095-a205069470b6')
  ] },
  'keyboard': { title: 'Keyboards', images: [
    U('photo-1587829741301-dc798b83add3'),
    U('photo-1595225476474-87563907a212'),
    U('photo-1541140532154-b024d705b90a')
  ] },
  'mouse': { title: 'Computer Mouse', images: [
    U('photo-1527864550417-7fd91fc51a46'),
    U('photo-1615663245857-ac93bb7c39e7'),
    U('photo-1563297007-0686b7003af7')
  ] },
  'microphone': { title: 'Microphones', images: [
    U('photo-1590602847861-f357a9332bbc'),
    U('photo-1478737270239-2f02b77fc618'),
    U('photo-1520523839897-bd0b52f945a0')
  ] },
  'casual': { title: 'Men & Women Casual Collection', images: [
    U('photo-1489987707025-afc232f7ea0f'),
    U('photo-1521572163474-6864f9cf17ab'),
    U('photo-1503342217505-b0a15ec3261c')
  ] },
  'sports': { title: "Men's Sports Collection", images: productImagePools.sports },
  'jacket': { title: "Men's Jackets", images: productImagePools.jacket },
  'sunglasses': { title: "Men's Sunglasses", images: [
    U('photo-1572635196237-14b3f281503f'),
    U('photo-1511499767150-a48a237f0083'),
    U('photo-1473496169904-658ba7c44d8a')
  ] },
  'dress': { title: "Women's Dresses & Frocks", images: [
    U('photo-1595777457583-95e059d581b8'),
    U('photo-1515372039744-b8f02a3ae446'),
    U('photo-1496747611176-843222e1e57c')
  ] },
  'earrings': { title: 'Earrings', images: [
    U('photo-1535632066927-ab7c9ab60908'),
    U('photo-1630019852942-f89202989a59'),
    U('photo-1617038220319-276d3cfab638')
  ] },
  'necklace': { title: 'Necklaces', images: [
    U('photo-1515562141207-7a88fb7ce338'),
    U('photo-1599643478518-a784e5dc4c8f'),
    U('photo-1611085583191-a3b181a88401')
  ] },
  'makeup kit': { title: 'Makeup Kit', images: [
    U('photo-1596462502278-27bfdc403348'),
    U('photo-1512496015851-a90fb38ba796'),
    U('photo-1522335789203-aabd1fc54bc9')
  ] },
  'formal': { title: "Women's Formal Collection", images: [
    U('photo-1485968579580-b6d095142e6e'),
    U('photo-1539109136881-3be0616acf4b'),
    U('photo-1551803091-e20673f15770')
  ] },
  'perfume': { title: 'Perfume Collection', images: [
    U('photo-1541643600914-78b084683601'),
    U('photo-1592945403244-b3fbafd7f539'),
    U('photo-1594035910387-fea47794261f')
  ] },
  'cosmetics': { title: 'Cosmetics', images: [
    U('photo-1522335789203-aabd1fc54bc9'),
    U('photo-1556228720-195a672e8a03'),
    U('photo-1571781926291-c477ebfd024b')
  ] },
  'bags': { title: "Women's Bags", images: [
    U('photo-1584917865442-de89df76afd3'),
    U('photo-1548036328-c9fa89d128fa'),
    U('photo-1590874103328-eac38a683ce7')
  ] }
};

function getProductImagePool(card) {
  const source = (card.innerHTML || '').toLowerCase();
  if (source.includes('laptop')) {
    const mainImage = card.querySelector('.product-img.default');
    return mainImage ? [mainImage.src] : [];
  }
  if (source.includes('shirt') || source.includes('clothes')) return productImagePools.shirt;
  if (source.includes('jacket')) return productImagePools.jacket;
  if (source.includes('sports')) return productImagePools.sports;
  if (source.includes('shoe')) return productImagePools.shoe;
  if (source.includes('short')) return productImagePools.shorts;
  if (source.includes('watch')) return productImagePools.watch;
  if (source.includes('jewell') || source.includes('earring')) return productImagePools.jewellery;
  if (source.includes('party')) return productImagePools.party;
  return productImagePools.defaultPool;
}

function addProductThumbnails(card) {
  const banner = card.querySelector('.showcase-banner');
  if (!banner || card.querySelector('.product-thumbnails')) return;

  const mainImage = banner.querySelector('.product-img.default') || banner.querySelector('img');
  if (!mainImage) return;

  const gallery = document.createElement('div');
  gallery.className = 'product-thumbnails';
  gallery.setAttribute('aria-label', 'Product image gallery');

  getProductImagePool(card).forEach((imagePath, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'product-thumbnail';
    button.setAttribute('aria-label', `View product image ${index + 1}`);

    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = `Product view ${index + 1}`;
    image.onerror = function () { this.onerror = null; this.src = FALLBACK_IMAGE; };
    button.appendChild(image);

    button.addEventListener('click', function () {
      mainImage.src = imagePath;
      gallery.querySelectorAll('.product-thumbnail').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
    });

    gallery.appendChild(button);
  });

  banner.appendChild(gallery);
}

document.querySelectorAll('.product-grid .showcase').forEach(addProductThumbnails);


function findCategoryKey(linkText) {
  const text = linkText.toLowerCase().trim().replace(/&/g, 'and');
  if (text.includes('dress')) return 'dress';
  if (text.includes('formal shirt')) return null;
  if (text.includes('makeup')) return 'makeup kit';
  if (text.includes('smart watch')) return 'smart watch';
  if (text.includes('smart tv')) return 'smart tv';
  if (text.includes('headphone')) return 'headphone';
  if (text.includes('sunglass')) return 'sunglasses';
  if (text.includes('earring')) return 'earrings';
  if (text.includes('necklace')) return 'necklace';
  if (text.includes('keyboard')) return 'keyboard';
  if (text.includes('microphone')) return 'microphone';
  if (text.includes('camera')) return 'camera';
  if (text.includes('tablet')) return 'tablet';
  if (text.includes('laptop')) return 'laptop';
  if (text.includes('desktop')) return 'desktop';
  if (text.includes('mouse')) return 'mouse';
  if (text.includes('jacket')) return 'jacket';
  if (text.includes('sports')) return 'sports';
  if (text.includes('cosmetic')) return 'cosmetics';
  if (text.includes('bag')) return 'bags';
  if (text.includes('perfume')) return 'perfume';
  if (text === 'formal' || text.includes('formal wear')) return 'formal';
  if (text.includes('casual')) return 'casual';
  return null;
}

function showCategorySection(key) {
  const category = categoryCatalog[key];
  if (!category) return;

  let section = document.getElementById('category-section');
  if (!section) {
    section = document.createElement('div');
    section.id = 'category-section';
    section.className = 'category-section product-main';
    const newProducts = document.querySelector('.product-main:not(#mens-formal)');
    if (newProducts) newProducts.parentNode.insertBefore(section, newProducts);
    else document.querySelector('.product-container .container')?.appendChild(section);
  }

  section.innerHTML = `<h2 class="title">${category.title}</h2><div class="product-grid category-product-grid"></div>`;
  const grid = section.querySelector('.category-product-grid');

  for (let index = 0; index < 4; index++) {
    const card = document.createElement('div');
    card.className = 'showcase';
    card.innerHTML = `<div class="showcase-banner">
      <img src="${category.images[index % category.images.length]}" alt="${category.title} product" class="product-img default" width="300" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
      <img src="${category.images[(index + 1) % category.images.length]}" alt="${category.title} alternate view" class="product-img hover" width="300" onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}'">
    </div>
    <div class="showcase-content">
      <a href="#category-section" class="showcase-category">${category.title}</a>
      <h3><a href="#category-section" class="showcase-title">${category.title} ${index + 1}</a></h3>
      <div class="showcase-rating"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-outline"></ion-icon></div>
      <div class="price-box"><p class="price">$${(39 + index * 11).toFixed(2)}</p><del>$${(49 + index * 13).toFixed(2)}</del></div>
    </div>`;
    grid.appendChild(card);
    addProductThumbnails(card);
  }

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('.dropdown-panel-list a, .dropdown-list a, .submenu-category-list a, .submenu-category-list .submenu-title').forEach(function (link) {
  link.addEventListener('click', function (event) {
    const href = link.getAttribute('href') || '';
    if (href !== '#' && !href.startsWith('#')) return;

    const text = link.textContent.trim();
    const key = findCategoryKey(text);
    if (!key) return;

    event.preventDefault();
    showCategorySection(key);
  });
});