/*
 * @lc app=leetcode id=1295 lang=typescript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
function findNumbers(nums: number[]): number {
  let ans = 0;
  for (const num of nums) {
    const length = num.toString().length;
    if (length % 2 === 0) {
      ans += 1;
    }
  }
  return ans;
};
// @lc code=end
