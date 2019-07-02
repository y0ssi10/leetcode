# Problem:
#   Given a binary tree,
#   return the level order traversal of its nodes' values. (ie, from left to right, level by level).
#
# Example:
#   Given binary tree [3,9,20,null,null,15,7],
#       3
#      / \
#     9  20
#       /  \
#      15   7
#   return its level order traversal as:
#   [
#     [3],
#     [9,20],
#     [15,7]
#   ]
#


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def levelOrder(self, root: TreeNode) -> 'List[List[int]]':
        order = []

        self.get_order([root], order)
        return order

    def get_order(self, nodes, order) -> None:
        arr = []
        level_nodes = []
        for node in nodes:
            if node:
                arr.append(node.val)
                level_nodes.append(node.left)
                level_nodes.append(node.right)

        if arr:
            order.append(arr)

        if not level_nodes:
            return

        self.get_order(level_nodes, order)
