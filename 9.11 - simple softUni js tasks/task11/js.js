function task(arr) {
    let word = '';
  let search = arr[arr.length - 1];
  let nArr = arr.join(' ').split(' ');
  nArr.pop();
    console.log(nArr);

    for (let i = 1; i < nArr.length; i++) {
        if(search === nArr[i]) {
            word = nArr[i + 1];
        }
    }

    if(word === '') {
        console.log('None');
    }else {
        console.log(word);
    }
}

task(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);
