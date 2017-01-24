
/**
 * Ex-02 : simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/

// input:array of strings
// output:array of strings
//
var simpOrSamp= function(arrayOfStrings){
  var newArr = []
  for(var index= 0; index < arrayOfStrings.length; index=index+1){
    if(arrayOfStrings[index].length >= 6){
      newArr.push (arrayOfStrings[index] + " Simpson")

    } else {
      newArr.push (arrayOfStrings[index] + " Sampson")

    }
  }
  return newArr

}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === 'OJ Sampson' )
console.assert( modifiedNamesList[2] === 'Marge Sampson' )
console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
