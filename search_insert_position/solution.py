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

    # divede and conquer
    def search_insert_2(self, nums: List[int], target: int) -> int:
        if target in nums:
            return nums.index(target)

        left_index = 0
        right_index = len(nums) - 1

        while left_index + 1 < right_index:
            mid = (left_index + right_index) // 2
            if nums[mid] < target:
                left_index = mid
            if nums[mid] > target:
                right_index = mid

        if nums[right_index] < target:
            return len(nums)

        if nums[left_index] > target:
            return 0

        return left_index + 1
