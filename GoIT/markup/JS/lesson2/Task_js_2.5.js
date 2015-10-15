var name = 'admin';

var text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
        (name == '') ? 'No login' : '';

alert(text);