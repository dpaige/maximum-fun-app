import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-podcast-detail',
  templateUrl: 'podcast-detail.html',
})
export class PodcastDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) { }

  openRssPage() {
    this.navCtrl.push('RssFeedsPage', this.navParams.data.rss);
  }

  public openTwitter() {
    let twitterName = this.navParams.data.twitter;
    let url = 'https://twitter.com/' + twitterName;
    let browser = this.iab.create(url); browser.show();
  }

  public openFacebook() {
    let facebookPageName = this.navParams.data.facebook;
    let url = 'https://facebook.com/' + facebookPageName;
    let browser = this.iab.create(url); browser.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PodcastDetailPage');
  }

}
