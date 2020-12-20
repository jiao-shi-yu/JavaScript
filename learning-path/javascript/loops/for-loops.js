// let vacationSpots = ['changbaishan', 'African', 'America'];
// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);

for (let num = 5; num <= 10; num++ ) {
    console.log(num);
}
for (let num = 3; num >= 0; num-- ) {
    console.log(num);
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
}

const bobsFollowers = ['Emma', 'Ava', 'Andrew', 'David'];
const tinasFollowers = ['Emma', 'James', 'David'];
let mutualFollowers = [];
for (let b = 0; b < bobsFollowers.length; b++) {
    for (let t = 0; t < tinasFollowers.length; t++) {
        if (bobsFollowers[b] === tinasFollowers[t]) {
            mutualFollowers.push(bobsFollowers[b]);
        }
    }
}