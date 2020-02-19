class Solution:

    # approach: brute force
    def twoSum(self, nums: 'List[int]', target: 'int') -> 'List[int]':
        for i in range(len(nums)):
            ans = [k+i+1 for k,v in enumerate(nums[i+1:]) if nums[i] + v == target]
            if ans:
                return i, ans[0]


    # approach: two-pass hash table
    def two_sum_2(self, nums: 'List[int]', target: 'int') -> 'List[int]':
        hash_table = {nums[i]: i for i in range(len(nums))}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hash_table.keys() and hash_table[complement] != i:
                return [i, hash_table[complement]]


    # approach: one-pass hash table
    def two_sum_3(self, nums: 'List[int]', target: 'int') -> 'List[int]':
        hash_table = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in hash_table:
                return [hash_table[complement], i]
            else:
                hash_table[num] = i
