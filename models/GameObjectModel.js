//Static GameObject model.
//The base for all other Game objects

var GameObjectModel = Backbone.Model.extend({
  initialize: function(){
    this.set('position', new Vec2());
    this.set('rotation', 0);
  },
  update: function( ) {
  }
});
