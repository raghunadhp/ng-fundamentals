 import { Component } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [
        `.nav.navbar-nav { font-size: 15px; }
        #searchform { margin-right: 100px; }
        @media (max-width: 1200px) {#searchform {display:none}}
        li > a.active { color: #F97924; }`
    ]
})

export class NavBarComponent {}
