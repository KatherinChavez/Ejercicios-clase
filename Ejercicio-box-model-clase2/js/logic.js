// Cómo traer elmentos del DOM en javascript
var element = document.getElementById('title');
console.log('elemento',element);

var paragraphList = document.getElementsByTagName('p');
console.log('getElementsByTagName', paragraphList);

var paragraphListByClass = document.getElementsByClassName('paragraph');
console.log('getElementsByClassName', paragraphListByClass);

//cómo agregar css a un elemento
element.classList.add('title');