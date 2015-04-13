var Tilemap = Backbone.Model.extend({

  getAt: function( point ){
    //TODO: try other methods to see if they are faster
    return this.get(point.toString());
  }
  setAt: function( point, tile ){
    this.set(point.toString, tile);
  }
});