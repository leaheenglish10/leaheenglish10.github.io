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
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
/*  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } */

  slides.forEach(slide => slide.style.display = "none");
  
  // Increment index and reset if at end
  slideIndex++;
    // Display current slide instantly
    slides[slideIndex].style.display = "block";
    // Run again after 3 seconds (3000ms)
    setTimeout(showSlides, 1000); 
    if (slideIndex === slides.length) { slideIndex = 1; }
}
