function calc([duljinaMetri, shirinaMetri, stranaNaGarderobMetri]) {
    let roomInSm = (duljinaMetri * 100) * (shirinaMetri * 100);
    let peika = roomInSm / 10;
    let garderob = ((stranaNaGarderobMetri * 100) * (stranaNaGarderobMetri * 100));
    let freePlosht = roomInSm - peika - garderob;
    let dancers = freePlosht / (40 + 7000);

    console.log(Math.floor(dancers));
}

calc([50,
    25,
    2
]);