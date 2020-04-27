# Problem:
#   Given an array of integers and an integer k,
#   you need to find the total number of continuous subarrays whose sum equals to k.
#


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        for start in range(len(nums)):
            n_sum = 0
            for end in range(start, len(nums)):
                n_sum += nums[end]
                if n_sum == k:
                    count += 1
        return count

    # using hashmap
    def sub_array_sum_2(self, nums: List[int], k: int) -> int:
        count = 0
        current_sum = 0
        hash_map = {0: 1}

        for num in nums:
            current_sum += num
            if (current_sum - k) in hash_map:
                count += hash_map.get(current_sum - k)
            if current_sum in hash_map:
                hash_map[current_sum] += 1
            else:
                hash_map[current_sum] = 1

        return count
