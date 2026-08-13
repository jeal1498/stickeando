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
      name: 'Paquete Básico de Stickers para Psicólogos',
      short: 'Básico',
      price: 149,
      oldPrice: null,
      discount: null,
      emoji: '🧠',
      feedEmojis: ['🧠', '📅', '💚', '👍', '🙌', '✨'],
      feature1: '5 stickers para confirmar y recordar citas.',
      feature2: 'Diseños cálidos, pensados para consulta.',
      feature3: 'Entrega digital después de tu compra.',
      feature4: 'Compra única, sin suscripciones.',
      description:
        'El paquete Básico es una forma sencilla de darle un toque más cercano y profesional a tus mensajes con pacientes por WhatsApp: confirmaciones de sesión, recordatorios y mensajes de apoyo.'
    },

    profesional: {
      id: 'profesional',
      name: 'Paquete Profesional +30 Stickers para Psicólogos',
      short: 'Profesional',
      price: 349,
      oldPrice: 498,
      discount: '30% OFF',
      emoji: '🧠',
      feedEmojis: ['🧠', '📅', '💚', '🕊️', '✅', '💬'],
      feature1: 'Más de 30 stickers para tu consultorio.',
      feature2: 'Recordatorios de sesión, confirmaciones y frases de contención.',
      feature3: 'Entrega digital después de tu compra.',
      feature4: 'Sin costos de envío ni cargos recurrentes.',
      description:
        'Comunícate con tus pacientes de forma más cálida y profesional. Este paquete incluye stickers para confirmar citas, recordar sesiones, dar seguimiento entre consultas y transmitir cercanía sin perder la seriedad de tu práctica clínica.'
    },

    premium: {
      id: 'premium',
      name: 'Paquete Premium Personalizado para tu Consultorio',
      short: 'Premium',
      price: 1200,
      oldPrice: null,
      discount: null,
      emoji: '🕊️',
      feedEmojis: ['🕊️', '🎨', '🧠', '💜', '📅', '✨'],
      feature1: 'Diseño personalizado con la identidad de tu consultorio.',
      feature2: 'Frases y símbolos adaptados a tu enfoque terapéutico.',
      feature3: 'Entrega digital después de la aprobación.',
      feature4: 'Producto personalizado de una sola compra.',
      description:
        'El paquete Premium está pensado para psicólogos y consultorios que quieren un set de stickers 100% personalizado, con su paleta de colores, logo o mascota, para reforzar su marca en cada conversación de WhatsApp.'
    }
  }
};
