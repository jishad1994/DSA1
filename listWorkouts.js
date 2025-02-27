class Node {
    //node class
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //append at the end
    append(data) {
        const node = new Node(data);
        let currentNode = this.head;
        if (this.head == null) {
            this.head = node;
        } else {
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.size++;
    }

    //create from array
    static fromArray(array) {
        const newList = new LinkedList();
        for (const ele of array) {
            newList.append(ele);
        }
        return newList;
    }

    //display the list
    display() {
        let currentNode = this.head;
        let nodeString = "";
        if (this.head == null) return -1;

        while (currentNode !== null) {
            nodeString += currentNode.data + "->";
            currentNode = currentNode.next;
        }
        console.log(nodeString + null);
    }

    //remove a node before and after a specific node

    removeBeforeAndAfter(data) {
        if (this.head == null) {
            console.log("the list is empty");
            return null;
        }

        let currentNode = this.head;
        let previousNode = null;
        while (currentNode && currentNode.next.data !== data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode) {
            previousNode.next = currentNode.next;
            (currentNode.next.next = currentNode.next.next), next;
        } else {
            return -1;
        }
    }

    //reverse the list

    reverse() {
        if (this.head == null) {
            console.log("the list is empty");
            return null;
        }
        let next = null;
        let current = this.head;
        let prev = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

let array = [0, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10];

const myList = LinkedList.fromArray(array);

myList.display();
myList.append(11);
myList.display();

//function to do operations if only the head of the list is given;

//finding an node from the list
function find(head, target) {
    if (head == null) return -1;

    let currentNode = head;
    let currentIndex = 0;

    //case head

    if (head.data == target) return 0;

    while (currentNode !== null && currentNode.data !== target) {
        currentIndex++;
        currentNode = currentNode.next;
    }
    if (currentNode !== null) return currentIndex;

    return -1;
}

//remove a node from the list if head is given\

function popNode(head, target) {
    if (head == null) {
        console.log("the list is empty");
        return null;
    }
    if (head.data == target) {
        return head.next;
    }

    let currentNode = head;
    let previousNode = null;
    while (currentNode !== null && currentNode.data !== target) {
        previousNode = currentNode;
        currentNode = currentNode.next;
    }

    if (currentNode !== null) {
        previousNode.next = currentNode.next;
    }
    return head;
}

//print a list if head is given

function print(head) {
    if (head == null) return null;

    let currentNode = head;
    let string = "";

    while (currentNode) {
        string += currentNode.data + "->";
        currentNode = currentNode.next;
    }

    console.log(string + null);
}

//function to remove duplicates from a sorted list

function removeDuplicates(head) {
    if (head == null) return null;

    let currentNode = head;
    while (currentNode !== null && currentNode.next !== null) {
        if (currentNode.data == currentNode.next.data) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    return head;
}

//remove duplicates  from unsorted lists

function removeDuplicatesUnsorted(head) {
    if (head == null) {
        console.log("the list is empty");
        return null;
    }

    //create a new set to add already appeared nodes;

    const mySet = new Set();
    let currentNode = head;
    //traverse the list

    while (currentNode !== null && currentNode.next != null && currentNode.next.next) {
        if (mySet.has(currentNode.data)) {
            currentNode.next = currentNode.next.next;
            continue;
        } else {
            mySet.add(currentNode.data);
        }
        currentNode = currentNode.next;
    }

    return head;
}

//return the middle node using floyds fast and slow pointer

function middleNode(head) {
    if (!head) return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

const res = removeDuplicatesUnsorted(myList.head);

print(res);
console.log(middleNode(myList.head));
