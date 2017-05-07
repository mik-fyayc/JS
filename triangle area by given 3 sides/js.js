function date(array) {
    let side1 = Number(array[0]);
    let side2 = Number(array[1]);
    let side3 = Number(array[2]);

    let s = (side1+side2+side3) / 2;
    let triangleArea = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3));

    console.log(triangleArea);
}

date(['2','3.5','4']);