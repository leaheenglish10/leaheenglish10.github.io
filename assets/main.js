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
/* const slides = document.querySelectorAll('.slide');
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
setInterval(showNextSlide, 1000); */


// testing
const images = [
  "../images/slideshowFourths/snapshot_000.png",
  "../images/slideshowFourths/snapshot_060.png",
  "../images/slideshowFourths/snapshot_120.png",
  "../images/slideshowFourths/snapshot_180.png",
  "../images/slideshowFourths/snapshot_240.png"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
  index = (index + 1) % images.length; // loops back to 0
  slideshow.src = images[index];
}

// change image every 1 second (1000 ms)
setInterval(showNextImage, 1000);
