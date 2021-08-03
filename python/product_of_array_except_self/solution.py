class Solution:
    def productExceptSelf(self, nums: 'List[int]') -> 'List[int]':
        length = len(nums)

        left_output = [0] * length
        left_output[0] = 1
        for i in range(1, length):
            left_output[i] = nums[i - 1] * left_output[i - 1]

        right_output = [0] * length
        right_output[-1] = 1
        for j in range(length - 1, 0, -1):
            right_output[j - 1] = right_output[j] * nums[j]

        return [left_output[i] * right_output[i] for i in range(length)]
