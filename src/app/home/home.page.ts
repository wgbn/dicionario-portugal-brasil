import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { valuesWithId } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    dictionaryFull: any[] = [];
    dictionary: any[] = [];

  constructor(private af: AngularFirestore) {}

  ngOnInit() {
      this.af.collection('dictionary_terms').snapshotChanges()
      .pipe(valuesWithId)
      .subscribe((terms: any[]) => {
          this.dictionaryFull = terms.sort((a,b) => a.term == b.term ? 0 : a.term < b.term ? -1 : 1);
          this.dictionary = [...this.dictionaryFull];
      });
  }

  filter(value) {
      if (value) {
          this.dictionary = [...this.dictionaryFull.filter(verb => verb.term.toLowerCase().indexOf(value.toLowerCase()) > -1)];
      } else {
          this.dictionary = [...this.dictionaryFull];
      }
  }

}
