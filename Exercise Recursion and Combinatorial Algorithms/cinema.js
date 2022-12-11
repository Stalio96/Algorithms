let seats = [];
let combinations = [];
let used = [];

function cinema(people, line) {
    let index = 0;

    seats.length = people.length;

    while (line[index] != 'generate') {
        let tokens = line[index].split(' - ');

        let name = tokens[0];
        let position = Number(tokens[1]) - 1;

        seats[position] = name;

        let indexName = people.indexOf(name);

        people.splice(indexName, 1);

        index++;
    }

    combinations.length = people.length;
    used.length = people.length;

    permute(0, people);
}

function permute(index, people) {
    if (index == combinations.length) {
        print()
    } else {
        for (let i = 0; i < people.length; i++) {
            if (!used[i]) {
                combinations[index] = people[i];
                used[i] = true;
                permute(index + 1, people);
                used[i] = false;
            }
        }
    }
}

function print() {
    let index = 0;
    let arr = [];
    for (let i = 0; i < seats.length; i++) {
        if(seats[i] == null) {
            arr[i] = combinations[index++];
        }else {
            arr[i] = seats[i];
        }
    }

    console.log(arr.join(' '));
}

cinema(['Garry', 'Liam', 'Teddy', 'Anna', 'Buddy', 'Simon'], ['Buddy - 3', 'Liam - 5', 'Simon - 1', 'generate']);