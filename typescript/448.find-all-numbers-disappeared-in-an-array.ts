/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  const result: number[] = [];
  const uniq = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!uniq.has(i)) {
      result.push(i);
    }
  }

  return result;
};
// @lc code=end

