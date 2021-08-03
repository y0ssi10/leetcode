# Problem:
#   You are given a binary tree in which each node contains an integer value.
#   Find the number of paths that sum to a given value.
#   The path does not need to start or end at the root or a leaf,
#   but it must go downwards (traveling only from parent nodes to child nodes).
#
#   The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
#
# Example:
#   Input: [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
#   Output: 3
#       1.  5 -> 3
#       2.  5 -> 2 -> 1
#       3. -3 -> 11
#


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> int:
        self.ans = 0

        def calc(node: TreeNode, arr: 'List[int]') -> None:
            if node is None:
                return

            arr = [num + node.val for num in arr]
            arr.append(node.val)
            self.ans += arr.count(sum)
            calc(node.left, arr)
            calc(node.right, arr)

        calc(root, [])
        return self.ans
