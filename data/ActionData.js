var actionData = [
  {
    name: 'move',
    validTargets: {'point':true, 'friendly':true, 'enemy':true},
    func: function( unit, target ){
      unit.MoveTo( target );
    }
  },
  {
    name: 'attack',
    validTargets: {'point':true, 'enemy':true},
    func: function( unit, target ){
      unit.AttackTo( target );
    }
  }
];
