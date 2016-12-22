import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home-component',
    templateUrl: 'home.component.html',
    //styleUrls: [ 'nav.component.css' ],
})

export class HomeComponent {

    ngAfterViewInit(): void {
        var controller = new ScrollMagic.Controller();

        var nextScene = new ScrollMagic.Scene({
            triggerElement: '#scroll-over',
            triggerHook: 1,
            duration: '100%'
        })
            .setTween(TweenMax.to('.carousel-inner', 1, {y: '30%', ease: Power0.easeNone}))
            .addTo(controller);
    }
}
