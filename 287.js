/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // const n = nums.length;
    // let currSize = 0;
    // let count = (n*(n-1))/2;
    // for(let i = 0 ; i < nums.length ; i ++){
    //     currSize += nums[i];
    // }
    // return  currSize - count;

    let set = new Set();
    for(let i = 0 ; i < nums.length ; i ++){
        if(!set.has(nums[i])){
            set.add(nums[i]);
        }else{
            return nums[i]
        }
    }
    
};