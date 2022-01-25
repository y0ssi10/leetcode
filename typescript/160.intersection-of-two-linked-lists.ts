/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const nodes = new Set();

  let nodeA = headA;
  while (nodeA !== null) {
    nodes.add(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB = headB;
  while (nodeB !== null) {
    if (nodes.has(nodeB)) {
      return nodeB;
    }
    nodeB = nodeB.next;
  }

  return null;
};
// @lc code=end
