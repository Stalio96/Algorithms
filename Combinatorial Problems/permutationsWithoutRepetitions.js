let permutes = [];
let isUsed = [];

function permutationsWithoutRepetitions(arr) {
    variations(0, arr);
}

function variations(index, arr) {
    if (index >= arr.length) {
        print(permutes);
        return;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if(!isUsed[i]) {
                isUsed[i] = true;
                permutes[index] = arr[i];
                variations(index + 1, arr);
                isUsed[i] = false;
            }
        }
    }
}

function print(permutes) {
    console.log(permutes.join(' '));
}

permutationsWithoutRepetitions(['A', 'B', 'C']);