var TileMapView = Backbone.View.extend({

  initialize: function( ) {
    this.views = { };
    list = this;
    this.model.on( 'all', function(event){
      list.views[this.ID] = this
    })

    this.render( );
  },

  allEvents: function( event )


  render: function( ){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children( ).detach( );

    this.$el.html( '<th>Library</th>' ).append(
      this.collection.map( function( song ){
        return new LibraryEntryView( {model: song} ).render( );
      })
    );
  }

});
