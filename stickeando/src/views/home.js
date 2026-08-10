import { addItem } from '../state/cart.js';
import { updateCart } from '../components/cart-drawer.js';

export function initHomeFeed() {
  document.querySelectorAll('.feed-quick-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      addItem(btn.dataset.id);
      updateCart();

      btn.classList.add('added');
      btn.textContent = '✓';

      setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = '＋';
      }, 900);
    });
  });
}
