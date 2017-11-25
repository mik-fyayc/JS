function task(info) {
    let arr = info.split(' -> ');

    console.log(`Name: ${arr[0]} \nAge: ${arr[1]} \nGrade: ${arr[2]}`);
}

task('Pesho -> 13 -> 6.00');
