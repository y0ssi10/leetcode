/*
 * @lc app=leetcode id=405 lang=typescript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
function toHex(num: number): string {
  let n = num;
  if (n === 0) {
    return '0';
  }

  if (n < 0) {
    n = n >>> 0;
  }

  let result = '';
  const list = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  while (n > 0) {
    result = `${list[n % 16]}${result}`;
    n = Math.floor(n / 16);
  }

  return result;
};
// @lc code=end
