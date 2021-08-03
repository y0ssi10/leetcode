class Solution:
    def findDuplicate(self, nums: 'List[int]') -> int:
        nums.sort()

        for index in range(1, len(nums)):
            if nums[index] == nums[index - 1]:
                return nums[index]
