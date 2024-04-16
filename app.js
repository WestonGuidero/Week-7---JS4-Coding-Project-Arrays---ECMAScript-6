const ages = [3, 9, 23, 64, 2, 8, 28, 93, 59, 68];

const firstElement = ages[0]

const lastElement = ages[ages.length -1];

const difference = lastElement - firstElement;

console.log("Differene:", difference);

// Average Array Sum via For Loop 

var sum = 0;

// for loop i=0 starts at the start of the array then .length represents the end of the array, then i++ adds to i, meaning that it goes to the next number with each equation. 
// So Sum is adding each number one by one from the list of the array to make up the sum ages[i] doesnt equal a number fully, just temporarily to add to the sum and complete an equation. bassically;
// it goes 3 then goes to 9 and adds 3, and so on to each number, 23 then adds to the previous calculation of 9+3=12 + 23=35 then 35 added to 64, etc.
for (var i = 0; i < ages.length; i++) {
    sum += ages[i];
}

// then we divide the sum by the total amount of numbers in the array. .length just gets us to the last number in the array. so basically the sum 357 divided by 10 (amount of numbers in array) = 35.7
var average = sum / ages.length;

console.log("Average age:", average);


// Programmatically subtract the value of the first element in the array from the value in the last element of the array.

// Do not use numbers to reference the last element, find it programmatically.

// ages[7] - ages[0] is not allowed!

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

// Use a loop to iterate through the array and calculate the average age.
// ----Completed above^

// 2a: 
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Declaring variables for calculating total length and total number of names

var totalLength = 0;
var totalNames = names.length;

// Use a loop to iterate through the array and calculate the average number of letters per name.
for (var i = 0; i < names.length; i++)    {
    totalLength += names[i].length;
}


// calculates average amount of letters per name
var averageLetters = totalLength / totalNames;

// Console.log statement of the average amount of letters per name
console.log("average number of letters per name:" , averageLetters);

// 2b: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// Initialize an empty string to store the concatenated names
var concatenatedNames = '';

// Iterate through the array to concatenate all the names together
for (var i = 0; i < names.length; i++) {
    // Concatenate each name with a space
    concatenatedNames += names[i] + ' ';
}

// Remove the trailing space
concatenatedNames = concatenatedNames.trim();

console.log("Concatenated names:", concatenatedNames);

// 2. above has been completed.




// 3. How do you access the last element of any array?
// Answer: you input whatever variable name say name it would look like: [name.length -1] 'length -1' at the end of it. you subtract 1 to get the correct length since arrays technically start at 0.

// 4. How do you access the first element of any array?
// Since arrays start at 0 it would look like this: array[0] 

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

var names = ["Kelly", "Sam", "Kate"];
var nameLengths = []; // Create an empty array to store the lengths of names

// Iterate over the names array and add the length of each name to the nameLengths array
for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); // Add the length of the current name to the nameLengths array
}

console.log(nameLengths); // Output the nameLengths array


// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
var sumOfLengths = 0;

// Iterate over the nameLengths array and calculate the sum of all elements
for (var i = 0; i < nameLengths.length; i++) {
    sumOfLengths += nameLengths[i];
}

console.log("Sum of name lengths:", sumOfLengths);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function repeatWord(word, n) {
    let repeatedWord = '';

for (let i = 0; i < n; i++) {
    repeatedWord += word;
    }

return repeatedWord;
}

console.log(repeatWord('Wordsssss', 3));


// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    return fullName;
}

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numbers){
    var sum = 0;


for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

return sum > 100;
}

// sum is greater than 100
var numbers1 = [231, 12, 235, 453, 1]; 
console.log(isSumGreaterThan100(numbers1)); 
// true

var numbers2 = [10, 12, 23, 3, 1]; 
console.log(isSumGreaterThan100(numbers2)); 

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    var average = sum / numbers.length;

    return average;
}

var numbers = [2, 3, 2, 5, 32];
console.log(calculateAverage(numbers));

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function isAverageGreaterThan(array1, array2) {

    const average1 = calculateAverage(array1);
    const average2 = calculateAverage(array2);
    return average1 > average2;
}

console.log("is array 1 greater than array 2:", isAverageGreaterThan(numbers1, numbers2))

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// function willBuyDrink(isHotOutside, moneyInPocket) {

// if (isHotOutside && moneyInPocket > 10.50) 

// return true;

// else return false;

// }

function willBuyDrink(isHotOutside, moneyInPocket) { 
    return isHotOutside && moneyInPocket > 10.50
  }

  const isHot = true;
  const money = 11;
  console.log(willBuyDrink(isHot, money));


