import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyGeniusesPage } from './baby-geniuses';

@NgModule({
  declarations: [
    BabyGeniusesPage,
  ],
  imports: [
    IonicPageModule.forChild(BabyGeniusesPage),
  ],
  exports: [
    BabyGeniusesPage
  ]
})
export class BabyGeniusesPageModule {}
