/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {

    private stack1: number[];
    private stack2: number[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x: number): void {
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop()!);
        }

        this.stack1.push(x);

        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop()!);
        }
    }

    pop(): number {
        return this.stack2.pop()!;
    }

    peek(): number {
        return this.stack2[this.stack2.length-1];
    }

    empty(): boolean {
        return this.stack2.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
