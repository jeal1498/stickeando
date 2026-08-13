export default {
  slug: 'organizadores-eventos',
  nombre: 'Organizadores de Eventos',
  feedSubtitle: 'Stickers para Organizadores de Eventos',
  galleryEmojis: ['🎉', '📅', '🎈', '✅', '📋', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Organizadores de Eventos · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🎉',
      feedEmojis: ['🎉', '📅', '🎈', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y cotizaciones.',
      feature2: 'Diseños festivos, ideales para tu negocio de eventos.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu cartera de clientes y quieres responder más rápido cada cotización. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Organizadores de Eventos · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🎉',
      feedEmojis: ['🎉', '📅', '🎈', '📋', '✅', '💬'],
      feature1: '+30 stickers: cotizaciones, apartado de fecha y checklist de evento.',
      feature2: 'Pensados para el ritmo real de la organización de eventos.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por organizadores de eventos que cotizan y dan seguimiento a clientes por WhatsApp todos los días. Incluye stickers para confirmar fecha, compartir avances del evento, avisar pagos y celebrar el gran día — todo con un diseño festivo y profesional. Menos tiempo escribiendo, más eventos cerrados.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Marca de Eventos · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🎈',
      feedEmojis: ['🎈', '🎨', '🎉', '💗', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca de eventos.',
      feature2: 'Frases adaptadas al estilo festivo de tu negocio.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para organizadores de eventos que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a la experiencia que creas.'
    }
  }
};
