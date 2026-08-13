import psicologos from './psicologos.js';
import dentistas from './dentistas.js';

// Cada nuevo nicho se agrega aquí con su import correspondiente.
export const niches = {
  psicologos,
  dentistas
};

export const DEFAULT_NICHE_SLUG = 'psicologos';

// Slug activo: se lee de ?n=slug en la URL (ej. stickeando.app/?n=dentistas).
// Si no hay slug o no existe ese nicho, cae al nicho por default.
export function getCurrentSlug() {
  const param = new URLSearchParams(window.location.search).get('n');
  return param && niches[param] ? param : DEFAULT_NICHE_SLUG;
}

export function getNiche(slug = getCurrentSlug()) {
  return niches[slug] || niches[DEFAULT_NICHE_SLUG];
}
