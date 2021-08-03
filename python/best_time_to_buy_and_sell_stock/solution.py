# Problem
#
# Say you have an array for which the ith element is the price of a given stock on day i.
#
# If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
# design an algorithm to find the maximum profit.
#
# Note that you cannot sell a stock before you buy one.
#
# Example:
#
# Input: [7,1,5,3,6,4]
# Output: 5
#


class Solution:
    def maxProfit(self, prices: 'List[int]') -> int:

        if not prices:
            return 0

        min_price = prices[0]
        max_profit = 0

        for price in prices[1:]:
            if min_price > price:
                min_price = price
                continue

            profit = price - min_price
            if profit > max_profit:
                max_profit = profit

        return max_profit
