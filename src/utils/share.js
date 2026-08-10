export function shareWhatsApp(product) {
  const text = encodeURIComponent(
    'Mira este paquete de stickers para WhatsApp: ' + product.name + ' ' + window.location.href
  );

  window.open('https://wa.me/?text=' + text, '_blank', 'noopener,noreferrer');
}

export async function shareProduct(product) {
  const shareData = {
    title: product.name,
    text: 'Mira este paquete de stickers para WhatsApp.',
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      // El usuario canceló el menú de compartir.
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado.');
    } catch (error) {
      alert('No fue posible copiar el enlace.');
    }
  }
}
