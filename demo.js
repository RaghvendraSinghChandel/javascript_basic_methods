function uniqueCharFromString(str) {
    let emptyObject = {}
    for (let char of str) {
        emptyObject[char] = (emptyObject[char] || 0) + 1
    }

    console.log(emptyObject)

   for (let char of str) {
    if (emptyObject[char] === 1) {
        console.log(char)
    } 
   }
}

uniqueCharFromString("raghvendra")

function removeDuplicateFromArray(arr) {
   const newArray =  [...new Set(arr)]
   return newArray

}


console.log(removeDuplicateFromArray([1,2,3,4,5,6,7,3,2,2,44,2,2,"test", "QA", "test"]))


function sortArray(arr) {
    return arr.sort((a,b)=> b-a)
}

console.log(sortArray([1,2,2,1,2,3,4,9,6,19,2,3,6,8]))


function sortArrayWithoutMethod(arr) {
    for (let i =0; i<arr.length; i++) {
        for (j = 0; j<arr.length-1; j++) {
            if (arr[j]< arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr

}

console.log(sortArrayWithoutMethod([1,3,4,2,3,1,2,3,6,3,23,1,1,3,67,89]))