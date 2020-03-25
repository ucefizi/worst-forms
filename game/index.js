var randomkey;
var numberToEnter;
window.onload = function(){newNumber();};
window.setInterval(function(){newNumber();}, 500);
function newNumber() {
  var label = document.getElementById("out");
  randomkey = 97 + Math.floor(Math.random() * 26);
  numberToEnter = Math.floor(Math.random() * 10);
  label.innerHTML = "Please press " + String.fromCharCode(randomkey) + " to enter " + numberToEnter;
}
function checkKeyPress(e){
  var keynum;
  if(window.event) {keynum = e.keyCode;}
  else if(e.which){keynum = e.which;}
  if (keynum == randomkey) {
    var current = document.getElementById("phone").innerHTML;
    document.getElementById("phone").innerHTML = current + numberToEnter;
  }
  else {
    alert("You have pressed the incorrect key. Please Try again")
  }
}
function submitNumber() {
    alert("ERROR PLEASE TRY AGAIN");
    document.getElementById("phone").innerHTML = "";
}
