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





// slideshow
const images = [
  "../images/slideshowFifths/snapshot_000.png",
  "../images/slideshowFifths/snapshot_048.png",
  "../images/slideshowFifths/snapshot_096.png",
  "../images/slideshowFifths/snapshot_144.png",
  "../images/slideshowFifths/snapshot_192.png",
  "../images/slideshowFifths/snapshot_240.png"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
  index = (index + 1) % images.length; // loops back to 0
  slideshow.src = images[index];
}

// change image every 1 second (1000 ms)
setInterval(showNextImage, 800);



// for choosing movies
function updateImage() {
  const type = document.getElementById('type').value;
  const color = document.getElementById('color').value;
  const img = document.getElementById('display');

  // The "If" Logic
  if (type === 'fruit' && color === 'red') {
    img.src = '../images/AboutMePhoto.png';
  } else if (type === 'fruit' && color === 'green') {
    img.src = '../images/GraduationImage.jpeg';
  } else if (type === 'veg' && color === 'red') {
    img.src = '../images/NSF.png';
  } else if (type === 'veg' && color === 'green') {
    img.src = '../images/ILSGC.png';
  }
}
