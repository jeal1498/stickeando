# Stickeando

Landing de producto (feed + detalle + carrito + checkout simulado) para venta
de stickers de WhatsApp. Vite + JavaScript vanilla, sin frameworks.

Plantilla inicial — los datos de producto en `src/data/products.js` son
provisionales.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview   # opcional, para probar el build localmente
```

`npm run build` genera la carpeta `dist/`, lista para desplegar en Vercel o
Netlify (ambos detectan Vite automáticamente, no requieren configuración
adicional para este proyecto).

## Estructura

```
src/
├── main.js                 # entry point: importa CSS, wiring de eventos, boot de la app
├── router.js                # cambia entre la vista home y la vista de producto
├── data/
│   └── products.js          # catálogo (datos provisionales)
├── state/
│   └── cart.js              # estado del carrito + persistencia en localStorage
├── views/
│   ├── home.js               # wiring del botón "agregar rápido" en el feed
│   └── product.js            # estado del paquete seleccionado, favoritos, compartir
├── components/
│   ├── gallery.js            # carrusel, swipe, video
│   ├── cart-drawer.js        # panel del carrito
│   └── checkout-modal.js     # modal de checkout simulado
├── utils/
│   ├── format.js             # money()
│   └── share.js               # WhatsApp + Web Share API
└── styles/
    ├── main.css               # importa todo en orden de cascada
    ├── base.css                # reset + variables
    ├── layout.css               # header, breadcrumb
    ├── responsive.css            # media queries (desktop / tablet-mobile)
    └── components/
        ├── feed.css
        ├── gallery.css
        ├── product.css
        ├── cart.css
        └── modal.css
```

## Cómo se manejan los eventos

En vez de `onclick` inline, cada elemento interactivo lleva un atributo
`data-action` (y `data-id` cuando aplica). `main.js` registra un único
`click` listener delegado en `document` que resuelve la acción contra un
mapa de funciones. Esto cubre tanto el markup estático del HTML como el
generado dinámicamente (items del carrito, botón de "pedido creado"), sin
necesidad de volver a enlazar listeners cada vez que se re-renderiza algo.

## Pendiente antes de producción

- **Video de demo**: el HTML original referencia `media/stickers-demo.mp4`
  pero ese archivo no estaba incluido en el HTML que se subió. Colócalo en
  `public/media/stickers-demo.mp4` (Vite lo sirve desde ahí tal cual).
- **`addToCart(productId)`** en `src/components/cart-drawer.js` está
  implementada pero no conectada a ningún botón — en el HTML original la
  función tampoco tenía un disparador visible. Si necesitas un botón
  "Agregar al carrito" además de "Comprar ahora", ya está lista para usarse.
- Los datos de `src/data/products.js` y el pago simulado en
  `simulatePayment()` (`src/components/checkout-modal.js`) son de
  demostración; reemplázalos cuando conectes un backend / procesador de
  pagos real.
