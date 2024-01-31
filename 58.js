/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.trim().split(" ");
    const length = arr[arr.length-1].length;
    return length;
    
};