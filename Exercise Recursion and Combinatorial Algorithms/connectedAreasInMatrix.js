let matrix = []
let areas = [];

function connectedAreasInMatrix(arr) {
    matrix = arr;


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == '-') {
                areas.push([row, col, 0]);
                findAreas(row, col);
            }
        }
    }

    console.log('Total areas found: ' + areas.length);

    areas.sort((a, b) => b[2] - a[2]);

    let counter = 1;

    areas.forEach(e => {
        console.log(`Area #${counter++} at (${e[0]}, ${e[1]}), size: ${e[2]}`);
    })
}

function findAreas(row, col) {
    if (isOutOfBounds(row, col) || isNotTraversal(row, col)) {
        return;
    }

    matrix[row][col] = 'V';

    areas[areas.length - 1][2]++;

    findAreas(row + 1, col);
    findAreas(row, col + 1);
    findAreas(row - 1, col);
    findAreas(row, col - 1);
}

function isOutOfBounds(row, col) {
    return row >= matrix.length || row < 0 || col >= matrix[row].length || col < 0;
}

function isNotTraversal(row, col) {
    return matrix[row][col] == 'V' || matrix[row][col] == '*';
}

connectedAreasInMatrix([
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
    ['*', '-', '-', '*', '*', '*', '*', '*', '-', '-'],
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
    ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-']
]);