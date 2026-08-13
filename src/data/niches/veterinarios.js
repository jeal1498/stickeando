export default {
  slug: 'veterinarios',
  nombre: 'Veterinarios',
  feedSubtitle: 'Stickers para Veterinarios',
  galleryEmojis: ['🐾', '📅', '🐶', '✅', '💉', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Veterinarios · Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🐾',
      feedEmojis: ['🐾', '📅', '🐶', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar vacunas.',
      feature2: 'Diseños tiernos, ideales para tu clínica veterinaria.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás arrancando tu clínica y quieres responder más rápido a los dueños de mascotas. Con este set tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Veterinarios · +30 Diseños Profesionales', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🐾',
      feedEmojis: ['🐾', '📅', '🐶', '💉', '✅', '💬'],
      feature1: '+30 stickers: confirmaciones, vacunas y resultados de laboratorio.',
      feature2: 'Pensados para el día a día real de una clínica veterinaria.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por veterinarios que atienden a dueños de mascotas por WhatsApp todos los días. Incluye stickers para agendar consultas, recordar esquemas de vacunación, avisar resultados y dar seguimiento a tratamientos — todo con un diseño tierno y profesional. Menos tiempo escribiendo, más mascotas sanas.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Clínica · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🐶',
      feedEmojis: ['🐶', '🎨', '🐾', '💚', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o mascota de la clínica.',
      feature2: 'Frases adaptadas al tono cercano de tu clínica veterinaria.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para veterinarios y clínicas que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a cómo hablas con los dueños de tus pacientes.'
    }
  }
};
