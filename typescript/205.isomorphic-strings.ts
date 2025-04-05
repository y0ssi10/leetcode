/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      if (sMap.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      sMap.set(s[i], t[i]);
    }

    if (tMap.has(t[i])) {
      if (tMap.get(t[i]) !== s[i]) {
        return false;
      }
    } else {
      tMap.set(t[i], s[i]);
    }
  }

  return true;
};
// @lc code=end

