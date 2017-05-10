/**
 * Ex-01 : arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of values and combines them into one large string.
 *
 * You must use a for-loop to solve this problem.
 **/

// input:array
// output: string





var arrayToString= function(arrayOfVals){
  var togetherString= ""
  for (var i= 0; i < arrayOfVals.length; i++){
    togetherString= togetherString + arrayOfVals[i]
  } return togetherString
}













// var arrayToString= function(inputArray){
//   var newString= ""
//
//   for (var i=0; i < inputArray.length; i++){
//     newString= newString + inputArray[i]
//   } return newString;
//
// }


// ****************
// var arrayToString = function(arrayOfStrings){
//   var newString=""
//   for(var index=0; index < arrayOfStrings.length; index=index+1){
//     newString = newString + arrayOfStrings[index]
//   }
//   return newString
// }

// var arrayToString= function(arrayOfStrings){
//   var newString=""
//   for(var index=0; index < arrayOfStrings; index=index+1){
//     // console.log(arrayOfStrings[index])
//     newString= newString + (arrayOfStrings[index])
//   }
//   return newString
// }


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(sugArr)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )
