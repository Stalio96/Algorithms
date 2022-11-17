function swapAlgorithm(arr) {
    variations(0, arr);
}

function variations(index, arr) {
    if (index >= arr.length) {
        print(arr);
        return;
    } else {
        variations(index + 1, arr);
        for (let i = index + 1; i < arr.length; i++) {
            swap(arr, index, i);
            variations(index + 1, arr);
            swap(arr, index, i);
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

swapAlgorithm(['A', 'B', 'C']);
