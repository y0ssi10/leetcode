/*
 * @lc app=leetcode id=117 lang=typescript
 *
 * [117] Populating Next Right Pointers in Each Node II
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

  let currentNodes = [ root ];
  while (currentNodes.length > 0) {
    const nextLevelNodes = [];
    let temp = null;
    for (const node of currentNodes) {
      if (temp) {
        temp.next = node;
      }
      if (node.left) {
        nextLevelNodes.push(node.left);
      }
      if (node.right) {
        nextLevelNodes.push(node.right);
      }
      temp = node;
    }
    currentNodes = nextLevelNodes;
  }

  return root;
};
// @lc code=end
