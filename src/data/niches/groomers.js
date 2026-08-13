export default {
  slug: 'groomers',
  nombre: 'Estéticas Caninas / Groomers',
  feedSubtitle: 'Stickers para Estéticas Caninas',
  galleryEmojis: ['🐩', '📅', '✂️', '✅', '🛁', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Estéticas Caninas · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🐩',
      feedEmojis: ['🐩', '📅', '✂️', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas de baño y corte.',
      feature2: 'Diseños tiernos, ideales para tu estética canina.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás arrancando tu negocio de grooming y quieres responder más rápido a los dueños de mascotas. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Estéticas Caninas · +30 Diseños', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🐩',
      feedEmojis: ['🐩', '📅', '✂️', '🛁', '✅', '💬'],
      feature1: '+30 stickers: citas confirmadas, "listo para recoger" y antes/después.',
      feature2: 'Pensados para el ritmo real de una estética canina o groomer.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por groomers que agendan y avisan a dueños de mascotas por WhatsApp todos los días. Incluye stickers para confirmar citas, avisar que su peludito ya está listo, promocionar paquetes y compartir el antes/después — todo con un diseño tierno y llamativo. Menos tiempo escribiendo, más citas llenas.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Estética · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '✂️',
      feedEmojis: ['✂️', '🎨', '🐩', '💜', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o mascota del negocio.',
      feature2: 'Frases adaptadas al tono divertido de tu marca.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para estéticas caninas y groomers que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu estilo.'
    }
  }
};
