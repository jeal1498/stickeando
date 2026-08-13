export default {
  slug: 'barberias',
  nombre: 'Barberías / Estilistas',
  feedSubtitle: 'Stickers para Barberías y Estilistas',
  galleryEmojis: ['💈', '📅', '✂️', '✅', '🔥', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Barberías y Estilistas · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '💈',
      feedEmojis: ['💈', '📅', '✂️', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar cortes.',
      feature2: 'Diseños con estilo, ideales para tu barbería o salón.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu clientela y quieres responder más rápido cada solicitud de cita. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Barberías y Estilistas · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '💈',
      feedEmojis: ['💈', '📅', '✂️', '🔥', '✅', '💬'],
      feature1: '+30 stickers: citas confirmadas, turno disponible y estilos nuevos.',
      feature2: 'Pensados para el ritmo real de una barbería o salón.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por barberos y estilistas que agendan y avisan a clientes por WhatsApp todos los días. Incluye stickers para confirmar citas, avisar cupos disponibles, promocionar cortes y estilos, y presumir el resultado final — todo con un diseño moderno y con estilo. Menos tiempo escribiendo, más sillón lleno.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Barbería · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🔥',
      feedEmojis: ['🔥', '🎨', '💈', '🖤', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o estilo de marca.',
      feature2: 'Frases adaptadas al tono de tu barbería o salón.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para barberías y estilistas que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu estilo.'
    }
  }
};
