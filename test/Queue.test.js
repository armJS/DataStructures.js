"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = __importDefault(require("../src/queues/Queue"));
test('Queue basic test', () => {
    const queue = new Queue_1.default();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('text 1');
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toEqual('text 1');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue());
    expect(queue.isEmpty());
});
