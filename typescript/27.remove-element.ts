/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let leftIndex = 0;
  let rightIndex = nums.length;

  while (leftIndex < rightIndex) {
    if (nums[leftIndex] === val) {
      nums[leftIndex] = nums[rightIndex - 1];
      rightIndex -= 1;
    } else {
      leftIndex += 1;
    }
  }

  return rightIndex;
};
// @lc code=end

