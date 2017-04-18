import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PodcastDetailPage } from './podcast-detail';

@NgModule({
  declarations: [
    PodcastDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PodcastDetailPage),
  ],
  exports: [
    PodcastDetailPage
  ]
})
export class PodcastDetailPageModule {}
