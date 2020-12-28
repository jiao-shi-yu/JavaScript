const getRandomNumber = (from, to) => {
	return Math.floor(Math.random()*(to - from)+1)
}

var frontFive = [];
while (frontFive.length < 5) {
    let num =  getRandomNumber(1, 35);
    if (!frontFive.includes(num)) {
        frontFive.push(num);
    }
}
var backTwo = [];
while (backTwo.length < 2) {
	let num = getRandomNumber(1, 12);
	if (!backTwo.includes(num)) {
		backTwo.push(num);
	}
	
}

frontFive.sort((a, b) => a - b);
backTwo.sort((a, b) => a - b);

console.log(frontFive, backTwo);