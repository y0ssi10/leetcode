/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 */

class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  const recursive = (node: TreeNode | null, currentSum: number): boolean => {
    if (node.left === null && node.right === null) {
      if (currentSum + node.val === targetSum) {
        return true;
      }

      return false;
    }

    let leftResult: boolean = false;
    if (node.left !== null) {
      leftResult = recursive(node.left, currentSum + node.val);
    }

    let rightResult: boolean = false;
    if (node.right !== null) {
      rightResult = recursive(node.right, currentSum + node.val);
    }

    return leftResult || rightResult;
  };

  const result = recursive(root, 0);

  return result;
};
// @lc code=end

