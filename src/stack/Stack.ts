interface IStack<T> {
    push(entry: T): void;

    pop(): T | undefined;

    peek(): T | undefined;

    isEmpty(): boolean;

    size(): number;

    clear(): void;
}

export default class Stack<T> implements IStack<T> {
    private items = Object.create(null);
    private count: number = 0;

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    push(entry: T): void {
        this.items[this.count] = entry;
        this.count++;
    }

    clear(): void {
        this.items = Object.create(null);
        this.count = 0;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    size(): number {
        return this.count;
    }

    toString() {
        return Object.values(this.items).join(', ');
    }
}