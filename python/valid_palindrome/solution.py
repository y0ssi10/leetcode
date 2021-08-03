# Problem:
#   Given a string, determine if it is a palindrome,
#   considering only alphanumeric characters and ignoring cases.
#
# Note:
#   For the purpose of this problem, we define empty string as valid palindrome.
#

import re


class Solution:

    def isPalindrome(self, s: str) -> bool:
        s = re.sub('[^0-9a-zA-Z]+', '', s)
        s = s.lower()

        left_index = 0
        right_index = len(s) - 1

        while left_index < right_index:
            if s[left_index] != s[right_index]:
                return False

            left_index += 1
            right_index -= 1

        return True
