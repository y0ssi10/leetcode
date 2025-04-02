/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
  const bit = n.toString(2);
  let result = 0;
  for (let i = 0; i < bit.length; i++) {
    if (bit[i] === '1') {
      result++;
    }
  }

  return result;
};
// @lc code=end

