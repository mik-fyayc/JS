function sum(array) {
    let a = Number(array[0]);
    let b = Number(array[1]);
    let c = Number(array[2]);

    let sum = a + b + c;
    let vat = sum * 0.2;
    let total = sum + vat;
    console.log(sum);
    console.log(vat);
    console.log(total);

}

sum(["1.20","2.60", "3.50"]);