document.addEventListener('DOMContentLoaded', function() {
  // Get carousel elements
  const track = document.querySelector('.carousel-track');
  const cards = Array.from(document.querySelectorAll('.collection-card'));
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  
  // Set initial position
  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin
  
  // Calculate how many cards to show based on viewport width
  function getCardsToShow() {
    if (window.innerWidth < 576) {
      return 1;
    } else if (window.innerWidth < 992) {
      return 2;
    } else {
      return 3;
    }
  }
  
  // Update carousel position
  function updateCarousel() {
    const cardsToShow = getCardsToShow();
    const maxIndex = cards.length - cardsToShow;
    
    // Ensure currentIndex is within bounds
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    
    // Move the track
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    // Update button states
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maxIndex;
    
    // Update button opacity based on disabled state
    prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
    nextButton.style.opacity = nextButton.disabled ? '0.5' : '1';
  }
  
  // Event listeners for buttons
  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextButton.addEventListener('click', function() {
    const cardsToShow = getCardsToShow();
    const maxIndex = cards.length - cardsToShow;
    
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    // Recalculate card width on resize
    const cardWidth = cards[0].offsetWidth + 20;
    updateCarousel();
  });
  
  // Initialize carousel
  updateCarousel();
});