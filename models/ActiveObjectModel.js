var GameObjectModel = Backbone.Model.extend({
  initialize: function(){
    this.set('position', new Vec2());
    this.set('rotation', 0);
  }
  update: function( ) {
    this.set('position', this.get('position').add(this.get('velocity')));
    this.set('velocity', new Vec2());
  }
});