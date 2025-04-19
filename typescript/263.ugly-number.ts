/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  let num = n;
  const factors = [2, 3, 5];

  for (const factor of factors) {
    while (num % factor === 0) {
      num /= factor;
    }
  }

  return num === 1;
};
// @lc code=end

