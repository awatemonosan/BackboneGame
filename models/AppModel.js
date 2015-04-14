// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('TileMap', new TileMapModel());
    //this.set('GameObjects', new GameObjects());
  }

});
