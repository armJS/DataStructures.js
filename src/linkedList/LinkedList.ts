interface ILinkedList<T> {
    push(element: T): void;

    insert(element: T, position: number): void;

    getElementAt(index: number): T | void;

    remove(element: T): T | undefined;

    indexOf(element: T): number;

    removeAt(index: number): T | undefined;

    isEmpty(): boolean;

    size(): number;

    toString(): string;
}


class Node<T> {
    element: T;
    next: Node<T> | undefined;

    constructor(element: T) {
        this.element = element;
    }
}


export default class LinkedList<T> implements ILinkedList<T> {
    private count: number = 0;
    private head: Node<T> | undefined;
    private equalsFn: (a: Node<T>, s: Node<T>) => boolean = (a, b) => a === b;


    getElementAt(index: number): void | T {
        return undefined;
    }

    indexOf(element: T): number {
        return 0;
    }

    insert(element: T, position: number): void {
    }

    isEmpty(): boolean {
        return false;
    }

    push(element: T): void {
        const node = new Node(element);
        let current;

        if(this.head === undefined) {
            this.head = node;
        } else {
           current = this.head;
           while (current.next !== undefined) {
               current = current.next;
           }
           current.next = node;
           this.count++;
        }

    }

    remove(element: T): T | undefined {
        return undefined;
    }

    removeAt(index: number): T | undefined {
        if( index => 0 &&  index < this.count) {
            
        }

        else {
            return undefined;
        }
    }

    size(): number {
        return 0;
    }

}