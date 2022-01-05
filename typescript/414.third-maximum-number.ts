/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
function thirdMax(nums: number[]): number {
  const sorted = [...new Set(nums)].sort((a: number, b: number) => a-b);
  if (sorted.length >= 3) {
    return sorted[sorted.length - 3];
  }
  return sorted[sorted.length - 1];
};
// @lc code=end

