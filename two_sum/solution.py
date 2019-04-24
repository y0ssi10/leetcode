class Solution:
    def twoSum(self, nums: 'List[int]', target: 'int') -> 'List[int]':
        for i in range(len(nums)):
            ans = [k+i+1 for k,v in enumerate(nums[i+1:]) if nums[i] + v == target]
            if ans:
                return i, ans[0]
