/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let i = 0; i < t.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  for (const [key, value] of sMap) {
    if (tMap.get(key) !== value) {
      return false;
    }
  }

  return true;
}
// @lc code=end

