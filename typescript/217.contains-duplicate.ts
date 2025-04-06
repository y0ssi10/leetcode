/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const map = {};
  for (const num of nums) {
    if (map[num]) {
      return true;
    }

    map[num] = 1;
  }

  return false;

};
// @lc code=end

