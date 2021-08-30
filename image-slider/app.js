const images = [
  'images/slide1.jpeg',
  'images/slide2.jpeg',
  'images/slide3.jpeg',
  'images/slide4.jpeg',
  'images/slide5.jpeg',
];

var i = 0;

$sliderWrapper = document.getElementById('sliderWrapper');

setInterval(function() {
  goRight();
}, 5000);

function goRight() {
  if(i>3) i=-1
  sliderWrapper.style.backgroundImage = 'url('+images[++i]+')';
}

function goLeft() {
  if(i<1) i=5
  sliderWrapper.style.backgroundImage = 'url('+images[--i]+')';
}

