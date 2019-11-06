import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-term',
    templateUrl: './term.page.html',
    styleUrls: ['./term.page.scss'],
})
export class TermPage implements OnInit {

    verb$: Observable<any>;

    constructor(public location: Location,
    private route: ActivatedRoute,
    private af: AngularFirestore) { }

    ngOnInit() {
        if (this.route.snapshot.params.id) {
            this.verb$ = this.af
            .collection('dictionary_terms')
            .doc(this.route.snapshot.params.id)
            .valueChanges()
        }
    }

}
