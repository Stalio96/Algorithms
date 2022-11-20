let arr = [];

function combinationsWithRepetition(n, k) {
    arr.length = k;

    combinations(0, 1, n);
}

function combinations(index, start, n) {
    if (index == arr.length) {
        print(arr);
    } else {
        for (let i = start; i <= n; i++) {
            arr[index] = i;
            combinations(index + 1, i, n);
        }
    }
}

function print(arr) {
    console.log(arr.join(' '));
}

combinationsWithRepetition(5, 3);