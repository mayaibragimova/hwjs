console.log(10===10);
console.log(10===9);

let apartment = 63;
 if (apartment > 1 && apartment<20) {
  console.log('first entrance');
 } else if (apartment >21 && apartment < 48) {
  console.log('second entrance');
 } else if (apartment > 49 && apartment < 90) {
  console.log('third entrance');
 }


console.log(0 < 5 );
console.log( 5 < 0);

const hour = 18;
if (hour > 5 && hour < 13) {
  console.log('доброе утро');
} else if (hour > 13 && hour < 17) {
  console.log('добрый день');
} else if(hour >17 && hour < 23) {
  console.log('добрый вечер');
}
const name = 'Nooruz'
console.log('кутман тан Нооруз');
 
const age =  65;
if( age >= 7 && age <= 64) {
  console.log('без скидка');
} else if ( age >0 && age <7) {
console.log('скидка');
} else if ( age >64 ) {
  console.log(' скидка');
}

let userGame = Number(prompt("напишите цыфры от 1 до 3. 1 камень, 2 - ножница, 3 - бумага"))
let progGame = Math.ceil(Math.random() * 3)

if (userGame === 1 && progGame > 1 && userGame === 2 && progGame=== 3) {
    alert("пабеда")
}
else if (userGame === 3 && progGame < 3 && userGame === 2 && progGame === 1) {
    alert("проигрыш")
} else {
    alert("ничья")
}
let number = 7
if (number % 2 === 0) { 
  console.log('Число чётное');
} else { 
 console.log('Число нечётное');
}
// Инструкция if вычисляет условие в скобках и, если результат true, то выполняет блок кода.
// В приведённом выше коде условие это простая проверка цыфры (четное , нечетное)  java script сначала проверит if четное . Если это неверно, тогда срботает последний   else нечетное

// Присутствие блока else не является обязательным.
let num = 6;
  console.log( num===5 ? 'five': 'not five');