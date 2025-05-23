/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const count = new Map<string, number>();

  for (const c of s) {
    count.set(c, (count.get(c) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
// @lc code=end
