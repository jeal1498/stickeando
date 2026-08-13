import { addItem } from '../state/cart.js';
import { updateCart } from '../components/cart-drawer.js';
import { getNiche } from '../data/niches/index.js';
import { money } from '../utils/format.js';

function feedCardHTML(product) {
  const stickers = product.feedEmojis.map(e => `<span>${e}</span>`).join('');
  const oldPrice = product.oldPrice
    ? `<span class="feed-old-price">$${product.oldPrice}</span>`
    : '';
  const discount = product.discount
    ? `<span class="feed-discount-tag">${product.discount}</span>`
    : '';

  return `
    <a class="feed-card" href="#" data-id="${product.id}" data-action="go-to-product">
      <div class="feed-card-art">
        <div class="feed-art-stickers" aria-hidden="true">${stickers}</div>
        <button type="button" class="feed-quick-add" data-id="${product.id}" aria-label="Agregar ${product.short} al carrito">＋</button>
      </div>
      <div class="feed-card-body">
        <h3>${product.name}</h3>
        <div class="feed-price-row">
          <span class="feed-price">${money(product.price)}<sup>00</sup></span>
          ${oldPrice}
        </div>
        ${discount}
        <div class="feed-spacer"></div>
        <div class="feed-digital-tag">Entrega digital inmediata</div>
      </div>
    </a>
  `;
}

// Pinta el feed con los productos del nicho activo y el título correspondiente.
export function renderFeed() {
  const niche = getNiche();
  const feedTitle = document.getElementById('feedTitle');
  if (feedTitle) {
    feedTitle.innerHTML = `Recomendado para ti en <strong>${niche.feedSubtitle}</strong>`;
  }

  const feed = document.querySelector('.feed');
  feed.innerHTML = Object.values(niche.products).map(feedCardHTML).join('');
}

export function initHomeFeed() {
  renderFeed();

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
