export default {
  slug: 'fotografos',
  nombre: 'Fotógrafos Profesionales',
  feedSubtitle: 'Stickers para Fotógrafos Profesionales',
  galleryEmojis: ['📷', '📅', '🎞️', '✅', '✨', '🖼️'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Fotógrafos · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '📷',
      feedEmojis: ['📷', '📅', '🎞️', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar sesiones y fechas de entrega.',
      feature2: 'Diseños con estilo, ideales para tu estudio fotográfico.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás construyendo tu cartera de clientes y quieres responder más rápido cada solicitud. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Fotógrafos Profesionales · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '📷',
      feedEmojis: ['📷', '📅', '🎞️', '🖼️', '✅', '💬'],
      feature1: '+30 stickers: sesiones confirmadas, anticipos y galería lista.',
      feature2: 'Pensados para el ritmo real de un fotógrafo profesional.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por fotógrafos que agendan sesiones y entregan trabajos por WhatsApp todos los días. Incluye stickers para confirmar sesión, avisar anticipo recibido, notificar que la galería está lista y agradecer la confianza — todo con un diseño creativo y profesional. Menos tiempo escribiendo, más sesiones bien organizadas.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Estudio · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🖼️',
      feedEmojis: ['🖼️', '🎨', '📷', '🖤', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o marca de estudio.',
      feature2: 'Frases adaptadas al estilo visual de tu trabajo.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para fotógrafos y estudios que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu estilo fotográfico.'
    }
  }
};
