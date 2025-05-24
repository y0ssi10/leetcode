/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const map = new Map<string, number>();
  for (const c of t) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (const c of s) {
    map.set(c, (map.get(c)!) - 1);
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }

  return '';
};
// @lc code=end

