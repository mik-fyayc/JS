//Напишете програма, която чете n-на брой цели числа (n > 0), въведени от потребителя като аргументи, и
//намира най-малкото измежду тях. Първо се въвежда броят числа n, а след това самите n числа.

//Напишете програма, която чете n-на брой цели числа (n &gt; 0), въведени от потребителя като аргументи, и
//намира най-малкото измежду тях. Първо се въвежда броят числа n, а след това самите n числа.

function biggestNum(array) {
    for (let i = 1; i < array.length; i++) {
        if( array[1] < Number(array[i]) ) {
            array[1] = array[i];
        }
    }
    console.log(array[1]);
}

biggestNum([2, 100, 99,45, 4554, 56, -3 ]);

function smallestNum(array) {
    for (let i = 1; i < array.length; i++) {
        if( array[1] > Number(array[i]) ) {
            array[1] = array[i];
        }
    }
    console.log(array[1]);
}

smallestNum([2, 100, 99,45, 4554, 56, -3 ]);