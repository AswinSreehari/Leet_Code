function permute(nums: number[]): number[][] {
    const result = [];
    const backtrack = (nums, path) => {
      if (nums.length === 0) result.push(path);
      for (let i = 0; i < nums.length; i++) {
        backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
      }
    };
    backtrack(nums, []);
    return result;
};