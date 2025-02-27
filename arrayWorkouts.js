//find the first unique element
let arr = [1, 5, 6, 3, 2, 5, 6, 7, 33, 7, 4, 3, 2, 1];

function firstUnique(array) {
    let freq = {};

    for (ele of array) {
        freq[ele] = (freq[ele] || 0) + 1;
    }
    //iterat throuh the array to find the firat unique by comparing the frequency
    for (ele of array) {
        if (freq[ele] == 1) {
            console.log("first unique element is: ", ele);
            return;
        }
    }
    console.log("no unique elements found in the array");
}

//example usage

firstUnique(arr); //output:33

//  2: reverse an array

function reverseArray(array) {
    //set left and right indexes;
    let left = 0;
    let right = array.length - 1;

    //swap the left and right
    while (left < right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //output:[10,9,8,7,6,5,4,3,2,1]

// 3: reverse the word(inbuilt method)

function reverseWord(string) {
    let reversedString = string.split("").reverse().join("");
    return reversedString;
}

console.log(reverseWord("hello world")); //output:dlrow olleh

// 4:reverse the string without inbuilt methods

function rev(string) {
    let arr = string.split("");

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        right--;
        left++;
    }

    return arr.join("");
}

//example
console.log(rev("madagascar"));


//find the max profit

function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}

console.log(maxProfit([1, 2, 3, 4, 5, 6]));
