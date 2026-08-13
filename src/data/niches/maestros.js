export default {
  slug: 'maestros',
  nombre: 'Maestros / Idiomas',
  feedSubtitle: 'Stickers para Maestros y Profesores de Idiomas',
  galleryEmojis: ['📚', '📅', '✏️', '✅', '🎓', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Maestros · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '📚',
      feedEmojis: ['📚', '📅', '✏️', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar clases y recordar tareas.',
      feature2: 'Diseños claros, ideales para tus clases particulares.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu grupo de alumnos y quieres responder más rápido a cada mensaje. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Maestros e Idiomas · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '📚',
      feedEmojis: ['📚', '📅', '✏️', '🎓', '✅', '💬'],
      feature1: '+30 stickers: clases confirmadas, tareas y avance de nivel.',
      feature2: 'Pensados para el día a día real de clases particulares o de idiomas.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por maestros y profesores de idiomas que agendan y dan seguimiento a alumnos por WhatsApp todos los días. Incluye stickers para confirmar clases, recordar tareas, felicitar avances y motivar entre sesiones — todo con un diseño educativo y cercano. Menos tiempo escribiendo, más alumnos constantes.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Academia · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🎓',
      feedEmojis: ['🎓', '🎨', '📚', '💙', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o mascota educativa.',
      feature2: 'Frases adaptadas a tu método de enseñanza.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para maestros y academias de idiomas que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu forma de enseñar.'
    }
  }
};
