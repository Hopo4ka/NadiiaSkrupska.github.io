function ContForm(selector) {

    var __self = this;

    var formNode = document.querySelector(selector),
        nameNode = formNode.querySelector('#Name'),
        emailNode = formNode.querySelector('#Email'),
        descriptionNode = formNode.querySelector('#Description');

    //function validName() {
    //    if (nameNode == undefined || nameNode == ' ')
    //        return alert('Please, type your name' );
    //}
    //
    //function validEmail() {
    //    if (emailNode == undefined || emailNode == ' ') {
    //        alert('Please, type your e-mail' );
    //        return;
    //    }
    //}
    //
    //function validDescription() {
    //    if (descriptionNode == undefined || descriptionNode == ' ') {
    //        alert('Please, type your request' );
    //        return;
    //    }
    //}

    function showError(container, errorMessage) {
        container.className = 'error';
        var msgElem = document.createElement('span');
        msgElem.className = "error-message";
        msgElem.innerHTML = errorMessage;
        container.appendChild(msgElem);
    }

    function resetError(container) {
        container.className = '';
        if (container.lastChild.className == "error-message") {
            container.removeChild(container.lastChild);
        }
    }

    function validate(form) {
        var elems = form.elements;

        resetError(elems.Name.parentNode);
        if (!elems.from.value) {
            showError(elems.from.parentNode, ' Укажите от кого.');
        }

        resetError(elems.password.parentNode);
        if (!elems.password.value) {
            showError(elems.password.parentNode, ' Укажите пароль.');
        }

        resetError(elems.message.parentNode);
        if (!elems.message.value) {
            showError(elems.message.parentNode, ' Отсутствует текст.');
        }

    }
}