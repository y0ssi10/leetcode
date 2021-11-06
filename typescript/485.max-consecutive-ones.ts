/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let maxNum = 0;
  let currentNum = 0;
  nums.forEach((num: number) => {
    if (num === 1) {
      currentNum += 1;
      maxNum = Math.max(maxNum, currentNum);
    } else {
      currentNum = 0;
    }
  });

  return maxNum;
};
// @lc code=end

