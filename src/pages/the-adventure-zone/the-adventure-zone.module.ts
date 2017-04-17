import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheAdventureZonePage } from './the-adventure-zone';

@NgModule({
  declarations: [
    TheAdventureZonePage,
  ],
  imports: [
    IonicPageModule.forChild(TheAdventureZonePage),
  ],
  exports: [
    TheAdventureZonePage
  ]
})
export class TheAdventureZonePageModule {}
