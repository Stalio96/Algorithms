let path = [];
function pathsInLabyrinth(lab) {
    findPath(lab, 0, 0, ' ');
}

function findPath(lab, row, col, direction) {
    if (!isInBounds(lab, row, col)
        || lab[row][col] == 'V'
        || lab[row][col] == '*') {
        return;
    }
    
    path.push(direction);

    if (lab[row][col] == 'e') {
        printPath(path);
        path.pop();
        return;
    }
    
    lab[row][col] = 'V';
    
    findPath(lab, row + 1, col, 'D');
    findPath(lab, row - 1, col, 'U');
    findPath(lab, row, col - 1, 'L');
    findPath(lab, row, col + 1, 'R');
    
    lab[row][col] = '-';
    path.pop();
}

function printPath(path) {
    console.log(path.join('').trim());
    return;
}

function isInBounds(lab, row, col) {
    return row < lab.length && row >= 0 && col < lab[row].length && col >= 0;
}

pathsInLabyrinth([
    ['-','*','*' ,'-','e'],
    ['-','-','-','-','-'],
    ['*','*','*','*','*']
]);

// pathsInLabyrinth([
//     ['-','-','-'],
//     ['-','*','-'],
//     ['-','-','e']
// ]);