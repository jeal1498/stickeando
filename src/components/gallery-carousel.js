// Carrusel infinito de la galería de detalle: tripica los slides y hace
// "salto invisible" cuando llega a los extremos, para simular loop infinito.
let instance = null;

function stickerSlideHTML(sticker) {
  return `
    <div class="sticker-slide">
      <span class="emoji">${sticker.emoji}</span>
      <span class="frase">${sticker.frase}</span>
      <span class="funcion">${sticker.funcion}</span>
    </div>
  `;
}

export function renderGallerySlides(stickers) {
  const carousel = document.getElementById('galeria-carousel');
  if (!carousel) return;

  const tripled = [...stickers, ...stickers, ...stickers];
  carousel.innerHTML = tripled.map(stickerSlideHTML).join('');
}

export function startGalleryCarousel(totalSlides) {
  const carousel = document.getElementById('galeria-carousel');
  const wrapper = document.getElementById('carousel-wrapper');
  const counter = document.getElementById('galeria-counter');
  if (!carousel || !wrapper) return;

  if (instance) {
    instance.destroy();
    instance = null;
  }

  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let currentTranslateX = 0;
  let isTransitioning = false;
  let autoplayInterval = null;

  function getSlideWidth() {
    return carousel.children[0]?.offsetWidth || wrapper.offsetWidth;
  }

  function updateCounter() {
    if (!counter) return;
    const realIndex = ((currentIndex % totalSlides) + totalSlides) % totalSlides;
    counter.textContent = `${realIndex + 1} / ${totalSlides}`;
  }

  function goTo(index, smooth = true) {
    if (isTransitioning) return;
    const slideWidth = getSlideWidth();
    const targetX = -index * slideWidth;
    currentTranslateX = targetX;
    carousel.style.transition = smooth ? 'transform 0.4s ease' : 'none';
    carousel.style.transform = `translateX(${targetX}px)`;
    currentIndex = index;
    updateCounter();

    if (smooth) {
      isTransitioning = true;
      setTimeout(() => {
        isTransitioning = false;
        const maxIndex = carousel.children.length - totalSlides;
        if (currentIndex < totalSlides) {
          goTo(currentIndex + totalSlides, false);
        } else if (currentIndex >= maxIndex) {
          goTo(currentIndex - totalSlides, false);
        }
      }, 400);
    }
  }

  function nextSlide() {
    const maxIndex = carousel.children.length - 1;
    goTo(Math.min(currentIndex + 1, maxIndex), true);
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
      newIndex = currentIndex + 1;
    } else if (diff > threshold) {
      newIndex = currentIndex - 1;
    }
    const maxIndex = carousel.children.length - 1;
    newIndex = Math.max(0, Math.min(maxIndex, newIndex));
    goTo(newIndex, true);
    startAutoplay();
  }

  carousel.addEventListener('touchstart', handleStart, { passive: true });
  carousel.addEventListener('touchmove', handleMove, { passive: true });
  carousel.addEventListener('touchend', handleEnd);
  carousel.addEventListener('mousedown', handleStart);
  carousel.addEventListener('mousemove', handleMove);
  carousel.addEventListener('mouseup', handleEnd);
  carousel.addEventListener('mouseleave', e => {
    if (isDragging) handleEnd(e);
  });

  goTo(totalSlides, false);
  startAutoplay();

  instance = {
    destroy: () => {
      stopAutoplay();
      carousel.removeEventListener('touchstart', handleStart);
      carousel.removeEventListener('touchmove', handleMove);
      carousel.removeEventListener('touchend', handleEnd);
      carousel.removeEventListener('mousedown', handleStart);
      carousel.removeEventListener('mousemove', handleMove);
      carousel.removeEventListener('mouseup', handleEnd);
      carousel.removeEventListener('mouseleave', handleEnd);
    }
  };
}

export function destroyGalleryCarousel() {
  if (instance) {
    instance.destroy();
    instance = null;
  }
}
