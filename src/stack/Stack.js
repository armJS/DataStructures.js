"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.items = Object.create(null);
        this.count = 0;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    push(entry) {
        this.items[this.count] = entry;
        this.count++;
    }
    clear() {
        this.items = Object.create(null);
        this.count = 0;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    toString() {
        return Object.values(this.items).join(', ');
    }
}
exports.default = Stack;
