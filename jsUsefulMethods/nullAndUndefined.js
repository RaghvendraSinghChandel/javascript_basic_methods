/**
 * Null or Undefined
 * Null: null is used when intensionally assign no value or empty value to an object
 * Undefined: When the variable is unused it behave as undefined, it means the value is not initialised yet, 
 * If functiona doesn't return anything It also considered as undefined, 
 * If you want to acces property of object or array which is not exist also acts as undefined
 * 
 * EXAMPLE
 * Null
 */
function sum(a,b) {
    return a+b
}

let sumValue = sum(3,5)
console.log(sumValue) // it print the sum value
sumValue = null 
console.log(sumValue) // now sum value intensionaly assign empty or null value 

// Assigning null value to an object
let task = {
    one: 1,
    two:2,  
}
console.log(task) // it provide me object
console.log(task.one) // it provide me 1
task = null; // intensionally assigned null value
console.log(task)


// Null value in parameter
function nullValueInParameter(a= null, b= null) {
    return (a+b)

}

console.log(nullValueInParameter()) // it return 0 value, because in mathematics operation null considered as 0 in js null + null means 0+0 which is equal to 0


/**
 * Example Undefined
 */
let c;
console.log(c) // it return undefined as c variable value is not declared yet

task = {
    a: 1,
    b:2
} 
console.log(task.c)// three property is not exist in the task object, it return undifined

let arrayValue = ["5", "7", "6", {one:1, two:2}, "8"]
console.log(arrayValue[3].three, arrayValue[5])

// undefined in function
function testUndefined(a,b) {
    let c = a+b
    return

}

console.log(testUndefined())

// undefined in parameter
function testUndeifinedInParam(a = undefined, b= undefined) {
    return a+b

}

console.log(testUndeifinedInParam()) // it return Nan, it means the + operation is performed in non number 

// When Nan is return : when non realistic number in arthimatic operation like 0 divide by 0, square root of -1 etc

/**
 * Equality check in undefined and null
 */
console.log(undefined == null) // return true because both nuymber have empty space
console.log(undefined === null) // return false because both are different types