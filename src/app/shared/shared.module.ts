import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { map } from 'rxjs/operators';

export const valuesWithId = map((actions: Object[]) => actions.map((a: any) => ({ id: a.payload.doc.id, ...a.payload.doc.data() })))

@NgModule({
  declarations: [
      LayoutComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
      CommonModule,
      IonicModule,
      LayoutComponent
  ]
})
export class SharedModule { }
