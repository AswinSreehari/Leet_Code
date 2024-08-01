function sortArrayByParity(nums: number[]): number[] {
    const evenArray = [];
    const oddArray = [];
    for(let i = 0; i < nums.length; i ++){
        nums[i]%2===0? evenArray.push(nums[i]) : oddArray.push(nums[i]);
    }
    return [...evenArray, ...oddArray];
};