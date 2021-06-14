// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} -  find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end print the final state of the train (all the wagons separated by a space)

function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (const line of arr) {
        let [comm, n] = line.split(' ');
        if (comm === 'Add') {
            wagons.push(Number(n));
        } else {
            passangers = Number(comm);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passangers <= capacity) {
                    wagons[i] += passangers;
                    break;
                }
            }
        }
    }
    return wagons.join(' ');
}

train(
    ['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75'
    ]
);