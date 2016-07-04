$(document).ready(function() {
    var controller = new ScrollMagic.Controller();

    var mainScene = new ScrollMagic.Scene({
    	triggerElement: '#doubleImage',
    	triggerHook: .999
    })
    .setClassToggle('#navbar', 'nav-scrolled')
    .addIndicators()
    .addTo(controller);

    var nextScene = new ScrollMagic.Scene({
    	triggerElement: '#doubleImage',
    	triggerHook: 1,
    	duration: '100%'
    })
    .setTween(TweenMax.to('.carousel-inner', 1, {y: '30%', ease: Power0.easeNone}))
    .addTo(controller);
});