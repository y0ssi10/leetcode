# Problem:
#   Given a binary tree, return the bottom-up level order traversal of its nodes' values.
#   (ie, from left to right, level by level from leaf to root).
#
# Example:
#   Given binary tree [3,9,20,null,null,15,7],
#       3
#      / \
#     9  20
#       /  \
#      15   7
#   Output:
#      [
#        [15,7],
#        [9,20],
#        [3]
#      ]
#

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

import queue

class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        result = []
        q = queue.Queue()
        q.put(root)

        while q.empty() == False:
            level_result = []
            for i in range(q.qsize()):
                node = q.get()
                if node is not None:
                    level_result.append(node.val)
                    q.put(node.left)
                    q.put(node.right)

            if level_result:
                result.append(level_result)

        return result[::-1]

    def level_order_bottom_2(self, root: TreeNode) -> List[List[int]]:
        result = []

        if not root:
            return result

        level_map = {}
        def bfs(node: TreeNode, depth: int) -> None:
            if depth not in level_map:
                level_map[depth] = []

            level_map[depth].append(node.val)
            if node.left:
                bfs(node.left, depth+1)
            if node.right:
                bfs(node.right, depth+1)

        bfs(root, 1)

        for key in level_map.keys():
            val = level_map[key]
            result.append(val)

        return result[::-1]
