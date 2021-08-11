/*
 * @lc app=leetcode id=954 lang=typescript
 *
 * [954] Array of Doubled Pairs
 */

// @lc code=start
function canReorderDoubled(arr: number[]): boolean {
  const sorted = arr.sort((a: number, b: number) => a - b);
  while (sorted.length > 0) {
    const val = sorted.shift();
    let index = -1;
    if (val >= 0) {
      index = sorted.indexOf(val * 2);
    } else {
      index = sorted.indexOf(val / 2);
    }

    if (index !== -1) {
      sorted.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end

