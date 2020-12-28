const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

console.log(time2p2);


const checkConsistentOutput = (functionPara, value) => {
  let result1 = functionPara(value);
  let result2 = functionPara(value);
  if (result1 === result2) {
    return result1;
  } else {
    return 'This function returned inconsistent results';
  }
}

// checkConsistentOutput(addTwo, 518);
console.log(checkConsistentOutput(addTwo, 518));