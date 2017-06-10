//Напишете програма, която проверява дали точка {x, y} се намира върху някоя от страните на правоъгълник
//{x1, y1} – {x2, y2}. Входните данни се състоят от 6 аргумента(реда), подадени от потребителя: числата x1, y1,
//x2, y2, x и y. Да се отпечата “Border” (точката лежи на някоя от страните) или “Inside / Outside” (в противен случай).

function smallShop([x1, y1, x2, y2, x, y]) {
    let leftX = Math.min(x1, x2);
    let rightX = Math.max(x1, x2);
    let topY = Math.min(y1, y2);
    let bottomY = Math.max(y1, y2);

    let inside = x > leftX && x < rightX && y < bottomY && y > topY;
    let outside = x < leftX || x > rightX || y > bottomY || y < topY;

    if (inside || outside){
        console.log('Inside / Outside');
    }else{
        console.log('Border');
    }
}

smallShop([2, -3, 12, 3, 8, 1]);