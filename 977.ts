function sortedSquares(nums: number[]): number[] {
    return nums.map(item => item ** 2).sort((a , b)=> a - b);
    
};