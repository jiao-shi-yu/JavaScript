// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver',
//   'Fuel Type': 'Turbo Fuel',
//   numCrew: 5,
//   flightPath: ['Venus', 'Mars', 'Saturn']
// };

// // Write your code below

// let crewCount = spaceship.numCrew;
// let planetArray = spaceship.flightPath;


// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   'Active Mission' : true,
//   homePlanet : 'Earth', 
//   numCrew: 5
//  };

// let propName =  'Active Mission';

// // Write your code below
// let isActive = spaceship[propName];
// console.log(spaceship[propName]);


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = Math.floor(Math.random()*10)+1;
delete spaceship['Secret Mission'];