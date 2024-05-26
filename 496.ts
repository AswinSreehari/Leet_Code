function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let ans: number[] = [];
   for(let i = 0; i < nums1.length; i++) {
       let get = -1;
       for(let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
           if(nums1[i] < nums2[j]) {
               get = nums2[j];
               break;
           }
       }
       ans.push(get);
   }

   return ans;
};