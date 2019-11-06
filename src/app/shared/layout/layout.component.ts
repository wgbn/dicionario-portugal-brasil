import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

    @Input() showNavigation: boolean = true;

    active = '';

    constructor(private router: Router) { }

    ngOnInit() {
        if (this.router.url.indexOf('home') > -1) {
            this.active = 'home';
        } else if (this.router.url.indexOf('curiosity') > -1) {
            this.active = 'curiosity';
        } else if (this.router.url.indexOf('tips') > -1) {
            this.active = 'tips';
        }
    }

}
