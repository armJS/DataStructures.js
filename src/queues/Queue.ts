interface IQueue<T> {
    enqueue(entry: T): void;

    dequeue(): T | undefined;

    peek(): T | undefined;

    size(): number;

    isEmpty(): boolean;

    clear(): void;
}


export default class Queue<T> implements IQueue<T> {
    private count: number = 0;
    private lowestCount: number = 0;
    private items = Object.create(null);

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return result;
    }

    enqueue(entry: T): void {
        this.items[this.count] = entry;
        this.count++;
    }

    isEmpty(): boolean {
        return this.count === this.lowestCount;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    size(): number {
        return this.count - this.lowestCount;
    }

    clear(): void {
        this.items = Object.create(null);
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        Object.values(this.items).join(', ')
    }
}