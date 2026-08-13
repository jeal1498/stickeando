export default {
  slug: 'inmobiliarios',
  nombre: 'Asesores Inmobiliarios',
  feedSubtitle: 'Stickers para Asesores Inmobiliarios',
  galleryEmojis: ['🏠', '🔑', '📅', '✅', '💼', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Asesores Inmobiliarios · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🏠',
      feedEmojis: ['🏠', '🔑', '📅', '👍', '✨', '✅'],
      feature1: '5 stickers para agendar visitas y dar seguimiento a prospectos.',
      feature2: 'Diseños directos, ideales para cerrar tratos por WhatsApp.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu cartera de clientes y quieres responder más rápido a cada prospecto. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Asesores Inmobiliarios · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🏠',
      feedEmojis: ['🏠', '🔑', '📅', '💼', '✅', '💬'],
      feature1: '+30 stickers: visitas agendadas, propiedades disponibles, cierre de trato.',
      feature2: 'Pensados para el ritmo real de ventas y renta de propiedades.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por asesores inmobiliarios que negocian y dan seguimiento a clientes por WhatsApp todos los días. Incluye stickers para agendar visitas, confirmar disponibilidad, avisar nuevas propiedades y celebrar el cierre de una venta o renta — todo con un diseño moderno y confiable. Menos tiempo escribiendo, más prospectos convertidos en clientes.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Inmobiliaria · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🔑',
      feedEmojis: ['🔑', '🎨', '🏠', '💛', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca inmobiliaria.',
      feature2: 'Frases adaptadas a tu forma de vender y negociar.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para asesores e inmobiliarias que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu forma de atender clientes.'
    }
  }
};
