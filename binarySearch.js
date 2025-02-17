
//binary search workout

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
