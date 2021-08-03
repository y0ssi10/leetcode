# Problem:
#   Given a binary tree, determine if it is a valid binary search tree (BST).
#
#   Assume a BST is defined as follows:
#     The left subtree of a node contains only nodes with keys less than the node's key.
#     The right subtree of a node contains only nodes with keys greater than the node's key.
#     Both the left and right subtrees must also be binary search trees.
#
# Example:
#
#       2
#      / \
#     1   3
#
#   Input: [2,1,3]
#   Output: true
#

class TreeNode:
    def __init__(self, x: int):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        if root is None:
            return True

        return self.is_valid(root, -float('inf'), float('inf'))

    def is_valid(self, node: TreeNode, minimum: int, maximum: int) -> bool:
        if node.val <= minimum:
            return False

        if node.val >= maximum:
            return False

        left_res, right_res = True, True
        if node.left is not None:
            left_res = self.is_valid(node.left, minimum, node.val)
        if node.right is not None:
            right_res = self.is_valid(node.right, node.val, maximum)

        if left_res and right_res:
            return True

        return False
