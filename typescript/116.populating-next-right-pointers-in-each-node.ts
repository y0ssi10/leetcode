/*
 * @lc app=leetcode id=116 lang=typescript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (root === null) {
    return null;
  }

  let node = root;

  while (node.left !== null) {
    let iter = node;
    while (iter) {
      iter.left.next = iter.right;
      if (iter.next) {
        iter.right.next = iter.next.left;
      }
      iter = iter.next;
    }

    node = node.left;
  }

  return root;
};
// @lc code=end
