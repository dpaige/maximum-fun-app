import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-the-beef-and-dairy-network',
  templateUrl: 'the-beef-and-dairy-network.html',
})
export class TheBeefAndDairyNetworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openRssPage() {
    this.navCtrl.push('RssFeedsPage', 'beefanddairynetwork');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheBeefAndDairyNetworkPage');
  }

}
