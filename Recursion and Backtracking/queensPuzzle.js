let queenBoard = [
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-']
];

function queensPuzzle() {
    findQueenPosition(0);
}

function findQueenPosition(row) {
    if (row == 8) {
        printSolution(queenBoard);
    } else {
        for (let col = 0; col < 8; col++) {
            if (canPlaceQueen(row, col)) {
                putQueen(row, col);
                findQueenPosition(row + 1);
                removeQueen(row, col);
            }
        }
    }
}

function removeQueen(row, col) {
    queenBoard[row][col] = '-';
}

function putQueen(row, col) {
    queenBoard[row][col] = '*';
}

function canPlaceQueen(row, col) {
    for (let c = 0; c < 8; c++) {
        if(queenBoard[row][c] == '*') {
            return false;
        }
    }

    for (let r = 0; r < 8; r++) {
        if(queenBoard[r][col] == '*') {
            return false;
        }
    }

    let r = row;
    let c = col;

    while(r >= 0 && c >= 0) {
        if(queenBoard[r--][c--] == '*') {
            return false;
        }
    }

    r = row;
    c = col;

    while(r < 8 && c < 8) {
        if(queenBoard[r++][c++] == '*') {
            return false;
        }
    }

    r = row;
    c = col;

    while(r < 8 && c >= 0) {
        if(queenBoard[r++][c--] == '*') {
            return false;
        }
    }

    r = row;
    c = col;

    while(r >= 0 && c < 8) {
        if(queenBoard[r--][c++] == '*') {
            return false;
        }
    }

    return true;
}

function printSolution(queenBoard) {
    for (let chars of queenBoard) {
        let row = '';
        for (let symbol of chars) {
            row += symbol + ' ';
        }
        console.log(row);
    }

    console.log('\n');
}

queensPuzzle();