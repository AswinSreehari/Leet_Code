function maxOperations(nums: number[]): number {
    if(nums.length < 2)return 0;
    let op = 1;
    let score = nums[0] + nums[1];
    for(let i = 2; i < nums.length; i += 2) {
        const curr = nums[i] + nums[i + 1];
        if(score !== curr) {
            break;
        }
        op ++;
    }
    
    return op;
    
};