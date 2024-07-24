
// 1.
function addNumbers (x, y) {
  for (let index = x; index < y ; index++) {
    console.log(index);
    }
} addNumbers ( 1, 100)

// 2.
  function numbers (y, x) {
   for (let i = y; i < x; i++) {
   if (i % 2 == 0) {
    console.log(i);
   }
   }
    }numbers (2, 100);

// 3.
function calCulateSum(x, y) {
  let num = null;
  for (let index = x; index < y; index++) {
   num += index;
  }
    return num;
  }
  const result = calCulateSum (2, 100);
  console.log(result);

   4.
  let findChar ='word char';

  console.log(findChar.length);

  for (let i = 0;i < findChar.length;  i++) {
    let char = findChar.charAt(i);
    if (char === 'e') {
      console.log( `${char}`);
    } else {
      console.log('false');
    }
  }

  
// 5.

  const rev = (str) => {
    return str.split('').reverse()
  };
  
  console.log(rev('hello'));