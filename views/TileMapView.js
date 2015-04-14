var TileMapView = Backbone.View.extend({

  initialize: function( ) {
    this.views = { };

    this.model.on('add', this.onAdd, this); //"add" (model, collection, options) — when a model is added to a collection.
    this.model.on('remove', this.onRemove, this); //"remove" (model, collection, options) — when a model is removed from a collection.
    this.model.on('reset', this.onReset, this); //"reset" (collection, options) — when the collection's entire contents have been replaced.
    this.model.on('change', this.onChange, this); //"change" (model, options) — when a model's attributes have changed.
    this.model.on('destroy', this.onRemove, this); //"destroy" (model, collection, options) — when a model is destroyed.
  },

  onAdd: function( model, collection, options ){
    this.views[model.ID] = new TileView({model:model, canvas:this.canvas});
  },

  onRemove: function( model, collection, options ){
    delete this.views[model.ID];
  },

  onReset: function( collection, options ){
    this.views = { };
  },

  onChange: function( model, options ){
    onRemove(model);
    onAdd(model);
  },

  render: function( ){
    _.each(this.views, function(view, ID){view.render();});
  }

});
