/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let current = nums[index];
      nums[index] = nums[i];
      nums[i] = current;
      index += 1;
    }
  }

  return nums;
};
// @lc code=end

