function price([n]) {
    console.log('#'.repeat(n * 4 + 1));
    let sharp = (n * 2) - 1;
    let pase = (n * 2) - 1;
    let one = 1;
    let secondOne = 1;
    let cliomba =Math.floor((n / 2) + 1);

    for (let i = 1; i <= n; i++) {
        if(i === cliomba) {
            console.log('.'.repeat(cliomba) + '#'.repeat(pase) + ' '.repeat(Math.floor(n / 2 - 1)) + '(@)' + ' '.repeat(Math.floor(n / 2 - 1)) + '#'.repeat(pase) + '.'.repeat(cliomba));
            pase -= 2;
            one += 2;
        }else{
            console.log('.'.repeat(i) + '#'.repeat(pase) + ' '.repeat(one) + '#'.repeat(pase) + '.'.repeat(i));
            pase -= 2;
            one += 2;
        }
    }

    for (let i = 1; i <= n; i++) {
        console.log('.'.repeat(n + secondOne) + '#'.repeat(sharp) + '.'.repeat(n + secondOne));
        sharp -= 2;
        secondOne++;
    }
}

price([18]);