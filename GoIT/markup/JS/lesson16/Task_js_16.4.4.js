/*Напишите код, который выделит все ячейки в таблице по диагонали.
 Вам нужно будет получить из таблицы table все диагональные td и
 выделить их, используя код:
 // в переменной td DOM-элемент для тега <td>
 td.style.backgroundColor = 'red';*/

var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}