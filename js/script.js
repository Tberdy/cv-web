var applyScrollRules = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "static";
    } else {
        document.getElementById("header").className = "static mode-transparent";
    }
};

window.onscroll = function () {
    applyScrollRules();
};