import { getStripeCheckoutUrl } from '../utils/stripe.js';

let stripeUrl = '';

export function mostrarModal(planData, nicho) {
  document.getElementById('modal-plan').textContent = planData.nombre;
  document.getElementById('modal-nicho').textContent = nicho.nombre;
  document.getElementById('modal-incluye').textContent = planData.desc || planData.incluye[0];
  document.getElementById('modal-total').textContent = `${planData.precio} MXN`;

  stripeUrl = getStripeCheckoutUrl(planData.id);

  document.getElementById('modalResumen').classList.add('active');
}

// Checkout directo: el botón principal de compra salta el modal de resumen
// y abre Stripe de inmediato (menos clics = menos fricción para TDAH).
// El modal queda disponible como opción secundaria ("Ver resumen") para
// quien sí quiera revisar antes de pagar.
export function comprarDirecto(planData) {
  stripeUrl = getStripeCheckoutUrl(planData.id);
  window.open(stripeUrl, '_blank', 'noopener,noreferrer');
}

export function cerrarModal() {
  document.getElementById('modalResumen').classList.remove('active');
}

export function irAPagar() {
  window.open(stripeUrl, '_blank', 'noopener,noreferrer');
  cerrarModal();
}

export function initModalResumen() {
  document.getElementById('modalResumen').addEventListener('click', e => {
    if (e.target === e.currentTarget) cerrarModal();
  });
}
