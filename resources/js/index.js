$( window ).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('.nav-focus').addClass("nav-scrolled");
    }
    else {
        $('.nav-focus').removeClass("nav-scrolled");
    }
});
$(function(){
    $('.carousel').carousel({
        interval: 2000
    });
});