# Problem:
#   Determine whether an integer is a palindrome.
#   An integer is a palindrome when it reads the same backward as forward.
#
# Example:
#   Input: 121
#   Output: true
#


class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x == 0:
            return True
        elif x < 0 or x % 10 == 0:
            return False
        else:
            reversed_number = 0
            while x > reversed_number:
                reversed_number = reversed_number * 10 + x % 10
                x //= 10

            return x == reversed_number or x == reversed_number // 10
