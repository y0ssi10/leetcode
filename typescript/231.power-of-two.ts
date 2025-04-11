/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  let currentNumber = n;
  while (currentNumber % 2 === 0) {
    currentNumber /= 2;
  }

  return currentNumber === 1;
};
// @lc code=end

