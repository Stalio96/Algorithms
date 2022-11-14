function recursiveFactorial(n) {

    let sum = factoriel(n);

    console.log(sum);
}

function factoriel(index) {
    if(index == 0) {
        return 1;
    }

    return index * factoriel(index - 1);
}

recursiveFactorial(10);