# Problem:
#   You are given an n x n 2D matrix representing an image.
#   Rotate the image by 90 degrees (clockwise).
# 
# Note:
#   You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
#   DO NOT allocate another 2D matrix and do the rotation.
# 
# Example:
#   Given input matrix = 
#     [
#       [1,2,3],
#       [4,5,6],
#       [7,8,9]
#     ],
#   rotate the input matrix in-place such that it becomes:
#     [
#       [7,4,1],
#       [8,5,2],
#       [9,6,3]
#     ]
#

class Solution:
    def rotate(self, matrix: 'List[List[int]]') -> None:
        n = len(matrix)
        for a in range(n//2):
            b = n - a - 1
            for c in range(a, b):
                d = n - c - 1
                tmp = matrix[a][c]
                matrix[a][c] = matrix[d][a]
                matrix[d][a] = matrix[b][d]
                matrix[b][d] = matrix[c][b]
                matrix[c][b] = tmp
