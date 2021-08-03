# Problem:
#   Given an unsorted integer array, find the smallest missing positive integer.
#


class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = 1
        while True:
            if n not in nums:
                return n
            n += 1
