# Problem:
#   Given a string, find the length of the longest substring without repeating characters.
#
# Example:
#   Input: "abcabcbb"
#   Output: 3
#

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        sub_str = []
        for c in s:
            if c in sub_str:
                index = sub_str.index(c)
                sub_str = sub_str[index+1:]
            sub_str += c

            if len(sub_str) > ans:
                ans = len(sub_str)
        return ans
