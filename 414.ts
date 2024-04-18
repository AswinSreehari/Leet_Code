function thirdMax(nums: number[]): number {
    let x = nums.sort(( x , y ) => y - x)
    let set = new Set(x)
    let arr = Array.from(set)
    if(arr.length < 3) {
        return arr[0];
    }else{
        return arr[2];
    }};