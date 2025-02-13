//create a stack

function Stack() {
    this.count = 0;

    this.storage = {};
    //add data to the stack
    this.push = function (data) {
        this.storage[this.count] = data;
        this.count++;
    };

    //pop the last entered data from it
    this.pop = function () {
        let result = this.storage[this.count - 1];
        delete this.storage[this.count - 1];
        this.count--;
        return result;
    };

    //peek the data that last entered

    this.peek = function () {
        return this.storage[this.count - 1];
    };

    //return the size of the stack
    this.size = function () {
        return this.count;
    };
}

const myStack = new Stack();

myStack.push("fuhad");
myStack.push("jishad");
myStack.push("irfan");

console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
