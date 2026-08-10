import { selectPackage } from './views/product.js';
import { renderGallery } from './components/gallery.js';

export function goToProduct(id) {
  selectPackage(id);
  renderGallery(0);

  document.getElementById('homeView').style.display = 'none';
  document.getElementById('productView').style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function showHome() {
  document.getElementById('productView').style.display = 'none';
  document.getElementById('homeView').style.display = 'block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Único punto de "volver": desde la vista de producto siempre se regresa al feed.
export function goBack() {
  showHome();
}
