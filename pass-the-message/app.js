function passMessage() {
  const message = document.getElementById('messageBox');
  if(message.value==''){
    alert('Message is not inserted');
    return;
  }
  document.getElementById('enteredMessage').innerHTML = message.value;
  message.value = '';
}