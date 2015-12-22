/* Для любого документа сделаем следующее:
 var aList1 = document.getElementsByTagName('a');
 var aList2 = document.querySelectorAll('a');
 Что произойдёт со значениями aList1.length,
 aList2.length, если в документе вдруг появится ещё
 одна ссылка <a href="#">...</a>?*/

aList1 = aList1.length + 1
aList2 = aList2.length