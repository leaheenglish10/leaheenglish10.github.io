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
// old one that works
/*
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Increment index and reset if at end
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Display current slide instantly
  slides[slideIndex - 1].style.display = "block";
  
  // Run again after 3 seconds (3000ms)
  setTimeout(showSlides, 1000); 
}
*/

  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function nextSlide() {
    slides[index].classList.remove("active"); // Hide current
    index = (index + 1) % slides.length;      // Loop back to 0 at end
    slides[index].classList.add("active");    // Show next
  }

  // Starts automatically and loops every 3 seconds
  setInterval(nextSlide, 1000);
