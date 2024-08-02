function smallestRangeI(nums: number[], k: number): number {
    return (Math.max(...nums) - Math.min(...nums) <= 2*k) ?  0 : Math.max(...nums) - Math.min(...nums) - 2*k;    
 };