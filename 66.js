/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let count = 1;
    for(let i = digits.length - 1; i >= 0; i --) {
        let temp = (digits[i] + count)
         digits[i] = temp % 10
        count = Math.floor(temp / 10)
    }
     value = (count == 0) ? digits : [count].concat(digits)
     return value
};