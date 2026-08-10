// Datos provisionales — reemplazar por datos reales / fuente definitiva
// (CMS, API, etc.) cuando el proyecto avance más allá del prototipo.
export const products = {
  basico: {
    id: 'basico',
    name: 'Paquete Básico de Stickers',
    short: 'Básico',
    price: 149,
    oldPrice: null,
    discount: null,
    emoji: '💬',
    feature1: '5 stickers genéricos para WhatsApp.',
    feature2: 'Diseños sencillos y listos para usar.',
    feature3: 'Entrega digital después de tu compra.',
    feature4: 'Compra única, sin suscripciones.',
    description:
      'El paquete Básico es una opción sencilla para probar Stickeando y comenzar a utilizar stickers personalizados en WhatsApp.'
  },

  profesional: {
    id: 'profesional',
    name: 'Paquete Profesional +30 Stickers para WhatsApp',
    short: 'Profesional',
    price: 349,
    oldPrice: 498,
    discount: '30% OFF',
    emoji: '🧠',
    feature1: 'Más de 30 stickers exclusivos.',
    feature2: 'Diseños listos para utilizar en WhatsApp.',
    feature3: 'Entrega digital después de tu compra.',
    feature4: 'Sin costos de envío ni cargos recurrentes.',
    description:
      'Lleva tu comunicación de WhatsApp al siguiente nivel con un paquete de stickers diseñado para profesionales. Ideal para psicólogos, terapeutas, consultorios y profesionales que quieren comunicarse de una manera más cercana y visual.'
  },

  premium: {
    id: 'premium',
    name: 'Paquete Premium Personalizado',
    short: 'Premium',
    price: 1200,
    oldPrice: null,
    discount: null,
    emoji: '🐱',
    feature1: 'Diseño personalizado para tu marca.',
    feature2: 'Mascota o personaje adaptado a tu identidad.',
    feature3: 'Entrega digital después de la aprobación.',
    feature4: 'Producto personalizado de una sola compra.',
    description:
      'El paquete Premium está pensado para marcas y profesionales que quieren un paquete de stickers personalizado con su identidad visual.'
  }
};

// Producto seleccionado por default al cargar la vista de producto
export const DEFAULT_PRODUCT_ID = 'profesional';
