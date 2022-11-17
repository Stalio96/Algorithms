let variation = [];
let array = []

function combinationsWithoutRepetition(arr, seats) {
    variation.length = seats;
    array = arr;

    combinations(0, 0);
}

function combinations(index, start) {
    if (index == variation.length) {
        print(variation)
    } else {
        for (let i = start; i < array.length; i++) {
            variation[index] = array[i];

            combinations(index + 1, i + 1);
        }
    }
}

function print(arr) {
    console.log(arr.join(' '));
}

combinationsWithoutRepetition(['A', 'B', 'C'], 2);