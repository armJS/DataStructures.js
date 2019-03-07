"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("../src/stack/Stack"));
const usage_1 = require("../src/stack/usage");
test('Stack basic test', () => {
    const stack = new Stack_1.default();
    stack.push(1);
    stack.push(4);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(4);
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(4);
    expect(stack.size()).toBe(1);
    expect(stack.clear());
    expect(stack.isEmpty()).toBe(true);
    expect(usage_1.baseConverter(1000, 16)).toBe('3E8');
    expect(usage_1.baseConverter(10, 2)).toBe('1010');
});
