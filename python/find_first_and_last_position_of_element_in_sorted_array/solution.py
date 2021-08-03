# Problem:
#   Given an array of integers nums sorted in ascending order,
#   find the starting and ending position of a given target value.
#
#   Your algorithm's runtime complexity must be in the order of O(log n).
#
#   If the target is not found in the array, return [-1, -1].
#
# Example:
#   Input: nums = [5,7,7,8,8,10], target = 8
#   Output: [3,4]
#

class Solution:
    def searchRange(self, nums: 'List[int]', target: int) -> 'List[int]':
        output = [-1, -1]

        for i in range(len(nums)):
            if nums[i] == target:
                output[0] = i
                break
        else:
            return output

        for i in range(len(nums) - 1, -1, -1):
            if nums[i] == target:
                output[1] = i
                break

        return output
