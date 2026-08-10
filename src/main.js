import './styles/main.css';

import { initGallery, toggleZoom } from './components/gallery.js';
import {
  selectPackage,
  toggleFavorite,
  buyNow,
  handleShareWhatsApp,
  handleShareProduct
} from './views/product.js';
import { initHomeFeed } from './views/home.js';
import { openCart, closeCart, updateCart, removeCartItem, checkout } from './components/cart-drawer.js';
import { openCheckout, closeModal, simulatePayment } from './components/checkout-modal.js';
import { goToProduct, goBack } from './router.js';

// Mapa central de acciones: cada elemento interactivo del HTML lleva un
// atributo data-action en vez de onclick inline. Un solo listener delegado
// en document cubre tanto el markup estático como el generado dinámicamente
// (items del carrito, botón de "pedido creado").
const actions = {
  'open-cart': openCart,
  'close-cart': closeCart,
  'go-back': goBack,
  'toggle-zoom': toggleZoom,
  'share-whatsapp': handleShareWhatsApp,
  'share-product': handleShareProduct,
  'toggle-favorite': toggleFavorite,
  'buy-now': buyNow,
  'checkout': checkout,
  'close-modal': closeModal,
  'simulate-payment': simulatePayment,
  'reload': () => location.reload(),
  'go-to-product': el => goToProduct(el.dataset.id),
  'select-package': el => selectPackage(el.dataset.id),
  'remove-cart': el => removeCartItem(el.dataset.id)
};

document.addEventListener('click', e => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const handler = actions[target.dataset.action];
  if (!handler) return;

  handler.length ? handler(target) : handler();
});

initGallery();
initHomeFeed();
updateCart();
