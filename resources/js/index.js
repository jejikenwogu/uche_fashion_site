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

    (function($) {

        $.fn.parallax = function(options) {

            var windowHeight = $(window).height();

            // Establish default settings
            var settings = $.extend({
                speed        : 0.15
            }, options);

            // Iterate over each object in collection
            return this.each( function() {

                // Save a reference to the element
                var $this = $(this);

                // Set up Scroll Handler
                $(document).scroll(function(){

                    var scrollTop = $(window).scrollTop();
                    var offset = $this.offset().top;
                    var height = $this.outerHeight();

                    // Check if above or below viewport
                    if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                        return;
                    }

                    var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

                    // Apply the Y Background Position to Set the Parallax Effect
                    $this.css('background-position', 'center ' + yBgPosition + 'px');

                });
            });
        }
    }(jQuery));

    $window = $(window);

    $('div[data-type="background"]').each(function(){
        console.log("john1");
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
            console.log("john2");
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% '+ yPos + 'px';

            // move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end window scroll
    });  // end section function

    var controller = new ScrollMagic.Controller();

    var nextScene = new ScrollMagic.Scene({
    	triggerElement: '#scroll-over',
    	triggerHook: 1,
    	duration: '100%'
    })
    .setTween(TweenMax.to('.carousel-inner', 1, {y: '30%', ease: Power0.easeNone}))
    .addTo(controller);
});