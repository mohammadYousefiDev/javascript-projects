const rainBtn = document.getElementById('rainBtn');
const rainSound = document.getElementById('rainSound');
const rainVideo = document.getElementById('rainVideo');

const beachBtn = document.getElementById('beachBtn');
const beachSound = document.getElementById('beachSound');
const beachVideo = document.getElementById('beachVideo');


rainBtn.addEventListener("click", () => {
  rainSound.play();
  beachSound.pause();
  rainVideo.play();
  beachVideo.pause();
  beachVideo.style.display = "none";
  rainVideo.style.display = 'block';
})

beachBtn.addEventListener("click", () => {
  beachSound.play();
  rainSound.pause();
  rainVideo.pause();
  beachVideo.play();
  rainVideo.style.display = "none";
  beachVideo.style.display = 'block';
})