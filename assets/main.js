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
// Array of your image URLs
const images = [
  "Figure 1 snapshot_000.png",
  "Figure 1 snapshot_058.png",
  "Figure 1 snapshot_138.png",
  "Figure 1 snapshot_227.png"
];

let currentIndex = 0;
const slideElement = document.getElementById("mainSlide");

function changeImage() {
  // Move to next index, loop back to 0 if at the end
  currentIndex = (currentIndex + 1) % images.length;
  
  // Directly change the source with no transition
  slideElement.src = images[currentIndex];
}

// Set the interval (2000ms = 2 seconds)
setInterval(changeImage, 2000);
