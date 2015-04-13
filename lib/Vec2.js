Vec2 = function( x, y ) {
  this.x = x || 0;
  this.y = y || 0;

  this.isVec2 = true;
};

Vec2.prototype.toString(){
  return "{'x':"+this.x+", 'y':"+this.y+'}';
};

Vec2.prototype.set = function( x, y ) {
  this.x = x;
  this.y = y;

  return this;
};

Vec2.prototype.copy = function( other ) {
  return this.set( other.x, other.y );
};

Vec2.prototype.clone = function( ) {
  return new Vec2( this.x, this.y );
};

Vec2.prototype.add = function( other ) {
  return this.set( this.x+other.x, this.y+other.y );
};

Vec2.prototype.sub = function( other ) {
  return this.set( this.x-other.x, this.y-other.y );
};

Vec2.prototype.multiply = function( scale ) {
  return this.set( this.x*scale, this.y*scale );
};

Vec2.prototype.divide = function( scale ) {
  if( scale!==0 ){
    return this.set( this.x/scale, this.y/scale );
  } else {
    return this.set( 0, 0 );
  }
};

Vec2.prototype.inverse = function( ){
  return this.multiply( -1 );
};

Vec2.prototype.dot = function( other ) {
  return this.x*other.x + this.y*other.y;
};

Vec2.prototype.lengthSq = function( ) {
  return this.x*this.x + this.y*this.y;
};

Vec2.prototype.length = function( ) {
  return Math.sqrt( this.lengthSq( ) );
};
Vec2.prototype.normalize = function( ) {
  return this.divide( this.length( ) );
};
Vec2.prototype.distanceTo = function( other ) {
  return Math.sqrt( this.distanceToSq( other ) );
};

Vec2.prototype.distanceToSq = function( other ) {
  var dx = this.x-other.x;
  var dy = this.y-other.y;
  return dx*dx + dy*dy;
};

Vec2.prototype.setLength = function( length ) {
  return this.normalize( ).multiplyScalar( length );
};

Vec2.prototype.equals = function( other ) {
  return ( ( other.x === this.x ) && ( other.y === this.y ) );
};

Vec2.prototype.round = function( other ) {
  return this.set( Math.round( other.x ), Math.round( other.y ) );
};

Vec2.prototype.min = function( other ) {
  return this.set( Math.min( this.x, other.x ), Math.min( this.y, other.y ));
};

Vec2.prototype.max = function( other ) {
  return this.set( Math.max( this.x, other.x ), Math.max( this.y, other.y ));
};

Vec2.prototype.clamp = function( min, max ) {
  return this.min(max).max(min);
};

//Tests
Vec2.prototype.isInside( min, max ){
  if(this.x>max.x) return false;
  if(this.x<min.x) return false;
  if(this.y>max.y) return false;
  if(this.y<min.y) return false;
  return true;
};
