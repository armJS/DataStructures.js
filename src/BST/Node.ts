export default class Node<T> {
    key: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;

    constructor(key: T) {
        this.key = key;
    }
}