# Problem:
#   Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
#
# Example:
#   given n = 3, a solution set is:
#
#   [
#     "((()))",
#     "(()())",
#     "(())()",
#     "()(())",
#     "()()()"
#   ]
#

class Solution:
    def generateParenthesis(self, n: int) -> 'List[str]':
        output = []
        self.back_track('', n, n, output)

        return output

    def back_track(self, sub_str: str, left: int, right: int, output: 'List[str]') -> None:
        if left == 0 and right == 0:
            output.append(sub_str)

        if left > 0:
            self.back_track(sub_str + '(', left - 1, right, output)
        if right > left:
            self.back_track(sub_str + ')', left, right - 1, output)
