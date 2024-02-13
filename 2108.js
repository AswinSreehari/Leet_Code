/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0 ; i < words.length ; i ++){
        let word = words[i].toString().split('').reverse().join('')
        if(words[i] === word){
            return words[i];
        } 
    }
    return "";
};