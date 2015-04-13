var targetToVect2( target ) {
  return target.isVec2 ? target : target.get('position');
}

var vec2index( vec2, width, height ){
  return point.x+point.y*width;
}