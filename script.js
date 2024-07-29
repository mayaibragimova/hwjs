//1

const student1 = {
  name: "Myrzagul",
  lang: "kg",
  age: 24,
};
const student2 = Object.assign({}, student1);
delete student2["age"];
console.log(student1, "object");
console.log(student2, "object");
//2

// написала в тетрадь

//3

let array = [
  "true",
  3,
  {
    name: "zn",
    hobbies: "swimming, reading",
  },
  "hello",
];

console.log(array);
const newArray = array.push(5);
array.unshift(1);
array.shift(1);

console.log(array.slice(0, -3));
const array2 =  array.pop()
const array3 =  array.pop()
console.log(array);


///  4.

let arr = [1, 2, 3, 'df', 4, 'df', {}, 3, true, 2, [1, 6, 3], 1 ];

function arraySum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Object.prototype.toString.call(array[i]) === '[object Number]') {
			sum += array[i];
		}
	}
	return sum
}
console.log(arraySum(arr)) 