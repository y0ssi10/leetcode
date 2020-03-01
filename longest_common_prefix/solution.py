# Problem:
#   Write a function to find the longest common prefix string amongst an array of strings.
#   If there is no common prefix, return an empty string "".
#
# Example:
#   Input: ["flower","flow","flight"]
#   Output: "fl"
#


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ''

        if len(strs) == 1:
            return strs[0]

        base_str = strs[0]
        rest_strs = strs[1:]

        temp_prefix = ''
        result = ''
        for i in range(len(base_str)):
            temp_prefix += base_str[i]
            if len([ s for s in rest_strs if s.startswith(temp_prefix)]) == len(rest_strs):
                result += base_str[i]
            else:
                break

        return result
