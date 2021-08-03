# Problem:
#   Given n, 
#   how many structurally unique BST's (binary search trees) that store values 1 ... n?
# 
# Example:
#   Input: 3
#   Output: 5
#

class Solution:
    def numTrees(self, n: int) -> int:
        dps = [1, 1] + [0] * (n - 1)

        for i in range(2, n + 1):
            for j in range(0, i):
                dps[i] += dps[j] * dps[i - j - 1]

        return dps[n]
