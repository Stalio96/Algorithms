function permutationsWithRepetitions(arr) {
    variations(0, arr);
}

function variations(index, arr) {
    if (index >= arr.length) {
        print(arr);
        return;
    }

    variations(index + 1, arr);

    let swapped = [];

    swapped.push(arr[index])

    for (let i = index + 1; i < arr.length; i++) {
        if (!swapped.includes(arr[i])) {
            swap(arr, index, i);
            variations(index + 1, arr);
            swap(arr, index, i);
            swapped.push(arr[i]);
        }
    }
}

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function print(arr) {
    console.log(arr.join(' '));
}

permutationsWithRepetitions(['A', 'B', 'B', 'A']);