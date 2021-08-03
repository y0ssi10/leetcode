# Problem:
#   We have a collection of stones, each stone has a positive integer weight.
#   Each turn, we choose the two heaviest stones and smash them together.
#   Suppose the stones have weights x and y with x <= y.  The result of this smash is:
#
#     If x == y, both stones are totally destroyed;
#     If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
#   At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
#


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) >= 2:
            stones.sort()
            y = stones.pop()
            x = stones.pop()
            if x != y:
                stones.append(y - x)

        return stones[-1] if len(stones) == 1 else 0
