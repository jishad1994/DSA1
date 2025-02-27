//count wovels in a string

function countVowels(string) {
    let count = 0;
    const vowels="aeiouAEIOU"
    let newString = string.toLowerCase();
    for (char of newString) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

//example useage
console.log(countVowels("aiouejkl"));
