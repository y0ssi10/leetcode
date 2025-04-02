/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
function reverseBits(n: number): number {
  let ns = n.toString(2);
  const deficit = 32 - ns.length;
  if (deficit > 0) {
    ns = '0'.repeat(deficit) + ns
  }

  let result = 0;
  ns.split('').forEach((value, index) => {
    result += Math.pow(2, index) * Number(value);
  })

  return result;
};

// @lc code=end

