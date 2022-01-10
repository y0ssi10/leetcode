/*
 * @lc app=leetcode id=707 lang=typescript
 *
 * [707] Design Linked List
 */

// @lc code=start

interface ValNode {
  val: number;
  next: ValNode | null;
}

class MyLinkedList {

  private head: ValNode | null;
  private size: number;

    constructor() {
      this.head = null;
      this.size = 0;
    }

    get(index: number): number {
      if (index < 0 || index >= this.size || this.size === 0) {
        return -1;
      }

      let count = 0;
      let node = this.head;
      while (index > count) {
        node = node.next;
        count += 1;
      }

      return node.val;
    }

    addAtHead(val: number): void {
      const cur: ValNode = { val, next: this.head };
      this.head = cur;
      this.size += 1;
    }

    addAtTail(val: number): void {
      if (this.size === 0) {
        this.addAtHead(val);
        return;
      }

      let count = 0;
      let node = this.head;
      while (count < this.size - 1) {
        node = node.next;
        count += 1;
      }
      const cur: ValNode = { val, next: null };
      node.next = cur;
      this.size += 1;
    }

    addAtIndex(index: number, val: number): void {
      if (index < 0 || index > this.size) {
        return;
      }

      if (index === 0) {
        this.addAtHead(val);
        return;
      }

      if (index === this.size) {
        this.addAtTail(val);
        return;
      }

      let count = 0;
      let node = this.head;
      while (index - 1 > count) {
        node = node.next;
        count += 1;
      }
      const cur: ValNode = { val, next: node.next };
      node.next = cur;
      this.size += 1;
    }

    deleteAtIndex(index: number): void {
      if (index < 0 || index >= this.size || this.size === 0) {
        return;
      }

      if (index === 0) {
        this.head = this.head.next;
        this.size -= 1;
        return;
      }

      let count = 0;
      let node = this.head;
      while (index - 1 > count) {
        node = node.next;
        count += 1;
      }
      node.next = node.next?.next || null;
      this.size -= 1;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
