# Problem:
#   You are a professional robber planning to rob houses along a street.
#   Each house has a certain amount of money stashed,
#   the only constraint stopping you from robbing each of them is that adjacent houses have security system connected
#   and it will automatically contact the police if two adjacent houses were broken into on the same night.
#
#   Given a list of non-negative integers representing the amount of money of each house,
#   determine the maximum amount of money you can rob tonight without alerting the police.
#
# Example:
#   Input: [1,2,3,1]
#   Output: 4
#

class Solution:
    def rob(self, nums: 'List[int]') -> int:
        if not nums:
            return 0

        if len(nums) == 1:
            return nums[0]

        if len(nums) == 2:
            return max(nums)

        array = list()
        array.append(nums[0])
        array.append(max(nums[0], nums[1]))
        for i in range(2, len(nums)):
            array.append(max(array[i - 2] + nums[i], array[i - 1]))

        return array[-1]
