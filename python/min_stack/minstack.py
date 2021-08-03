# Problem:
#   Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
#     push(x) -- Push element x onto stack.
#     pop() -- Removes the element on top of the stack.
#     top() -- Get the top element.
#     getMin() -- Retrieve the minimum element in the stack.
#
# Example:
#   minStack = MinStack()
#   minStack.push(-2)
#   minStack.push(0)
#   minStack.push(-3)
#   minStack.getMin()   --> Returns -3.
#   minStack.pop()
#   minStack.top()      --> Returns 0.
#   minStack.getMin()   --> Returns -2.
#

class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.elements = []
        self.min_elements = []

    def push(self, x: int) -> None:
        self.elements.append(x)
        if not self.min_elements or self.min_elements[-1] >= x:
            self.min_elements.append(x)

    def pop(self) -> None:
        popped = self.elements.pop()
        if self.min_elements[-1] == popped:
            self.min_elements.remove(popped)

    def top(self) -> int:
        return self.elements[-1]

    def getMin(self) -> int:
        return self.min_elements[-1]
