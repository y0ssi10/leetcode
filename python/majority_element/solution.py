class Solution:
    def majorityElement(self, nums: 'List[int]') -> int:
        majority_count = len(nums) / 2
        dic = {}
        for num in nums:
            dic[num] = dic.get(num, 0) + 1
            if dic[num] > majority_count:
                return num
