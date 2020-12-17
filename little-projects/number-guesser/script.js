let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random(10));

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    let userDistance = Math.abs(userGuess-targetNumber);
    let computerDistance = Math.abs(computerGuess - targetNumber);
    /** return true if **Human** wins */
    return userDistance <= computerDistance;
}

const updateScore = (winner) => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
}

const advanceRound = () => currentRoundNumber++;
