# Problem:
#   Given a collection of distinct integers, return all possible permutations.
#
# Example:
#   Input: [1,2,3]
#   Output:
#     [
#       [1,2,3],
#       [1,3,2],
#       [2,1,3],
#       [2,3,1],
#       [3,1,2],
#       [3,2,1]
#     ]
#

class Solution:
    def permute(self, nums: 'List[int]') -> 'List[List[int]]':
        output = []
        self.back_track(nums, len(nums), [], output)

        return output

    def back_track(self, nums: 'List[int]', length: int, arr: 'List[int]', output: 'List[List[int]]') -> 'List[List[int]]':
        if len(arr) == length:
            output.append(arr)
            return

        for index in range(len(nums)):
            comb = nums[:index] + nums[index + 1:]
            self.back_track(comb, length, arr + [nums[index]], output)
