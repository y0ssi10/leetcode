/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  const sumLeftLeaves = (node: TreeNode | null, isLeft: boolean): number => {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      return isLeft ? node.val : 0;
    }

    return sumLeftLeaves(node.left, true) + sumLeftLeaves(node.right, false);
  }

  if (!root) {
    return 0;
  }

  return sumLeftLeaves(root.left, true) + sumLeftLeaves(root.right, false);
};
// @lc code=end

