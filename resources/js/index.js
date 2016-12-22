$(document).ready(function() {

    $( window ).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.nav-focus').addClass("nav-scrolled");
        }
        else {
            $('.nav-focus').removeClass("nav-scrolled");
        }
    });

    $(document).click(function (event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $navbar.collapse('hide');
        }
    });
    
});