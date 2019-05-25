# Problem:
#   Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
#   find all unique combinations in candidates where the candidate numbers sums to target.
#
#   The same repeated number may be chosen from candidates unlimited number of times.
#
# Note:
#   All numbers (including target) will be positive integers.
#   The solution set must not contain duplicate combinations.
#
# Example:
#
#   Input: candidates = [2,3,6,7], target = 7,
#   A solution set is:
#     [
#       [7],
#       [2,2,3]
#     ]
#


class Solution:
    def combinationSum(self, candidates: 'List[int]', target: int) -> 'List[List[int]]':
        output = []
        self.back_track(target, 0, candidates, [], output)
        return output

    def back_track(self, rest: int, index: int, candidates: 'List[int]', arr: 'List[int]',
                   output: 'List[List[int]]') -> None:
        if rest < 0:
            return

        if rest == 0:
            output.append(arr)
            return

        for i in range(index, len(candidates)):
            self.back_track(rest - candidates[i], i, candidates, arr + [candidates[i]], output)
