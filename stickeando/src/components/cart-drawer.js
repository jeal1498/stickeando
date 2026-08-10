import { products } from '../data/products.js';
import { getCart, addItem, removeItem, getCartTotal } from '../state/cart.js';
import { money } from '../utils/format.js';
import { openCheckout } from './checkout-modal.js';

export function updateCart() {
  const cart = getCart();
  const list = document.getElementById('cartItems');

  if (!cart.length) {
    list.innerHTML = `
      <li style="text-align:center; color:#999; padding:35px 10px; font-size:13px;">
        Tu carrito está vacío.
      </li>
    `;
  } else {
    list.innerHTML = cart
      .map(item => {
        const p = products[item.id];
        return `
          <li class="cart-item">
            <div class="cart-item-top">
              <span class="cart-item-name">${p.name}</span>
              <span class="cart-item-price">${money(p.price)}</span>
            </div>
            <button class="remove" data-action="remove-cart" data-id="${p.id}">
              Eliminar
            </button>
          </li>
        `;
      })
      .join('');
  }

  document.getElementById('cartTotal').textContent =
    'Total: ' + money(getCartTotal(products)) + ' MXN';

  const badge = document.getElementById('cartBadge');
  if (cart.length) {
    badge.textContent = cart.length;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

export function removeCartItem(id) {
  removeItem(id);
  updateCart();
}

export function openCart() {
  updateCart();
  document.getElementById('cart').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}

export function closeCart() {
  document.getElementById('cart').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

export function checkout() {
  const cart = getCart();

  if (!cart.length) {
    alert('Tu carrito está vacío.');
    return;
  }

  const first = products[cart[0].id];
  closeCart();
  openCheckout(first);
}

// Disponible para un futuro botón "Agregar al carrito" en la vista de
// producto — en el HTML original la función existía pero no estaba
// conectada a ningún control visible.
export function addToCart(productId) {
  addItem(productId);
  updateCart();
  openCart();
}
