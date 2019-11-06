import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermPage } from './term.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: TermPage },
    { path: ':id', component: TermPage },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TermPage]
})
export class TermPageModule { }
