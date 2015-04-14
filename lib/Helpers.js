var targetToVect2 = function( target ) {
  return target.isVec2 ? target : target.get('position');
}

var vec2index = function( vec2, width, height ){
  return point.x+point.y*width;
}