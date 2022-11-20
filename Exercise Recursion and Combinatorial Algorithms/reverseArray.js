function reverseArray(arr) {
    let index = arr.length - 1;

    recurse(arr, index);
}

let result = [];

function recurse(arr, index) {
    if(index < 0) {
        console.log(result.join(' '));
        return;
    }

    result.push(arr[index]);

    return recurse(arr, index - 1);
}

reverseArray([1, 2, 3, 4, 5, 6]);