/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    const count = (n*(n + 1))/2;
    let currentCount = 0;
    for(let i = 0 ; i < nums.length ; i ++){
        currentCount += nums[i];
    }
    return count - currentCount;
    
};