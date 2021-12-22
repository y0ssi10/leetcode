/*
 * @lc app=leetcode id=1346 lang=typescript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
function checkIfExist(arr: number[]): boolean {

  const values = new Set<number>();

  for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 2 === 0 && values.has(arr[i] / 2)) || values.has(arr[i] * 2)) {
      return true;
    }

    values.add(arr[i]);
  }

  return false;
};
// @lc code=end
