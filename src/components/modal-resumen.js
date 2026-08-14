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
