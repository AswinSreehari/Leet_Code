/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums.sort((a , b) => a - b)[~~(nums.length/2)];
   };