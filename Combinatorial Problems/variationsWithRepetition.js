let variation = [];
let used = [];

function variationsWithRepetition(arr, seats) {
    variation.length = seats;
    used.length = seats;

    variations(0, arr);
}

function variations(index, arr) {
    if (index >= variation.length) {
        print(variation);
        return;
    }

  for (let i = 0; i < arr.length; i++) {
        variation[index] = arr[i];
        variations(index + 1, arr);
  }
}

function print(arr) {
    console.log(arr.join(' '));
}

variationsWithRepetition(['A', 'B', 'C'], 2);