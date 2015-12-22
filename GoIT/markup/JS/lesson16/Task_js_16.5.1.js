/* Ниже находится документ с таблицей и формой.
 Найдите (получите в переменную) в нём:
 1. Все элементы label внутри таблицы. Должно быть 3 элемента.
 2. Первую ячейку таблицы (со словом "Возраст").
 3. Вторую форму в документе.
 4. Форму с именем search, без использования её позиции в документе.
 5. Элемент input в форме с именем search. Если их несколько, то
 нужен первый.
 6. Элемент с именем info[0], без точного знания его позиции в
 документе.
 7. Элемент с именем info[0], внутри формы с именем search-person.
 Используйте для этого консоль браузера, открыв страницу
 table.html в отдельном окне.*/

1.
document.getElementsByTagName('label');

2.
document.getElementById('age-table').getElementsByTagName('td')[0];

3.
document.getElementsByTagName('form')[1];

4.
document.querySelector('form[name="search"]');

5.
var result = document.querySelector('form[name="search"]');
result.getElementsByTagName('input')[0];

6.
document.getElementsByName("info[0]")[0];

7.
document.querySelector('form[name="search-person"] [name="info[0]"]');
