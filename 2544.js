/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    return n
   .toString()
   .split("")
   .map((x, i) => (i % 2 === 0 ? +x : -x))
   .reduce((a, b) => a + b);
   
};