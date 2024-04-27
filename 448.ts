function findDisappearedNumbers(nums: number[]): number[] {
    let arr = new Set(nums), result = []
    for(let i = 1; i < nums.length+1 ; i ++){
        if(!arr.has(i)) result.push(i)
    }
    return result;

};