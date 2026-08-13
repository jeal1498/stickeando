export default {
  slug: 'agentes-viajes',
  nombre: 'Agentes de Viajes',
  feedSubtitle: 'Stickers para Agentes de Viajes',
  galleryEmojis: ['✈️', '📅', '🧳', '✅', '🌴', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Agentes de Viajes · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '✈️',
      feedEmojis: ['✈️', '📅', '🧳', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar reservas y dar seguimiento a clientes.',
      feature2: 'Diseños con espíritu de viaje, ideales para tu agencia.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu cartera de viajeros y quieres responder más rápido a cada cotización. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Agentes de Viajes · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '✈️',
      feedEmojis: ['✈️', '📅', '🧳', '🌴', '✅', '💬'],
      feature1: '+30 stickers: cotizaciones, reservas confirmadas y check-in.',
      feature2: 'Pensados para el ritmo real de venta de paquetes y vuelos.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por agentes de viajes que cotizan y dan seguimiento a clientes por WhatsApp todos los días. Incluye stickers para confirmar reservas, avisar promociones, recordar documentos de viaje y desear buen viaje — todo con un diseño vacacional y profesional. Menos tiempo escribiendo, más viajes vendidos y clientes felices.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Agencia · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🧳',
      feedEmojis: ['🧳', '🎨', '✈️', '💙', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca de agencia.',
      feature2: 'Frases adaptadas a tu forma de vender experiencias de viaje.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para agentes y agencias de viajes que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a la experiencia que vendes.'
    }
  }
};
