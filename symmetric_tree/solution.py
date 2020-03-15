# Problem
#
# Given a binary tree,
# check whether it is a mirror of itself (ie, symmetric around its center).

# For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
#     1
#    / \
#   2   2
#  / \ / \
# 3  4 4  3
#

import queue


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        q = queue.Queue()
        q.put(root)
        q.put(root)

        while not q.empty():
            t1 = q.get()
            t2 = q.get()

            if t1 is None and t2 is None:
                continue
            if t1 is None or t2 is None:
                return False
            if t1.val != t2.val:
                return False

            q.put(t1.left)
            q.put(t2.right)
            q.put(t1.right)
            q.put(t2.left)

        return True

    # Recursive
    def is_symmetric_2(self, root: TreeNode) -> bool:
        def is_mirror(left: TreeNode, right: TreeNode):
            if left is None and right is None:
                return True

            if left is None or right is None:
                return False

            return left.val == right.val and is_mirror(left.left, right.right) and is_mirror(left.right, right.left)

        return is_mirror(root, root)
