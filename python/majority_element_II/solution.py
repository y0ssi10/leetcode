# Problem:
#   Given an integer array of size n,
#   find all elements that appear more than ⌊ n/3 ⌋ times.
#


class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        compare_size = len(nums) / 3
        unique_nums = set(nums)
        ans = []
        for num in unique_nums:
            if nums.count(num) > compare_size:
                ans.append(num)

        return ans
