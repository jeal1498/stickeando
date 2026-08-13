export default {
  slug: 'abogados',
  nombre: 'Abogados',
  feedSubtitle: 'Stickers para Abogados',
  galleryEmojis: ['⚖️', '📅', '📄', '✅', '💼', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Abogados · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '⚖️',
      feedEmojis: ['⚖️', '📅', '📄', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y dar seguimiento a casos.',
      feature2: 'Diseños serios, ideales para tu despacho jurídico.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás arrancando tu práctica y quieres comunicarte más rápido con tus clientes. Con este set tu WhatsApp transmite más profesionalismo sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Abogados · +30 Diseños Profesionales', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '⚖️',
      feedEmojis: ['⚖️', '📅', '📄', '💼', '✅', '💬'],
      feature1: '+30 stickers: audiencias, documentos y actualización de casos.',
      feature2: 'Pensados para el día a día real de un despacho legal.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por abogados que dan seguimiento a clientes y casos por WhatsApp todos los días. Incluye stickers para confirmar citas, avisar audiencias, solicitar documentos y actualizar el estatus de un caso — todo con un diseño serio y profesional. Menos tiempo escribiendo, más clientes informados y tranquilos.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Despacho · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '💼',
      feedEmojis: ['💼', '🎨', '⚖️', '🖤', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca del despacho.',
      feature2: 'Frases adaptadas al tono formal de tu práctica legal.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para abogados y despachos que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu forma de comunicarte con clientes.'
    }
  }
};
