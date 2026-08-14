import { nichesList } from '../data/niches/index.js';
import { initHeroCarousel } from '../components/hero-carousel.js';

let faseActual = 'todos';
let queryActual = '';

const FASE_LABEL = {
  'salud-mental': '🧠 Salud mental',
  salud: '🩺 Salud',
  ventas: '💼 Ventas',
  servicios: '🛠️ Servicios',
  educacion: '📚 Educación'
};

const MAX_COLAPSADO = 4;
const categoriasAbiertas = new Set();

function nichoCardHTML(nicho, index) {
  return `
    <div class="nicho-card" data-action="go-to-detalle" data-index="${index}">
      <span class="emoji-big">${nicho.emoji}</span>
      <div class="nombre">${nicho.nombre}</div>
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

// Con "Todos" y sin búsqueda, agrupa en categorías colapsadas (máx. 4
// tarjetas visibles c/u) para evitar el caos de 19 tarjetas sueltas de
// golpe. Al filtrar por categoría o buscar, se ve la grilla plana normal.
function renderAgrupado(filtered) {
  const grupos = {};
  filtered.forEach(n => {
    (grupos[n.fase] ||= []).push(n);
  });

  return Object.entries(grupos)
    .map(([fase, items]) => {
      const abierto = categoriasAbiertas.has(fase);
      const visibles = abierto ? items : items.slice(0, MAX_COLAPSADO);
      const cards = visibles
        .map(n => nichoCardHTML(n, nichesList.indexOf(n)))
        .join('');
      const verMas =
        items.length > MAX_COLAPSADO
          ? `<button class="ver-mas-categoria" data-action="toggle-categoria" data-fase="${fase}">
               ${abierto ? 'Ver menos' : `Ver ${items.length - MAX_COLAPSADO} más`}
             </button>`
          : '';

      return `
        <div class="categoria-grupo">
          <h3 class="categoria-titulo">${FASE_LABEL[fase] || fase}</h3>
          <div class="nicho-grid">${cards}</div>
          ${verMas}
        </div>
      `;
    })
    .join('');
}

export function renderNichos(fase = faseActual) {
  faseActual = fase;

  const grid = document.getElementById('nichos-grid');
  const filtered = nichosFiltrados();

  const agrupar = faseActual === 'todos' && !queryActual;

  grid.innerHTML = agrupar
    ? renderAgrupado(filtered)
    : filtered.map(nicho => nichoCardHTML(nicho, nichesList.indexOf(nicho))).join('');

  document.getElementById('sinResultados')?.classList.toggle('hidden', filtered.length > 0);
}

export function toggleCategoria(fase) {
  categoriasAbiertas.has(fase) ? categoriasAbiertas.delete(fase) : categoriasAbiertas.add(fase);
  renderNichos(faseActual);
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
