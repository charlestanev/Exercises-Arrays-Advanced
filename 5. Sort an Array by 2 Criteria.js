// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as array of strings.
// The output is the ordered array of strings.

function sortByTwoCriteria(input) {
    let copyOfArray = input.slice();
    copyOfArray.sort(customSorting);

    console.log(copyOfArray.join('\n'));

    function customSorting(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
}

sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George", 'Aarie']);