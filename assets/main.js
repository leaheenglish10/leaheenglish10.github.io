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



// for choosing images
function updateImage() {
  const type = document.getElementById('type').value;
  const color = document.getElementById('color').value;
  const img = document.getElementById('display');

  // The "If" Logic
  if (type === 'default') {
    img.src = '../images/green.jpeg';
  } else if (color === 'default') {
    img.src = '../images/green.jpeg'; 
  } else if (type === 'fruit' && color === 'red') {
    img.src = '../images/AboutMePhoto.png';  
  } else if (type === 'fruit' && color === 'green') {
    img.src = '../images/GraduationImage.jpeg';
  } else if (type === 'veg' && color === 'red') {
    img.src = '../images/NSF.png';
  } else if (type === 'veg' && color === 'green') {
    img.src = '../images/ILSGC.png';
  }
}



// select simulations movie
const simulationSelect = document.getElementById('simulationSelect');
const viewSelect = document.getElementById('viewSelect');
const simulationsVideo = document.getElementById('simulationsVideo');

const simulationsVideoMap = {
    "02fid_full": "../movies/LMC_2halo_10M_r0-2.mp4",
    "02fid_close": "../movies/LMC_2halo_10M_r0-2_closeup.mp4",

    "01fid_full": "../movies/LMC_2halo_10M_r0-1.mp4",
    "01fid_close": "../movies/LMC_2halo_10M_r0-1_closeup.mp4",

    "01circ_full": "../movies/LMC_2halo_10M_r0-1_circ.mp4",
    "01circ_close": "../movies/LMC_2halo_10M_r0-1_circ_closeup.mp4",

    "01rad_full": "../movies/LMC_2halo_10M_r0-1_radial.mp4",
    "01rad_close": "../movies/LMC_2halo_10M_r0-1_radial_closeup.mp4"
};

function updateSimulationsVideo() {
  const simulation = simulationSelect.value;
  const view = viewSelect.value;
    // guard clause
    if (simulation === "default" || view === "default") {
        video.src = "";
        return;
    }

    const key = `${simulation}_${view}`;
    const src = SimulationsVideoMap[key];

    if (src) {
        simulationsVideo.src = src;
        simulationsVideoideo.play();
    } else {
        // handle invalid combos (like 1:5 + non-fid orbit)
        simulationsVideoideo.src = "";
        console.warn("No video for selection:", key);
    }

}

simulationSelect.addEventListener('change', updateSimulationsVideo);
viewSelect.addEventListener('change', updateSimulationsVideo);
