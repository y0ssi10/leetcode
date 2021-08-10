/*
 * @lc app=leetcode id=926 lang=typescript
 *
 * [926] Flip String to Monotone Increasing
 */

// @lc code=start
function minFlipsMonoIncr(s: string): number {
  let oneCount = 0;
  let zeroToOne = 0;
  for (const c of s) {
    if (c === '0') {
      if (oneCount !== 0) {
        zeroToOne += 1;
      }
    }
    if (c === '1') {
      oneCount += 1;
    }

    zeroToOne = Math.min(oneCount, zeroToOne);
  }

  return zeroToOne;
};
// @lc code=end
