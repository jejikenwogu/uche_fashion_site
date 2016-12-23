import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<nav-component></nav-component>
<router-outlet></router-outlet>
<footer-component></footer-component>
`
})
export class AppComponent {  }
