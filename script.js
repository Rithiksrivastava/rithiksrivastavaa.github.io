/**
 * ============================================
 * HDPE Product Page – JavaScript
 * ============================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeProductGallery();
  initializeFAQ();
});

/**
 * NAVIGATION
 * Handle sticky header scroll detection and hamburger menu
 */
function initializeNavigation() {
  const stickyHeader = document.getElementById('stickyHeader');
  const mainHeader = document.getElementById('mainHeader');
  const hamburgerMain = document.getElementById('hamburgerMain');
  const hamburgerSticky = document.getElementById('hamburgerSticky');
  const mainNav = document.getElementById('mainNav');
  const stickyNav = document.getElementById('stickyNav');

  // Show/hide sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      stickyHeader.classList.add('visible');
    } else {
      stickyHeader.classList.remove('visible');
    }
  });

  // Hamburger menu toggle for main header
  if (hamburgerMain) {
    hamburgerMain.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'flex';
      mainNav.style.display = isOpen ? 'none' : 'flex';
    });
  }

  // Hamburger menu toggle for sticky header
  if (hamburgerSticky) {
    hamburgerSticky.addEventListener('click', () => {
      const isOpen = stickyNav.style.display === 'flex';
      stickyNav.style.display = isOpen ? 'none' : 'flex';
    });
  }

  // Close menu when a link is clicked (only on mobile)
  document.querySelectorAll('header a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      // Only hide nav on mobile (when hamburger is visible)
      if (window.innerWidth <= 768) {
        mainNav.style.display = 'none';
        stickyNav.style.display = 'none';
      }
    });
  });
}

/**
 * PRODUCT GALLERY
 * Handle carousel with prev/next buttons and thumbnail selection
 */
function initializeProductGallery() {
  const mainImage = document.getElementById('mainImage');
  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  const thumbnails = document.querySelectorAll('.thumb');

  const images = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=450&fit=crop'
  ];

  let currentIndex = 0;

  function updateGallery(index) {
    currentIndex = (index + images.length) % images.length;
    mainImage.src = images[currentIndex];

    // Update thumbnail active state
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === currentIndex);
    });
  }

  // Previous button
  if (galleryPrev) {
    galleryPrev.addEventListener('click', () => {
      updateGallery(currentIndex - 1);
    });
  }

  // Next button
  if (galleryNext) {
    galleryNext.addEventListener('click', () => {
      updateGallery(currentIndex + 1);
    });
  }

  // Thumbnail clicks
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      updateGallery(index);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') updateGallery(currentIndex - 1);
    if (e.key === 'ArrowRight') updateGallery(currentIndex + 1);
  });
}

/**
 * FAQ ACCORDION
 * Handle expand/collapse functionality
 */
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll('.faq__question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all items
      document.querySelectorAll('.faq__item').forEach(el => {
        el.classList.remove('open');
      });

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('open');
      }

      // Update aria-expanded
      question.setAttribute('aria-expanded', !isOpen);
    });
  });
}

