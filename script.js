const button = document.querySelector(".nav-icon1");
const mobileNav = document.querySelector(".mobile-nav");
const videoBtn = document.querySelector("#video-story-btn");
const videoFile = document.querySelector("#video-story");
const videoIcon = document.querySelector("#video-story-btn-icon");
const overlay = document.querySelector(".story-video-overlay");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  mobileNav.classList.toggle("on");
})

window.addEventListener('resize', function () {
  if (window.innerWidth > 991) {
    const elements = document.querySelectorAll('.open, .on');
    elements.forEach(i => {
      i.classList.remove('open');
      i.classList.remove('on');
    })
  }
})

videoBtn.addEventListener("click", () => {
function toggleOverlay(e) {
  if (e.type === 'mouseleave') {
    overlay.classList.add("hidden")
  }
  else {
    overlay.classList.remove("hidden")
  }
}
  if (videoFile.paused) {
    videoFile.play();
    videoIcon.src = "./img/pause.svg";
    overlay.onmouseleave = toggleOverlay;
    overlay.onmouseenter = toggleOverlay;
  }
  else { 
    videoFile.pause();
    videoIcon.src = "./img/play-white.svg"
    overlay.onmouseleave = null;
    overlay.onmouseenter = null;
  }
})

videoFile.addEventListener ("ended", () => {
  videoFile.currentTime = 0;
  videoIcon.src = "./img/play-white.svg"; 
  overlay.classList.remove("hidden");
  overlay.onmouseleave = null; 
  overlay.onmouseenter = null; 
})
