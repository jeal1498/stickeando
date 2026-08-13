// Navegación entre las dos "pantallas" de la SPA (inicio / detalle de nicho).
let historyReady = false;

export function pushDetalleState(index) {
  if (historyReady) {
    history.pushState({ vista: 'detalle', nicho: index }, '', '#detalle-' + index);
  }
}

export function showInicio() {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-inicio').classList.add('active');
  document.getElementById('backArrow').classList.remove('visible');

  const bar = document.querySelector('.bottom-bar');
  if (bar) bar.remove();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Único punto de "volver": si ya estamos en inicio no hace nada más que
// asegurar el estado; si estamos en detalle, retrocede en el historial.
export function goBack() {
  if (document.getElementById('tab-inicio')?.classList.contains('active')) {
    showInicio();
    return;
  }
  if (historyReady) {
    history.back();
  } else {
    showInicio();
  }
}

export function initRouter() {
  window.addEventListener('popstate', () => {
    showInicio();
    if (location.hash !== '#inicio') {
      history.replaceState({ vista: 'inicio' }, '', '#inicio');
    }
  });

  history.replaceState({ vista: 'inicio' }, '', '#inicio');
  historyReady = true;
  showInicio();
}
