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
  if (type === 'Select Type') {
    img.src = '../images/green.jpeg';
  } else if (color === 'Select Color') {
    img.src = '../images/green.jpeg'; 
  } else if (type === 'fruit' && color === 'red') {
    img.src = '../images/AboutMePhoto.jpeg';  
  } else if (type === 'fruit' && color === 'green') {
    img.src = '../images/GraduationImage.jpeg';
  } else if (type === 'veg' && color === 'red') {
    img.src = '../images/NSF.png';
  } else if (type === 'veg' && color === 'green') {
    //img.src = '../images/ILSGC.png';
    video.src = "../images/ILSGC.png";
    video.play();
  }
}


// for movies, not ready yet only testing with images
/*    const category = document.getElementById('categorySelect');
    const action = document.getElementById('actionSelect');
    const video = document.getElementById('myVideo');

    function updateVideo() {
        // Condition: if both specific options are selected
        if (category.value === "nature" && action.value === "slow") {
            video.src = "nature_slow.mp4";
            video.play();
        } else if (category.value === "tech" && action.value === "fast") {
            video.src = "tech_fast.mp4";
            video.play();
        }
        // Add more logic for other combinations here
    }

    // Listen for changes on both dropdowns
    category.addEventListener('change', updateVideo);
    action.addEventListener('change', updateVideo);

*/  
