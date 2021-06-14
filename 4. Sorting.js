// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as array of strings.
// The output is the ordered array of strings.

function sorting(input) {
    let copyOfArray = input.slice();
    copyOfArray.sort((a, b) => a - b);
    let length = copyOfArray.length - 1;
    let finalArray = [];

    for (let i = 0; i <= length; i += 2) {
        let biggest = copyOfArray.pop();
        let smallest = copyOfArray.shift();
        finalArray.push(biggest, smallest);
    }

    console.log(finalArray.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

// Output
// 94 1 69 2 63 3 52 18 31 21