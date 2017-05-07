function date(array) {
   let year = Number(array[0]);
    let month = Number(array[1]);
    let day = Number(array[2]);

    let nextDay = new Date(year,month,day + 1);

    console.log(nextDay);
}

date(['2016','9','31']);