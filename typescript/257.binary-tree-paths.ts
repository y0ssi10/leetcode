/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];

  const dfs = (node: TreeNode | null, currentPath: string): void => {
    if (node === null) {
      return;
    }

    const newPath = currentPath ? `${currentPath}->${node.val}` : `${node.val}`;
    if (node.right === null && node.left === null) {
      result.push(newPath);
      return;
    }

    dfs(node.right, newPath);
    dfs(node.left, newPath);
  }

  dfs(root, '');

  return result;
};

// @lc code=end
