# Problem:
#   Given a string containing only three types of characters: '(', ')' and '*',
#   write a function to check whether this string is valid.
#   We define the validity of a string by these rules:
#
#     Any left parenthesis '(' must have a corresponding right parenthesis ')'.
#     Any right parenthesis ')' must have a corresponding left parenthesis '('.
#     Left parenthesis '(' must go before the corresponding right parenthesis ')'.
#     '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
#     An empty string is also valid.
#
# Note:
#   The string size will be in the range [1, 100].
#


class Solution:
    def checkValidString(self, s: str) -> bool:
        if not s:
            return True

        stack = []
        asterisk_stack = []

        for i, c in enumerate(s):
            if c == '(':
                stack.append(i)
            if c == '*':
                asterisk_stack.append(i)
            if c == ')':
                if not stack:
                    if not asterisk_stack:
                        return False
                    else:
                        asterisk_stack.pop()
                else:
                    stack.pop()

        while stack and asterisk_stack:
            if stack.pop() > asterisk_stack.pop():
                return False

        return len(stack) == 0
