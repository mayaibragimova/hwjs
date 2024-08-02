const number = [1, 2, 3, 4, 5];
function square(num) {
  return num * num;
}
let square_number = number.map(square);
console.log(square_number);


// 3.
const num = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const newNum = num.filter(val => {
  return val % 2 === 0;
});
console.log(newNum);


/// 4.

const users = [ 
  { firstName: 'Jhon', lastName:'Obama', age: 34, gender: 'male'},
  { firstName: 'Ariana', lastName:'Grande', age: 22, gender: 'female'},
  { firstName: 'Naruto', lastName:'Uzumaki', age: 19, gender: 'male'},
  { firstName: 'Kakashi', lastName:'Natake', age: 28, gender: 'male'},
  { firstName: 'Sakura', lastName:'chan', age: 18, gender: 'female'},  
  ]
  const newUser = users.filter((newUser) => newUser.gender === 'female' )
  console.log(newUser);

  /// 5. 
  const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
  const init = 0;
   const num1 = numbers.reduce ((acc, curr) => acc + curr, init, );
   console.log(num1);

///6. 

const numbers1 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const nums = numbers1.filter((item) => item % 2 !== 0)
const nums1 = nums.reduce ((acc, curr) => acc + curr, );
console.log(nums1);

// 7.

const user = [ 
  { firstName: 'Jhon', lastName:'Obama', age: 34, gender: 'male'},
  { firstName: 'Ariana', lastName:'Grande', age: 22, gender: 'female'},
  { firstName: 'Naruto', lastName:'Uzumaki', age: 19, gender: 'male'},
  { firstName: 'Kakashi', lastName:'Natake', age: 28, gender: 'male'},
  { firstName: 'Sakura', lastName:'chan', age: 18, gender: 'female'},  
  ]
  const newUser1 = user.find((newUser1) => newUser1.firstName === 'Naruto')
console.log(newUser1);
 
///  8.

const number1 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6 ];
const newnum = num.findIndex(val => {
  return val  === 34;
});
console.log(newnum);
