# Problem:
#   Write a program to find the node at which the intersection of two singly linked lists begins.
#
# Notes:
#   If the two linked lists have no intersection at all, return null.
#   The linked lists must retain their original structure after the function returns.
#   You may assume there are no cycles anywhere in the entire linked structure.
#   Your code should preferably run in O(n) time and use only O(1) memory.
#


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def getIntersectionNode(self, head_a: ListNode, head_b: ListNode) -> ListNode:
        hash_table = {}

        while head_a:
            hash_table[head_a] = head_a
            head_a = head_a.next

        while head_b:
            if head_b in hash_table:
                return head_b
            head_b = head_b.next

        return None
