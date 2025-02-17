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

