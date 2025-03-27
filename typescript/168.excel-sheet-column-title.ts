/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let result = '';

  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode(columnNumber % 26 + 65) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
// @lc code=end

