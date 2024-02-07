/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function(words) {
    let nums = [];
    let count = 0;
    let output = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "prev") {
            count = 0;
            nums.push(Number(words[i]));
        } else {
            count++;
            output.push(nums[nums.length - count] || -1);
        }
    }
    return output;
};