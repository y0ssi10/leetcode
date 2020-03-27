# Problem:
#   Given an array of integers that is already sorted in ascending order,
#   find two numbers such that they add up to a specific target number.
#
#   The function twoSum should return indices of the two numbers
#   such that they add up to the target, where index1 must be less than index2.
#
# Note:
#   Your returned answers (both index1 and index2) are not zero-based.
#   You may assume that each input would have exactly one solution and you may not use the same element twice.
#


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        index = {}

        for i,num in enumerate(numbers):
            result = target - num

            if result in index:
                return([index[result]+1, i+1])

            index[num] = i
