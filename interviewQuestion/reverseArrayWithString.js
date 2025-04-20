let original_arr = ["Test", "Qa", [1, 2, 3, 4, 5, 6], "Automation", [1, 5, 7, 4, 8, 4], "Spices", "Tags"];
let expectedArray = [];

for (let i =original_arr.length-1; i>=0; i--) {
    let reverseStr = ""
    let arrayIndexValue = original_arr[i]

    if (Array.isArray(arrayIndexValue)) {
        let reverse = arrayIndexValue.reverse()
        expectedArray.push(reverse)
    } else {
    for (let j = arrayIndexValue.length-1; j>=0; j-- ) {
      reverseStr+= arrayIndexValue[j]  
    }
}
    if (reverseStr.length>0) {
        expectedArray.push(reverseStr)
    }

}

console.log(expectedArray)
