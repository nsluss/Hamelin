var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  this.children.push(treeMaker(value));
};

treeMaker.methods.contains = function( value ){
  return this.children.reduce( function( previousValue, currentValue ){
    return previousValue || currentValue.contains( value );
  }, this.value === value );
};

// TESTS

var tree = treeMaker();
tree.addChild('mouse');
var sapling = treeMaker();
tree.addChild('mouse');
tree.addChild('mouse');
sapling.addChild('rat');
tree.addChild(sapling);
console.log(tree.contains('rat'));   // yields 'true'
console.log(tree.contains('rat'));   // yields 'false'
