/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {

  private readonly sums: number[];

  constructor(nums: number[]) {
    const sums = [];
    for (let index = 0; index < nums.length; index++) {
      sums[index] = (sums[index-1] || 0) + nums[index];
    }

    this.sums = sums;
  }

  sumRange(left: number, right: number): number {
    return this.sums[right] - (this.sums[left-1] || 0);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

