function stringLiteralCount(str) {
    let stringLiteralObject = {}
 for (char of str) {
    stringLiteralObject[char] = (stringLiteralObject[char] || 0) + 1
 }

 console.log(stringLiteralObject)

 let literalString = ""
 for (let key in stringLiteralObject) {
   
   let  strCount = `${key}${stringLiteralObject[key]}`
    literalString = strCount+literalString
 }

 return literalString

}


console.log(stringLiteralCount("aaaaaabbbbbhhhhwwwwuuuytsbjhhhgghgsvbdhh"))