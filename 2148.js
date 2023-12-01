/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let count = 0
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    nums.forEach(elem=>{
        if(elem < max && elem > min){
            count ++
        }
    })
    return count
    
    
};