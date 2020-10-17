# Problem:
#   Write an efficient algorithm that searches for a value in an m x n matrix.
#   This matrix has the following properties:
#     - Integers in each row are sorted from left to right.
#     - The first integer of each row is greater than the last integer of the previous row.
#


class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix:
            return False

        i = 0
        j = len(matrix[0]) - 1
        while i < len(matrix) and j >= 0:
            if matrix[i][j] == target:
                return True

            if matrix[i][j] > target:
                j -= 1

            if matrix[i][j] < target:
                i += 1
                j = len(matrix[0]) - 1

        return False
