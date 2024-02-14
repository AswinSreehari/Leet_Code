/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const result = []
    const n = nums.length;
    let pCount = 0;
    let nCount = 1;
    for(let i = 0 ; i < n ; i ++){
        if(nums[i] > 0){
            result[pCount] = nums[i];
            pCount += 2;
        }else{
            result[nCount] = nums[i];
            nCount += 2;
        }
    }
    return result;
};