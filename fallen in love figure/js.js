function fallenLove([n]) {
    let sideSpace = n * 2;
    let tilda = 0;
    let middleDots = 0;
    let start0ne = 1;
    let num = n;
    let doubleNum = n * 2;

    for (let i = 1; i <= n; i++) {
        console.log('#' + '~'.repeat(tilda) + '#' + '.'.repeat(sideSpace) + '#' + '.'.repeat(middleDots)+ '#'  + '.'.repeat(sideSpace) + '#' + '~'.repeat(tilda) + '#');

        tilda++;
        sideSpace -= 2;
        middleDots +=2;
    }

    for (let i = 1; i <= n; i++) {
        console.log('.'.repeat(start0ne) + '#' + '~'.repeat(num) + '#' + '.'.repeat(doubleNum) + '#' + '~'.repeat(num) + '#' + '.'.repeat(start0ne) );

        start0ne += 2;
        num -= 1;
        doubleNum -= 2;
    }

    console.log('.'.repeat(n * 2 + 1) + '####' + '.'.repeat(n * 2 + 1));

    for (let i = 1; i <= n; i++) {
        console.log('.'.repeat(n * 2 + 2) + '##' + '.'.repeat(n * 2 + 2));
    }
}

fallenLove([3]);