import './styles/main.css';

import { initHome } from './views/home.js';
import {
  mostrarDetalle,
  seleccionarPlan,
  comprar,
  descargarMuestra,
  verDemo
} from './views/detalle.js';
import { cerrarModal, irAPagar, initModalResumen } from './components/modal-resumen.js';
import { goBack, initRouter } from './router.js';

// Mapa central de acciones: cada elemento interactivo del HTML lleva un
// atributo data-action en vez de onclick inline. Un solo listener delegado
// en document cubre tanto el markup estático como el generado dinámicamente.
const actions = {
  'go-back': goBack,
  'go-to-detalle': el => mostrarDetalle(Number(el.dataset.index)),
  'select-plan': el => seleccionarPlan(el.dataset.plan),
  'comprar': comprar,
  'descargar-muestra': descargarMuestra,
  'ver-demo': verDemo,
  'close-modal-resumen': cerrarModal,
  'ir-a-pagar': irAPagar
};

document.addEventListener('click', e => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const handler = actions[target.dataset.action];
  if (!handler) return;

  handler.length ? handler(target) : handler();
});

initModalResumen();
initHome();
initRouter();
