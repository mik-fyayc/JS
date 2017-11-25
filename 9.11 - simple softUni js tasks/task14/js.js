function task(json) {

    let parsed = JSON.parse(json);

    console.log('Name: ' + parsed.name + '\n' + 'Age: ' + parsed.age + '\n' + 'Date: ' + parsed.date);
}

task('{"name":"Gosho","age":10,"date":"19/06/2005"}');
