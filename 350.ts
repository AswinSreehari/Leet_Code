function intersect(nums1: number[], nums2: number[]): number[] {
    const arr:number[] = [];
       for(let i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            arr.push(nums1[i])
            const index : number = nums2.findIndex((ind) => ind === nums1[i])
            nums2.splice(index, 1)
        }
    }
    return arr;
};