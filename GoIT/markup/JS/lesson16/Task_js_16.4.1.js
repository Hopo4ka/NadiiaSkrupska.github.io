/* Для страницы:
 <!DOCTYPE HTML>
 <html>
 <head>
 <meta charset="utf-8">
 </head>
 <body>
 <div>Пользователи:</div>
 <ul>
 <li>Маша</li>
 <li>Вовочка</li>
 </ul>
 <!-- комментарий -->
 <script>
 // ... ваш код
 </script>
 </body>
 </html>
 Напишите код, который получит элемент HEAD.
 Напишите код, который получит UL.
 Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?
 */

console.log(document.documentElement.firstChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].children[1]);