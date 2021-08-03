/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const array = nums
    .map((value: number, index: number) => [value, index])
    .sort((a: number[], b: number[]) => a[0] - b[0]);

  let begin = 0;
  let end = nums.length - 1;

  while (begin < end) {
    const value = array[begin][0] + array[end][0];
    if (value === target) {
      return [array[begin][1], array[end][1]];
    }

    if (value > target) {
      end -= 1;
    }

    if (value < target) {
      begin += 1;
    }
  }
};
// @lc code=end
