# Problem:
#   Given a binary tree,
#   return the in-order traversal of its nodes' values.
#
# Example:
#   Input: [1,null,2,3]
#      1
#       \
#        2
#       /
#      3
#   Output: [1,3,2]
#

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def inorderTraversal(self, root: TreeNode) -> 'List[int]':
        nodes = []
        self.back_track(root, nodes)

        return nodes

    def back_track(self, node: TreeNode, arr: 'List[int]') -> None:
        if node is None:
            return

        self.back_track(node.left, arr)
        arr.append(node.val)
        self.back_track(node.right, arr)
