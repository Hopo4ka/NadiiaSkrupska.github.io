function ContForm(selector) {

    var __self = this;

    var formNode = document.querySelector(selector),
        nameNode = formNode.querySelector('#name'),
        emailNode = formNode.querySelector('#email'),
        descriptionNode = formNode.querySelector('#description'),
        submitNode = formNode.querySelector('.form-submit');

    submitNode.onclick = function () {
        if (__self.validForm() === true) {
            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: {
                    from: '' + 'box@generation.pictures',
                    to: emailNode.value,
                    subject: 'New request from ' + nameNode.value,
                    body: 'Name: ' + nameNode.value + "\n\r" +
                    'E-mail: ' + emailNode.value + "\n\r" + 'Request: ' + descriptionNode.value
                },
                success: function (data) {
                    data = JSON.parse(data);
                    if (data.message == "success")
                        alert("Thank you! We'll get in touch with you asap!");
                    if (data.error)
                        alert("Error occurred: " + data.error);
                }
            })
        }
    }

    nameNode.addEventListener('focus', function () {
        nameNode.removeAttribute('style');
        nameNode.value = '';
        nameNode.setAttribute("placeholder", "Name...");
    });

    emailNode.addEventListener('focus', function () {
        emailNode.removeAttribute('style');
        emailNode.value = '';
        emailNode.setAttribute("placeholder", "Email...");
    });

    descriptionNode.addEventListener('focus', function () {
        descriptionNode.removeAttribute('style');
        descriptionNode.value = '';
        descriptionNode.setAttribute("placeholder", "Description...");
    });

    this.validForm = function () {
        var mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/;
        var valid = true;
        if (!mailformat.test(emailNode.value)) {
            emailNode.style.border = "1px solid red";
            emailNode.value = "Input correct email";
            emailNode.style.color = "red";
            valid = false;
        }
        if (nameNode.value == '') {
            nameNode.style.border = "1px solid red";
            nameNode.value = "Required field";
            nameNode.style.color = "red";
            valid = false;
        }
        if (descriptionNode.value == '') {
            descriptionNode.style.border = "1px solid red";
            descriptionNode.value = "Required field";
            descriptionNode.style.color = "red";
            valid = false;
        }
        return valid;
    }

}