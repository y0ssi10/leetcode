/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) {
    return;
  }

  let index = m + n - 1;
  let nums1Index = m - 1;
  let nums2Index = n - 1;

  while (nums2Index > -1) {
    if (nums1[nums1Index] === undefined || nums2[nums2Index] >= nums1[nums1Index]) {
      nums1[index] = nums2[nums2Index];
      nums2Index -= 1;
    } else {
      nums1[index] = nums1[nums1Index];
      nums1Index -= 1;
    }
    index -= 1;
  }
};
// @lc code=end

