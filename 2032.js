/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let arr = []
    for(i = 0 ; i < nums1.length ; i ++){
        if(nums2.includes(nums1[i]) || nums3.includes(nums1[i])){
            arr.push(nums1[i])
        }
    }
    for(i = 0 ; i < nums2.length ; i ++){
        if(nums1.includes(nums2[i]) || nums3.includes(nums2[i])){
            arr.push(nums2[i])
        }
    }
    arr = new Set(arr)
    arr = Array.from(arr)
    return arr
};