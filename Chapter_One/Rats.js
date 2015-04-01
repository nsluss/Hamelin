// If you are working from a node.js-based build system
// in a text editor such as Sublime, uncomment the line below:

// var _ = require("../lib/underscore.js");

// Otherwise, copy this code into the sandbox at http://jsbin.com/?js
// and add 'underscore' from the 'Add library' dropdown

// If do you want to add such a build system to your Sublime someday,
// go to:    http://irruncibly.so/run-js-code-in-sublime

//___________________________________________________________________
// Welcome to the peaceful town of Hamelin :)

// Hamelin is a small town in Germany
// Recently they have been overridden by an infestation of rats!

// Here is a list of all the sub-sections of the town
// and whether or not the rats have taken over:
var districtsOfHamelin = [
  {name: 'Afferde',      hasRats: true,  numberOfRats: 35 },
  {name: 'Hastenbeck',   hasRats: true,  numberOfRats: 74 },
  {name: 'Halvestorf',   hasRats: false, numberOfRats: 0  },
  {name: 'Haverbeck',    hasRats: true,  numberOfRats: 24 },
  {name: 'Hilligsfeld',  hasRats: false, numberOfRats: 0  },
  {name: 'Sünteltal',    hasRats: true,  numberOfRats: 68 },
  {name: 'Klein Berkel', hasRats: true,  numberOfRats: 36 },
  {name: 'Tündern',      hasRats: false, numberOfRats: 0  },
  {name: 'Wehrbergen',   hasRats: true,  numberOfRats: 37 },
  {name: 'Rohrsen',      hasRats: true,  numberOfRats: 59 },
  {name: 'Welliehausen', hasRats: true,  numberOfRats: 93 }
];

// We need a way to tell what neighborhoods are overrun
function findRats (places) {
  return places.filter(function (place) {
    return place.hasRats;
  });
}

//console.log(findRats(districtsOfHamelin));


//___________________________________________________________________
// Section 1


// Once we know which ones have rats, let's tell everyone
function announceRats (places) {
  return findRats(places).forEach(function (place) {
    console.log(place + 'HAS BEEN OVERCOME BY RATS!');
  });
}

//announceRats(districtsOfHamelin);


// Extra Credit: replace the for loop in findRats as well


//___________________________________________________________________
// Section 2

// The townspeople need a way to tell which parts of Hamelin are safe!
function findSafePlaces (places) {
  return places.filter(function (place) {
    return !place.hasRats;
  });
}

//console.log(findSafePlaces(districtsOfHamelin));


// Extra Credit: replace the loop (or forEach) in findRats



//___________________________________________________________________
// Section 3


// Just how serious is this problem? Let's find the total number of rats
function totalRats (town) {
  return _.pluck(town, 'numberOfRats')
  .reduce(function(acc, number){
    return acc + number;
  }, 0);
}

//console.log(totalRats(districtsOfHamelin))

//Extra Credit: replace the second for loop with a .reduce

//___________________________________________________________________
// Section 4


// There may be a rat hiding in this family of mice!

// We've implemented a "contains" method to help detect
// a rat, but it would be nice to read if you used the
// native "reduce" function.

// The Rodent pseudoclass may remind you of a
// certain data structure that you have studied.

var Rodent = function(value){
  this.value = value;
  this.children = [];
};

Rodent.prototype.addChild = function(value){
  var newNode = new Rodent( value );
  this.children.push( new Rodent( value ) );
};

Rodent.prototype.contains = function( value ){


  return this.children.reduce(function(acc, currentChild){
    return acc || currentChild.value.contains( value );
  }, this.value === value);
  // for( var i = 0; i < this.children.length; i++ ){
  //   if( this.children[ i ].value.contains( value ) ){
  //     return true;
  //   }
  // }
  // return false;
};

// YOUR RAT DETECTION STRATEGY MUST PASS THESE TESTS:

// var grandDaddy = new Rodent( 'Grand-daddy Mouse' );
// grandDaddy.addChild ( new Rodent('Jerry Mouse') );

// var mattimeo = new Rodent( 'Mattimeo Mouse' );
// mattimeo.addChild( new Rodent('Frankie Mouse') );
// mattimeo.addChild( new Rodent('Benjy Mouse') );
// grandDaddy.addChild( mattimeo );

// console.log( grandDaddy.contains('Rizzo the Rat') ); // yields 'false'

// var vera = new Rodent( 'Vera Mouse' );
// vera.addChild( new Rodent( ('Rizzo the Rat') ) );
// grandDaddy.addChild( vera );

// console.log( grandDaddy.contains('Rizzo the Rat') );   // yields 'true'


// Section 4 BONUS: (this is not related to FP):
// Once you have refactored "contains" using "reduce",
// rewrite it again with no recursive call.
// Instead, use a while loop.

// First, make a while loop using the Queue pseudoclass that is
// provided below.
// Second, make a while loop using the Stack.

// Answer these questions:

// 1. Does this refactor make your code more declarative
// or more imperative?
// 2. Is this a depth-first search (DFS) or a breadth-first
// search (BFS)?


// HELPERS for the Section 4 BONUS
var Queue = function() {
  this._storage = {};
  this._start = -1;
  this._end = -1;
};

Queue.prototype.enqueue = function(value){
  this._end++;
  this._storage[this._end] = value;
};

Queue.prototype.dequeue = function(){
  this.size() && this._start++;
  var result = this._storage[this._start];
  delete this._storage[this._start];
  return result;
};

Queue.prototype.size = function(){
  return this._end - this._start;
};

var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};

Stack.prototype.size = function(){
  return this._size;
};


//___________________________________________________________________
//Section 5


// When visitors come to town they want a directory of safe and unsafe
// neighborhoods

function visitorsInfo (town) {
  return town.map(function(neighborhood){
    return {
      name: neighborhood.name,
      isSafe: !neighborhood.hasRats
    }
  });
}


//___________________________________________________________________

// Extra credit:


// Map is the right choice for the visitorsInfo function, but just for fun, try
// to switch the .map() out for a .reduce()


// Extra Credit 2:

// Refactor the visitorsInfo function to re-use previously writen
// functions (findSafePlaces, FindRats)
