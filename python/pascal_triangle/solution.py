# Problem:
#   Given a non-negative integer numRows,
#   generate the first numRows of Pascal's triangle.
#
#   In Pascal's triangle,
#   each number is the sum of the two numbers directly above it.
#


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        if numRows == 0:
            return result

        result.append([1])
        for num in range(1, numRows):
            current_row = [1]
            prev_row = result[num-1]

            for i in range(1, len(prev_row)):
                current_row.append(prev_row[i-1] + prev_row[i])

            current_row.append(1)

            result.append(current_row)

        return result
