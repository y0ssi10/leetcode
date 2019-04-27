# Problem
#
# You are climbing a stair case. It takes n steps to reach to the top.
# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
#
# Note: Given n will be a positive integer.
#
# Example:
#  Input: 2
#  Output: 2
#

class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2

        nums = [1, 2]
        for i in range(2, n):
            nums.append(nums[i - 1] + nums[i - 2])

        return nums[n - 1]
