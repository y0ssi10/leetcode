/*
 * @lc app=leetcode id=507 lang=typescript
 *
 * [507] Perfect Number
 */

// @lc code=start
function checkPerfectNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  let sum = 1;
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
};
// @lc code=end
