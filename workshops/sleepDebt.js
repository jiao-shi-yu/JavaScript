const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 8;
    case 'thursday':
      return 8;
    case 'wednesday':
      return 8;
    case 'friday':
      return 8;
    case 'saturday':
      return 10;
    case 'sunday':
      return 20;
  }
}

console.log(getSleepHours('sunday'));


const getActualSleepHours = () => {
  let mondayHours = getSleepHours('monday');
  let tuesdayHours = getSleepHours('tuesday');
  let thursdayHours = getSleepHours('thursday');
  let wednesdayHours = getSleepHours('wednesday');
  let fridayHours = getSleepHours('friday');
  let saturdayHours = getSleepHours('saturday');
  let sundayHours = getSleepHours('sunday');
  let totalHours = mondayHours + tuesdayHours + thursdayHours + wednesdayHours + fridayHours + saturdayHours + sundayHours;
  return totalHours;
}

console.log(getActualSleepHours());



const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

console.log(getIdealSleepHours());



const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDebt = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log('you got the perfect amount of sleep. Your sleep debt: ' + sleepDebt);
    
  } else if(actualSleepHours >= idealSleepHours) {
    console.log('you got more sleep than needed. Your sleep debt: ' + sleepDebt);
  } else {
    console.log('you should get some rest. Your sleep debt: ' + sleepDebt)
  }
}