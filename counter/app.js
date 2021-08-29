function increase() {
  const numberBox = document.getElementById('numberBox');
  numberBox.innerHTML = ++numberBox.innerText;
  if(numberBox.innerText > 0)
    numberBox.style.color = 'green';
  if(numberBox.innerText == 0)
    numberBox.style.color = '#000';
}

function decrease() {
  const numberBox = document.getElementById('numberBox');
  numberBox.innerHTML = --numberBox.innerText;
  if(numberBox.innerText < 0)
    numberBox.style.color = 'red';
  if(numberBox.innerText == 0)
    numberBox.style.color = '#000';
}

function reset() {
  const numberBox = document.getElementById('numberBox');
  numberBox.innerHTML = 0;
  numberBox.style.color = '#000';
}