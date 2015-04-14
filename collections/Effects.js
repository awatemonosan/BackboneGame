var Effects = Backbone.Collection.extend({
  //model: Effect,

  spawn: function( effect, target, direction ){
    effect = new Effect( effect );
    target = target || new Vec2(0.5,0.5);//TODO: STOP OVERENGINEERING. default to middle of screen.
    if(target.isUnit) {
      target = target.position;
    }

    direction = direction || new Vec2(0,0);

    effect.position = target;
    effect.direction = direction;

    this.push( effect );
  }
});


/*
//OLD CRAP
effects.spawn = function( effect, target ){
  target = target || new Vector2(0.5,0.5);//TODO: STOP OVERENGINEERING. default to middle of screen.
  if(target.isUnit) {
    target=target.position;
  }
  effects.push(new Effect(effect), target);
}
// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

});
*/
