class Solution:
    def groupAnagrams(self, strs: 'List[str]') -> 'List[List[str]]':
        output = {}

        for s in strs:
            sorted_s = ''.join(sorted(s))
            if sorted_s in output:
                output[sorted_s].append(s)
            else:
                output[sorted_s] = [s]

        return list(output.values())