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
        var emailRegex = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
        return emailRegex.test(email);
    };
    
    var isNameValid = function (text) {
        text = text.trim;
        return (text.length > 0 && text < 25);
    };
    
    var isSubjectValid = function (text) {
        text = text.trim;
        return (text.length > 0 && text < 50);
    };
    
    var isMessageValid = function (text) {
        text = text.trim;
        return (text.length > 0 && text < 1000);
    };

    validateForm = function () {
        var data = {
            email: document.getElementById('contact-form-email'),
            name: document.getElementById('contact-form-name'),
            subject: document.getElementById('contact-form-subject'),
            message: document.getElementById('contact-form-message')
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
            alert('Please check the name field.');
            return false;
        }
        
        if (!isMessageValid(data.message)) {
            alert('Please check the message field.');
            return false;
        }
        
        return true;
    };
};



