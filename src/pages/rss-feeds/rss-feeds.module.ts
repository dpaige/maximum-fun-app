import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RssFeedsPage } from './rss-feeds';

@NgModule({
  declarations: [
    RssFeedsPage,
  ],
  imports: [
    IonicPageModule.forChild(RssFeedsPage),
  ],
  exports: [
    RssFeedsPage
  ]
})
export class RssFeedsPageModule {}
