import Stack from "../src/stack/Stack";
import {baseConverter} from "../src/stack/usage";

test('Stack basic test', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(4);

    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(4);
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(4);
    expect(stack.size()).toBe(1);

    expect(stack.clear());
    expect(stack.isEmpty()).toBe(true);
    expect(baseConverter(1000, 16)).toBe('3E8');
    expect(baseConverter(10, 2)).toBe('1010');
});