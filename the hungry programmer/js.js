function exam(mealsArr, comandsArr) {
  let serve;
  let mealsEaten = 0;

  for(let comand of comandsArr) {
   if(mealsArr.length > 0) {
    if(comand === 'Serve') {
      serve = mealsArr.pop();
      console.log(serve + ' served!');
    }

    if(comand === 'Eat' ) {
      console.log(mealsArr.shift() + ' eaten');
      mealsEaten++;
    }

    if(comand.includes('Consume')) {
      let commandArr = comand.split(' ');
      for(let i = Number(commandArr[1]); i <= Number(commandArr[2]); i++ ) {
          mealsArr.splice(Number(commandArr[1]), 1);
      }

      mealsEaten += Math.abs(Number(commandArr[1]) - Number(commandArr[2])) + 1;
      console.log('Burp!');
    }

    if(comand.includes('Shift')) {
      let commandArr = comand.split(' ');
      let b = mealsArr[commandArr[1]];
      let c = mealsArr[commandArr[2]];
      mealsArr[commandArr[1]] = c;
      mealsArr[commandArr[2]] = b;
    }

    if(comand === 'End' ) {
      break;
    }

    if(comand.includes('Add')) {
      if(comand !== 'Add') {
        let commandArr = comand.split(' ');
        mealsArr.unshift(commandArr[1]);
      }
    }
   }
  }

  if(mealsArr.length === 0) {
    console.log('The food is gone');
  }else{
    console.log('Meals left: ' + mealsArr.join(', '));
  }
   console.log('Meals eaten: ' + mealsEaten);
}

exam(
  ['bacon', 'veggies', 'chicken'],'01. The Hungry Programmer\solution.js'
'01. The Hungry Programmer\solution.js'

['Consume 2 9','Eat','End']
)
/*exam(
  ['bacon', 'veggies', 'chicken'],
  ['Add', 'End']);

exam(
['chicken', 'steak', 'eggs'],
['Serve','End','Eat','Consume 0 1']
);

exam(
  ['carrots', 'apple', 'beet'],
  ['Consume 0 2','End']
);*/
