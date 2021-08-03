# Problem:
#   Given two strings S and T,
#   return if they are equal when both are typed into empty text editors. # means a backspace character.
#
# Note:
#   After backspacing an empty text, the text will continue empty.
#


class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        def build(s: str) -> List[str]:
            stack = []
            for char in s:
                if char == '#':
                    if stack:
                        stack.pop()
                else:
                    stack.append(char)

            return stack

        return build(S) == build(T)
