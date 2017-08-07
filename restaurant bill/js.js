function test(array) {
    let text = [];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            text.push(array[i]);
        }else {
            sum += Number(array[i]);
        }
    }

    let txt2 = text.join(', ');
    console.log(`You purchased ${txt2} for a total sum of ${sum}`);
}

test(['Beer Zagorka',
    '2.65',
    'Tripe soup',
    '7.80',
   'Lasagna',
   '5.69']);

