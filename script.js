/*

todo: calculate if you’re getting enough sleep each week

todo: determine the actual and ideal hours of sleep for each night of the last week

todo: calculate, in hours, how far you are from your weekly sleep goal

*/

//determining how many hours of sleep you got each night of the week
const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'sunday':
      return 8;
    case 'monday':
      return 7;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 5;
    case 'thursday':
      return 7;
    case 'friday':
      return 6;
    case 'saturday':
      return 6;
  }
};

//get the total sleep hours that you actually slept
const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

//Get the ideal sleep hours that you prefer
const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

//Calculate the sleep debt, if any.
const calculateSleepDebt = (hours) => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(hours);
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep. You slept ${actualSleepHours} the same as your ideal hours ${idealSleepHours}`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed. You slept ${actualSleepHours - idealSleepHours} more than your ideal hours ${idealSleepHours}`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest. You slept ${idealSleepHours - actualSleepHours} less than your ideal hours ${idealSleepHours}`);
  }
};

calculateSleepDebt(7);
