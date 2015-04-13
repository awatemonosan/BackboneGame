// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.tieMapView = new TileMapView({model: this.model.get('TileMap')});
    //this.gameObjectsView = new GameObjectsView({model: this.model.get('GameObjects')});
  },

  render: function(){
    this.tileMapView.render();
    //this.gameObjectsView.render();
  }

});
