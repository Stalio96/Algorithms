let variation = [];
let used = [];

function variationsWithoutRepetitions(arr, seats) {
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
    if(!used[i]) {
        used[i] = true;
        variation[index] = arr[i];
        variations(index + 1, arr);
        used[i] = false;
    }
  }
}

function print(arr) {
    console.log(arr.join(' '));
}

variationsWithoutRepetitions(['A', 'B', 'C'], 2);