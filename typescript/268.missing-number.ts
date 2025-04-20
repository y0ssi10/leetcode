/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  const sorted = nums.sort((a,b) => a-b);

  if (sorted[0] !== 0) {
    return 0;
  }

  for (let i = 0; i < sorted.length; i++) {
    if (i === sorted.length - 1) {
      return sorted[i] + 1;
    }

    if (sorted[i] + 1 !== sorted[i + 1]) {
      return sorted[i] + 1;
    }
  }
};
// @lc code=end

