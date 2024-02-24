/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums = nums.sort((a,b)=>b-a)
   const arr = []

   while(nums.length){
       let one = nums.pop()
       let two = nums.pop()
       arr.push(two)
       arr.push(one)
   }
   return arr
};