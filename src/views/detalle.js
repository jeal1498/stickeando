import { nichesList } from '../data/niches/index.js';
import { getPlanData } from '../data/plans.js';
import { pushDetalleState } from '../router.js';
import { renderGallerySlides, startGalleryCarousel } from '../components/gallery-carousel.js';
import { mostrarModal, comprarDirecto } from '../components/modal-resumen.js';

let currentNichoIndex = 0;
let currentPlan = 'completo';

export function getCurrentPlan() {
  return currentPlan;
}

export function getCurrentNicho() {
  return nichesList[currentNichoIndex];
}

function detalleContenidoHTML(nicho, planData) {
  const otros = nichesList.filter((n, i) => i !== currentNichoIndex).slice(0, 8);

  return `
    <!-- GALERÍA -->
    <div class="galeria-container">
      <div class="galeria-carousel-wrapper" id="carousel-wrapper">
        <div class="galeria-carousel" id="galeria-carousel"></div>
      </div>
      <div class="galeria-counter" id="galeria-counter">1 / ${planData.stickers.length}</div>
    </div>

    <!-- ENCABEZADO -->
    <div class="product-header">
      <div class="top-badges">
        <span class="badge-vendido" id="badge-vendido">⭐ MÁS VENDIDO</span>
      </div>
      <div class="titulo-fav">
        <h1>${nicho.nombre}</h1>
      </div>
      <div class="rating">
        <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span>
      </div>
    </div>

    <!-- BENEFICIOS -->
    <div class="beneficios">
      <div class="beneficio-item">
        <span class="check-icon">✓</span>
        <div><span class="beneficio-texto">Diseño profesional</span><span class="beneficio-desc">Estilo kawaii y tono empático que humaniza tus mensajes</span></div>
      </div>
      <div class="beneficio-item">
        <span class="check-icon">✓</span>
        <div><span class="beneficio-texto">Formato listo para WhatsApp</span><span class="beneficio-desc">Archivos .wastickers compatibles con Sticker Maker</span></div>
      </div>
      <div class="beneficio-item">
        <span class="check-icon">✓</span>
        <div><span class="beneficio-texto">Entrega inmediata</span><span class="beneficio-desc">Recibe el enlace de descarga por correo al instante</span></div>
      </div>
    </div>

    <!-- TESTIMONIOS (visibles, no colapsados: generan confianza antes del precio) -->
    <div class="testimonios">
      <h3>✨ Lo que dicen nuestros clientes <span class="contador-compras">+350 compras</span></h3>
      <div class="testimonio-grid">
        <div class="testimonio-item">
          <div class="avatar">👩</div>
          <div><div class="texto">"Mis pacientes me dicen que mis mensajes ahora son mucho más cálidos. ¡Y nunca olvidan sus citas!"</div><div class="autor">— Laura G., Psicóloga</div></div>
        </div>
        <div class="testimonio-item">
          <div class="avatar">👨</div>
          <div><div class="texto">"El paquete Experto es increíble. Mis clientes se sienten más atendidos. Muy recomendado."</div><div class="autor">— Carlos R., Agente inmobiliario</div></div>
        </div>
        <div class="testimonio-item">
          <div class="avatar">👩‍⚕️</div>
          <div><div class="texto">"Los stickers son un éxito en mi consulta. Los pacientes los adoran y agradecen los recordatorios."</div><div class="autor">— Dra. Ana, Dentista</div></div>
        </div>
      </div>
    </div>

    <!-- PLANES -->
    <div class="plan-selector" id="plan-selector">
      <div class="plan-card" data-plan="basic" data-action="select-plan">
        <div class="check-mark">✓</div>
        <div class="plan-nombre">Esencial</div>
        <div class="plan-desc">10 stickers</div>
      </div>
      <div class="plan-card active" data-plan="completo" data-action="select-plan">
        <div class="check-mark">✓</div>
        <div class="plan-nombre">Experto</div>
        <div class="plan-desc">30 stickers + poses</div>
      </div>
    </div>
    <button class="link-plan-custom" data-plan="premium" data-action="select-plan">¿Buscas algo a medida? Diseño exclusivo →</button>

    <!-- PRECIO Y CTA -->
    <div class="price-block">
      <div>
        <div class="precio-grande" id="precio-actual">${planData.precio} <small>MXN</small></div>
        <div class="iva">IVA incluido</div>
      </div>
      <button class="btn-comprar-top" id="btn-comprar-top" data-action="comprar">Adquirir ${planData.nombre}</button>
    </div>
    <div class="no-refund-policy">
      <span>✅ <strong>Entrega garantizada</strong> + instalación asistida vía WhatsApp</span>
      <span class="sello">Soporte 24/7</span>
    </div>

    <!-- QUÉ INCLUYE -->
    <div class="que-incluye">
      <h3>📦 ¿Qué incluye?</h3>
      <ul id="lista-inclusiones">
        ${planData.incluye.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    <!-- MUESTRA GRATUITA -->
    <div class="muestra-gratuita">
      <button class="btn-muestra" data-action="descargar-muestra">
        🎁 Descarga una muestra gratis
        <span style="font-size:0.7rem; color:#7a6360;">(1 sticker de prueba)</span>
      </button>
    </div>

    <!-- A partir de aquí, colapsado por defecto -->
    <details class="seccion-colapsable">
      <summary>🎥 Mira cómo funcionan en WhatsApp</summary>
      <div class="video-placeholder" data-action="ver-demo">
        <span>▶ Ver demo</span>
      </div>
    </details>

    <details class="seccion-colapsable">
      <summary>📖 Descripción del producto</summary>
      <p><strong>${nicho.nombre}</strong> – ¿Cansado de que tus mensajes parezcan fríos y distantes? Nuestros stickers añaden <strong>calidez y profesionalismo</strong> en cada interacción. Con el personaje <strong>${nicho.personaje}</strong>, lograrás que tus clientes se sientan valorados y atendidos.</p>
      <p>${nicho.descripcion}</p>
    </details>

    <!-- CROSS-SELLING (se deja visible: es descubrimiento rápido, no lectura) -->
    <div class="cross-selling">
      <h3>🔍 También te puede interesar</h3>
      <div class="cross-carousel">
        ${otros
          .map(n => {
            const i = nichesList.indexOf(n);
            return `
              <div class="cross-card" data-action="go-to-detalle" data-index="${i}">
                <span class="emoji">${n.emoji}</span>
                <div class="nombre">${n.nombre}</div>
                <div class="precio">$349</div>
              </div>
            `;
          })
          .join('')}
      </div>
    </div>

    <details class="seccion-colapsable" id="faq-detalle">
      <summary>❓ Preguntas frecuentes</summary>
      <div class="faq-item"><strong>¿Qué formato tienen?</strong><p>Archivos .wastickers, compatibles con Sticker Maker. Te enviamos un video tutorial.</p></div>
      <div class="faq-item"><strong>¿Puedo usarlos en WhatsApp normal?</strong><p>Sí, el proceso es el mismo para WhatsApp Business y normal.</p></div>
      <div class="faq-item"><strong>¿Qué incluye el plan A medida?</strong><p>Mascota desde cero, colores personalizados y frases adaptadas a tu negocio.</p></div>
      <div class="faq-item"><strong>¿Son de uso comercial?</strong><p>Sí, diseñados para profesionales y su comunicación con clientes.</p></div>
      <div class="faq-item"><strong>¿Cómo los instalo?</strong><p>Te enviaremos un enlace de descarga y un video paso a paso. Además, tienes soporte 24/7.</p></div>
    </details>
  `;
}

function actualizarBottomBar(planData) {
  const existingBar = document.querySelector('.bottom-bar');
  if (existingBar) existingBar.remove();

  const bar = document.createElement('div');
  bar.className = 'bottom-bar';
  bar.innerHTML = `
    <div class="info-precio">
      <span class="precio-final">${planData.precio} <small>MXN</small></span>
      <span class="plan-label">Plan ${planData.nombre}</span>
    </div>
    <button class="btn-comprar" data-action="comprar">Adquirir ${planData.nombre}</button>
    <button class="link-ver-resumen" data-action="ver-resumen">Ver resumen antes de pagar</button>
    <div class="metodos-pago">
      <span>💳 Visa</span>
      <span>💳 Mastercard</span>
      <span>💳 Amex</span>
      <span>🔒 Stripe</span>
    </div>
  `;
  document.body.appendChild(bar);
}

export function mostrarDetalle(index) {
  const nicho = nichesList[index];
  if (!nicho) return;

  currentNichoIndex = index;
  currentPlan = 'completo';

  const planData = getPlanData(currentPlan, nicho);
  const container = document.getElementById('detalle-contenido');
  container.innerHTML = detalleContenidoHTML(nicho, planData);

  renderGallerySlides(planData.stickers);

  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-detalle').classList.add('active');
  document.getElementById('backArrow').classList.add('visible');

  pushDetalleState(index);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  startGalleryCarousel(planData.stickers.length);
  actualizarBottomBar(planData);
}

export function seleccionarPlan(plan) {
  currentPlan = plan;
  const nicho = nichesList[currentNichoIndex];
  if (!nicho) return;

  document.querySelectorAll('.plan-card').forEach(card => {
    card.classList.toggle('active', card.dataset.plan === plan);
  });

  const planData = getPlanData(plan, nicho);

  document.getElementById('precio-actual').innerHTML = `${planData.precio} <small>MXN</small>`;
  document.getElementById('lista-inclusiones').innerHTML = planData.incluye
    .map(item => `<li>${item}</li>`)
    .join('');

  const badge = document.getElementById('badge-vendido');
  if (badge) badge.classList.toggle('hidden', plan !== 'completo');

  const btnTop = document.getElementById('btn-comprar-top');
  if (btnTop) btnTop.textContent = `Adquirir ${planData.nombre}`;

  renderGallerySlides(planData.stickers);
  startGalleryCarousel(planData.stickers.length);

  actualizarBottomBar(planData);
}

export function comprar() {
  const nicho = nichesList[currentNichoIndex];
  const planData = getPlanData(currentPlan, nicho);
  comprarDirecto(planData);
}

// Opción secundaria para quien prefiera revisar su pedido antes de pagar.
export function verResumen() {
  const nicho = nichesList[currentNichoIndex];
  const planData = getPlanData(currentPlan, nicho);
  mostrarModal(planData, nicho);
}

export function descargarMuestra() {
  const contenido = 'Sticker de muestra de Stickeando';
  const blob = new Blob([contenido], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'muestra_stickeando.wasticker';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert('📥 ¡Muestra descargada! Ábrela con Sticker Maker para ver la calidad.');
}

export function verDemo() {
  alert('Aquí iría el video demostrativo real.');
}
