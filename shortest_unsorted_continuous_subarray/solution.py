# Problem:
#   Given an integer array, you need to find one continuous subarray
#   that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
#
#   You need to find the shortest such subarray and output its length.
#
#   Note:
#     Then length of the input array is in range [1, 10,000].
#     The input array may contain duplicates, so ascending order here means <=.
#
# Example:
#   Input: [2, 6, 4, 8, 10, 9, 15]
#   Output: 5
#


class Solution:
    def findUnsortedSubarray(self, nums: 'List[int]') -> int:
        left = None
        right = 0

        sorted_nums = sorted(nums)
        for index in range(len(nums)):
            if sorted_nums[index] != nums[index]:
                if left is None:
                    left = index
                else:
                    right = index

        if left is None:
            return 0

        return right - left + 1
