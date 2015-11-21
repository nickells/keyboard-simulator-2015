
var keyDown = function(){
  var keyDownSound = new Audio('keydown.wav');
  keyDownSound.play();
};
var keyUp = function(){
  var keyUpSound = new Audio('keyup.wav');
  keyUpSound.play();
};

window.addEventListener("keydown", keyDown, true);
window.addEventListener("keyup", keyUp, true);
