/* Вот небольшой документ:
 <ul id="menu">
 <li>Главная страница</li>
 <li>Форум</li>
 <li>Магазин</li>
 </ul>
 1. Что выведет следующий код (простой вопрос)?
 var lis = document.body.getElementsByTagName('li');
 document.body.innerHTML = "";
 alert( lis.length );
 2. А такой код (вопрос посложнее)?
 var menu = document.getElementById('menu');
 var lis = menu.getElementsByTagName('li');
 document.body.innerHTML = "";
 alert( lis.length );*/


1.
0
2.
0 - IE, 3 - others