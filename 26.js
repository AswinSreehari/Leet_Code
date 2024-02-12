/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let num = 0;
    for(let i = 0 ; i < nums.length ; i ++){
        if(nums[num] !== nums[i]){
            num ++;
            nums[num] = nums[i];
        }
    }
    return num + 1;
};