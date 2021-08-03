# Problem:
#   A robot is located at the top-left corner of a m x n grid.
#   The robot can only move either down or right at any point in time.
#   The robot is trying to reach the bottom-right corner of the grid.
#   How many possible unique paths are there?
#
# Example:
#   Input: m = 3, n = 2
#   Output: 3
#

import math

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        return math.factorial(m+n-2) // (math.factorial(m-1)*(math.factorial(n-1)))
