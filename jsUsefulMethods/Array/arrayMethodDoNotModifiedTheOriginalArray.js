/**
 * Accessor Methods (do not modify the original array)
 */
// 1. concat(): Merges two or more arrays into a new array
// 2. slice(): Returns a shallow copy of a portion of an array.
// 3. includes(): Checks if an array includes a certain element.
// 4. indexOf(): Returns the first index at which a given element can be found, or -1 if not present.
// 5. lastIndexOf(): Returns the last index at which a given element can be found.
// 6. join(): Joins all elements of an array into a string
// 7. toString(): Converts the array to a string
// 8. toLocaleString(): Converts the array to a localized string.

const newArray = ['a','b','c','d','e']


// concat example
console.log(newArray.concat([1,2,3])) // it join the array and the output is ['a','b','c','d','e', 1,2,3]
console.log(newArray) // as contcat method didn't return new array so in original array can't change, output is: ['a','b','c','d','e']


// slice Example
console.log(newArray.slice(2,4)) // it return the portion of array the out put is ['c','d']

// include example
console.log(newArray.includes(3)) // as newArray doesn't have 3 value it return false, output is false

// indexOf example
console.log(newArray.indexOf(3)) // if elements not found then it return -1, so the output is -1
const arrayForIndexOfExample = newArray.concat(['c','a','e','f','b', ,'a','g',6,8,9])
console.log(arrayForIndexOfExample.indexOf('c')) // as c is present first in 2nd index so it return 2 no matter how many c available it only fetch first one index

// lastIndexOf example
console.log(arrayForIndexOfExample.lastIndexOf('a')) // it return the index where last a is present, so the output is 11

// join example
console.log(newArray.join(',')) // it join the element of array with provided value in parameter, the output is a,b,c,d


// toString Example
let test = ["raghvendra","QA", new Date('2023-09-25')]
const str = test.toString()
console.log(str,typeof(str)) // the out put is raghvendra,QA,Mon Sep 25 2023 05:30:00 GMT+0530 (India Standard Time) string

// toLocaleString Example

console.log(test.toLocaleString()) // the output is raghvendra,QA,9/25/2023, 5:30:00 AM