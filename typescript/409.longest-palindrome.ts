/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
  const map = new Map<string, number>();
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let hasOddCount = false;
  let result = 0;
  for (const count of map.values()) {
    if (count%2 === 0) {
      result += count;
    } else {
      hasOddCount = true;
      result += count - 1;
    }
  }

  return hasOddCount ? result + 1 : result;
};
// @lc code=end

