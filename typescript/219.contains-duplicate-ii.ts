/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const index = map.get(num);
    if (index !== undefined && i-index <= k) {
      return true;
    }
    map.set(num, i);
  }

  return false;
};
// @lc code=end

