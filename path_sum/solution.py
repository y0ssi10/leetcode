# Problem:
#   Given a binary tree and a sum,
#   determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
#
# Note:
#   A leaf is a node with no children.
#


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        self.result = False

        def helper(node: TreeNode, current_val: int) -> None:
            if not node:
                return

            current_val += node.val
            if node.left or node.right:
                helper(node.left, current_val)
                helper(node.right, current_val)
            else:
                if current_val == sum:
                    self.result = True
                    return

        helper(root, 0)

        return self.result
