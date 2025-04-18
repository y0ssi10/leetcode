/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
  let result = num;

  while (result >= 10) {
    let sum = 0;
    const digits = result.toString().split('');

    for (const digit of digits) {
      sum += parseInt(digit, 10);
    }

    result = sum;
  }

  return result;
};
// @lc code=end

