//Фигура се състои от 6 блокчета с размер h * h, разположени като на фигурата вдясно. Долният ляв ъгъл на сградата е на позиция {0, 0}.
//Горният десен ъгъл на фигурата е на позиция {2*h, 4*h}. На фигурата координатите са дадени при h = 2.
//Напишете програма, която чете цяло число h и координатите на дадена точка {x, y} (цели числа), въведени от потребителя като аргументи, и
//отпечатва дали точката е вътре във фигурата (inside), вън от фигурата
//(outside) или на някоя от стените на фигурата (border).

function calc([size, pointX, pointY]) {
    size = Number(size);
    pointX = Number(pointX);
    pointY = Number(pointY);

    let downRectangleHeight =  size;
    let downRectangleWidth = size + size + size;

    let inside = pointX > 0 && pointX < downRectangleWidth && pointY > 0 && pointY < downRectangleHeight;
    let outside = pointX < 0 || pointX > downRectangleWidth || pointY < 0 || pointY > downRectangleHeight;
    let border = !inside && !outside;

    let upRectangleHeight =  size + size + size + size;
    let upRectangleWidth = size;

    let inside2 = pointX > size && pointX < size + upRectangleWidth && pointY > 0 && pointY < upRectangleHeight;
    let outside2 = pointX < size || pointX > size + upRectangleWidth || pointY < 0 || pointY > upRectangleHeight;
    let border2 = !inside2 && !outside2;

    if (inside){
        console.log('inside');
    }else if(inside2){
        console.log('inside');
    }else if (border){
        console.log('border');
    }else if (border2){
        console.log('border');
    }else{
        console.log('outside');
    }
}

 calc(['2', 3, 10]);
 calc(['2', 3, 1]);
 calc(['2', 2, 2]);
 calc(['2', 6, 0]);
 calc(['2', 0, 6]);

 calc(['15', 13, 55]);
 calc(['15', 29, 37]);
 calc(['15', 37, 18]);
 calc(['15', -4, 7]);
 calc(['15', 30, 0]);
