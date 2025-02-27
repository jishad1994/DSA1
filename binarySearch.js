//binary search workout

//find an element in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //sorted array

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target == array[middle]) {
            return middle;
        } else if (target < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 11));

//find the first occurance of an element using binary serch on a sorted array

function firstOccurance(array, target) {
    let left = 0;
    let right = array.length - 1;
    let result = -1;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);
        if (array[middle] === target) {
            result = middle;
            right = middle - 1;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return result;
}

//example

console.log(firstOccurance([1, 2, 3, 3, 4, 5], 3)); //output index 2 the first occurance





//3  find the first element that is greater than a target element

function findTheFirstGreater(array, target) {
    let left = 0;
    let right = array.length - 1;
    let result = -1;
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);
        if (array[middle] > target) {
            result = array[middle];
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return result;
}

//example
console.log(findTheFirstGreater([1,3,5,7,9],6))


//reeverse a string using recursion 

function reverse(string){


if(string==="") return "";

return reverse(string.substring(1))+string[0];

}

//example usage
console.log(reverse("jishad"))