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

    # horizontal scanning
    def logest_common_prefix_2(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ''

        prefix = strs[0]
        for current_str in strs[1:]:
            while current_str.find(prefix) != 0:
                prefix = prefix[:len(prefix)-1]
                if len(prefix) == 0:
                    return ''
        return prefix


    # divide and conquer
    def longest_common_prefix_3(self, strs: List[str]) -> str:
        def common_prefix(left: str, right: str) -> str:
            min_length = min(len(left), len(right))
            for i in range(min_length):
                if left[i] != right[i]:
                    return left[:i]
            return left[:min_length]

        def divide_and_conquer(strs: List[str], left_index: int, right_index: int) -> str:
            if (left_index == right_index):
                return strs[left_index]

            middle = (l + r) // 2
            lcp_left = divide_and_conquer(strs, l, middle)
            lcp_right = divide_and_conquer(strs, middle+1, right_index)

            return common_prefix(lcp_left, lcp_right)

        if len(strs) == 0:
            return ''

        return divide_and_conquer(strs, 0, len(strs) - 1)