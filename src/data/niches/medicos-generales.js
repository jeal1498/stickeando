export default {
  slug: 'medicos-generales',
  nombre: 'Médicos Generales / Especialistas',
  feedSubtitle: 'Stickers para Médicos',
  galleryEmojis: ['🩺', '📅', '💊', '✅', '🏥', '✨'],
  DEFAULT_PRODUCT_ID: 'profesional',
  products: {
    basico: {
      id: 'basico', name: 'Stickers para Médicos · Paquete Básico', short: 'Básico',
      price: 149, oldPrice: null, discount: null, emoji: '🩺',
      feedEmojis: ['🩺', '📅', '💊', '👍', '✨', '✅'],
      feature1: '5 stickers para confirmar citas y recordar consultas.',
      feature2: 'Diseños claros, ideales para tu consultorio médico.',
      feature3: 'Entrega digital inmediata, lista para instalar en WhatsApp.',
      feature4: 'Pago único, sin mensualidades ni letras chiquitas.',
      description: 'Perfecto si estás arrancando tu consulta y quieres dejar de escribir "confirmamos su cita" desde cero cada vez. Con este set respondes más rápido y tu WhatsApp se ve más profesional sin necesitar diseñador.'
    },
    profesional: {
      id: 'profesional', name: 'Stickers para Médicos · +30 Diseños Profesionales', short: 'Profesional',
      price: 349, oldPrice: 498, discount: '30% OFF', emoji: '🩺',
      feedEmojis: ['🩺', '📅', '💊', '🏥', '✅', '💬'],
      feature1: '+30 stickers: confirmaciones, recordatorios y resultados.',
      feature2: 'Pensados para el día a día real de un consultorio médico.',
      feature3: 'Compatibles con WhatsApp y WhatsApp Business.',
      feature4: 'Entrega digital inmediata, sin envíos ni esperas.',
      description: 'El paquete más elegido por médicos generales y especialistas que atienden pacientes por WhatsApp todos los días. Incluye stickers para agendar y confirmar citas, avisar resultados de estudios, recordar tomas de medicamento y dar seguimiento — todo con un diseño profesional y confiable. Menos tiempo escribiendo, más pacientes bien atendidos.'
    },
    premium: {
      id: 'premium', name: 'Stickers Personalizados para tu Consultorio · Premium', short: 'Premium',
      price: 1200, oldPrice: null, discount: null, emoji: '🏥',
      feedEmojis: ['🏥', '🎨', '🩺', '💙', '📅', '✨'],
      feature1: 'Set 100% personalizado con tu paleta, logo o especialidad.',
      feature2: 'Frases adaptadas al tono de tu consultorio o clínica.',
      feature3: 'Revisión y ajustes antes de la entrega final.',
      feature4: 'Producto único de una sola compra, sin recurrencias.',
      description: 'Para médicos y clínicas que quieren que su marca se reconozca en cada mensaje. Diseñamos un paquete de stickers exclusivo con tu identidad visual y frases alineadas a tu especialidad y forma de atender.'
    }
  }
};
