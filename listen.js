var lastKey;
var keyDown = function(e){
  if (e.which !== lastKey){
    var keyDownSound = new Audio('keydown.wav');
    keyDownSound.play();   
  }
  lastKey = e.which;
};
var keyUp = function(e){
  lastKey = undefined;
  var keyUpSound = new Audio('keyup.wav');
  keyUpSound.play();
};

window.addEventListener("keydown", keyDown, true);
window.addEventListener("keyup", keyUp, true);