function containsDuplicate(nums: number[]): boolean {
    let arr = new Set();
    for(let i = 0 ; i < nums.length ; i ++){
        if(arr.has(nums[i])) return true;
        arr.add(nums[i])
    }
    return false;
};