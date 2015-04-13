window.addEventListener('keydown', function( event ) {
  Input.keyState[event.keyCode]=true;
  Input.keyState[bindings[event.keyCode]]=true;
});

window.addEventListener('keyup', function( event ) {
  Input.keyState[event.keyCode]=false;
  Input.keyState[bindings[event.keyCode]]=true;
});

var Input = {};
Input.keys={};
Input.keys.ArrowUp = 38;
Input.keys.ArrowDown = 40;
Input.keys.ArrowLeft = 37;
Input.keys.ArrowRight = 39;

Input.keyState={};
Input.bindings={};

Input.getKey = function( key ){
	return !!input.keystate[key];
};

Input.bindKey = function ( key, binding ){
  Input.bindings[key]=binding;
};
