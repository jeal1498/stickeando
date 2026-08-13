export default {
  slug: 'pediatras',
  nombre: 'Pediatras',
  feedSubtitle: 'Stickers para Pediatras',
  galleryEmojis: ['🧸', '📅', '👶', '✅', '💉', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Pediatras · Paquete Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🧸',
      feedEmojis: ['🧸', '📅', '👶', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar consultas.',
      feature2: 'Diseños tiernos, ideales para tu consultorio pediátrico.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás arrancando tu consultorio pediátrico y quieres dejar de escribir "confirmamos su cita" desde cero cada vez. Con este set respondes más rápido a mamás y papás, y tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Pediatras · +30 Diseños Profesionales', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🧸',
      feedEmojis: ['🧸', '📅', '👶', '💉', '✅', '💬'],
      feature1: '+30 stickers: confirmaciones, recordatorios de vacunas y control de niño sano.',
      feature2: 'Pensados para el día a día real de un consultorio pediátrico.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por pediatras que atienden a papás y mamás por WhatsApp todos los días. Incluye stickers para agendar consultas, recordar esquemas de vacunación, avisar resultados y dar seguimiento al crecimiento del bebé — todo con un diseño tierno y profesional. Menos tiempo escribiendo, más confianza con las familias.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Consultorio · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '👶',
      feedEmojis: ['👶', '🎨', '🧸', '💙', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o mascota.',
      feature2: 'Frases adaptadas al tono cálido de tu consultorio.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para pediatras y consultorios que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual — colores, logo o mascota — y frases alineadas a cómo hablas con las familias de tus pacientes.'
    }
  }
};
