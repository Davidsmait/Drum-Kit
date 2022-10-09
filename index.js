var drumButton = document.querySelectorAll(".set .drum");

document.addEventListener("keydown", drumFunction)
document.addEventListener("keyup", drumFunction)

for (var i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("mousedown", drumFunction);
  drumButton[i].addEventListener("mouseup", drumFunction);
}

function drumFunction(eventListener){
  var drumSound = {
    w: new Audio('sounds/tom-1.mp3'),
    a: new Audio('sounds/tom-2.mp3'),
    s: new Audio('sounds/tom-3.mp3'),
    d: new Audio('sounds/tom-4.mp3'),
    j: new Audio('sounds/snare.mp3'),
    k: new Audio('sounds/crash.mp3'),
    l: new Audio('sounds/kick-bass.mp3')
  }

  var eventElement = {
    w: drumButton[0],
    a: drumButton[1],
    s: drumButton[2],
    d: drumButton[3],
    j: drumButton[4],
    k: drumButton[5],
    l: drumButton[6],
    mouseNameClass: eventListener.type === "keydown"
    ? ""
    :eventListener.srcElement.classList[0],
    keyName: eventListener.key
  }

  if (eventListener.type === "keydown" || eventListener.type === "mousedown") {
    for (var sounds in drumSound) {
      if (eventElement.mouseNameClass === sounds || eventElement.keyName === sounds) {
        drumSound[sounds].play();
        eventElement[sounds].classList.add('red');
      }
    }
  }

  if (eventListener.type === "mouseup" || eventListener.type === "keyup") {
    for (var word in eventElement) {
      if (eventElement.mouseNameClass === word || eventElement.keyName === word) {
        eventElement[word].classList.remove('red');
      }
    }
  }
}
