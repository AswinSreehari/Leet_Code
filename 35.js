/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        let midValue = nums[midIndex];
        
        if (target === midValue) {
            return midIndex;
        } else if (target < midValue) {
            rightIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }
    
     return leftIndex;
};
