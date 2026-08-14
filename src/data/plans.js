// Los 3 planes son iguales para todos los nichos; lo único que cambia por
// nicho es la lista de stickers (ver niche.stickers.basic / .completo).
export const plans = {
  basic: {
    id: 'basic',
    nombre: 'Esencial',
    precio: '$149',
    desc: '10 stickers',
    badge: null,
    stickersKey: 'basic',
    incluye: [
      '10 stickers esenciales',
      'Frases clave: confirmación, recordatorio, pago',
      'Formato .wastickers',
      'Ideal para empezar'
    ]
  },
  completo: {
    id: 'completo',
    nombre: 'Experto',
    precio: '$349',
    desc: '30 stickers + poses',
    badge: '⭐ Más vendido',
    stickersKey: 'completo',
    incluye: [
      '30 stickers con todas las frases',
      'Poses universales incluidas',
      'Formato .wastickers',
      'La mejor opción para profesionales'
    ]
  },
  premium: {
    id: 'premium',
    nombre: 'A medida',
    precio: '$1,200',
    desc: 'Diseño exclusivo',
    badge: 'Personalizado',
    stickersKey: 'completo',
    incluye: [
      '30 stickers personalizados',
      'Mascota exclusiva desde cero',
      'Paleta de colores a medida',
      'Frases adaptadas a tu negocio',
      'Branding completo'
    ]
  }
};

export function getPlanData(planId, niche) {
  const plan = plans[planId];
  return { ...plan, stickers: niche.stickers[plan.stickersKey] };
}
