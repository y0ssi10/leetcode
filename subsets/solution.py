# Problem:
#   Given a set of distinct integers, nums, return all possible subsets (the power set).
#
#   Note: The solution set must not contain duplicate subsets.
#
# Example:
#   Input: nums = [1,2,3]
#   Output:
#     [
#       [3],
#       [1],
#       [2],
#       [1,2,3],
#       [1,3],
#       [2,3],
#       [1,2],
#       []
#     ]
#

class Solution:
    def subsets(self, nums: 'List[int]') -> 'List[List[int]]':
        output = []
        self.back_track(0, nums, [], output)

        return output

    def back_track(self, index: int, nums: 'List[int]', arr: 'List[int]', output: 'List[List[int]]') -> None:
        output.append(arr)

        for j in range(index, len(nums)):
            self.back_track(j + 1, nums, arr + [nums[j]], output)
