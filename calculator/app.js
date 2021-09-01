var calHistory = '';

var all = document.querySelectorAll(".clickOn")

all.forEach(element => {
  element.addEventListener("click", function(){
    calHistory += element.innerText;
    document.getElementById("result").innerText = calHistory;
  })
});

document.querySelector('.equel').addEventListener("click", function(){
  document.getElementById("result").innerText = eval(calHistory);
  calHistory = '';
})

document.querySelector('.clear').addEventListener("click", function(){
  document.getElementById("result").innerText = '0';
  calHistory = '';
})

document.querySelector('.back').addEventListener("click", function(){
  if(calHistory==''){return}
  calHistory = calHistory.slice(0, -1);
  document.getElementById("result").innerText = calHistory;
})