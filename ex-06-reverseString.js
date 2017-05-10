
/**
 * Ex-09 : reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

// input: string
// output: string






var reverseString= function(originalWord){
  var backwardsWord = "";
  for (var i = originalWord.length-1; i >=0; i = i -1){
    backwardsWord= backwardsWord + originalWord[i]
  }
  return backwardsWord
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
