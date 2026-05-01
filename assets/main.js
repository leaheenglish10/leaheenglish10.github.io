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
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  // Remove 'active' class from current slide
  slides[currentIndex].classList.remove('active');
  
  // Increment index or loop back to 0
  currentIndex = (currentIndex + 1) % slides.length;
  
  // Add 'active' class to next slide
  slides[currentIndex].classList.add('active');
}

// Initialize the first slide
slides[0].classList.add('active');

// Change image every 3 seconds (3000ms)
setInterval(showNextSlide, 1000);
