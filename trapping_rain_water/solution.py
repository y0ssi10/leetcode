# Problem:
#   Given n non-negative integers representing an elevation map where the width of each bar is 1,
#   compute how much water it is able to trap after raining.
#


class Solution:
    def trap(self, height: List[int]) -> int:
        ans = 0

        for index in range(len(height)):
            left = max(height[:index + 1])
            right = max(height[index:])
            ans += min(left, right) - height[index]

        return ans
