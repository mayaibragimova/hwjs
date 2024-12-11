// 1.
let createStudent = {
  fullName:'Myrzagul Sultanova',
  age:24,
  education:{
    university:'Peaksoft Mockow',
    faculty:'js',
    gpa: 3,
  },
   sayHello: () => {
    console.log('Myrzagul Sultanova');
  }, 
}
 console.log(createStudent);


// 2.


const objectKey = {
  name: 'Myrzagul',
   age: 24,
   
   };
   
function deleteKey(object, key) {
  if (key in object) {
    delete object[key];
    return object;
  }else {
    return `Key ${key} missing from object`
  }
}

console.log(deleteKey(objectKey,'name'));
console.log(deleteKey(objectKey,'univerity'));

// 3
const user = {
  username:'Maya',
  email: 'mayaibragimova@gmail.com',
  age: 24,
  password: 1234,
 };
  const sum = 5;
  
  const userEmail = prompt('enter your email');
  if(userEmail !== user.email){
    alert ('sorry, there is no such email')
  } else {
    const userPassword = prompt('enter your password');
    if(userPassword !== user.password){
      alert ('invalid password')
    } else {
      const userPrize = prompt( '2+3=? ');
      if (parseInt(userPrize) === sum) {
        user.sum = 5;
        alert(`your password in correct = ${user.sum}`);
      } else {
        alert ('incorrect answer');
      }
    }
  }

