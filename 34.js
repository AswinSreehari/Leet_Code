/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    let startIndex = -1;
    let endIndex = -1;

    while(leftIndex <= rightIndex){
        if(nums[leftIndex] === target){
            startIndex = leftIndex;
        }else{
            leftIndex ++;
        }
        if(nums[rightIndex] === target){
            endIndex  = rightIndex;
        }else{
            rightIndex --;
        }
        if(startIndex !== -1 && endIndex !== -1){
            return [startIndex , endIndex];
        }
    }
    return [startIndex , endIndex];
};

//Solution #2 : 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    return [nums.indexOf(target) , nums.lastIndexOf(target)]; 

};