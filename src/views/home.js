import { addItem } from '../state/cart.js';
import { updateCart } from '../components/cart-drawer.js';
import { niches, getNiche, getCurrentSlug } from '../data/niches/index.js';
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
    <a class="feed-card" href="#" data-id="${product.id}" data-action="go-to-product" data-name="${product.name.toLowerCase()}">
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

// Pinta el selector de rubros (los 20 nichos) y resalta el activo.
function renderNicheNav() {
  const nav = document.getElementById('nicheNav');
  if (!nav) return;

  const currentSlug = getCurrentSlug();

  nav.innerHTML = Object.entries(niches)
    .map(([slug, niche]) => {
      const icon = niche.galleryEmojis?.[0] || '✨';
      const active = slug === currentSlug ? ' active' : '';
      return `
        <a class="niche-pill${active}" href="?n=${slug}" data-niche-name="${niche.nombre.toLowerCase()}">
          <span class="niche-pill-icon">${icon}</span>
          <span class="niche-pill-label">${niche.nombre}</span>
        </a>
      `;
    })
    .join('');

  const breadcrumb = document.getElementById('nicheBreadcrumb');
  if (breadcrumb) {
    breadcrumb.textContent = `Estás viendo: ${getNiche(currentSlug).nombre}`;
  }
}

// Filtra, en vivo, tanto los rubros del nav como las tarjetas del feed activo.
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();

    let visiblePills = 0;
    document.querySelectorAll('.niche-pill').forEach(pill => {
      const match = !query || pill.dataset.nicheName.includes(query);
      pill.classList.toggle('hidden', !match);
      if (match) visiblePills++;
    });

    let visibleCards = 0;
    document.querySelectorAll('.feed-card').forEach(card => {
      const match = !query || card.dataset.name.includes(query);
      card.classList.toggle('hidden', !match);
      if (match) visibleCards++;
    });

    document.getElementById('noResults')?.classList.toggle('hidden', visibleCards > 0);
    document.getElementById('nicheNav')?.classList.toggle('hidden', visiblePills === 0);
  });
}

export function initHomeFeed() {
  renderFeed();
  renderNicheNav();
  initSearch();

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
