Array.prototype.isArray=true;
Array.prototype.isObject=undefined;//should this be false? I think not.

Number.prototype.isNumber=true;
Number.prototype.isObject=undefined;

String.prototype.isString=true;
String.prototype.isObject=undefined;

Function.prototype.isFunction=true;
Function.prototype.isObject=undefined;

Object.prototype.isObject=true;

Object.prototype.wrap = function( other ) {
  var self=this;
  var closure = function( key ){
    self[key] = function( ){
      return other[key].apply( other, arguments );
    }
  }
  for( key in other ){
    if( $.isFunction(other[key]) ){
      closure(key);
    }
  }
};