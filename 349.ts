function intersection(nums1: number[], nums2: number[]): number[] {
    let res = nums1.filter(num => nums2.includes(num));
    return [...new Set(res)];
    };