const docs = {
  privacidad: {
    title: 'Aviso de privacidad',
    body: `
      <p><strong>Responsable:</strong> Stickeando es el responsable del tratamiento de tus datos personales.</p>
      <p><strong>Datos que recabamos:</strong> nombre, correo electrónico y teléfono, únicamente al momento de realizar una compra, con el fin de procesar tu pedido y entregarte tus stickers.</p>
      <p><strong>Uso de tus datos:</strong> procesar pagos, enviar la confirmación y entrega de tu paquete, y darte soporte si lo necesitas. No vendemos ni compartimos tus datos con terceros ajenos al procesamiento de tu compra.</p>
      <p><strong>Derechos ARCO:</strong> puedes solicitar acceso, rectificación, cancelación u oposición al uso de tus datos escribiendo a hola@stickeando.app.</p>
      <p style="margin-top:12px;color:var(--muted);font-size:12px;">Este es un texto de referencia. Antes de operar con pagos reales, te recomendamos que un abogado lo revise y adapte a tu operación específica.</p>
    `
  },
  terminos: {
    title: 'Términos y condiciones',
    body: `
      <p><strong>Producto:</strong> Stickeando vende paquetes digitales de stickers para WhatsApp. La entrega es 100% digital; no se realizan envíos físicos.</p>
      <p><strong>Pagos:</strong> los precios están expresados en pesos mexicanos (MXN) e incluyen los impuestos aplicables. El pago se procesa a través de nuestra pasarela de pagos.</p>
      <p><strong>Entrega:</strong> tras confirmarse el pago, recibirás las instrucciones para obtener y usar tus stickers en el correo proporcionado durante la compra.</p>
      <p><strong>Devoluciones:</strong> por tratarse de un producto digital de entrega inmediata, no se aceptan devoluciones una vez entregado el paquete, salvo error atribuible a Stickeando.</p>
      <p><strong>Paquete Premium:</strong> al ser personalizado, requiere aprobación del cliente antes de la entrega final.</p>
      <p style="margin-top:12px;color:var(--muted);font-size:12px;">Este es un texto de referencia. Antes de operar con pagos reales, te recomendamos que un abogado lo revise y adapte a tu operación específica.</p>
    `
  }
};

export function openLegal(el) {
  const doc = docs[el.dataset.doc];
  if (!doc) return;

  document.getElementById('legalModalTitle').textContent = doc.title;
  document.getElementById('legalModalBody').innerHTML = doc.body;
  document.getElementById('legalModal').classList.add('active');
}

export function closeLegal() {
  document.getElementById('legalModal').classList.remove('active');
}
