# Problem:
#   Given an array nums,
#   write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
#
#   Note:
#     You must do this in-place without making a copy of the array.
#     Minimize the total number of operations.
#
# Example:
#   Input: [0,1,0,3,12]
#   Output: [1,3,12,0,0]
#


class Solution:
    def moveZeroes(self, nums: 'List[int]') -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zero_indexes = []
        for index in range(len(nums)):
            if nums[index] != 0 and zero_indexes:
                zero_index = zero_indexes.pop(0)
                nums[zero_index] = nums[index]
                nums[index] = 0

            if nums[index] == 0:
                zero_indexes.append(index)

        return nums
