# Problem
#
# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:
#  1. Open brackets must be closed by the same type of brackets.
#  2. Open brackets must be closed in the correct order.
# Note that an empty string is also considered valid.
#
# Example 1:
#
# Input: "()"
# Output: true
#

class Solution:
    def isValid(self, s: 'str') -> 'bool':
        while "()" in s or "{}" in s or "[]" in s:
            s = s.replace("()", "")\
                .replace("{}", "")\
                .replace("[]", "")
        return s == ''
