import { getNiche } from '../data/niches/index.js';

const nicheGalleryEmojis = getNiche().galleryEmojis;

const galleryItems = [
  ...nicheGalleryEmojis.slice(0, 5).map(emoji => ({ type: 'image', emoji })),
  { type: 'video' }
];

let galleryIndex = 0;
let pointerStartX = 0;
let pointerStartY = 0;
let pointerStartTime = 0;
let activePointerId = null;

let galleryMain;
let galleryVideo;
let demoVideo;
let videoPlay;

export function renderGallery(index) {
  galleryIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[galleryIndex];

  document.getElementById('imageCounter').textContent =
    `${galleryIndex + 1} / ${galleryItems.length}`;

  const firstSticker = document.querySelector('.sticker');
  const previewArt = document.querySelector('.preview-art');

  if (item.type === 'video') {
    previewArt.style.display = 'none';
    galleryVideo.style.display = 'flex';
    galleryVideo.setAttribute('aria-hidden', 'false');
    videoPlay.style.display = 'none';

    demoVideo.pause();
    demoVideo.currentTime = 0;
    demoVideo.style.display = 'none';

    const placeholder = galleryVideo.querySelector('.video-placeholder');
    placeholder.style.display = 'flex';

    demoVideo.load();
  } else {
    galleryVideo.style.display = 'none';
    galleryVideo.setAttribute('aria-hidden', 'true');
    videoPlay.style.display = 'none';
    previewArt.style.display = 'flex';

    if (firstSticker) {
      firstSticker.textContent = item.emoji;
    }
  }
}

export function nextGallery() {
  renderGallery(galleryIndex + 1);
}

export function previousGallery() {
  renderGallery(galleryIndex - 1);
}

export function toggleZoom() {
  const gallery = document.getElementById('galleryMain');
  const btn = document.getElementById('zoomBtn');
  const active = gallery.classList.toggle('zoomed');

  btn.setAttribute('aria-pressed', String(active));
  btn.setAttribute('aria-label', active ? 'Reducir imagen' : 'Ampliar imagen');
}

function finishPointer(e) {
  if (activePointerId !== e.pointerId) {
    return;
  }

  const deltaX = e.clientX - pointerStartX;
  const deltaY = e.clientY - pointerStartY;
  const duration = Date.now() - pointerStartTime;

  activePointerId = null;
  galleryMain.classList.remove('dragging');

  const horizontal = Math.abs(deltaX) > Math.abs(deltaY) * 1.25;
  const enoughDistance = Math.abs(deltaX) >= 45;
  const quickEnough = duration <= 800;

  if (horizontal && enoughDistance && quickEnough) {
    if (deltaX < 0) {
      nextGallery();
    } else {
      previousGallery();
    }
  }
}

// Se ejecuta una sola vez al montar la app: resuelve referencias al DOM
// y conecta los listeners de swipe/video que antes vivían sueltos en el <script>.
export function initGallery() {
  galleryMain = document.getElementById('galleryMain');
  galleryVideo = document.getElementById('galleryVideo');
  demoVideo = document.getElementById('demoVideo');
  videoPlay = document.getElementById('videoPlay');

  galleryMain.addEventListener('pointerdown', e => {
    // Los botones superiores no participan en el swipe.
    if (e.target.closest('.gallery-tools')) {
      return;
    }

    if (activePointerId !== null) {
      return;
    }

    activePointerId = e.pointerId;
    pointerStartX = e.clientX;
    pointerStartY = e.clientY;
    pointerStartTime = Date.now();

    galleryMain.classList.add('dragging');
    galleryMain.setPointerCapture?.(e.pointerId);
  });

  galleryMain.addEventListener('pointerup', finishPointer);

  galleryMain.addEventListener('pointercancel', e => {
    if (activePointerId === e.pointerId) {
      activePointerId = null;
      galleryMain.classList.remove('dragging');
    }
  });

  // Evita que los botones superiores sean interpretados como un swipe.
  const galleryTools = document.querySelector('.gallery-tools');
  galleryTools.addEventListener('pointerdown', e => {
    e.stopPropagation();
  });
  galleryTools.addEventListener(
    'touchstart',
    e => {
      e.stopPropagation();
    },
    { passive: true }
  );

  videoPlay.addEventListener('click', () => {
    if (galleryIndex !== 5) {
      return;
    }

    demoVideo.style.display = 'block';
    demoVideo.play().catch(() => {});
  });

  demoVideo.addEventListener('loadeddata', () => {
    if (galleryIndex === 5) {
      demoVideo.style.display = 'block';
      galleryVideo.querySelector('.video-placeholder').style.display = 'none';
      videoPlay.style.display = 'none';
    }
  });

  renderGallery(0);
}
