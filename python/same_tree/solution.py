# Problem:
#   Given two binary trees, write a function to check if they are the same or not.
#   Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
#
# Example:
# Input:     1         1
#           / \       / \
#          2   3     2   3
#         [1,2,3],   [1,2,3]
# Output: true
#


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        self.result = True

        def is_same(a: TreeNode, b: TreeNode) -> None:
            if a is None and b is None:
                return

            if a is None and b is not None:
                self.result = False
                return

            if a is not None and b is None:
                self.result = False
                return

            if a.val != b.val:
                self.result = False
                return

            if a.val == b.val:
                is_same(a.left, b.left)
                is_same(a.right, b.right)

        is_same(p, q)

        return self.result
