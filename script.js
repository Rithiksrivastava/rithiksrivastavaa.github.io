/**
 * ============================================
 * Technical Specifications Page – JavaScript
 * ============================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize download button
  const downloadButton = document.querySelector('.download-button');
  
  if (downloadButton) {
    downloadButton.addEventListener('click', () => {
      // You can replace this with actual download functionality
      console.log('Download button clicked');
      // Example: window.location.href = 'path/to/technical-datasheet.pdf';
    });
  }

  // Add smooth fade-in animation on page load
  const section = document.querySelector('.specifications-section');
  if (section) {
    section.style.opacity = '0';
    section.style.animation = 'fadeIn 0.6s ease-in forwards';
  }
});

// CSS Animation (can also be in styles.css)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
