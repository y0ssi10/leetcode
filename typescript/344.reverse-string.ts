/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    const c = s[start];
    s[start] = s[end];
    s[end] = c;

    start++;
    end--;
  }
}
// @lc code=end
