function digitalClock(){
  var date = new Date();
  
  var h = (date.getHours()<10?'0':'') + date.getHours();
  var m = (date.getMinutes()<10?'0':'') + date.getMinutes();
  var s = (date.getSeconds()<10?'0':'') + date.getSeconds();

  document.getElementById('ClockWrapper').innerText = h+':'+m+':'+s;
}

setInterval(() => {
  digitalClock()
}, 1);
