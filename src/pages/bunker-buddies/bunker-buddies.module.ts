import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BunkerBuddiesPage } from './bunker-buddies';

@NgModule({
  declarations: [
    BunkerBuddiesPage,
  ],
  imports: [
    IonicPageModule.forChild(BunkerBuddiesPage),
  ],
  exports: [
    BunkerBuddiesPage
  ]
})
export class BunkerBuddiesPageModule {}
