export default {
  slug: 'entrenadores',
  nombre: 'Entrenadores Personales',
  feedSubtitle: 'Stickers para Entrenadores Personales',
  galleryEmojis: ['🏋️', '📅', '💪', '✅', '🔥', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Entrenadores Personales · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🏋️',
      feedEmojis: ['🏋️', '📅', '💪', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar sesiones y motivar a tus clientes.',
      feature2: 'Diseños con energía, ideales para tu entrenamiento.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu cartera de clientes y quieres responder más rápido cada mensaje. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Entrenadores Personales · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🏋️',
      feedEmojis: ['🏋️', '📅', '💪', '🔥', '✅', '💬'],
      feature1: '+30 stickers: sesiones confirmadas, rutinas y logros alcanzados.',
      feature2: 'Pensados para el día a día real de un entrenador personal.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por entrenadores personales que dan seguimiento a clientes por WhatsApp todos los días. Incluye stickers para confirmar sesiones, enviar rutinas, celebrar logros y mantener la motivación entre entrenamientos — todo con un diseño enérgico y profesional. Menos tiempo escribiendo, más clientes constantes con su plan.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Marca · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🔥',
      feedEmojis: ['🔥', '🎨', '🏋️', '💛', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca personal.',
      feature2: 'Frases adaptadas a tu estilo de entrenamiento y motivación.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para entrenadores personales que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu forma de motivar a tus clientes.'
    }
  }
};
