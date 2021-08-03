# Problem:
#   Given a non-empty, singly linked list with head node head, return a middle node of linked list.
#   If there are two middle nodes, return the second middle node.
#


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        arr = {}
        index = 0
        while head:
            arr[index] = head
            index += 1
            head = head.next

        keys = list(arr.keys())

        return arr[keys[len(keys) // 2]]
