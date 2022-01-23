/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

class ListNode {

  public val: number;
  public next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

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
function hasCycle(head: ListNode | null): boolean {
  const nodes = new Set();
  let node = head;

  while (node !== null) {
    if (nodes.has(node.next)) {
      return true;
    }

    nodes.add(node);
    node = node.next;
  }

  return false;
};
// @lc code=end

function hasCycleByTwoPointers(head: ListNode | null): boolean {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer !== null) {
    if (fastPointer.next === null) {
      return false;
    }

    fastPointer = fastPointer.next.next; // two steps
    slowPointer = slowPointer.next; // one step

    if (fastPointer === slowPointer) {
      return true;
    }
  }

  return false;
};
