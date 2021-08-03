# Problem:
#   Suppose you have a random list of people standing in a queue.
#   Each person is described by a pair of integers (h, k), where h is the height of the person and
#   k is the number of people in front of this person who have a height greater than or equal to h.
#   Write an algorithm to reconstruct the queue.
#
#   Note:
#     The number of people is less than 1,100.
#
#
# Example:
#   Input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
#   Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
#
from functools import cmp_to_key


class Solution:
    def reconstructQueue(self, people: 'List[List[int]]') -> 'List[List[int]]':
        people.sort(key=cmp_to_key(lambda a, b: b[0] - a[0] if a[0] != b[0] else a[1] - b[1]))

        output = []
        for person in people:
            output.insert(person[1], person)

        return output
