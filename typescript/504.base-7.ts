/*
 * @lc app=leetcode id=504 lang=typescript
 *
 * [504] Base 7
 */

// @lc code=start
function convertToBase7(num: number): string {
  if (num === 0) {
    return '0';
  }

  const isNegative = num < 0;
  let absNum = Math.abs(num);
  let base7Str = '';

  while (absNum > 0) {
    const remainder = absNum % 7;
    base7Str = remainder + base7Str;
    absNum = Math.floor(absNum / 7);
  }

  return isNegative ? `-${base7Str}` : base7Str;
};
// @lc code=end
