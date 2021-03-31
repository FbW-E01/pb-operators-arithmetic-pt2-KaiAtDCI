// const FgRed = "\x1b[31m";
// console.error(FgRed); // Does not work as expected because it changes color of ALL out-streams to red;
// ToDo: Is it possible to change only the error stream to red?

// Q1 ###########################################
const revenue = 6450;
const ticketPrice = 15;
const ticketsSold = revenue / ticketPrice;
console.log('Tickets sold: ' + ticketsSold);


// Q2-Q9: not solved ############################


// Q10 ##########################################
// 1. My solution
// ToDo: Q1. What if numbers does not contain numbers? :-)
// Todo: Q2. Are these kind of errors types of errors we should handle here at all?
// Possible Answer to Q1/Q2:
// Probably no. Checks should be done by one of the caller functions up the stacktrace (user input check, f.e.)
function average(numbers) {
    if (!Array.isArray(numbers)) {
        console.error(arguments.callee.name + '(numbers): numbers is not an array.');
        return null;
    }
    if (numbers.length === 0) {
        console.error(arguments.callee.name + '(numbers): numbers has no elements.');
        return null;
    }
    let sum = 0;
    numbers.forEach(n => sum += n);
    return (sum / numbers.length);
}

// 2. Solution for testing
// source: https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/
function average2(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

// Some tests
// Test 1: Does average2 give same result as my average-function?
const testArray = [1,2, 3, 4];
if (average(testArray) === average2(testArray)) {
    console.log(`Test 1: checking result of ${average.name}()-function: ok`);
}
else {
    console.error(`Test 1: checking result of ${average.name}()-function: failed`);
    throw new Error('Test 1 failed');   // Alternatively: process.exit(1);
}

// Test 2: check if array has no elements (could cause division by zero)
// avg2 = (average([])); // Expected output: average(numbers): numbers has no elements.

// Test 3: check if numbers is not an array
// avg3 = (average('string')); // Expected output: average(numbers): numbers is not an array.


// Final solution for Q10:
const workingHours = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];
const averageWorkingHours = average(workingHours);
console.log('Average working hours: ' + averageWorkingHours);


// Q11 ########################################################

function unknownScore(numbers, average) {
    const m = numbers.length + 1;
    let elementSum = 0;
    numbers.forEach((number) => elementSum += number);
    return (average * m - elementSum);
}

// Given values
const knownScores = [75, 70, 85, 90, 100];
const knownAverage = 85;

// calculate missing score
const studentsUnknownScore = unknownScore(knownScores, knownAverage);
console.log('studentsUnknownScore: ' + studentsUnknownScore);

// create array with all scores
const completeScores = knownScores.concat([studentsUnknownScore]);
console.log('completeScores: ' + completeScores);

// Test: Check if the average of completeScores equals the given average score of 85.
if (average(completeScores) === knownAverage) console.log ('function ok')
else console.log('function failed');



// Q12
p8 = 0.78;
m8 = 8;
p9 = 0.8;
m9 = 9;
console.log(`He needs a result of ${p9*m9 -p8*m8}%.`);

