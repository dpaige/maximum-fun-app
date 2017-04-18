import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-the-adventure-zone',
  templateUrl: 'the-adventure-zone.html',
})
export class TheAdventureZonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  openRssPage() {
    this.navCtrl.push('RssFeedsPage', 'adventurezone');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheAdventureZonePage');
  }

}
