// You will receive two arrays of integers. The second array is contains exactly three numbers. 
// First number represents the number of elements you have to take from the first array (starting from the first one).
// Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// Third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."

function searchForNumber(sequence, commands) {
    let numbersToTake = commands.shift();
    let numbersToDelete = commands.shift();
    let numberToFind = commands.shift();

    let test = 0;
    let newArr = sequence.slice(0, numbersToTake).splice(numbersToDelete);
    for (const i of newArr) {
        if (i == numberToFind) {
            test++;
        }
    }

    return (`Number ${numberToFind} occurs ${test} times.`);

}

searchForNumber(
    [5, 2, 3, 4, 1, 6], [5, 2, 3]
);

// Output
// "Number 3 occurs 1 times."

// Comments
// First we take 5 elements from the array. Delete the first 2 elements. 
// Then we search for the number 3.