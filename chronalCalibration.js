/*
--- Day 1: Chronal Calibration ---
"We've detected some temporal anomalies," one of Santa's Elves at the Temporal Anomaly Research and Detection Instrument Station tells you. She sounded pretty worried when she called you down here. "At 500-year intervals into the past, someone has been changing Santa's history!"

"The good news is that the changes won't propagate to our time stream for another 25 days, and we have a device" - she attaches something to your wrist - "that will let you fix the changes with no such propagation delay. It's configured to send you 500 years further into the past every few days; that was the best we could do on such short notice."

"The bad news is that we are detecting roughly fifty anomalies throughout time; the device will indicate fixed anomalies with stars. The other bad news is that we only have one device and you're the best person for the job! Good lu--" She taps a button on the device and you suddenly feel like you're falling. To save Christmas, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

After feeling like you've been falling for a few minutes, you look at the device's tiny screen. "Error: Device must be calibrated before first use. Frequency drift detected. Cannot maintain destination lock." Below the message, the device shows a sequence of changes in frequency (your puzzle input). A value like +6 means the current frequency increases by 6; a value like -3 means the current frequency decreases by 3.

For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:

Current frequency  0, change of +1; resulting frequency  1.
Current frequency  1, change of -2; resulting frequency -1.
Current frequency -1, change of +3; resulting frequency  2.
Current frequency  2, change of +1; resulting frequency  3.
In this example, the resulting frequency is 3.

Here are other example situations:

+1, +1, +1 results in  3
+1, +1, -2 results in  0
-1, -2, -3 results in -6
Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?
*/

const changes = ['+19', '-13', '+3', '+3', '+3', '+8', '+11', '+20', '-19', '+14', '+13', '+4', '+18', '+8', '+17', '+18', '-13', '+4', '+4', '+6', '+2', '+10', '+13', '-2', '+1', '-7', '+14', '-15', '-2', '+16', '+15', '-2', '-8', '-16', '-18', '-10', '+20', '+18', '+9', '+17', '-9', '-14', '+7', '-3', '+20', '+8', '+12', '-3', '-3', '+11', '+19', '+6', '-2', '-1', '-10', '+5', '+11', '+10', '-8', '+16', '+4', '+17', '-9', '-3', '-8', '+4', '+11', '+4', '-3', '+15', '-6', '+16', '-19', '-20', '-6', '+9', '+2', '-6', '-3', '-10', '-8', '+4', '-16', '+11', '-10', '+4', '-2', '+19', '-13', '+18', '-13', '-8', '+18', '-6', '+1', '+25', '+18', '+10', '+13', '-6', '-18', '+17', '-13', '-10', '+15', '-2', '+14', '+18', '-5', '-15', '+18', '-5', '+6', '+8', '+2', '-1', '-2', '+16', '+16', '-6', '+11', '+11', '-15', '+18', '+1', '-7', '+1', '-7', '+8', '-12', '+7', '+1', '+15', '+4', '+10', '+15', '+19', '-14', '-19', '+10', '+12', '-2', '+4', '+6', '+8', '+4', '+17', '-10', '+5', '-11', '-16', '-18', '-18', '-4', '-10', '+18', '-7', '+19', '+9', '-5', '-18', '-3', '+11', '-15', '+6', '-9', '+1', '-17', '+15', '-6', '-20', '-4', '-3', '+16', '-15', '+1', '-20', '+2', '+13', '+1', '+7', '-20', '+10', '-7', '-11', '+16', '+19', '-3', '-22', '+9', '-4', '-16', '-2', '-8', '-3', '-7', '+3', '+9', '-19', '-19', '+11', '+2', '-15', '+10', '+9', '-11', '+10', '+15', '+1', '+21', '+6', '-3', '-22', '+5', '-14', '-7', '+25', '+2', '-36', '-18', '-7', '+11', '-15', '+21', '-13', '+14', '-19', '-12', '-4', '-30', '-4', '-18', '-7', '-13', '+8', '-15', '+6', '+2', '-9', '+17', '+3', '+7', '+4', '+11', '+5', '-9', '+3', '+10', '-18', '+1', '+2', '+1', '-7', '+14', '+4', '+6', '+22', '-23', '-4', '-10', '-20', '-6', '-10', '-11', '+1', '+19', '+12', '+1', '+18', '-17', '+19', '-27', '-8', '-14', '+10', '-25', '-24', '-5', '+14', '-11', '-1', '-16', '-12', '-7', '+17', '-4', '-18', '+16', '-12', '-18', '-16', '-2', '-5', '-7', '+1', '+15', '-10', '+18', '+4', '+1', '+13', '+8', '+19', '+3', '-9', '+1', '-13', '-15', '-1', '+5', '-18', '-11', '-3', '-17', '+18', '+8', '+1', '+3', '+18', '-2', '-5', '+1', '+14', '-13', '+7', '+14', '+21', '-19', '+2', '+8', '-15', '+6', '+15', '+20', '+5', '+17', '+14', '-25', '-10', '+5', '+18', '-7', '-13', '-2', '-9', '-15', '+10', '-35', '+15', '+4', '+37', '-24', '+14', '+15', '+2', '-32', '-34', '-12', '-12', '-25', '-19', '-16', '+10', '-7', '-10', '+20', '+17', '+8', '+16', '-8', '-1', '-2', '-12', '+2', '-7', '+3', '-5', '-27', '-8', '-8', '-2', '+19', '-15', '-1', '+24', '-15', '-3', '-1', '+3', '-34', '-16', '+8', '-24', '+9', '-8', '-31', '-7', '-31', '-33', '-50', '-11', '+70', '+60', '+61', '+12', '+1', '+56', '+18', '+39', '-13', '-5', '+54', '-48', '-47', '+137', '-62', '-76', '-168', '-329', '-59773', '-19', '+4', '+16', '-6', '-13', '+6', '+16', '+5', '-6', '-5', '+13', '+9', '-8', '-15', '-7', '-14', '+1', '-10', '-6', '+18', '+14', '-18', '+16', '+19', '-14', '+11', '+6', '+5', '-1', '+18', '-14', '-15', '+9', '-16', '+9', '-3', '-13', '+2', '-8', '-3', '+1', '-10', '-19', '-17', '-13', '-3', '-12', '-14', '-13', '+15', '-17', '+8', '-5', '-7', '-7', '-3', '-12', '+18', '-8', '+4', '+16', '+3', '-2', '+6', '+14', '+6', '+14', '-8', '+15', '-3', '+4', '-17', '-12', '+22', '-13', '+7', '-10', '-8', '+6', '+19', '+17', '+2', '+15', '+18', '-12', '+2', '-1', '-3', '-16', '-14', '+15', '-19', '+16', '+15', '+8', '-11', '-8', '-13', '-8', '+15', '-2', '-4', '-3', '-18', '+4', '+1', '-4', '+9', '-22', '-6', '-4', '-22', '+18', '-13', '-8', '-15', '-14', '-5', '-2', '-3', '-4', '-11', '-17', '-18', '-8', '+9', '-3', '+11', '+14', '+15', '-1', '-9', '-11', '+19', '-10', '+8', '+6', '+16', '-12', '-13', '+8', '-12', '-8', '+6', '-1', '-11', '+19', '-16', '+6', '-14', '-5', '+11', '-15', '-11', '+14', '-19', '-12', '-1', '+12', '+4', '+19', '+7', '-6', '-17', '+5', '+10', '-9', '-2', '-6', '+10', '-17', '+16', '-24', '-13', '+19', '+1', '-18', '-1', '+5', '-2', '-9', '-5', '-13', '+5', '-16', '+4', '+16', '-12', '+17', '-11', '-2', '+14', '-17', '-2', '+16', '-17', '-13', '+1', '-5', '+6', '-8', '+4', '-9', '-5', '-15', '-15', '+10', '-16', '+15', '-16', '-18', '+16', '-11', '-3', '-4', '-7', '+17', '+1', '-10', '-15', '-1', '-8', '+2', '+11', '+9', '+10', '+8', '-4', '-19', '+9', '+12', '-10', '+14', '+19', '-9', '+6', '-9', '+14', '+14', '-5', '+16', '-9', '+5', '+21', '-4', '-14', '-17', '-15', '+9', '+19', '-15', '-15', '-16', '-6', '-12', '+10', '+22', '+11', '-8', '-8', '+10', '-8', '+23', '+10', '-3', '+17', '+23', '+17', '-4', '-9', '+11', '-8', '+11', '+18', '-14', '-16', '+10', '-4', '+12', '+13', '+13', '-16', '+1', '-6', '+16', '-12', '+18', '+19', '+20', '+21', '-18', '+12', '+17', '+9', '+4', '+2', '-19', '-9', '-6', '-14', '-14', '+5', '+43', '+5', '+2', '-18', '+24', '-3', '-9', '-23', '+18', '+7', '-12', '+25', '+2', '+12', '+18', '+8', '-3', '-17', '-21', '+5', '+5', '+16', '+28', '-15', '-22', '-15', '+11', '-24', '-10', '+28', '+22', '+18', '+8', '+26', '+16', '-4', '+2', '+17', '-14', '+28', '+2', '-32', '-16', '-6', '-22', '-18', '-4', '+13', '+45', '-6', '+79', '+7', '+3', '+8', '-4', '-5', '+6', '-7', '+16', '-20', '-24', '-24', '-13', '+7', '+52', '+21', '-2', '+21', '+18', '+17', '-8', '+27', '-7', '-19', '+8', '+7', '+20', '+2', '+12', '-16', '-11', '-20', '+4', '-28', '-10', '-32', '-9', '-3', '+129', '-7', '+31', '+2', '+16', '+27', '-68', '-45', '-222', '-27', '-27', '+19', '+4', '-58', '+14', '+27', '-1', '-119', '-15', '+68', '-14', '-46', '-101', '+16', '-25', '+58', '-119', '+11', '-251', '-59893', '+1', '-4', '+17', '+16', '-12', '-13', '+1', '+7', '-6', '+10', '+11', '-13', '-16', '-17', '+6', '+16', '-12', '+2', '+15', '-6', '-19', '+6', '-15', '+14', '-16', '-12', '-15', '-1', '+20', '+9', '-5', '-16', '-4', '+15', '-8', '-16', '-14', '-10', '-7', '-14', '-6', '+15', '-4', '-1', '-12', '-12', '+2', '+5', '+15', '-9', '+6', '-2', '+15', '+5', '+10', '-2', '+4', '+8', '-15', '-14', '+20', '-4', '+18', '+17', '+3', '+11', '+12', '+5', '-18', '-16', '+19', '+6', '-17', '+13', '+14', '-9', '+1', '+13', '-12', '-16', '-5', '-19', '-18', '+13', '+14', '+7', '-3', '+14', '+5', '-11', '-13', '-22', '+4', '+12', '+2', '-15', '-13', '+15', '+1', '-13', '-12', '-8', '-5', '-9', '+7', '+19', '-8', '+9', '+16', '+11', '-33', '+3', '+5', '-12', '-20', '-13', '-7', '+121412']

const calculateFrequency = (changes) => {
  return changes.reduce((frequency, change) => frequency + Number(change), 0);
}

/*

Your puzzle answer was 420.

The first half of this puzzle is complete! It provides one gold star: *

--- Part Two ---
You notice that the device repeats the same frequency change list over and over. To calibrate the device, you need to find the first frequency it reaches twice.

For example, using the same list of changes above, the device would loop as follows:

Current frequency  0, change of +1; resulting frequency  1.
Current frequency  1, change of -2; resulting frequency -1.
Current frequency -1, change of +3; resulting frequency  2.
Current frequency  2, change of +1; resulting frequency  3.
(At this point, the device continues from the start of the list.)
Current frequency  3, change of +1; resulting frequency  4.
Current frequency  4, change of -2; resulting frequency  2, which has already been seen.
In this example, the first frequency reached twice is 2. Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found, and that duplicates might be found while in the middle of processing the list.

Here are other examples:


['+1', '-2', '+3', '+1', '+1', '-2']

+1, -1 first reaches 0 twice.
+3, +3, +4, -2, -4 first reaches 10 twice.
-6, +3, +8, +5, -6 first reaches 5 twice.
+7, +7, -2, -7, -4 first reaches 14 twice.
What is the first frequency your device reaches twice?
*/

const findRepeatFrequency = (changes) => {
  let repeatFrequeny;
  let currentFrequency = 0;
  const frequencyMap = {
    0: true
  };

  const reduceFrequencies = (startingFrequency, changes) => {
    changes.reduce((frequency, change, i, list) => {
      currentFrequency = frequency + Number(change);
      if(frequencyMap[currentFrequency]){
        repeatFrequeny = currentFrequency;
        list.splice(i); //break
      }
      frequencyMap[currentFrequency] = true;
      return currentFrequency;
    }, startingFrequency);

    return (repeatFrequeny ? repeatFrequeny : reduceFrequencies(currentFrequency, changes));
  }
  return reduceFrequencies(currentFrequency,changes);
}

/*
console.log(findRepeatFrequency(['+1', '-1']) + ' should be 0');
console.log(findRepeatFrequency(['+3', '+3', '+4', '-2', '-4']) + ' should be 10');
console.log(findRepeatFrequency(['-6', '+3', '+8', '+5', '-6']) + ' should be 5');
console.log(findRepeatFrequency(['+7', '+7', '-2', '-7', '-4']) + ' should be 14');
console.log(findRepeatFrequency(['+1', '-2', '+3', '+1', '+1', '-2']) + ' should be 2');

console.log(findRepeatFrequency(changes) + ' should be 227');

That's the right answer! You are one gold star closer to fixing the time stream. *

You have completed Day 1!
*/
