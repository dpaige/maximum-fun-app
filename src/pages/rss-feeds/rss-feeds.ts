import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssServiceProvider, FeedItem } from '../../providers/rss-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-rss-feeds',
  templateUrl: 'rss-feeds.html',
})
export class RssFeedsPage {

  episodes: FeedItem[];
  loading: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rssService: RssServiceProvider, private iab: InAppBrowser) {
    this.loadEpisodes(navParams);
   }

  loadEpisodes(navParams) {
    let url = 'http://' + navParams.data + '.libsyn.com/rss';
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
