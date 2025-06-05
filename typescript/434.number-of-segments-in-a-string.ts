/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
function countSegments(s: string): number {
  return  s.split(' ').filter((v) => v.length > 0).length;
};
// @lc code=end
