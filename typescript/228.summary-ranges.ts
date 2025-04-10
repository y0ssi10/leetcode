/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const ranges: string[] = [];
  let start: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    if (start === null) {
      start = nums[i];
    }

    if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
      if (start === nums[i]) {
        ranges.push(String(start));
      } else {
        ranges.push(`${start}->${nums[i]}`);
      }
      start = null;
    }
  }

  return ranges;
};
// @lc code=end
