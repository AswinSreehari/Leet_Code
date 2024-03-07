function resultArray(nums: number[]): number[] {
    let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    let n = nums.length;
    for(let i=2; i<n; i++){
        if(arr1[arr1.length-1] > arr2[arr2.length-1]){
            arr1.push(nums[i]);
        }else{
            arr2.push(nums[i]);
        }
    }
     return [...arr1,...arr2];
};