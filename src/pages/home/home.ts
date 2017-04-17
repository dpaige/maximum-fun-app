import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  podcasts: Array<{title: string, image: string, hosts: string, page: string }>;

  constructor(public navCtrl: NavController) {
    this.podcasts= [
      { title: "The Adventure Zone", image: "assets/img/The_Adventure_Zone.png", hosts: "with Justin, Travis, Griffin, and Clint McElroy", page: "TheAdventureZonePage" },
      { title: "The Beef and Dairy Network Podcast", image: "assets/img/The_Beef_and_Dairy_Network.png", hosts: "with Benjamin Partridge", page: "TheBeefAndDairyNetworkPage" },
      { title: "Baby Geniuses", image: "assets/img/Baby_Geniuses.png", hosts: "with Emily Heller and Lisa Hanawalt", page: "BabyGeniusesPage" }
    ];
  }

  openPodcastPage(podcast) {

    this.navCtrl.push(podcast);

  }

}
