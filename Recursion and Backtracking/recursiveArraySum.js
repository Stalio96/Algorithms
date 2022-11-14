function recursiveArraySum(arr) {
    let res = result(arr, 0);

    console.log(res);
}

function result(arr, index) {
    if(index == arr.length) {
        return 0;
    }

    return arr[index] + result(arr, index + 1);
}

recursiveArraySum([-1, 0, 1])