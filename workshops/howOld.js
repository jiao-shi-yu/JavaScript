// Write your function here:
const howOld = (age, year) => {
  let currentYear = new Date().getFullYear();
  let bornYear = currentYear - age;
  console.log("current year: " + currentYear);
  console.log(`born year: ${bornYear}`);
  if (year > currentYear) {
    let yearsLater = year - currentYear;
    return `You will be ${age + yearsLater} in the year ${year}`
  } else if (year < bornYear) {
    let yearsBefore = bornYear - year;
    return `The year ${year} was ${yearsBefore} years before you were born`;
  } else if (year >= bornYear && year <= currentYear) {
    let ageThatYear = age - (currentYear - year);
    return `You were ${ageThatYear} in the year ${year}`;
  }
}




// Once your function is written, write function calls to test your code!
console.log(howOld(22, 2050));
console.log(howOld(22, 1950));
console.log(howOld(22, 2003));