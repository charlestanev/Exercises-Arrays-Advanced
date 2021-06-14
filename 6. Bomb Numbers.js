// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
// The output is the sum of the remaining elements in the sequence.

function bombNumbers(sequence, bombArr) {
    let [bomb, power] = bombArr;
    let index = sequence.indexOf(bomb);
    while (index != -1) {
        let start = index - power < 0 ? 0 : index - power;

        sequence.splice(start, power * 2 + 1);
        index = sequence.indexOf(bomb);
    }

    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }

    return sum;
}

bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9], [4, 2]
);

// Output
// 12	

// Comments
// Special number is 4 with power 2. After detontaion we are left with the sequence [1, 2, 9] with sum 12.