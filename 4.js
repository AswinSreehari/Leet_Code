/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    if(nums1.length >= 1 && nums2.length >= 1){
        arr = [...nums1 , ...nums2];
        arr = arr.sort((a , b) => a - b);
    }else{
        if(nums1.length === 0){
            arr = [...nums2];
        }else if(nums2.length === 0){
            arr = [...nums1];
        }
    }
    if(arr.length % 2 !== 0){
        return arr[(arr.length - 1 ) / 2];
    }else{
     let mid = (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2;
        return mid;
    }
 };