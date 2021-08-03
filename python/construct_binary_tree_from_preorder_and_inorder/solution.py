# Problem:
#   Given preorder and inorder traversal of a tree, construct the binary tree.
#
# Note:
#   You may assume that duplicates do not exist in the tree.
#
# Example:
#
#   preorder = [3,9,20,15,7]
#   inorder = [9,3,15,20,7]
#
#   Return the following binary tree:
#
#       3
#      / \
#     9  20
#       /  \
#      15   7
#


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def buildTree(self, preorder: 'List[int]', inorder: 'List[int]') -> TreeNode:
        if not preorder:
            return None

        if not inorder:
            return None

        val = preorder.pop(0)
        root = TreeNode(val)
        index = inorder.index(val)

        root.left = self.buildTree(preorder, inorder[:index])
        root.right = self.buildTree(preorder, inorder[index + 1:])

        return root
