var drumButton = document.querySelectorAll(".set .drum");

document.addEventListener("keydown", drumFunction)

for (var i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", drumFunction);
}

function drumFunction(e){
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
    click: e.type === "keydown" ? "" :e.srcElement.classList[0],
    key: e.key
  }

  if (eventElement.click === "w" || eventElement.key === "w") {
    drumSound.w.play();
  }else if (eventElement.click === "a" || eventElement.key === "a") {
    drumSound.a.play();
  }else if (eventElement.click === "s" || eventElement.key === "s") {
    drumSound.s.play();
  }else if (eventElement.click === "d" || eventElement.key === "d") {
    drumSound.d.play();
  }else if (eventElement.click === "j" || eventElement.key === "j") {
    drumSound.j.play();
  }else if (eventElement.click === "k" || eventElement.key === "k") {
    drumSound.k.play();
  }else if (eventElement.click === "l" || eventElement.key === "l") {
    drumSound.l.play();
  }else {
    console.log("nosound");
  }
  console.log(`click: ${eventElement.click} key: ${eventElement.key}`);
  console.log(e.srcElement.className);
}
