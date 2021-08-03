# Problem:
#   Given a linked list, determine if it has a cycle in it.
#   To represent a cycle in the given linked list,
#   we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to.
#   If pos is -1, then there is no cycle in the linked list.
#


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        node_set = set()
        while head:
            if head in node_set:
                return True
            node_set.add(head)
            head = head.next
        else:
            return False
