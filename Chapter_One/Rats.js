// Welcome to the peaceful town of Hamelin :)

// Hamelin is a small town in germany
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
  {name: 'Welliehausen', hasRats: true,  numberOfRats: 93]
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


//___________________________________________________________________
// Section 1


// Once we know which ones have rats, let's tell everyone
function announceRats (places) {
  var withRats = findRats(places);
  for (var i = 0; i < withRats.length; i++) {
    console.log(places[i] + 'HAS BEEN OVERCOME BY RATS!')
  }
  return places; // always returning a value is just good practice, even if we won't use it now
}


// Extra Credit: replace the for loop in findRats as well


//___________________________________________________________________
// Section 2

// The townspeople need a way to tell which parts of Hamelin are safe!
function findSafePlaces (places) {
  var safe = [];
  for var (i = 0; i < places.length; i++) {
    if (places[i].hasRats === false) {
      safe.push(places[i].name)
    }
  }
  return safe;
}


// Extra Credit: replace the loop (or each) in findRats 



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


//___________________________________________________________________
// Section 4


// Tree with reduce


//___________________________________________________________________
// Extra credit:

// Let's clean up our town array
// We don't really need to keep a boolean and number
// Let's change it to a number
function prettifyTown (town) {
  town.map(function (place) {
    return {
      name:         place.name,
      numberOfRats: place.numberOfRats
    };
  });
}
// Map is the right choice for this function, but just for fun, try
// to switch the .map() out for a .reduce()




//___________________________________________________________________
//Section 6



