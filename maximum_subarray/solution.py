# Problem
#
# Given an integer array nums,
# find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
#
# Example:
#  Input: [-2,1,-3,4,-1,2,1,-5,4]
#  Output: 6
#

class Solution:
    def maxSubArray(self, nums: 'List[int]') -> int:
        for i in range(0, len(nums) - 1)[::-1]:
            nums[i] = max(nums[i], nums[i + 1] + nums[i])
        return max(nums)
