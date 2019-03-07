import Queue from "../src/queues/Queue";


test('Queue basic test', () => {
    const queue = new Queue<string>();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('text 1');
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toEqual('text 1');
    expect(queue.size()).toBe(1);
    expect(queue.dequeue());
    expect(queue.isEmpty());
});