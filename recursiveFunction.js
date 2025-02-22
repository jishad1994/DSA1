//find factorial of any number using recursive function

const recursive = (number) => {
    //if number is 0 or 1 return 1

    if (number == 0 || number == 1) return 1;
    //base call
    else return number * recursive(number - 1); //recursive case
};

//example usage

console.log(recursive(4));

// finding the fibonnacci numbers

const fibonacci = (n) => {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(4));

const factorial = (n) => {
    if (n == 0 || n == 1) return 1;
    else return n * factorial(n - 1);
};

//delete a specific char from the string

function delChar(string,char,index=0){

if(index==string.length) return ""
let letter= string[index]===char?"":string[index];

return letter+=delChar(string,char,index+1);


}

//example
console.log(delChar("hello world","l"));
