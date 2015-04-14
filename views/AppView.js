// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.canvas = $('body').append('<canvas id="canvas" width="500" height="400" style="border:1px solid #000000;"></canvas>');
    this.sprites =  $('body').append('<img src="./gfx/lofi_scifi_v2_trans.png" height="0" width="0">');
    this.tieMapView = new TileMapView({
    	model: this.model.get('TileMap'),
    	canvas: this.canvas
    });

    //this.gameObjectsView = new GameObjectsView({model: this.model.get('GameObjects')});
  },

  render: function(){
    this.tileMapView.render();
    //this.gameObjectsView.render();
  }

});
