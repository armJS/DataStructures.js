"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
var COMPARE;
(function (COMPARE) {
    COMPARE[COMPARE["LEST_THEN"] = -1] = "LEST_THEN";
    COMPARE[COMPARE["EQUAL"] = 0] = "EQUAL";
    COMPARE[COMPARE["GREATER_THEN"] = 1] = "GREATER_THEN";
})(COMPARE || (COMPARE = {}));
function defaultCompare() {
}
class BinarySearchTree {
    constructor(compare = defaultCompare) {
        this.root = null;
        this.compare = compare;
    }
    insertNode(node, key) {
        if (this.compare(key, node.key) === -1) {
            if (node.left == null) {
                node.left = new Node_1.default(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
        else {
            if (node.right == null) {
                node.right = new Node_1.default(key);
            }
            else {
                this.insertNode(node.right, key);
            }
        }
    }
    inOrderTraverse() {
    }
    insert(key) {
        if (this.root == null) { // {1}
            this.root = new Node_1.default(key); // {2}
        }
        else {
            this.insertNode(this.root, key); // {3}
        }
    }
    max() {
        return undefined;
    }
    min() {
        return undefined;
    }
    postOrderTraverse() {
    }
    preOrderTraverse() {
    }
    remove(key) {
    }
    search(key) {
        return false;
    }
}
exports.default = BinarySearchTree;
