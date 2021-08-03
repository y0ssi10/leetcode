# Problem:
#   Given a non negative integer number num.
#   For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and
#   return them as an array.
#
# Example:
#   Input: 2
#   Output: [0,1,1]
#


class Solution:
    def countBits(self, num: int) -> 'List[int]':
        output = [0] * (num + 1)
        i = 0
        b = 1
        while b <= num:
            while i < b and i + b <= num:
                output[i + b] = output[i] + 1
                i += 1
            i = 0
            b = b << 1

        return output
