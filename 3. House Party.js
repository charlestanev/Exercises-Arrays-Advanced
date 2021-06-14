// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.

function houseParty(input) {
    let test = [];
    let guests = [];

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(' ');
        let name = element.shift();
        let command = element.join(' ');

        if (command === 'is going!') {
            let checkAName = checkForAName(name, guests);
            if (checkAName) {
                test.push(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }

        } else if (command === 'is not going!') {
            let checkAName = checkForAName(name, guests);
            if (checkAName) {
                let indexOfName = indexOfAName(name, guests);
                guests.splice(indexOfName, 1);
            } else {
                test.push(`${name} is not in the list!`);
            }
        }
    }

    function checkForAName(inputValue, array) {
        let isInTheList = false;
        for (let i = 0; i < array.length; i++) {
            if (inputValue === array[i]) {
                return true;
            }
        }
        return isInTheList;
    }

    function indexOfAName(inputValue, array) {
        for (let index in array) {
            if (inputValue === array[index]) {
                return index;
            }
        }
    }

    for (let element of test) {
        console.log(element);
    }
    for (let element of guests) {
        console.log(element);
    }
}

houseParty(
    ['Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!'
    ]
);

// Output
// John is not in the list!
// Allie