let arr = [];

function nestedLoopsToRecursion(n) {
    arr.length = n;

    permute(0, n);
}

function permute(index, n) {
    if (index == arr.length) {
        print(arr);
    }else {
        for (let i = 1; i <= n; i++) {
            arr[index] = i;
            permute(index + 1, n);
        }
    }
}

function print(arr) {
    console.log(arr.join(' '));
}

nestedLoopsToRecursion(3);