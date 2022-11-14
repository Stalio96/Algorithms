function main(n) {
    let memory = [];

    memory.length = n;

    fillVector(memory, 0);
}

function fillVector(memory, index) {
    if(index >= memory.length) {
        print(memory);
        return;
    }

    for(let i = 0; i <= 1; i++) {
        memory[index] = i;
        fillVector(memory, index + 1);
    }
}

function print(memory) {
    let br = '';
    for(let i = 0; i < memory.length; i++) {
        br += memory[i];
    }
    console.log(br)
}

main(3);