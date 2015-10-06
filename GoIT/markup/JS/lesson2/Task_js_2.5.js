/**
 * Created by Edward on 06.10.2015.
 */

var name = 'admin', text;

text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
        (name == '') ? 'No login' : '';
alert(text);