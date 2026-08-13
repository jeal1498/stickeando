// Nicho: Nutriólogos

export default {
  slug: 'nutriologos',
  nombre: 'Nutriólogos',
  feedSubtitle: 'Stickers para Nutriólogos',

  galleryEmojis: ['🥗', '📅', '💪', '✅', '🍎', '✨'],

  DEFAULT_PRODUCT_ID: 'profesional',

  products: {
    basico: {
      id: 'basico',
      name: 'Stickers para Nutriólogos · Paquete Básico',
      short: 'Básico',
      price: 149,
      oldPrice: null,
      discount: null,
      emoji: '🥗',
      feedEmojis: ['🥗', '📅', '💪', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar consultas.',
      feature2: 'Diseños claros, ideales para tu consulta nutricional.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description:
        'Perfecto si estás arrancando tu consulta y quieres dejar de escribir "confirmamos tu cita" desde cero cada vez. Con este set respondes más rápido, das seguimiento con calidez y tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },

    profesional: {
      id: 'profesional',
      name: 'Stickers para Nutriólogos · +30 Diseños Profesionales',
      short: 'Profesional',
      price: 349,
      oldPrice: 498,
      discount: '30% OFF',
      emoji: '🥗',
      feedEmojis: ['🥗', '📅', '💪', '🍎', '✅', '💬'],
      feature1: '+30 stickers: confirmaciones, recordatorios y motivación.',
      feature2: 'Pensados para el día a día real de una consulta de nutrición.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description:
        'El paquete más elegido por nutriólogos que dan seguimiento a pacientes por WhatsApp todos los días. Incluye stickers para agendar y confirmar consultas, recordatorios de plan alimenticio, mensajes de motivación entre citas y seguimiento de avances — todo con un diseño fresco y profesional. Menos tiempo escribiendo, más pacientes constantes con su plan.'
    },

    premium: {
      id: 'premium',
      name: 'Stickers Personalizados para tu Consulta · Premium',
      short: 'Premium',
      price: 1200,
      oldPrice: null,
      discount: null,
      emoji: '🍎',
      feedEmojis: ['🍎', '🎨', '🥗', '💚', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o mascota.',
      feature2: 'Frases adaptadas a tu enfoque nutricional y tono de voz.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description:
        'Para nutriólogos y consultorios que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual — colores, logo o mascota — y frases alineadas a cómo hablas con tus pacientes. Tu consulta, con personalidad propia, en cada chat de WhatsApp.'
    }
  }
};
