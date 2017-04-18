import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssServiceProvider, FeedItem } from '../../providers/rss-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-the-adventure-zone',
  templateUrl: 'the-adventure-zone.html',
})
export class TheAdventureZonePage {

  episodes: FeedItem[];
  loading: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rssService: RssServiceProvider, private iab: InAppBrowser) {
    this.loadEpisodes();
  }

  loadEpisodes() {
    let url = 'http://adventurezone.libsyn.com/rss';
    this.episodes = [];
    this.loading = true;
    this.rssService.getEpisodes(url).subscribe(res => {
      this.episodes = res;
      this.loading = false;
    });
  }

  public openEpisode(url: string) {
    let browser = this.iab.create(url, 'blank'); browser.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheAdventureZonePage');
  }

}
