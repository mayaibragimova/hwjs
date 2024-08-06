// 1.
 const  computers = [
  {
    title:'macbook air m1',
    price: 85000,
  },
  {
    title:'dell',
    price: 65000,
  },
   {
    title:'asus zenbook',
    price: 40000,
  },
   {
    title:'acer aspire',
    price: 45000,
  } ,
  {
    title:'macbook pro',
    price: 100000,
  },
  
 ];
 computers.sort(function (a, b) {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  
  
});
  console.log(computers);


  /// по убив

  const  computer = [
    {
      title:'macbook air m1',
      price: 85000,
    },
    {
      title:'dell',
      price: 65000,
    },
     {
      title:'asus zenbook',
      price: 40000,
    },
     {
      title:'acer aspire',
      price: 45000,
    } ,
    {
      title:'macbook pro',
      price: 100000,
    },
    
   ];
   computer.sort(function (a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    
    return 0;
  });
    console.log(computer);
   
  


 /// 2.
 const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
grades.sort((prev, next) => prev-next);
 console.log(grades);



 const grade1 = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
 
 grade1.sort(function(a, b) {
    return b - a;
  });
  console.log(grade1);



 /// 3.

 const fruits = ['strawbery', 'mango', 'watermelon', 'grapes', 'lemon', 'kiwi'];
fruits.sort()
console.log(fruits);


const fruit = ['strawbery', 'mango', 'watermelon', 'grapes', 'lemon', 'kiwi'];
fruit.sort().reverse()
console.log(fruit);


 //4. 
 const number = [4, 123, -5, 6, 100];
console.log(Math.min(4, 123, -5, 6, 100));


const numbers = [4, 123, -5, 6, 100];
console.log(Math.max(4, 123, -5, 6, 100));
 
 //5.

 
 
   const formatDate = (date) => {
       const day = date.getDay();
       const month = `${date.getMonth() + 1}` .padStart(2, '0');
       const year = date.getFullYear();
    
    return `0${day}:${month}:{year}`;
  };


const formatDateString = FormatData(new Date('2023-12-04'));
console.log(formatDateString);
 


 //6. 
 const instagramUser = {
  userName: 'Maya0909',
  email: 'mayaibragimova@gmail.com',
  password:'09091999' 
 }
 console.log(Object.values(instagramUser));



 const instagramUser1 = {
  userName: 'Maya0909',
  email: 'mayaibragimova@gmail.com',
  password:'09091999' 
 }
 console.log(Object.keys(instagramUser1));


