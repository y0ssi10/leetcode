# Problem:
#   Given a non-negative index k where k ≤ 33,
#   return the kth index row of the Pascal's triangle.
#
#   Note that the row index starts from 0.
#


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        result = [1]

        for i in range(rowIndex):
            current = [1]
            for j in range(1, len(result)):
                current.append(result[j - 1] + result[j])
            current.append(1)
            result = current

        return result
