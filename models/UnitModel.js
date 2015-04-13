var UnitModel = GameObjectModel.extend({
  initialize: function() {
    GameObjectModel.prototype.initialize();
  },
  update: function( ) {
    GameObjectModel.prototype.update();
  },
  moveTo: function( target ){
    this.set('target', target);
    this.set('autoAttack', false);
  },
  attackTo: function( target ){
    this.set('target', target);
    this.set('autoAttack', true);
  }
});
