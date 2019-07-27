# Problem:
#   Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
#   determine if s can be segmented into a space-separated sequence of one or more dictionary words.
#
#   Note:
#     The same word in the dictionary may be reused multiple times in the segmentation.
#     You may assume the dictionary does not contain duplicate words.
#
# Example:
#   Input: s = "leetcode", wordDict = ["leet", "code"]
#   Output: true
#


class Solution:
    def wordBreak(self, s: str, wordDict: 'List[str]') -> bool:
        cache = {}

        self.search_word(s, wordDict, cache)

        if True in cache.values():
            return True

        return False

    def search_word(self, sub_str: str, wordDict: 'List[str]', cache: 'Dict[str, bool]') -> bool:

        if not sub_str:
            return True

        for i in range(len(sub_str)):
            if sub_str[:i + 1] in wordDict:
                rest_str = sub_str[i + 1:]
                if rest_str in cache:

                    result = cache[rest_str]
                    if result:
                        return True
                    else:
                        continue

                result = self.search_word(rest_str, wordDict, cache)
                cache[rest_str] = result

                if result:
                    return True

        return False
