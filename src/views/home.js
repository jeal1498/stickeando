import { nichesList } from '../data/niches/index.js';
import { initHeroCarousel } from '../components/hero-carousel.js';

function nichoCardHTML(nicho, index) {
  return `
    <div class="nicho-card" data-action="go-to-detalle" data-index="${index}">
      <span class="emoji-big">${nicho.emoji}</span>
      <div class="nombre">${nicho.nombre}</div>
      <span class="fase">${nicho.fase.replace('-', ' ').toUpperCase()}</span>
    </div>
  `;
}

export function renderNichos(fase = 'todos') {
  const grid = document.getElementById('nichos-grid');
  const filtered =
    fase === 'todos' ? nichesList : nichesList.filter(n => n.fase === fase);

  grid.innerHTML = filtered
    .map(nicho => nichoCardHTML(nicho, nichesList.indexOf(nicho)))
    .join('');
}

export function initFiltros() {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderNichos(btn.dataset.fase);
    });
  });
}

export function initHome() {
  renderNichos();
  initHeroCarousel(nichesList);
  initFiltros();
}
