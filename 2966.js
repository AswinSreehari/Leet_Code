/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let res = [], temp
    for(let i=0; i<nums.length; i+=3) {
        temp = [nums[i],nums[i+1],nums[i+2]]
        if(Math.max(...temp)-Math.min(...temp)>k) {
            res = []
            break
        }
        res.push(temp)
        temp=[]
    }
    return res
};