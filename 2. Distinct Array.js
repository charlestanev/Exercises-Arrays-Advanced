// You will be given an array of integer numbers on the first line of the input (space-separated). 
// Remove all repeating elements from the array. 
// Print the result elements separated by single space.

function distincedArr(arr) {
    let newArr = [];
    for (const i of arr) {
        if (!newArr.includes(i)) {
            newArr.push(i);
        }
    }
    return newArr.join(' ');
}

distincedArr(
    [7, 8, 9, 7, 2, 3, 4, 1, 2]
);

// 7 and 2 are already present in the array remove them