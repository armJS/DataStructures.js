import Node from './Node'

enum COMPARE {
    LEST_THEN = -1,
    EQUAL = 0,
    GREATER_THEN = 1,
}

interface IBinarySearchTree<T> {
    insert(key: T): void;

    search(key: T): boolean;

    min(): T | undefined;

    max(): T | undefined;

    remove(key: T): void;

    inOrderTraverse(): void;

    preOrderTraverse(): void;

    postOrderTraverse(): void;
}

function defaultCompare() {

}

export default class BinarySearchTree<T> implements IBinarySearchTree<T> {
    root: Node<T> | null = null;
    compare: Function;

    constructor(compare: Function = defaultCompare) {
        this.compare = compare;
    }


    private insertNode(node: Node<T>, key: T) {
        if (this.compare(key, node.key) === -1) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }


    inOrderTraverse(): void {
    }

    insert(key: T): void {
        if (this.root == null) { // {1}
            this.root = new Node(key); // {2}
        } else {
            this.insertNode(this.root, key); // {3}
        }
    }

    max(): T | undefined {
        return undefined;
    }

    min(): T | undefined {
        return undefined;
    }

    postOrderTraverse(): void {
    }

    preOrderTraverse(): void {
    }

    remove(key: T): void {
    }

    search(key: T): boolean {
        return false;
    }

}