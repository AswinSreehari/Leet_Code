/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b); 
       let res = -1;
         nums[1]+=nums[0];
       for (let i = 2; i<nums.length; i++) {
           if ( nums[i]< nums[i-1]){
               res = nums[i-1] + nums[i];
           }
             nums[i]+=nums[i-1];
       }
       return res;
   };