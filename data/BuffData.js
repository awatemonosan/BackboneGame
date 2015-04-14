
var buffMethods={};

buffMethods.takeDamage = function(unit) {
  effects.spawn(this.effect, unit.position);
  unit.takeDamage(this.damage);
}

var buffData = [
  {
    name: 'burning',
    effect: 'fireBurst',
    damage: 1,
    update: buffMethods.takeDamage
  }
];

