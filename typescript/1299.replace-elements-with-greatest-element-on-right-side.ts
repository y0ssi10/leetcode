/*
 * @lc app=leetcode id=1299 lang=typescript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
function replaceElements(arr: number[]): number[] {
  let maxVal = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    const currentVal = arr[i];
    arr[i] = maxVal;
    maxVal = Math.max(maxVal, currentVal);
  }
  arr[arr.length-1] = -1;

  return arr;
};
// @lc code=end

