window.onload = function () {
    /*
     window.onscroll = function () {
     applyScrollRules();
     };
     
     var applyScrollRules = function () {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.getElementById("header").className = "static";
     } else {
     document.getElementById("header").className = "static mode-transparent";
     }
     };
     */

    var isEmailValid = function (email) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    var isNameValid = function (text) {
        text = text.trim();
        return ((text.length > 0) && (text.length < 25));
    };

    var isSubjectValid = function (text) {
        text = text.trim();
        return ((text.length > 0) && (text.length < 50));
    };

    var isMessageValid = function (text) {
        text = text.trim();
        return ((text.length > 0) && (text.length < 1000));
    };

    validateForm = function () {
        var data = {
            email: document.getElementById('contact-form-email').value,
            name: document.getElementById('contact-form-name').value,
            subject: document.getElementById('contact-form-subject').value,
            message: document.getElementById('contact-form-message').value
        };

        if (!isEmailValid(data.email)) {
            alert('Please check the email field.');
            return false;
        }

        if (!isNameValid(data.name)) {
            alert('Please check the name field.');
            return false;
        }

        if (!isSubjectValid(data.subject)) {
            alert('Please check the subject field.');
            return false;
        }

        if (!isMessageValid(data.message)) {
            alert('Please check the message field.');
            return false;
        }

        return true;
    };

    toogleMoreSkills = function () {
        Array.prototype.forEach.call(
                document.getElementsByClassName("hidden-skills"), function (elm) {
            elm.classList.toggle('nodisplay');
        });
    };
};



