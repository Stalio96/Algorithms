let source = [];
let spare = [];
let destination = [];
let step = 1;

function towerOfHanoi(n) {
    for (let i = n; i >= 1; i--) {
        source.push(i);
    }
    printRods();

    let disk = n;

    solve(disk, source, destination, spare);
}

function solve(disk, source, destination, spare) {
    if (disk == 1) {
        destination.push(source.pop());
        console.log(`Step #${step++}: Moved disk`);
        printRods();
    }else {
        solve(disk - 1, source, spare, destination);
        solve(1, source, destination, spare);
        solve(disk - 1, spare, destination, source);
    }
}

function printRods() {
    console.log(`Source: ${source.join(', ')}`)
    console.log(`Destination: ${destination.join(', ')}`);
    console.log(`Spare: ${spare.join(', ')}`);
    console.log('\n');
}


towerOfHanoi(3);