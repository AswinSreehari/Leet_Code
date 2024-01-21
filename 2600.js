/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let arr = []
   for(let i=0;i<numOnes;i++){
       arr.push(1)
   }
   for(let j=0;j<numZeros;j++){
       arr.push(0)
   }
   for(let l=0;l<numNegOnes;l++){
       arr.push(-1)
   }
   let s = 0
   for(let m=0;m<k;m++){
       s = s + arr[m]
   }

   return s
};