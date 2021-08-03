# Problem:
#   Given a binary tree, you need to compute the length of the diameter of the tree.
#   The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
#   This path may or may not pass through the root.
#
#   Note:
#     The length of path between two nodes is represented by the number of edges between them.
#
# Example:
#         1
#        / \
#       2   3
#      / \
#     4   5
# Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
#


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        def calc(node: TreeNode) -> 'Tuple[int, int]':
            if node is None:
                return 0, 0

            l = calc(node.left)
            r = calc(node.right)
            height = max(l[0], r[0]) + 1
            return height, max((l[0] + r[0]), max(l[1], r[1]))

        output = calc(root)
        return output[1]
