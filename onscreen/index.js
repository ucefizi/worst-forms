let buttons = [];
let form = $("#form")
const stride = 5;

const random = function(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}

for (let i = 0; i < 10; i++) {
  buttons.push({
    button: $("#button" + i),
    xDir: random(["left", "right"]),
    yDir: random(["up", "down"]),
    xVel: random([1, 2, 3]),
    yVel: random([1, 2, 3])
  })
}

setInterval( () => {
  let xBoundary = form.width() - buttons[0].button.width()
  let yBoundary = form.height() - buttons[0].button.height()
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].button.css({
      left: (index, oldValue) => {
        if(buttons[i].xDir === "left") {
          if(parseInt(oldValue) < xBoundary) {
            return parseInt(oldValue) + buttons[i].xVel
          } else {
            buttons[i].xDir = "right";
            return parseInt(oldValue)
          }
        } else if(buttons[i].xDir === "right") {
          if(parseInt(oldValue) > 0) {
            return parseInt(oldValue) - buttons[i].xVel;
          } else {
            buttons[i].xDir = "left";
            return parseInt(oldValue)
          }
        }
      },
      top: (index, oldValue) => {
         if(buttons[i].yDir === "down") {
          if(parseInt(oldValue) < yBoundary) {
            return parseInt(oldValue) + buttons[i].yVel
          } else {
            buttons[i].yDir = "up";
            return parseInt(oldValue)
          }
        } else if(buttons[i].yDir === "up") {
          if(parseInt(oldValue) > 0) {
            return parseInt(oldValue) - buttons[i].yVel;
          } else {
            buttons[i].yDir = "down";
            return parseInt(oldValue)
          }
        }       
      }
    })
  }
}, 20)

let count = 0;
$(".button").mousedown( function() {
  if(count < 10) {
    if (count === 0) {
      $(".number").append("(" +this.innerHTML)
    } else if (count === 2) {
      $(".number").append(this.innerHTML + ")")
    } else if (count === 5) {
      $(".number").append(this.innerHTML + "-")
    } else {
      $(".number").append(this.innerHTML)
    }
    count++;
  }
})

$(".startOver").click( () => {
  $(".number").html("");
  count = 0;
})

$(".enter").click ( () => {
  alert("You've submitted " + $(".number").html())
})
