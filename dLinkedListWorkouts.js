class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DlinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const node = new Node(data);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.size++;
    }

    //prepend

    prepend(data) {
        const node = new Node(data);

        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.size++;
    }

    static fromArray(array) {
        const list = new DlinkedList();

        for (let ele of array) {
            list.append(ele);
        }
        return list;
    }

    display() {
        if (this.head == null) {
            console.log("list is empty");
            return null;
        }
        let currentNode = this.head;
        let nodeString = "";
        while (currentNode) {
            nodeString += currentNode.data + "<=>";
            currentNode = currentNode.next;
        }
        console.log(nodeString + null);
    }

    //delete prev and next node

    pnDel(data) {
        if (this.head == null || this.head.next == null) {
            console.log("not enough nodes to perforn action");
            return -1;
        }
        if(this.head.data==data){
            console.log("not enough nodes to perforn action");
            return -1; 
        }

        if (this.tail.data == data) {
            console.log("cant delete the tail");
            return -1;
        }
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode !== null && currentNode.data !== data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.prev.next = currentNode;
        currentNode.prev = previousNode.prev;
        currentNode.next = currentNode.next.next;
        currentNode.next.next.prev = currentNode;
    }
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myList = DlinkedList.fromArray(array);
myList.display();
myList.prepend(555);
myList.pnDel(5)
myList.display();