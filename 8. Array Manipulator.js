// Write a function that receives an array of integers and array of string commands and executes them over the array. The commands are as follows:
// •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array.

function arrayManipulator(arr, commands) {

    for (const line of commands) {
        let [comm, index, ...elements] = line.split(' ');
        index = Number(index);
        elements = elements.map(Number);

        if (comm == 'add' || comm == 'addMany') {
            arr.splice(index, 0, ...elements);
        } else if (comm == 'contains') {
            let el = index;
            console.log(arr.indexOf(el));
        } else if (comm == 'remove') {
            arr.splice(index, 1);
        } else if (comm == 'shift') {
            let rotations = index % arr.length;
            let splicedPart = arr.splice(0, rotations);
            arr.push(...splicedPart);
        } else if (comm == 'sumPairs') {
            for (let i = 0; i < arr.length; i++) {
                let secondEl = arr[i + 1] ? arr[i + 1] : 0;
                arr[i] += secondEl;
                arr.splice(i + 1, 1);
            }
        } else if (comm == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }
}

arrayManipulator(
    [1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);