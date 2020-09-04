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
const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

//Calculate the sleep debt, if any.
