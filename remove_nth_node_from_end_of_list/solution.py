# Problem:
#   Given a linked list, remove the n-th node from the end of list and return its head.
#
# Example:
#
#   Given linked list: 1->2->3->4->5, and n = 2.
#   After removing the second node from the end, the linked list becomes 1->2->3->5.
#

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(None)
        dummy.next = head
        current = head

        length = 0

        while current:
            length += 1
            current = current.next

        length -= n

        current = dummy
        while length > 0:
            length -= 1
            current = current.next
        current.next = current.next.next

        return dummy.next
