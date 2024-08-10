

const container = document.getElementById('main-heading');
container.style.color = 'red',
container.style.fontSize = '16px'
container.textContent = 'Popular poducts'
console.log(container);


 const teg = document.getElementById('aside');
 teg.remove()
 console.log(teg);



 const removeHeading = 
 function removeHeading() { 
  const head = document.getElementById('second-h3'); 
  head.classList 
      .remove('small heading'); }

      //2.

 const socials = [
  { 
    icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-a5RFpBWAFH_4jT4J4hKN4bs7haQJnYLog&s',
    title: 'Wildberries',
    description:'Wildberries – крупнейший онлайн-ритейлер России, работающий на рынке 17 лет. География присутствия компании охватывает все регионы России. Оборот Wildberries в 2021 году вырос на 93% и достиг 844 млрд руб.',
    link:'https://www.wildberries.ru/',
  }
 ]; 
 
      