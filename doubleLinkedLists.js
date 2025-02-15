//create  a double linked list

var Node = function (value) {
    this.prev = null;
    this.value = value;
    this.next = null;
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // append a new node at the tail
    append = function (element) {
        const node = new Node(element);

        let currentNode = this.head;
        let previousNode = null;

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    };

    //remove any node

    remove = function (element) {
        let currentNode = this.head;

        let previousNode = null;

        //case head node
        if (this.head.value === element) {
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = currentNode.next;
                this.head.prev = null;
            }
            this.size--;
            return;
        }

        //case middle node removal

        while (currentNode && currentNode.value !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        // If node not found
        if (!currentNode) {
            console.log("Element not found in the list.");
            return;
        }

        //case tail node
        if (currentNode == this.tail) {
            this.tail = currentNode.prev;
            this.tail.next = null;
            this.size--;
            return;
        } else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
            this.size--;
        }
    };

    //display the whole linked list
    display = function () {
        let currentNode = this.head;
        let emptyString = "";
        while (currentNode) {
            emptyString += currentNode.value + "<=>";
            currentNode = currentNode.next;
        }
        console.log(emptyString + null);
    };

    //append at a specified index;
    appendAt = function (index, element) {
        //new node created
        const node = new Node(element);

        let currentIndex = 0;
        let currentNode = this.head;
        let previousNode = null;
        if (index < 0 || index >= this.size) {
            console.log("entered invalid index");
            return;
        }

        if (index == 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.size++;
        } else if (index == this.size) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.size++;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = node;
            node.prev = previousNode;
            node.next = currentNode;
            currentNode.prev = node;
            this.size++;
        }
    };

    //remove node at specific index
    removeAt = function (index) {
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        //invalid index condition
        if (index < 0 || index >= this.size) {
            console.log("invalid index");
            return;
        }
        //conditon head node
        if (index == 0) {
            if (this.size == 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = currentNode.next;
                this.head.prev = null;
            }
            this.size--;
            return;
        }

        //condition middle node
        while (currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.next;
        }

        //condition tail node
        if (currentNode == this.tail) {
            this.tail = currentNode.prev;
            this.tail.next = null;
        } else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        this.size--;
    };
}

const myLinkedList = new DoubleLinkedList();

myLinkedList.append("zero");
myLinkedList.append("one");
myLinkedList.append("two");
myLinkedList.append("three");
myLinkedList.append("four");
myLinkedList.appendAt(2, "intruder");
myLinkedList.display();
myLinkedList.removeAt(0);
myLinkedList.display();
