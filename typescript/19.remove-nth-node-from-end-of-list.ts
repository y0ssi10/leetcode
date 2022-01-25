/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0, head);

  let length = 0;
  let node = head;
  while (node !== null) {
    length += 1;
    node = node.next;
  }

  length = length - n;
  node = dummy;
  for (let i = 0; i < length; i++) {
    node = node.next;
  }
  node.next = node.next.next;

  return dummy.next;
};
// @lc code=end
