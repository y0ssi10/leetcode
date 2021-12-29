/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let lastIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastIndex] = nums[i];
      lastIndex += 1;
    }
  }

  for (let i = lastIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end

