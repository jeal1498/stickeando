export default {
  slug: 'contadores',
  nombre: 'Contadores / Fiscales',
  feedSubtitle: 'Stickers para Contadores y Asesores Fiscales',
  galleryEmojis: ['📊', '📅', '💰', '✅', '🧾', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Contadores · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '📊',
      feedEmojis: ['📊', '📅', '💰', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar fechas límite.',
      feature2: 'Diseños claros, ideales para tu despacho contable.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás arrancando tu despacho y quieres comunicarte más rápido con tus clientes. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Contadores · +30 Diseños Profesionales', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '📊',
      feedEmojis: ['📊', '📅', '💰', '🧾', '✅', '💬'],
      feature1: '+30 stickers: declaraciones, pagos, fechas límite y documentos pendientes.',
      feature2: 'Pensados para el día a día real de un despacho contable o fiscal.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por contadores y asesores fiscales que dan seguimiento a clientes por WhatsApp todos los días. Incluye stickers para recordar fechas límite de declaración, confirmar pagos, solicitar documentos y avisar trámites completados — todo con un diseño claro y profesional. Menos tiempo escribiendo, más clientes al corriente con sus obligaciones.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Despacho · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🧾',
      feedEmojis: ['🧾', '🎨', '📊', '💚', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca del despacho.',
      feature2: 'Frases adaptadas a tu forma de asesorar clientes.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para contadores y despachos que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu forma de dar seguimiento fiscal.'
    }
  }
};
