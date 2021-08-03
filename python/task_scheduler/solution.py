# Problem:
#   Given a char array representing tasks CPU need to do.
#   It contains capital letters A to Z where different letters represent different tasks.
#   Tasks could be done without original order.
#   Each task could be done in one interval.
#   For each interval, CPU could finish one task or just be idle.
#
#   However, there is a non-negative cooling interval n that means between two same tasks,
#   there must be at least n intervals that CPU are doing different tasks or just be idle.
#
#   You need to return the least number of intervals the CPU will take to finish all the given tasks.
#


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        dic = {}
        for task in tasks:
            if task in dic:
                dic[task] = dic[task] + 1
            else:
                dic[task] = 1

        print(dic)
        max_count = 0
        task_count = 0
        for key in dic.keys():
            if dic[key] > max_count:
                max_count = dic[key]
                task_count = 1
            elif dic[key] == max_count:
                task_count += 1
            else:
                pass

        return max((max_count - 1) * (n + 1) + task_count, len(tasks))
