# Problem:
#   Given a sorted linked list,
#   delete all duplicates such that each element appear only once.
#
# Example:
#   Input: 1->1->2
#   Output: 1->2
#

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        current = head

        while current is not None and current.next is not None:
            if current.next.val == current.val:
                current.next = current.next.next
            else:
                current = current.next

        return head
