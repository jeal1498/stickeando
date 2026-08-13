// Nicho: Dentistas y Ortodoncistas

export default {
  slug: 'dentistas',
  nombre: 'Dentistas y Ortodoncistas',
  feedSubtitle: 'Stickers para Dentistas y Ortodoncistas',

  // Emojis del carrusel/galería en la vista de producto (5 imágenes + 1 video)
  galleryEmojis: ['🦷', '📅', '😁', '✅', '🪥', '✨'],

  DEFAULT_PRODUCT_ID: 'profesional',

  products: {
    basico: {
      id: 'basico',
      name: 'Stickers para Dentistas · Paquete Básico',
      short: 'Básico',
      price: 149,
      oldPrice: null,
      discount: null,
      emoji: '🦷',
      feedEmojis: ['🦷', '📅', '😁', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar consultas.',
      feature2: 'Diseños claros, ideales para tu clínica dental.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description:
        'Perfecto si estás arrancando tu consultorio dental y quieres dejar de escribir "confirmamos tu cita" desde cero cada vez. Con este set respondes más rápido, reduces inasistencias y tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },

    profesional: {
      id: 'profesional',
      name: 'Stickers para Dentistas · +30 Diseños Profesionales',
      short: 'Profesional',
      price: 349,
      oldPrice: 498,
      discount: '30% OFF',
      emoji: '🦷',
      feedEmojis: ['🦷', '📅', '😁', '🪥', '✅', '💬'],
      feature1: '+30 stickers: confirmaciones, recordatorios y cuidado post-consulta.',
      feature2: 'Pensados para el día a día real de una clínica dental u ortodoncia.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description:
        'El paquete más elegido por dentistas y ortodoncistas que atienden pacientes por WhatsApp todos los días. Incluye stickers para agendar y confirmar citas, recordatorios de limpieza o ajuste de brackets, indicaciones de cuidado post-tratamiento y mensajes de seguimiento — todo con un diseño fresco y profesional para tu clínica. Menos inasistencias, más pacientes bien informados.'
    },

    premium: {
      id: 'premium',
      name: 'Stickers Personalizados para tu Clínica Dental · Premium',
      short: 'Premium',
      price: 1200,
      oldPrice: null,
      discount: null,
      emoji: '😁',
      feedEmojis: ['😁', '🎨', '🦷', '💙', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o mascota.',
      feature2: 'Frases adaptadas al tono de tu clínica u ortodoncia.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description:
        'Para clínicas dentales y ortodoncistas que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual — colores, logo o mascota — y frases alineadas a cómo se comunica tu clínica. Tu consultorio, con personalidad propia, en cada chat de WhatsApp.'
    }
  }
};
