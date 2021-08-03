# Problem:
#   The thief has found himself a new place for his thievery again.
#   There is only one entrance to this area, called the "root".
#   Besides the root, each house has one and only one parent house.
#   After a tour, the smart thief realized that "all houses in this place forms a binary tree".
#   It will automatically contact the police if two directly-linked houses were broken into on the same night.
#
#   Determine the maximum amount of money the thief can rob tonight without alerting the police.
#


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def rob(self, root: TreeNode) -> int:
        # If the root is robbed, its left and right can not be robbed
        # Traverse down the tree recursively.
        # We can use an array to keep 2 values:
        # the maximum money when a root is selected and the maximum value when a root if NOT selected.
        result = max(self.helper(root))

        return result

    def helper(self, root: TreeNode) -> List[int]:
        if not root:
            return [0, 0]

        result = []
        left = self.helper(root.left)
        right = self.helper(root.right)

        result.append(root.val + left[1] + right[1])
        result.append(max(left) + max(right))

        return result
