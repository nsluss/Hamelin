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
  var withRats = [];
  for (var i = 0; i < places.length; i++) {
    if (places[i].hasRats)
    withRats.push(places[i].name);
  }
  return withRats;
}

//console.log(findRats(districtsOfHamelin));


//___________________________________________________________________
// Section 1


// Once we know which ones have rats, let's tell everyone
function announceRats (places) {
  var withRats = findRats(places);
  for (var i = 0; i < withRats.length; i++) {
    console.log(withRats[i] + 'HAS BEEN OVERCOME BY RATS!');
  }
  return places; // always returning a value is just good practice, even if we won't use it now
}

//announceRats(districtsOfHamelin);


// Extra Credit: replace the for loop in findRats as well


//___________________________________________________________________
// Section 2

// The townspeople need a way to tell which parts of Hamelin are safe!
function findSafePlaces (places) {
  var safe = [];
  for (var i = 0; i < places.length; i++) {
    if (places[i].hasRats === false) {
      safe.push(places[i]);
    }
  }
  return safe;
}

//console.log(findSafePlaces(districtsOfHamelin));


// Extra Credit: replace the loop (or forEach) in findRats 



//___________________________________________________________________
// Section 3


// Just how serious is this problem? Let's find the total number of rats
function totalRats (town) {
  var ratPopulations = [];
  var total = 0;
  for (var i = 0; i < town.length; i++) {
    ratPopulations.push(town[i].numberOfRats); //
  }
  for (var i = 0; i < ratPopulations.length; i++) {
    total += ratPopulations[i];
  }
  return total;
}

//console.log(totalRats(districtsOfHamelin))


//Extra Credit: replace the second for loop with a .reduce

//___________________________________________________________________
//Section 4


// When visitors come to town they want a directory of safe and unsafe
// neighborhoods

function visitorsInfo (town) {
  return _.map(town, function(neighborhood){
    return {
      name: neighborhood.name,
      isSafe: !neighborhood.hasRats
    }
  });
}


//___________________________________________________________________
// Section 5


// Tree with reduce



//___________________________________________________________________

// Extra credit:


// Map is the right choice for the visitorsInfo function, but just for fun, try
// to switch the .map() out for a .reduce()


// Extra Credit 2:

// Refactor the visitorsInfo function to re-use previously writen
// functions (findSafePlaces, FindRats)
