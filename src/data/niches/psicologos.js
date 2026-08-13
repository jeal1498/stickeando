// Nicho: Psicólogos y Terapeutas

export default {
  slug: 'psicologos',
  nombre: 'Psicólogos y Terapeutas',
  feedSubtitle: 'Stickers para Psicólogos y Terapeutas',

  // Emojis del carrusel/galería en la vista de producto (5 imágenes + 1 video)
  galleryEmojis: ['🧠', '📅', '💚', '🙌', '😊', '🕊️'],

  DEFAULT_PRODUCT_ID: 'profesional',

  products: {
    basico: {
      id: 'basico',
      name: 'Stickers para Psicólogos · Paquete Básico',
      short: 'Básico',
      price: 149,
      oldPrice: null,
      discount: null,
      emoji: '🧠',
      feedEmojis: ['🧠', '📅', '💚', '👍', '🙌', '✨'],
      feature1: '5 stickers para confirmar y recordar sesiones.',
      feature2: 'Comunicación cálida sin perder el tono profesional.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description:
        'Ideal si estás empezando tu consultorio y quieres dejar de escribir "confirmamos tu cita" desde cero cada vez. Con este set respondes más rápido, tus pacientes sienten calidez desde el primer mensaje y tu WhatsApp se ve más profesional sin necesitar diseñador ni experiencia técnica.'
    },

    profesional: {
      id: 'profesional',
      name: 'Stickers para Psicólogos · +30 Diseños Profesionales',
      short: 'Profesional',
      price: 349,
      oldPrice: 498,
      discount: '30% OFF',
      emoji: '🧠',
      feedEmojis: ['🧠', '📅', '💚', '🕊️', '✅', '💬'],
      feature1: '+30 stickers: confirmaciones, recordatorios, contención y seguimiento.',
      feature2: 'Pensados para el día a día real de un consultorio de psicología.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description:
        'El paquete más elegido por psicólogos y terapeutas que atienden pacientes por WhatsApp todos los días. Incluye stickers para agendar, confirmar y recordar sesiones, frases de acompañamiento entre consultas, y mensajes de cierre y seguimiento — todo con un diseño cálido, profesional y coherente para tu consultorio. Menos tiempo escribiendo, más presencia terapéutica en cada conversación.'
    },

    premium: {
      id: 'premium',
      name: 'Stickers Personalizados para tu Consultorio · Premium',
      short: 'Premium',
      price: 1200,
      oldPrice: null,
      discount: null,
      emoji: '🕊️',
      feedEmojis: ['🕊️', '🎨', '🧠', '💜', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o mascota.',
      feature2: 'Frases adaptadas a tu enfoque terapéutico y tono de voz.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description:
        'Para consultorios y psicólogos que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual — colores, logo, mascota o iniciales — y frases alineadas a cómo hablas con tus pacientes. Tu consultorio, con personalidad propia, en cada chat de WhatsApp.'
    }
  }
};
