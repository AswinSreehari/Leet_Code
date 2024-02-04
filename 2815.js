/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let count = -1;  
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const maxDigitI = Math.max(...(nums[i].toString()));  
            const maxDigitJ = Math.max(...(nums[j].toString())); 
            if (maxDigitI === maxDigitJ) {  
                const sum = nums[i] + nums[j]; 
                count = Math.max(count, sum);  
            }
        }
    }
    return count;  
};
