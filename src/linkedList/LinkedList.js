"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(element) {
        this.element = element;
    }
}
class LinkedList {
    constructor() {
        this.count = 0;
        this.equalsFn = (a, b) => a === b;
    }
    getElementAt(index) {
        return undefined;
    }
    indexOf(element) {
        return 0;
    }
    insert(element, position) {
    }
    isEmpty() {
        return false;
    }
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head === undefined) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next !== undefined) {
                current = current.next;
            }
            current.next = node;
            this.count++;
        }
    }
    remove(element) {
        return undefined;
    }
    removeAt(index) {
        if (index => 0 && index < this.count) {
        }
        else {
            return undefined;
        }
    }
    size() {
        return 0;
    }
}
exports.default = LinkedList;
