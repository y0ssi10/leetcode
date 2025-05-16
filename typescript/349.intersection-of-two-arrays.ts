/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const smallerSet = set1.size <= set2.size ? set1 : set2;
  const largerSet = set1.size > set2.size ? set1 : set2;

  const result: number[] = [];

  smallerSet.forEach((v) => {
    if (largerSet.has(v)) {
      result.push(v);
    }
  })

  return result;

};
// @lc code=end

