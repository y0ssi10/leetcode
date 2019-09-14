# Problem:
#   Given a singly linked list, determine if it is a palindrome.
#
# Example:
#   Input: 1->2->2->1
#   Output: true
#


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        arr = []

        while head is not None:
            arr.append(head.val)
            head = head.next

        return arr == arr[::-1]
