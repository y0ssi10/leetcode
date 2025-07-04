/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let totalDuration = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    const prevEnd = timeSeries[i-1] + duration;
    const curStart = timeSeries[i];

    totalDuration += duration - (curStart >= prevEnd ? 0 : prevEnd - curStart);
  }

  return totalDuration;

};
// @lc code=end
