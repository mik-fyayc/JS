function task(arr) {
    let obj = "{";
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i].split(' -> ');
        obj += "'" + n[0] + "' : '" + n[1] + "'";
    }
    obj += "}";
    console.log(JSON.stringify(obj));

}

task(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']);
