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
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  // Hide all images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  // Reset to first image if last is reached
  if (slideIndex > x.length) {slideIndex = 1}
  // Display current image instantly
  x[slideIndex-1].style.display = "block";
  // Change image every 3 seconds (3000ms)
  setTimeout(carousel, 2000);
}
