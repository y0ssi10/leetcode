/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let num1Place = num1.length - 1;
  let num2Place = num2.length - 1;
  let carry = 0;

  const result = [];
  while (num1Place >= 0 || num2Place >= 0 || carry > 0) {
    if (num1Place >= 0) {
      carry += num1.charCodeAt(num1Place) - '0'.charCodeAt(0);
      num1Place -= 1;
    }

    if (num2Place >= 0) {
      carry += num2.charCodeAt(num2Place) - '0'.charCodeAt(0);
      num2Place -= 1;
    }

    result.push((carry % 10).toString());
    carry = Math.floor(carry / 10);
  }

  return result.reverse().join('');
};
// @lc code=end

