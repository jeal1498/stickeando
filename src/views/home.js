import { nichesList } from '../data/niches/index.js';
import { initHeroCarousel } from '../components/hero-carousel.js';

let faseActual = 'todos';
let queryActual = '';

function nichoCardHTML(nicho, index) {
  return `
    <div class="nicho-card" data-action="go-to-detalle" data-index="${index}">
      <span class="emoji-big">${nicho.emoji}</span>
      <div class="nombre">${nicho.nombre}</div>
      <span class="fase">${nicho.fase.replace('-', ' ').toUpperCase()}</span>
    </div>
  `;
}

function nichosFiltrados() {
  return nichesList.filter(n => {
    const coincideFase = faseActual === 'todos' || n.fase === faseActual;
    const coincideQuery =
      !queryActual || n.nombre.toLowerCase().includes(queryActual);
    return coincideFase && coincideQuery;
  });
}

export function renderNichos(fase = faseActual) {
  faseActual = fase;

  const grid = document.getElementById('nichos-grid');
  const filtered = nichosFiltrados();

  grid.innerHTML = filtered
    .map(nicho => nichoCardHTML(nicho, nichesList.indexOf(nicho)))
    .join('');

  document.getElementById('sinResultados')?.classList.toggle('hidden', filtered.length > 0);
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

// Filtra el catálogo en vivo por nombre de profesión, respetando el filtro
// de fase que esté activo en ese momento.
export function initBusqueda() {
  const input = document.getElementById('buscarNicho');
  if (!input) return;

  input.addEventListener('input', () => {
    queryActual = input.value.trim().toLowerCase();
    renderNichos(faseActual);
  });
}

export function initHome() {
  renderNichos();
  initHeroCarousel(nichesList);
  initFiltros();
  initBusqueda();
}
