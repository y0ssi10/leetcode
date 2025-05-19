/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  let low = 1;
  let high = num;

  while (low <= high) {
    let mid = low + Math.floor((high-low) / 2);

    if (mid*mid === num) {
      return true;
    }

    if (mid*mid < num) {
      low = mid + 1;
    }

    if (mid*mid > num) {
      high = mid - 1;
    }
  }

  return false;
};
// @lc code=end

