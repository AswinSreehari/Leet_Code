function minimumCost(nums: number[]): number | undefined {
    if(nums.length === 0) return undefined;
    const first: number = nums.shift() as number;
    nums = nums.sort((a: number , b: number) => a - b);
    return first + nums[0] + nums[1];
    
};
