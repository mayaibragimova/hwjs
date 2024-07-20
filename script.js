// 1 .
for (let index = 1; index <= 100;  index++) {
  console.log(index);
  
}
// 2. 
let num =0;

while (num <=100) {
  if(num % 2 === 0){
    console.log(num);
  }
  num++;
}
// 3.
let i = 2;
let result = 2;
while (i <= 100 ) {
  result = result + i;
 i = i+2;
  
}
console.log(result);

// 4.

let surName = "Naruto Shipuden" 
for (let i = surName.length - 1; i >= 0; i--) {
  const tam = surName.charAt(i);
  if (tam === ('u')) {
    console.log( `${tam}`);
  }
}

// 5 .
let text ='';
let str = 'hello';
for (let i = str.length - 1; i >= 0; i--) {
 text += str [i];
}
console.log(text);
// pictures
let star = '*';
let string = '-';
let number = 10;
let sum = 5 ;

for (let i = 0;  i < sum; i++) {
 let str = '';
 if (i == 0 || i == sum -1) {
  for (let k = 0; k < number; k++) {
    str += star;
  }  
  } else {
    str = star;
    for (let k = 0; k < number - 2; k++) {
      str += string;
    }
    str += star;
  }
    console.log(str);
 }
  // picture 2

 for (let h = 0; h < 7; h++) {
  for (let w = 0; w < h + 1; w++) {
  string = string +'#';
  }
  string = string + '\n'
}
console.log(string);