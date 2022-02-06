/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {

  let frontPointer = head;

  const recursive = (current: ListNode): boolean => {
    if (current !== null) {
      if (!recursive(current.next)) {
        return false;
      }

      if (current.val !== frontPointer.val) {
        return false;
      }

      frontPointer = frontPointer.next;
    }

    return true;
  };

  return recursive(head);

};
// @lc code=end
