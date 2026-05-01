// adding smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump behavior

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Align to the top of the viewport
      });
    }
  });
});





// transitioning images for main slideshow
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  // Remove active class from current image
  slides[currentIndex].classList.remove('active');
  
  // Move to next index, or back to 0 if at the end
  currentIndex = (currentIndex + 1) % slides.length;
  
  // Add active class to the new image
  slides[currentIndex].classList.add('active');
}

// Change image every 2 seconds
setInterval(nextSlide, 2000);
