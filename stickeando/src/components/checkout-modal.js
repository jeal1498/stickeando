import { money } from '../utils/format.js';

export function openCheckout(product) {
  document.getElementById('modalNote').innerHTML =
    'Vas a comprar <strong>' +
    product.name +
    '</strong> por <strong>' +
    money(product.price) +
    ' MXN</strong>.';

  document.getElementById('modal').classList.add('open');
}

export function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

export function simulatePayment() {
  const name = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();

  if (!name || !email || !phone) {
    alert('Completa nombre, correo y WhatsApp.');
    return;
  }

  document.getElementById('modalCard').innerHTML = `
    <div style="text-align:center; padding:30px 10px;">
      <div style="font-size:48px; color:#00a650;">✓</div>
      <h2 style="margin-top:10px;">¡Pedido creado!</h2>
      <p style="color:#666; font-size:13px; line-height:1.6; margin-top:10px;">
        Esta es una demostración. En producción, aquí se abrirá el checkout
        real y posteriormente se enviará automáticamente el producto digital.
      </p>
      <button class="pay-now" style="margin-top:18px;" data-action="reload">
        Continuar
      </button>
    </div>
  `;
}
