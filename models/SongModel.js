//DELETE THIS

// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  event: { //need this for ended
    'ended' : 'ended'
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
