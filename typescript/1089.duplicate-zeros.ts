/*
 * @lc app=leetcode id=1089 lang=typescript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 0) {
      arr.splice(index, 0, 0);
      index += 1;
      arr.pop();
    }
  }
};
// @lc code=end

