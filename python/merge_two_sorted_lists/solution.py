# Problem
#
# Merge two sorted linked lists and return it as a new list.
# The new list should be made by splicing together the nodes of the first two lists.
#
# Example:
#
# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4
#

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def mergeTwoLists(self, l1: 'ListNode', l2: 'ListNode') -> 'ListNode':
        dummy = ListNode(0)

        if l1 is None:
            return l2
        if l2 is None:
            return l1
        if l1.val <= l2.val:
            dummy = l1
            l1 = l1.next
        else:
            dummy = l2
            l2 = l2.next

        current = dummy

        while l1 and l2:
            if l1.val <= l2.val:
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2 = l2.next
            current = current.next

        if l1 is None:
            current.next = l2
        if l2 is None:
            current.next = l1

        return dummy
