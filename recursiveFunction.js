//find factorial of any number using recursive function

function factorial(n){

if(n<=1) return 1;

return n*factorial(n-1);



}
//example usage

console.log(factorial(4));

// finding the fibonnacci numbers
function fibonacci(n){
if(n<=1) return n;

return fibonacci(n-1)+fibonacci(n-2);


}

console.log(fibonacci(8));



//delete a specific char from the string

function delChar(string,char,index=0){

if(index==string.length) return ""
let letter= string[index]===char?"":string[index];

return letter+=delChar(string,char,index+1);


}

//example
console.log(delChar("hello world","l"));


//reverse a string using recursive function

function reverseString(string){



if(string==="") return "";

return reverseString(string.substring(1))+string[0];


}

console.log(reverseString("madagascar"))

//replace character of a string using recursive


function recursive(string,char,replace,index=0){

if(index== string.length) return "";

let letter=string[index]===char?replace:string[index];

return letter+recursive(string,char,replace,index+1);


}

console.log(recursive("hello world","l","L"))