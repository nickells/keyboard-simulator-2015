var keyDownSound = new Audio('keydown.wav');
var keyUpSound = new Audio('keyup.wav');

var keyDown = function(){
  keyDownSound.play();
};
var keyUp = function(){
  keyUpSound.play();
};

window.addEventListener("keydown", keyDown, true);
window.addEventListener("keyup", keyUp, true);
