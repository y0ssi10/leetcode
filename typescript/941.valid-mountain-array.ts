/*
 * @lc app=leetcode id=941 lang=typescript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
function validMountainArray(arr: number[]): boolean {
  const index = arr.indexOf(Math.max(...arr));
  if (index === 0 || index === arr.length -1) {
    return false;
  }

  for (let i = 0; i < index; i++) {
    if (arr[i] >= arr[i+1]) {
      return false;
    }
  }

  for (let i = index; i < arr.length-1; i++) {
    if (arr[i] <= arr[i+1]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

