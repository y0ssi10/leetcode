/*
 * @lc app=leetcode id=106 lang=typescript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0) {
    return null;
  }

  if (postorder.length === 0) {
    return null;
  }

  const val = postorder.pop();
  const root = new TreeNode(val);
  const inorderIndex = inorder.indexOf(val);
  root.left = buildTree(inorder.slice(0, inorderIndex), postorder.slice(0, inorder.slice(0, inorderIndex).length));
  root.right = buildTree(inorder.slice(inorderIndex + 1), postorder.slice(inorder.slice(0, inorderIndex).length));

  return root;

};
// @lc code=end

