/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
  const queue = [ root, root ];

  while(queue.length > 0) {
    const node1 = queue.pop();
    const node2 = queue.pop();

    if (node1 === null && node2 === null) {
      continue;
    }

    if (node1 === null || node2 === null) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }

    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }

  return true;
};
// @lc code=end

const isSymmetricWithRecursion = (root: TreeNode | null): boolean => {
  let ans = true;
  const recursive = (node1: TreeNode | null, node2: TreeNode | null) => {
    if (node1 === null && node2 === null) {
      return;
    }

    if (node1 === null || node2 === null) {
      ans = false;
      return;
    }

    if (node1.val !== node2.val) {
      ans = false;
      return;
    }

    recursive(node1.left, node2.right);
    recursive(node1.right, node2.left);
  };

  recursive(root, root);

  return ans;
};

const isSymmetricWithIteration = (root: TreeNode | null): boolean => {
  const queue = [ root, root ];

  while(queue.length > 0) {
    const node1 = queue.pop();
    const node2 = queue.pop();

    if (node1 === null && node2 === null) {
      continue;
    }

    if (node1 === null || node2 === null) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }

    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }

  return true;
};
