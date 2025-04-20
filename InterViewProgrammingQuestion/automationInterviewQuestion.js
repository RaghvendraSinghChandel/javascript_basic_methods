/**
 * Reverse the string
 */

function reverseString(str) {
    let reverseStr = ""
    for (let i=str.length-1; i>=0 ; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}

const result = reverseString("Raghvendra")
console.log(result)

/**
 * Remove duplicate from the array
 */
function removeDuplicateFromArray(arr) {
    return [...new Set(arr)]
}

const uniqueValue = removeDuplicateFromArray([1,2,3,4,5,6,3,4,7,8,4,2,1,7,3,4])
console.log(uniqueValue)

// Without using set method
function removeDuplicateFromArrayWithoutSet(arr) {
    let uniqueValues = []
    for (let i = 0; i<arr.length; i++) {
        let duplicate = false
        for (let j=0; j<uniqueValues.length; j++) {
            if (arr[i] === uniqueValues[j]) {
                duplicate = true
                break;
            }
        }

        if (!duplicate) {
            uniqueValues.push(arr[i])
        }

    }
    return uniqueValues
}

const uniqueArrayValue = removeDuplicateFromArrayWithoutSet([1,2,3,4,5,6,3,4,7,8,4,2,1,7,3,4])
console.log(uniqueArrayValue)


/**
 * Find the second largest number in an array
 * Find the second smallest number in array
 */
function findSecondLargestAndSmallestNumberInArray(arr) {
    const uniqueArray = [...new Set(arr)]
    if (uniqueArray.length < 2) return null
    uniqueArray.sort((a,b)=> b-a) 
    const secondLargestNumber = uniqueArray[1]
    const secondSmallestNumber = uniqueArray[uniqueArray.length-2]
    console.log(secondLargestNumber)
    console.log(secondSmallestNumber)

}
findSecondLargestAndSmallestNumberInArray([1,2,3,4,10,11,15,30,29,27])


/**
 * Find first non-repeating character
 */
function firstNonRepeatingChar(str) {
    // initialize the empty object
    let charCount = {};
    // create one loop which iterate over provided string
    for (let char of str) {
        // if char present in charCount increment by 1 else 0
        charCount[char] = (charCount[char] || 0) + 1;
        // the output of the code is if we provide string raghvendra is {r:2, a:2, g:1, h:1, v:1, n:1, d:1}
    }
    
    // create one loop which iterate over provided string
    for (let char of str) {
        // search for first 1 and return 
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // If no non-repeating character found
}

console.log(firstNonRepeatingChar("raghvendra")); // "g"
console.log(firstNonRepeatingChar("aabbcc")); // null

/**
 * Find all unique character in string
 */
function findAllUniqueCharacterInString(str) {
    uniqueCharObject = {}
    for (let char of str) {
        uniqueCharObject[char] = (uniqueCharObject[char] || 0) + 1
    }

    const charList = []
    for (let char of str) {
        if (uniqueCharObject[char] === 1) {
            charList.push(char)
        }
    }
    if (charList.length <1) {
        return "no unique char in string"
    }
    return charList
}

console.log(findAllUniqueCharacterInString("raghvendra"))
console.log(findAllUniqueCharacterInString("aabbccdd"))



/**
 * Flatten Array
 */
function flattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6, [8,9],10,11,[12,13]]));


/**
 * Find Missing Number in array
 */
function missingNumberInArray(arr) {
    let n = arr.length+1
    let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of given numbers

    /**
     * array.reduce((accumulator, currentValue) => { return newAccumulator }, initialValue)
        accumulator → The accumulated value that is updated on each iteration.
        currentValue → The current element being processed.
        initialValue → The starting value of the accumulator.
     */
    return expectedSum-actualSum
}

console.log(missingNumberInArray([1,2,4,5,6,7]))


/**
 * Find the Intersection of Two Arrays:
 */
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(findIntersection([1,2,3,4,5,6,7,8], [3,4,9,12,13,19]))