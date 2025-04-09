/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
class MyStack {

    private queue1: number[];
    private queue2: number[];

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x: number): void {
        this.queue1.push(x);
    }

    pop(): number {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift()!);
        }

        const element = this.queue1.shift()!;
        this.queue1 = this.queue2;
        this.queue2 = [];

        return element;
    }

    top(): number {
        return this.queue1[this.queue1.length - 1];
    }

    empty(): boolean {
        return this.queue1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

