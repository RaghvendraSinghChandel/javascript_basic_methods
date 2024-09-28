/**
 * This file contains all daily use method of array to work with js
 */

// 1. Array.of(): Creates a new array from a variable number of arguments.
// 2. Array.from(): Creates a new array from an iterable or array-like object.
// 3. push(): Adds one or more elements to the end of an array and returns the new length.
// 4. pop(): Removes the last element from an array and returns that element.
// 5. shift(): Removes the first element from an array and returns that element
// 6. unshift(): Adds one or more elements to the beginning of an array and returns the new length.
// 7. splice(): Adds/removes elements from an array and optionally inserts new elements in their place.
// 8. sort(): Sorts the elements of an array in place and returns the sorted array.
// 9. reverse(): Reverses the elements of an array in place
// 10. fill(): Fills all or part of an array with a static value.


// Example Array.of
let array= Array.of(1,2,3,4,5,6,7)
console.log(array) // return the array [1,2,3,4,5,6,7]

// Example Array.from

const arrStr= Array.from("Raghvendra") // return the array of string i.e ['R', 'a', 'g', 'h','v', 'e', 'n', 'd','r', 'a']
console.log(arrStr)

// push example
array = [1,3,5]
array.push({test:1, tests:2})
console.log(array) // it return  [1, 3, 5, { test: 1, tests: 2 } ] , as it push the object in n index of array, i.e end of array


// pop example
array.pop()
console.log(array) // it return [1, 3, 5] , as it remove the object from n-1 index array, i.e end of array

// shift example 
array.shift()
console.log(array) // it return [3, 5] , as it remove the object from 0 index array, i.e start of array

// unshift Example
array.unshift(0)
console.log(array) // it return [0, 3, 5] , as it add the object in 0 index array, i.e start of array
array.unshift(4,7,8) // you can add multiple value starting of the array
console.log(array) // it return [4,7,8,0, 3, 5] , as it add the object in 0 index array, i.e start of array 
array.unshift([5,6,7,8,9], {test:"qa"}) // you can add array or object based on need
console.log(array) // it return [ [ 5, 6, 7, 8, 9 ], { test: 'qa' }, 4, 7, 8, 0, 3, 5 ] , as it add the object in 0 index array, i.e start of array 

array.splice(0, 2, "raaghvendra", "test","QA", "js")
console.log(array) // Splice first two paramenter are used for removing , after that used for adding , you can add as much value as you want
// Describing functionality of splice parameter 
/**
 * 1 parmeter take a index value from which idex you wana remove elements
 * 2 pareameter take number of elements count, how many elements youy want to remove in my case I want remove elements from 0 index and number of element is 2
 * after second parameter whatever value you assign it add from the starting point of index after removing elements
 */

// it return the varray with value [ 'raaghvendra', 'test', 'QA', 'js', 4, 7, 8, 0, 3, 5 ]


// example of short()
let unshortArray = [7,8,9,13,4,8,6,3,7]
console.log(unshortArray.sort()) // the answer is is [13, 3, 4, 6, 7,7, 8, 8, 9]

/**
 * Reson behind it 
 * Sort method considered all elments in string 4, 6, 7, 7, 8, 8, 9, 13 it compare the, "13" comes before "3" because it compares the first character (1 < 3).
 */

// If you want perform operation by numerical term based on integer you have to pass comparision function
console.log(unshortArray.sort((a,b)=> a-b)) // the out put is [3, 4, 6,  7, 7,8, 8, 9, 13] in accending order
console.log(unshortArray.sort((d,f)=> f-d)) // the output is [13, 9, 8, 8, 7,7, 6, 4, 3] in decending order


// Example reverse
array.reverse()
console.log(array) // it reverse the original array and return new array, the out put is [ 5, 3, 0, 8, 7, 4, 'js', 'QA', 'test', 'raaghvendra' ]


// Example fill
array.fill(0, 2,5) // it take 3 parameter, the value which you want to fill, starting and ending index of array where you want to fill
console.log(array) // [ 5, 3, 0, 0, 0, 4, 'js', 'QA', 'test', 'raaghvendra' ]
array.fill(0) // by deafult it replace all value to 0
console.log(array) // the out put is [0,0,0,0,0,0,0,0]
