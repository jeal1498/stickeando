export default {
  slug: 'reposteros',
  nombre: 'Reposteros / Pasteleros',
  feedSubtitle: 'Stickers para Reposteros y Pasteleros',
  galleryEmojis: ['🎂', '📅', '🧁', '✅', '🍰', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Reposteros · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🎂',
      feedEmojis: ['🎂', '📅', '🧁', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar pedidos y fechas de entrega.',
      feature2: 'Diseños dulces, ideales para tu negocio de repostería.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu clientela y quieres responder más rápido cada pedido. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Reposteros y Pasteleros · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🎂',
      feedEmojis: ['🎂', '📅', '🧁', '🍰', '✅', '💬'],
      feature1: '+30 stickers: pedidos confirmados, anticipos y "listo para entregar".',
      feature2: 'Pensados para el ritmo real de un negocio de pasteles por encargo.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por reposteros y pasteleros que reciben pedidos por WhatsApp todos los días. Incluye stickers para confirmar pedido y fecha, avisar anticipo recibido, notificar cuando el pastel está listo y agradecer la compra — todo con un diseño dulce y llamativo. Menos tiempo escribiendo, más pedidos bien organizados.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Repostería · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🍰',
      feedEmojis: ['🍰', '🎨', '🎂', '💗', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca de repostería.',
      feature2: 'Frases adaptadas al estilo dulce y cercano de tu negocio.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para reposteros y pasteleros que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu estilo.'
    }
  }
};
