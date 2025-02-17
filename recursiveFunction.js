//find factorial of any number using recursive function

const recursive = (number) => {
    //if number is 0 or 1 return 1

    if (number == 0 || number == 1) return 1 ;   //base case
    else return number * recursive(number - 1);     //recursive case
};

//example usage 

console.log(recursive(4))