function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let leftSubNums: number = -1;
  let minIndex: number = -1;
  let maxIndex: number = -1;
  let count: number = 0;

  for(let i = 0; i < nums.length; i++) {

    if(nums[i] >= minK && nums[i] <= maxK) {
      minIndex = nums[i] === minK ? i : minIndex;
      maxIndex = nums[i] === maxK ? i : maxIndex;

      count += Math.max(0, Math.min(minIndex, maxIndex) - leftSubNums);
    } else {
      leftSubNums = i;
      minIndex = -1;
      maxIndex = -1;
    }
  }

  return count;
};