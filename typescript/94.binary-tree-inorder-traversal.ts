/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
  const ans = [];
  const queue = [];

  if (root === null) {
    return ans;
  }

  let node = root;

  while (node || queue.length > 0) {
    if (node) {
      queue.push(node);
      node = node.left;
    } else {
      const currentNode = queue.pop();
      ans.push(currentNode.val);
      node = currentNode.right;
    }
  }

  return ans;
};
// @lc code=end

function inorderTraversalWithRecursion(root: TreeNode | null): number[] {
  // recursive approach
  const ans = [];

  if (root === null) {
    return ans;
  }

  const traversal = (node: TreeNode): void => {
    if (node.left) {
      traversal(node.left);
    }

    ans.push(node.val);

    if (node.right) {
      traversal(node.right);
    }
  };

  traversal(root);

  return ans;
};

function inorderTraversalWithIteration(root: TreeNode | null): number[] {
  // iterative approach
  const ans = [];
  const queue = [];

  if (root === null) {
    return ans;
  }

  let node = root;

  while (node || queue.length > 0) {
    if (node) {
      queue.push(node);
      node = node.left;
    } else {
      const currentNode = queue.pop();
      ans.push(currentNode.val);
      node = currentNode.right;
    }
  }

  return ans;
}
