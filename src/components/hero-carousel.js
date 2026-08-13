// Carrusel del hero: un slide por nicho, con autoplay y swipe/drag.
// A diferencia del carrusel de la galería de detalle, este no es infinito:
// solo hace wraparound por índice (index % total).
let instance = null;

function heroSlideHTML(nicho, index) {
  return `
    <div class="hero-slide" data-action="go-to-detalle" data-index="${index}">
      <span class="emoji">${nicho.emoji}</span>
      <span class="nombre">${nicho.nombre}</span>
      <span class="fase">${nicho.fase.replace('-', ' ').toUpperCase()}</span>
    </div>
  `;
}

export function initHeroCarousel(nichesList) {
  const carousel = document.getElementById('heroCarousel');
  const wrapper = document.getElementById('heroCarouselWrapper');
  if (!carousel || !wrapper) return;

  if (instance) {
    instance.destroy();
    instance = null;
  }

  carousel.innerHTML = nichesList.map(heroSlideHTML).join('');

  const total = nichesList.length;
  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let currentTranslateX = 0;
  let isTransitioning = false;
  let autoplayInterval = null;

  function getSlideWidth() {
    return carousel.children[0]?.offsetWidth || wrapper.offsetWidth;
  }

  function goTo(index, smooth = true) {
    if (isTransitioning) return;
    const slideWidth = getSlideWidth();
    const targetX = -index * slideWidth;
    currentTranslateX = targetX;
    carousel.style.transition = smooth ? 'transform 0.4s ease' : 'none';
    carousel.style.transform = `translateX(${targetX}px)`;
    currentIndex = index;
    if (smooth) {
      isTransitioning = true;
      setTimeout(() => {
        isTransitioning = false;
      }, 400);
    }
  }

  function nextSlide() {
    goTo((currentIndex + 1) % total, true);
  }

  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  function handleStart(e) {
    if (isTransitioning) return;
    isDragging = true;
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    carousel.style.transition = 'none';
    stopAutoplay();
  }

  function handleMove(e) {
    if (!isDragging) return;
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    carousel.style.transform = `translateX(${currentTranslateX + diff}px)`;
  }

  function handleEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const slideWidth = getSlideWidth();
    const diff = (e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX) - startX;
    const threshold = slideWidth * 0.3;
    let newIndex = currentIndex;
    if (diff < -threshold) {
      newIndex = (currentIndex + 1) % total;
    } else if (diff > threshold) {
      newIndex = (currentIndex - 1 + total) % total;
    }
    goTo(newIndex, true);
    startAutoplay();
  }

  carousel.addEventListener('mousedown', handleStart);
  carousel.addEventListener('mousemove', handleMove);
  carousel.addEventListener('mouseup', handleEnd);
  carousel.addEventListener('mouseleave', e => {
    if (isDragging) handleEnd(e);
  });
  carousel.addEventListener('touchstart', handleStart, { passive: true });
  carousel.addEventListener('touchmove', handleMove, { passive: true });
  carousel.addEventListener('touchend', handleEnd);

  goTo(0, false);
  startAutoplay();

  instance = {
    destroy: () => {
      stopAutoplay();
      carousel.removeEventListener('mousedown', handleStart);
      carousel.removeEventListener('mousemove', handleMove);
      carousel.removeEventListener('mouseup', handleEnd);
      carousel.removeEventListener('mouseleave', handleEnd);
      carousel.removeEventListener('touchstart', handleStart);
      carousel.removeEventListener('touchmove', handleMove);
      carousel.removeEventListener('touchend', handleEnd);
    }
  };
}
