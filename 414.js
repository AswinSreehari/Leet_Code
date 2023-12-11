/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let x = nums.sort(( x , y ) => y - x)
     let set = new Set(x)
     let newArray = Array.from(set)
    if(newArray.length < 3) {
        return newArray[0]
    }else{
        return newArray[2]
    }
    
   
};