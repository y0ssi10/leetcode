/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
 */

class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.right = (right === undefined ? null : right);
    this.left = (left === undefined ? null : left);
  }
}

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
function goodNodes(root: TreeNode | null): number {
  let count = 1;

  const traverse = (node: TreeNode | null, max: number): void => {
    if (node !== null) {
      const value = node.val;
      if (value >= max) {
        count += 1;
      }

      max = Math.max(max, value);

      traverse(node.left, max);
      traverse(node.right, max);
    }
  };

  traverse(root.left, root.val);
  traverse(root.right, root.val);

  return count;
};
// @lc code=end
