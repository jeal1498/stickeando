export default {
  slug: 'seguros',
  nombre: 'Agentes de Seguros',
  feedSubtitle: 'Stickers para Agentes de Seguros',
  galleryEmojis: ['🛡️', '📅', '💼', '✅', '📄', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Agentes de Seguros · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🛡️',
      feedEmojis: ['🛡️', '📅', '💼', '👍', '✨', '✅'],
      feature1: '5 stickers para agendar citas y dar seguimiento a clientes.',
      feature2: 'Diseños de confianza, ideales para tu cartera de pólizas.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu cartera de clientes y quieres responder más rápido a cada prospecto. Con este set tu WhatsApp transmite más confianza sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Agentes de Seguros · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🛡️',
      feedEmojis: ['🛡️', '📅', '💼', '📄', '✅', '💬'],
      feature1: '+30 stickers: cotizaciones, renovaciones y pagos confirmados.',
      feature2: 'Pensados para el ritmo real de ventas y atención de siniestros.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por agentes de seguros que dan seguimiento a clientes y pólizas por WhatsApp todos los días. Incluye stickers para enviar cotizaciones, confirmar pagos, recordar renovaciones y acompañar en trámites de siniestros — todo con un diseño confiable y profesional. Menos tiempo escribiendo, más pólizas cerradas y renovadas.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Agencia · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '💼',
      feedEmojis: ['💼', '🎨', '🛡️', '💙', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o aseguradora.',
      feature2: 'Frases adaptadas a tu forma de asesorar clientes.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para agentes y agencias de seguros que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu forma de vender y dar servicio.'
    }
  }
};
