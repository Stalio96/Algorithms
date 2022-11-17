function binom(n, k) {
    if (k > n) {
        return 0;
    }

    if(k == 0 || k == n) {
        return 1;
    }

    return binom(n - 1, k - 1) + binom(n - 1, k );
}

let binoma = binom(49, 6);
console.log(binoma);