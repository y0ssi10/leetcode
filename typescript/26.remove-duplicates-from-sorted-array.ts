/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let uniq = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i+1]) {
      nums[uniq] = nums[i];
      uniq += 1;
    }
  }

  return uniq;
};
// @lc code=end

