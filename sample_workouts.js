// //converting an array into a singly linked linkedlist

// //node class
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// //linked list class
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     //add node method
//     append(data) {
//         const node = new Node(data);
//         let currentNode = this.head;

//         if (!currentNode) {
//             this.head = node;
//         } else {
//             while (currentNode.next) {
//                 currentNode = currentNode.next;
//             }

//             currentNode.next = node;
//         }
//         this.size++;
//     }

//     //inset data before a specific node

//     //static method for generating a linked list from an array;
//     static fromArray(array) {
//         //create a linkedlist
//         var list = new LinkedList();
//         //append each element from the array
//         for (const ele of array) {
//             list.append(ele);
//         }
//         return list;
//     }

//     //display the list method;

//     display() {
//         let currentNode = this.head;
//         let nodeString = "";
//         while (currentNode) {
//             nodeString += currentNode.data + "->";
//             currentNode = currentNode.next;
//         }
//         console.log(nodeString + null);
//     }
// }

// //example usage

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const listFromArray = LinkedList.fromArray(arr);

// listFromArray.display();

// //convert an array into a doubly linked list

// class DoubleNode {
//     constructor(data) {
//         this.prev = null;
//         this.data = data;
//         this.next = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     //append node method

//     append(data) {
//         const node = new DoubleNode(data);

//         let currentNode = this.head;

//         if (this.head == null) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.prev = this.tail;
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     //convert array into an double linked list

//     static fromArray(array) {
//         const list = new DoublyLinkedList();

//         for (const ele of array) {
//             list.append(ele);
//         }

//         return list;
//     }

//     display() {
//         let currentNode = this.head;

//         let nodeString = "";

//         while (currentNode) {
//             nodeString += currentNode.data + "<=>";
//             currentNode = currentNode.next;
//         }
//         console.log(nodeString+null) ;
//     }
// }

// let array2=[11,12,13,14];

// const dList=DoublyLinkedList.fromArray(array2);
// dList.display();

// //delete the duplicates nodes from the linked list

// const Node = function (data) {
//     this.data = data;
//     this.next = null;
// };

// class Linkedlist {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     //append node

//     append(data) {
//         const node = new Node(data);
//         let currentNode = this.head;
//         if (this.head == null) {
//             this.head = node;
//         } else {
//             while (currentNode.next) {
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node;
//         }
//     }

//     //display

//     display() {
//         let currentNode = this.head;
//         let nodeString = "";

//         while (currentNode) {
//             nodeString += currentNode.data + "->";
//             currentNode = currentNode.next;
//         }
//         console.log(nodeString + null);
//     }

//     //remove duplicates

//     removeDuplicates() {
//         let currentNode = this.head;
//         while (currentNode.next) {
//             if (currentNode.data === currentNode.next.data) {
//                 currentNode.next = currentNode.next.next;
//             } else {
//                 currentNode = currentNode.next;
//             }
//         }
//     }

//     //convert array into a linkedlist

//     static fromArray(array) {
//         const list = new Linkedlist();
//         for (const ele of array) {
//             list.append(ele);
//         }
//         return list;
//     }
// }

// const array=[1,2,3,3,4,5,6,6,7,8,9,9];

// const mylist= Linkedlist.fromArray(array);
// mylist.display();
// mylist.removeDuplicates();
// mylist.display();

// //Basic Operations

//  //Implement a singly linked list with methods:
//  insertAtHead(value)
//  insertAtTail(value)
//  insertAtPosition(position, value)
//  deleteNode(value)
//  search(value)

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     //insert at head

//     insertAtHead(val) {
//         const node = new Node(val);
//         node.next = this.head;
//         this.head = node;
//         this.size++;
//     }

//     //insert at tail

//     insertAtTail(val) {
//         const node = new Node(val);
//         let currentNode = this.head;
//         while (currentNode.next) {
//             currentNode = currentNode.next;
//         }
//         currentNode.next = node;
//         this.tail = node;

//         this.size++;
//     }

//     //insert at position

//     insertPosition(position, value) {
//         if (position > this.size || position < 0) {
//             console.log("invalid position enterd");
//             return;
//         }

//         const node = new Node(value);
//         if (position == 0) {
//             node.next = this.head;
//             this.head = node;
//             this.size++;
//             return;
//         }

//         let currentPosition = 0;
//         let currentNode = this.head;
//         let previousNode = null;
//         while (currentPosition < position) {
//             currentPosition++;
//             previousNode = currentNode;
//             currentNode = currentNode.next;
//         }

//         previousNode.next = node;
//         node.next = currentNode;
//         this.size++;
//     }

//     //delete node

//     deleteNode(value) {
//         //head condition

//         if (this.head == null) {
//             console.log("the list is empty");
//             return -1;
//         }

//         if (this.head.val === val) {
//             this.head = this.head.next;
//             this.size--;
//             return;
//         }
//         let currentNode = this.head;
//         let previousNode = null;
//         while (currentNode !== null && currentNode.val !== value) {
//             previousNode = currentNode;
//             currentNode = currentNode.next;
//         }

//         if (currentNode == null) {
//             console.log("the node is not presesent in the list ");
//             return -1;
//         }

//         previousNode.next = currentNode.next;

//         this.size--;
//     }

//     search(value) {
//         //head case;

//         if (this.head.val == value) {
//             return 0;
//         }

//         let currentNode = this.head;
//         let currentIndex = 0;
//         while (currentNode.val != val) {
//             currentNode = currentNode.next;
//             currentIndex++;
//         }
//     }
// }

//linked lists and workouts

class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //insert at head

    insertAtHead(data) {
        const node = new Node();

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    //insert at tail

    insertAtTail(data) {
        const node = new Node(data);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;

        this.size++;
    }

    //insert at position

    insertAtPosition(position){

        



    }
}
