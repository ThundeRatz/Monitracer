import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BarComponent } from './bar';

@NgModule({
  declarations: [
    BarComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    BarComponent
  ]
})
export class BarComponentModule {}
