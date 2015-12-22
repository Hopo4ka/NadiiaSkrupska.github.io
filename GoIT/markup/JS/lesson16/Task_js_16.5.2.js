/* Есть дерево из тегов <ul>/<li>.
 Напишите код, который для каждого элемента <li> выведет:
 Текст непосредственно в нём (без подразделов).
 Количество вложенных в него элементов <li> — всех, с учётом вложенных.
 */

eachLi = document.getElementsByTagName('li');
for (var i = 0; i < eachLi.length; i++) {
    alert(eachLi[i].firstChild.data + ': ' + eachLi[i].getElementsByTagName('li').length);
}