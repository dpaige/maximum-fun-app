import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheBeefAndDairyNetworkPage } from './the-beef-and-dairy-network';

@NgModule({
  declarations: [
    TheBeefAndDairyNetworkPage,
  ],
  imports: [
    IonicPageModule.forChild(TheBeefAndDairyNetworkPage),
  ],
  exports: [
    TheBeefAndDairyNetworkPage
  ]
})
export class TheBeefAndDairyNetworkPageModule {}
