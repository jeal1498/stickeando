import psicologos from './psicologos.js';
import dentistas from './dentistas.js';
import nutriologos from './nutriologos.js';
import pediatras from './pediatras.js';
import medicosGenerales from './medicos-generales.js';
import inmobiliarios from './inmobiliarios.js';
import seguros from './seguros.js';
import contadores from './contadores.js';
import abogados from './abogados.js';
import agentesViajes from './agentes-viajes.js';
import veterinarios from './veterinarios.js';
import groomers from './groomers.js';
import lashistas from './lashistas.js';
import cosmetologas from './cosmetologas.js';
import barberias from './barberias.js';
import maestros from './maestros.js';
import entrenadores from './entrenadores.js';
import organizadoresEventos from './organizadores-eventos.js';
import reposteros from './reposteros.js';
import fotografos from './fotografos.js';

// Cada nuevo nicho se agrega aquí con su import correspondiente.
export const niches = {
  psicologos,
  dentistas,
  nutriologos,
  pediatras,
  'medicos-generales': medicosGenerales,
  inmobiliarios,
  seguros,
  contadores,
  abogados,
  'agentes-viajes': agentesViajes,
  veterinarios,
  groomers,
  lashistas,
  cosmetologas,
  barberias,
  maestros,
  entrenadores,
  'organizadores-eventos': organizadoresEventos,
  reposteros,
  fotografos
};

// Lista ordenada de nichos (mismo orden que las claves de arriba). El índice
// dentro de este array es lo que usa el router para ir a la vista de detalle.
export const nichesList = Object.values(niches);

export function getNicheByIndex(index) {
  return nichesList[index];
}

export function getNiche(slug) {
  return niches[slug];
}
