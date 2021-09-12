/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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

function preorderTraversal(root: TreeNode | null): number[] {
  const ans = [];

  if (root === null) {
    return ans;
  }

  const traversal = (node: TreeNode) => {
    ans.push(node.val);
    if (node.left) {
      traversal(node.left);
    }
    if (node.right) {
      traversal(node.right);
    }
  };

  traversal(root);

  return ans;
};
// @lc code=end

function preorderTraversalWithRecursion(root: TreeNode | null): number[] {
  // recursive approach
  const ans = [];

  if (root === null) {
    return ans;
  }

  const traversal = (node: TreeNode) => {
    ans.push(node.val);
    if (node.left) {
      traversal(node.left);
    }
    if (node.right) {
      traversal(node.right);
    }
  };

  traversal(root);

  return ans;
};

function preorderTraversalWithIteration(root: TreeNode | null): number[] {
  // iterative approach
  const queue = [root];

  const ans = [];
  while (queue) {
    const node = queue.shift();
    if (node === null) {
      continue;
    }

    ans.push(node.val);
    queue.unshift(node.right);
    queue.unshift(node.left);
  }

  return ans;

}

