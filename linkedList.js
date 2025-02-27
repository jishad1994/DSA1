// //create a linked list

// var Node = function (element) {
//     this.value = element;
//     this.next = null;
// };

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     //add node
//     append(element) {
//         const node = new Node(element);

//         if (this.head == null) {
//             this.head = node;
//         } else {
//             let currentNode = this.head;

//             while (currentNode.next) {
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node;
//         }

//         this.size++;
//     }
//     //remove node

//     remove(element) {
//         var previousNode;
//         var currentNode = this.head;

//         if (currentNode.value === element) {
//             this.head = currentNode.next;
//         } else {
//             while (currentNode.value !== element) {
//                 previousNode = currentNode;
//                 currentNode = currentNode.next;
//             }

//             previousNode.next = currentNode.next;
//         }
//         this.size--;
//     }
//     //checking the node list is empty or not
//     isEmpty() {
//         return this.size === 0;
//     }

//     //checking the index of any element
//     indexOf(element) {
//         let currentNode = this.head;

//         var index = -1;

//         while (currentNode) {
//             index++;

//             while (currentNode.value == element) {
//                 return index;
//             }
//             currentNode = currentNode.next;
//         }
//         return -1;
//     }

//     //find the element at

//     elementAt(index) {
//         var currentNode = this.head;
//         var count = 0;

//         while (count < index) {
//             count++;
//             currentNode = currentNode.next;
//         }
//         return currentNode;
//     }

//     addAt(index, element) {
//         //cretae a new node
//         const node = new Node(element);

//         //set the current node as head;

//         var currentNode = this.head;
//         var previousNode;
//         var currentIndex = 0;

//         //return false if the current index greater the size of the list
//         if (index > this.size) {
//             return false;
//         }

//         if (index == 0) {
//             node.next = currentNode;
//             this.head = node;
//         } else {
//             while (currentIndex < index) {
//                 currentIndex++;
//                 previousNode = currentNode;

//                 currentNode = currentNode.next;
//             }
//             previousNode.next = node;
//             node.next = currentNode;
//         }
//         this.size++;
//     }

//     //remove an element at index

//     removeAt(index) {
//         var currentNode = this.head;
//         var previousNode;

//         var currentIndex = 0;

//         if (index < 0 || index >= this.size) {
//             return null;
//         }
//         if (index == 0) {
//             this.head = currentNode.next;
//         } else {
//             while (currentIndex < index) {
//                 currentIndex++;
//                 previousNode = currentNode;
//                 currentNode = currentNode.next;
//             }

//             previousNode.next = currentNode.next;
//         }

//         this.size--;
//         return currentNode.value;
//     }

//     //display all nodes

//     display() {
//         var currentNode = this.head;

//         var result = "";

//         while (currentNode) {
//             result += currentNode.value + " -> ";
//             currentNode = currentNode.next;
//         }

//         console.log(result + null);
//     }
// }

// const myLinkedList = new LinkedList();
// myLinkedList.append("first");
// myLinkedList.append("second");
// myLinkedList.append("third");
// myLinkedList.append("fifth");
// myLinkedList.addAt(3, "new memebr");
// console.log(myLinkedList.isEmpty());
// console.log(myLinkedList.indexOf("third"));
// console.log(myLinkedList.elementAt(0));
// console.log(myLinkedList.elementAt(4));
// console.log(myLinkedList.display());

// a head is given , remove all nodes that value is a given value

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.next = null;
    }

    append(data) {
        const node = new Node(data);
        let currentNode = this.head;
        let previousNode = null;
        if (currentNode == null) {
            this.head = node;
        } else {
            while (currentNode.next) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.size++;
    }

    //insert at position

    insertAtPosition(position, data) {
        if (position < 0 || position > this.size) {
            console.log("invalid position");
            return -1;
        }

        if (this.head == null || this.size == 0) {
            console.log("the list is empty");
            return -1;
        }

        const node = new Node(data);
        let currentNode = this.head;
        let currentPosition = 0;
        let previousNode = null;
        //case head
        if (position == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            while (currentPosition < position && currentNode !== null) {
                currentPosition++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = node;
            node.next = currentNode;

            this.size++;
        }
    }

    display() {
        if (this.head == null) {
            console.log("the list is empty");
            return;
        }
        let currentNode = this.head;
        let nodeString = "";

        while (currentNode) {
            nodeString += currentNode.data + "->";
            currentNode = currentNode.next;
        }
        console.log(nodeString + null);
    }

    reverse() {
        if (this.head == null) {
            console.log("the list is empty");
            return -1;
        }
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head=prev;

    }
}

const myList = new LinkedList();
myList.append(0);
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(6);
myList.append(7);
myList.append(8);
myList.display();
myList.insertAtPosition(5, 555);
myList.display();
myList.reverse()
myList.display();
