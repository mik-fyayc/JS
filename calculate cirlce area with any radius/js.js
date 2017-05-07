function date(array) {
    let circleRadius = Number(array[0]);
    let circleArea = Math.PI * circleRadius * circleRadius;
    console.log(circleArea.toFixed(2));
}

date(['5']);