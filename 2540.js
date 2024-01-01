/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let newSet = new Set(nums1);
 for (let i = 0; i < nums2.length; i++) {
     if (newSet.has(nums2[i])) {
         return nums2[i];
     }
 }
 return -1;
};