import { products, DEFAULT_PRODUCT_ID } from '../data/products.js';
import { money } from '../utils/format.js';
import { shareWhatsApp, shareProduct } from '../utils/share.js';
import { openCheckout } from '../components/checkout-modal.js';

let selected = products[DEFAULT_PRODUCT_ID];

export function getSelected() {
  return selected;
}

export function selectPackage(id) {
  selected = products[id];

  document.getElementById('selectedPackage').textContent = selected.short;
  document.getElementById('productTitle').textContent = selected.name;
  document.getElementById('price').textContent = money(selected.price);
  document.getElementById('stickyPrice').textContent = money(selected.price);

  document.getElementById('previewTitle').textContent =
    selected.short === 'Básico'
      ? 'Paquete Básico · 5 stickers'
      : selected.short === 'Premium'
      ? 'Paquete Premium · Personalizado'
      : 'Paquete Profesional · +30 stickers';

  document.getElementById('priceOld').textContent = selected.oldPrice
    ? money(selected.oldPrice) + ' MXN'
    : '';

  document.getElementById('discount').textContent = selected.discount || '';
  document.getElementById('discount').style.display = selected.discount ? 'inline-block' : 'none';

  document.getElementById('feature1').textContent = selected.feature1;
  document.getElementById('feature2').textContent = selected.feature2;
  document.getElementById('feature3').textContent = selected.feature3;
  document.getElementById('feature4').textContent = selected.feature4;

  document.getElementById('description').innerHTML =
    '<p>' +
    selected.description +
    '</p>' +
    '<p>' +
    'Después de completar tu compra recibirás las instrucciones necesarias para obtener y utilizar tus stickers.' +
    '</p>';

  document.querySelectorAll('.package').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.id === id);
  });

  const stickers = document.getElementById('previewStickers');
  stickers.innerHTML = `
    <div class="sticker">${selected.emoji}</div>
    <div class="sticker">😂</div>
    <div class="sticker">❤️</div>
    <div class="sticker">👍</div>
    <div class="sticker">🙌</div>
    <div class="sticker">😊</div>
  `;
}

export function toggleFavorite() {
  const btn = document.getElementById('favoriteBtn');
  const active = btn.classList.toggle('active');

  btn.setAttribute('aria-pressed', String(active));
  btn.setAttribute('aria-label', active ? 'Quitar de favoritos' : 'Agregar a favoritos');
}

export function buyNow() {
  openCheckout(selected);
}

export function handleShareWhatsApp() {
  shareWhatsApp(selected);
}

export function handleShareProduct() {
  shareProduct(selected);
}
