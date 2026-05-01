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

function showNextSlide() {
  // Remove active class from current image
  slides[currentIndex].classList.remove('active');
  
  // Increment index or loop back to 0
  currentIndex = (currentIndex + 1) % slides.length;
  
  // Add active class to next image
  slides[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextSlide, 1000);
