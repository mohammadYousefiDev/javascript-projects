function changeBackground() 
{
  var colors = [
    'blue',
    'red',
    'yellow',
    'brown',
    'green',
    'purple',
    'lightblue',
    'aqua',
    'orange'
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = color;
}