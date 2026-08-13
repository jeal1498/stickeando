export default {
  slug: 'lashistas',
  nombre: 'Lashistas / Manicuristas',
  feedSubtitle: 'Stickers para Lashistas y Manicuristas',
  galleryEmojis: ['💅', '📅', '👁️', '✅', '💖', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Lashistas y Manicuristas · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '💅',
      feedEmojis: ['💅', '📅', '👁️', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar mantenimientos.',
      feature2: 'Diseños con brillo, ideales para tu agenda de belleza.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu cartera de clientas y quieres responder más rápido cada solicitud de cita. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Lashistas y Manicuristas · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '💅',
      feedEmojis: ['💅', '📅', '👁️', '💖', '✅', '💬'],
      feature1: '+30 stickers: citas confirmadas, mantenimiento y antes/después.',
      feature2: 'Pensados para el ritmo real de una agenda de lashista o manicurista.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por lashistas y manicuristas que agendan y dan seguimiento a clientas por WhatsApp todos los días. Incluye stickers para confirmar citas, recordar retoques, avisar promociones y presumir el antes/después — todo con un diseño femenino y llamativo. Menos tiempo escribiendo, más agenda llena.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Negocio · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '💖',
      feedEmojis: ['💖', '🎨', '💅', '💜', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o estilo de marca.',
      feature2: 'Frases adaptadas al tono cercano de tu negocio de belleza.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para lashistas y manicuristas que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu estilo.'
    }
  }
};
