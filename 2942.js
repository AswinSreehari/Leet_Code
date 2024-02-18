/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr = [];
     words.forEach((word , index) => {
         if(word.split('').includes(x)){
             arr.push(index);
         }
     })
     return arr;
};