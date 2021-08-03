# Problem:
#   Given a binary array,
#   find the maximum length of a contiguous subarray with equal number of 0 and 1.
#
# Note:
#   The length of the given binary array will not exceed 50,000
#


class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        max_length = 0
        count = 0
        counts = {0: -1}

        for i, num in enumerate(nums):
            if num == 0:
                count += -1
            else:
                count += 1
            if count in counts:
                max_length = max(max_length, i-counts[count])
            else:
                counts[count] = i

        return max_length
