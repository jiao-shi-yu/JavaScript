const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput ==='bomb') {
    return userInput;
  } else {
    console.log("error userInput")
  }
}

// console.log(getUserChoice('rocky'));

const getComputerChoice = () => {
  let num = Math.floor(Math.random()*(2-0+1));
  if (num === 0) {
    return 'rock';
  } else if (num == 1) {
    return 'paper';
  } else if (num == 2) {
    return 'scissors';
  }
}


// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === 'bomb') {
    return ": the user wins."
  }
  if (userChoice === computerChoice) {
    return ': the game was a tie.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return ': computer win';
    } else {
      return ': user win';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice ==='scissors') {
      return ': computer win';
    } else {
      return ': user win';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return ': computer win';
    } else {
      return ': user win';
    }
  }
}

// console.log(determineWinner('rock', 'paper'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));

}

playGame();