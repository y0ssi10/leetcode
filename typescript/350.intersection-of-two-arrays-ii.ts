/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const smallerNums = nums1.length <= nums2.length ? nums1 : nums2;
  const largerNums = nums1.length > nums2.length ? nums1 : nums2;

  const map = new Map<number, number>();

  smallerNums.forEach((v) => {
    map.set(v, (map.get(v) || 0) + 1);
  });

  const result: number[] = [];

  for (const num of largerNums) {
    if (map.has(num) && map.get(num)! > 0) {
      result.push(num);
      map.set(num, map.get(num)! - 1);
    }
  }

  return result;
};
// @lc code=end

