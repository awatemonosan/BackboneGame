//============================================================================//
// Yo Dawg, I herd you like Backbone.Collection, so I put a Backbone.Collection
// in your Backbone.Model so you can fetch while you fetch.
//
// NOTE: you MUST call Backbone.Subcollection.prototype.initialize( collection )
// in your extended objects or you lose all functionality.
//
// TODO: Use Object.wrap provided in Extensions.js
//============================================================================//
Backbone.Subcollection = Backbone.Model.extend({
  initialize: function( collection ){
    var wrap = function( self, other ) {
      var closure = function( key ){ self[key] = function( ){ return other[key].apply( other, arguments ); } }
      for( key in other ){ if( $.isFunction(other[key]) ){ closure(key); } }
    };
	//Wrap subcollections methods to this model
    this.subCollection=collection; wrap(this,collection);
    //Make subcollections events continue to bubble up
    this.subCollection.on('all',function(event){this.trigger(event)},this);
  }
});