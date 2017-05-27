/*Правоъгълник е зададен с координатите на два от своите срещуположни ъгъла (x1, y1) – (x2, y2). Да се пресметнат
площта и периметъра му. Входът се въвежда от потребителя. Числата x1, y1, x2 и y2 са дадени по едно на ред. Изходът се
извежда на конзолата и трябва да съдържа два реда с по едно число на всеки от тях – лицето и периметъра.*/
function rectangleAreaParameter([arg1, arg2, arg3, arg4]) {
     let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    let sideA = Math.abs(x1 - x2);
    let sideB = Math.abs(y1 - y2);

    let plosht = sideA * sideB;
    let perimetur = 2 * (sideA + sideB);

    console.log(plosht);
    console.log(perimetur);
}


rectangleAreaParameter(["30","40","70","-10"]);