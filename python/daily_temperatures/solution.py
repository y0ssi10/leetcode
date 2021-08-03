# Problem:
#   Given a list of daily temperatures T, return a list such that, for each day in the input,
#   tells you how many days you would have to wait until a warmer temperature.
#   If there is no future day for which this is possible, put 0 instead.
#
#   Note:
#     The length of temperatures will be in the range [1, 30000].
#     Each temperature will be an integer in the range [30, 100].
#
# Example:
#   Input: [73, 74, 75, 71, 69, 72, 76, 73]
#   Output: [1, 1, 4, 2, 1, 1, 0, 0]
#

class Solution:
    def dailyTemperatures(self, T: 'List[int]') -> 'List[int]':
        length = len(T)
        stack = []
        output = [0] * length

        for index in range(length - 1, -1, -1):
            while stack:
                warmer_index = stack.pop(0)
                if T[index] < T[warmer_index]:
                    output[index] = warmer_index - index
                    stack.insert(0, warmer_index)
                    stack.insert(0, index)
                    break
            else:
                stack.insert(0, index)

        return output
