
var Input = { };

Input.keys = { };
Input.keys.arrowUp = 38;
Input.keys.arrowDown = 40;
Input.keys.arrowLeft = 37;
Input.keys.arrowRight = 39;

Input._keyState={};

Input.get = function( key ){
  return input._keystate[key] > 0;
};

Input.bind = function ( key, binding ){
  Input._keyState[key]=binding;
};

Input.event = function( key, callback ){

}
//Event system
/*
Input.updateFrequency = 1;
Input._update = function(){

  setTimeout( update, 1 );
}
_update();
*/
window.addEventListener('keydown', function( event ) {
  Input._keyState[event.keyCode]++;
  if( Input._keyState[event.keyCode]!==undefined ){
    Input._keyState[Input._keyState[event.keyCode]]++;
  }
});

window.addEventListener('keyup', function( event ) {
  Input._keyState[event.keyCode]--;
  if( Input._keyState[event.keyCode]!==undefined ){
    Input._keyState[Input._keyState[event.keyCode]]--;
  }
});
