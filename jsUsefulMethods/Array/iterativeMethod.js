/**
 * This file consist all iterative method which user deal with while working in js
 */

// forEach(): Executes a function for each array element.
// map(): Creates a new array by calling a function on every element in the array.

const arrayData= ["Raghvendra","test", 36000,"QA",27000,"Since",]

arrayData.forEach(elements=> {
    if (typeof(elements) == "string") {
        console.log(elements)
    }
}) // the out put is Raghvendra test QA Since

// map example

const stringArray = arrayData.map(ele=>  typeof(ele) === "string")
console.log(stringArray) // it map all the elements of array and compare the condition is array elemnt is string or not, the answer is [ true, true, false, true, false, true ]
