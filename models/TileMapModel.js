var TileMapModel = Backbone.Model.extend({
  getAt: function( point ){
    //TODO: try other methods to see if they are faster
    return this.get( point.toString( ) );
  },
  setAt: function( point, data ){
    this.set( point.toString, new TileModel( {tileMap:this, data:data} ) );
  }
});