# Problem:
#   Given a string containing digits from 2-9 inclusive,
#   return all possible letter combinations that the number could represent.
#
#   A mapping of digit to letters (just like on the telephone buttons) is given below.
#   Note that 1 does not map to any letters.
#
# Example:
#  Input: "23"
#  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
#

class Solution:
    mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    def letterCombinations(self, digits: str) -> 'List[str]':
        if not digits:
            return []

        output = []
        self.back_track('', digits, output)
        return output

    def back_track(self, combination: str, next_digits: str, output: 'List[str]') -> None:
        if len(next_digits) == 0:
            output.append(combination)
        else:
            for letter in Solution.mapping.get(next_digits[0]):
                self.back_track(combination + letter, next_digits[1:], output)
