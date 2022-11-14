function recursiveDrawing(n) {
    if (n == 0) {
        return;
    }

    let draw = '';

    for (let i = 1; i <= n; i++) {
        draw += '*';
    }

    if(n != 0) {
        console.log(draw);
    }

    recursiveDrawing(n - 1);

    draw = '';

    for (let j = 0; j < n; j++) {
        draw += '#';
    }

    if(n != 0) {
        console.log(draw)
    }
}

recursiveDrawing(10);