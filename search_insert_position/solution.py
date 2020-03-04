# Problem:
#   Given a sorted array and a target value, return the index if the target is found.
#   If not, return the index where it would be if it were inserted in order.
#   You may assume no duplicates in the array.
#
# Example:
#   Input: [1,3,5,6], 5
#   Output: 2
#


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        size = len(nums)
        for i in range(size):
            if nums[i] >= target:
                return i

        return size
