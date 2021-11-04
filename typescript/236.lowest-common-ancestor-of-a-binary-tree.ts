/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const parents = { [root.val]: null };
  const dfs = (node: TreeNode) => {
    if (node.left) {
      parents[node.left.val] = node;
      dfs(node.left);
    }
    if (node.right) {
      parents[node.right.val] = node;
      dfs(node.right);
    }
  };
  dfs(root);

  const ps = new Set([p]);
  let current = p;
  while (current) {
    const parent = parents[current.val];
    ps.add(parent);
    current = parent;
  }

  let node = q;
  while (node) {
    if (ps.has(node)) {
      return node;
    }
    node = parents[node.val];
  }

  return null;
};
// @lc code=end

