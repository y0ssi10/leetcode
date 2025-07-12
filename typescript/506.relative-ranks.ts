/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const scoreWithIndex = score
    .map((s, i) => ({ score: s, index: i }))
    .sort((a, b) => b.score - a.score);

  const result = new Array(score.length);

  scoreWithIndex.forEach((item, rank) => {
    const rankText = rank === 0 ? 'Gold Medal'
      : rank === 1 ? 'Silver Medal'
      : rank === 2 ? 'Bronze Medal'
      : `${rank + 1}`;

    result[item.index] = rankText;
  });

  return result;
};
// @lc code=end
