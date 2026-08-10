const STORAGE_KEY = 'stickeando_cart';

let cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function getCart() {
  return cart;
}

// Cada producto es digital y de compra única, así que "agregar" un id que
// ya está en el carrito simplemente confirma su qty:1 en lugar de duplicarlo.
export function addItem(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty = 1;
  } else {
    cart.push({ id, qty: 1 });
  }

  persist();
}

export function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  persist();
}

export function getCartTotal(products) {
  return cart.reduce((sum, item) => sum + products[item.id].price * item.qty, 0);
}
