//Напишете програма, която чете n-на брой числа, въведени от потребителя, и пресмята сумата, минимума и
//максимума на числата на четни и нечетни позиции (броим от 1). Когато няма минимален / максимален
//елемент, отпечатайте “No”.

//Изходът да се форматира в следния вид:
//"OddSum=" + {сума на числата на нечетни позиции},
//"OddMin=" + { минимална стойност на числата на нечетни позиции } / {“No”},
//"OddMax=" + { максимална стойност на числата на нечетни позиции } / {“No”},
//"EvenSum=" + { сума на числата на четни позиции },
//"EvenMin=" + { минимална стойност на числата на четни позиции } / {“No”},
//"EvenMax=" + { максимална стойност на числата на четни позиции } / {“No”}

function num(array) {
    let oddTotalSum = 0;
    let evenTotalSum = 0;
    let oddMax = Number.NEGATIVE_INFINITY;
    let oddMin = Number.POSITIVE_INFINITY;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i < array.length; i += 2) {
        oddTotalSum += Number(array[i]);
        if( oddMin > Number(array[i]) ) {
            oddMin = array[i];
        }

        if (oddMax < Number(array[i])) {
            oddMax = array[i];
        }
    }

    for (let k = 2; k < array.length; k += 2) {
        evenTotalSum += Number(array[k]);
        if( evenMin > Number(array[k]) ) {
            evenMin = array[k];
        }

        if (evenMax < Number(array[k])) {
            evenMax = array[k];
        }
    }

    if (oddMax == '-Infinity') {
        oddMax == 'no';
    }

    if (oddMin == '-Infinity') {
        oddMin == 'no';
    }

    if (evenMax === Number.NEGATIVE_INFINITY) {

    }


    if (evenMin == '-Infinity') {
        evenMin == 'no';
    }

    console.log('OddSum=' + oddTotalSum + ',');
    if (oddMin === Number.POSITIVE_INFINITY) {
        console.log('OddMin=' + 'no' +',');
    }else{
        console.log('OddMin=' + oddMin +',');
    }

    if (oddMax === Number.NEGATIVE_INFINITY) {
        console.log('oddMax=' + 'no' +',');
    }else{
        console.log('oddMax=' + oddMax +',');
    }

    console.log('EvenSum=' + evenTotalSum +',');

    if (evenMin === Number.POSITIVE_INFINITY) {
        console.log('EvenMin=' + 'no' +',');
    }else{
        console.log('EvenMin=' + evenMin +',');
    }

    if (evenMax === Number.NEGATIVE_INFINITY) {
        console.log('EvenMax=' + 'no' +',');
    }else{
        console.log('EvenMax=' + evenMax +',');
    }
}

//num(['6', '2', '3', '5', '4', '2', '1']);
//num(['2','1.5','-2.5']);
num(['1','1']);