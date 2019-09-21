# Problem:
#   Given a non-empty array of integers, return the k most frequent elements.
#
#   Note:
#     You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
#     Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
#
# Example:
#   QInput: nums = [1,1,1,2,2,3], k = 2
#   Output: [1,2]


class Solution:
    def topKFrequent(self, nums: 'List[int]', k: int) -> 'List[int]':
        elements = {}
        for num in nums:
            if num in elements:
                elements[num] += 1
            else:
                elements[num] = 1

        return sorted(elements, key=elements.get, reverse=True)[:k]
