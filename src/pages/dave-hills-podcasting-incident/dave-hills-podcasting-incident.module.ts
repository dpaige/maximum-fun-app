import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaveHillsPodcastingIncidentPage } from './dave-hills-podcasting-incident';

@NgModule({
  declarations: [
    DaveHillsPodcastingIncidentPage,
  ],
  imports: [
    IonicPageModule.forChild(DaveHillsPodcastingIncidentPage),
  ],
  exports: [
    DaveHillsPodcastingIncidentPage
  ]
})
export class DaveHillsPodcastingIncidentPageModule {}
