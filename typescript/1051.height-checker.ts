/*
 * @lc app=leetcode id=1051 lang=typescript
 *
 * [1051] Height Checker
 */

// @lc code=start
function heightChecker(heights: number[]): number {
  const expected = heights.slice().sort((a: number, b: number) => a - b);
  let val = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      val += 1;
    }
  }

  return val;

};
// @lc code=end

