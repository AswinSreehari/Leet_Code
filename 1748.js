/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0
    for(let i = 0 ; i < nums.length ; i ++){
        let isUnique = true
        for(let j = 0 ; j < nums.length ; j ++){
            if(i !== j && nums[i]===nums[j]){
                isUnique = false
                break
            }
        }
        if(isUnique){
            sum += nums[i]
        }
       
    }
    return sum 
};