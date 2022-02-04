/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(0, head);

  let prev = dummy;
  let curr = head;
  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = curr.next;

      continue;
    }

    prev = curr;
    curr = curr.next;
  }

  return dummy.next;

};
// @lc code=end

