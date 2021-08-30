const tesimonials = [
  {
    avatar: 'images/avatar1.jpg',
    username: 'mohammad',
    stars: '★★',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable.',
  },
  {
    avatar: 'images/avatar2.jpg',
    username: 'ali',
    stars: '★★★',
    comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
];

var i = 0;
$avatar = document.getElementById('avatar');
$username = document.getElementById('username');
$stars = document.getElementById('stars');
$comment = document.getElementById('comment');

function goRight() {
  if(i>0) i=-1;
  avatar.src = tesimonials[++i].avatar;
  username.innerText = tesimonials[i].username;
  stars.innerText = tesimonials[i].stars;
  comment.innerText = tesimonials[i].comment;
}

function goLeft() {
  if(i<1) i=2
  avatar.src = tesimonials[--i].avatar;
  username.innerText = tesimonials[i].username;
  stars.innerText = tesimonials[i].stars;
  comment.innerText = tesimonials[i].comment;
}

