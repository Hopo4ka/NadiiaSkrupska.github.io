/* Придумайте самый короткий код для проверки, пуст ли элемент elem.
 «Пустой» — значит нет дочерних узлов, даже текстовых.
 if (...ваш код проверки elem...) { узел elem пуст }
 Что написать в условии if ?*/

if (!elem.hasChildNodes);

if (!elem.childNodes.length);