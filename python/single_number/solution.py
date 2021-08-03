# Problem
#
# Given a non-empty array of integers, every element appears twice except for one. Find that single one.
#
# Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
#
# Example:
#   Input: [2,2,1]
#   Output: 1
#

class Solution:
    def singleNumber(self, nums: 'List[int]') -> int:
        dic = {}
        for num in nums:
            if num in dic:
                dic.pop(num)
            else:
                dic[num] = 1

        k, v = dic.popitem()
        return k
