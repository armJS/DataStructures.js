"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = Object.create(null);
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    enqueue(entry) {
        this.items[this.count] = entry;
        this.count++;
    }
    isEmpty() {
        return this.count === this.lowestCount;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.items = Object.create(null);
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        Object.values(this.items).join(', ');
    }
}
exports.default = Queue;
