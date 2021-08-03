# Problem:
#   Given a collection of intervals, merge all overlapping intervals.
# 
# Example:
#   Input: [[1,3],[2,6],[8,10],[15,18]]
#   Output: [[1,6],[8,10],[15,18]]
# 

class Solution:
    def merge(self, intervals: 'List[List[int]]') -> 'List[List[int]]':
        n = len(intervals)
        if n < 2:
            return intervals
        
        sorted_intervals = sorted(intervals, key=lambda x: x[0])
        merged_array = []
        
        for interval in sorted_intervals:
            if not merged_array:
                merged_array.append(interval)
                continue
                
            if self.is_overlap(merged_array[-1], interval):
                merged_array[-1][1] = max(merged_array[-1][1], interval[1])
                
            else:
                merged_array.append(interval)

        return merged_array
           
    def is_overlap(self, arr1: 'List[int]', arr2: 'List[int]') -> bool:
        return arr1[1] >= arr2[0]
    
        