import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-the-adventure-zone',
  templateUrl: 'the-adventure-zone.html',
})
export class TheAdventureZonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    
  }

  openRssPage() {
    this.navCtrl.push('RssFeedsPage', 'adventurezone');
  }

  public openTwitter(twitterName: string) {
    let url = 'https://twitter.com/' + twitterName;
    let browser = this.iab.create(url, 'blank'); browser.show();
  }

  public openFacebook(facebookPageName: string) {
    let url = 'https://facebook.com/' + facebookPageName;
    let browser = this.iab.create(url, 'blank'); browser.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheAdventureZonePage');
  }

}
