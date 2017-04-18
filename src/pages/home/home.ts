import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  podcasts: Array<{title: string, image: string, hosts: string, rss: string, twitter: string, facebook: string, banner: string, bio: string }>;

  constructor(public navCtrl: NavController) {
    this.podcasts= [
      { 
        title: "The Adventure Zone", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/The%20Adventure%20Zone%20Flat.jpg", 
        hosts: "with Justin, Travis, Griffin, and Clint McElroy", 
        rss: "adventurezone", 
        twitter: "TheZoneCast", 
        facebook: "theadventurezone", 
        banner: "assets/img/The_Adventure_Zone_banner.png", 
        bio: "Justin, Travis and Griffin McElroy from My Brother, My Brother and Me have recruited their dad Clint for a campaign of high adventure. Join the McElroys as they find their fortune and slay an unconscionable number of ... you know, kobolds or whatever in ... The Adventure Zone.<br/><br/>Follow us on Twitter @TheZoneCast, post with the tag #TAZ and be sure to subscribe on iTunes so you never miss a new episode: <a href='http://itunes.com/adventurezone'>http://itunes.com/adventurezone</a>" 
      },
      { 
        title: "The Beef and Dairy Network Podcast", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/avatars-000155841882-28wjit-original.jpg", 
        hosts: "with Benjamin Partridge", 
        rss: "beefanddairynetwork",
        twitter: "beefanddairy",
        facebook: "beefanddairynetwork",
        banner: "",
        bio: "The number one podcast for those involved or just interested in the production of beef animals and dairy herds.<br/><br/>A comedy podcast by Benjamin Partridge." 
      },
      { 
        title: "Baby Geniuses", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/baby-geniuses-cover.png", 
        hosts: "with Emily Heller and Lisa Hanawalt", 
        rss: "babygeniuses",
        twitter: "TheBabyGeniuses",
        facebook: "BabyGeniusesPodcast",
        banner: "",
        bio: "Baby Geniuses is a show for people who know stuff and people who don't know stuff, but would like to. Every week, comedian and super-genius Emily Heller and cartoonist and mastermind Lisa Hanawalt, challenge their guests to share some knowledge on any topic they want."
      },
      { 
        title: "Bunker Buddies with Andie and Travis", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/bunker-buddies-cover.jpg", 
        hosts: "with Andie Bolt and Travis McElroy", 
        rss: "bunkerbuddies",
        twitter: "TravisandAndie",
        facebook: "bunkerbuddiesshow",
        banner: "",
        bio: "Join Andie and Travis every Wednesday as they take on every single Apocalypse scenario they (and you the listener!) can think of! They're not preppers, they're comedians so it'll probably get pretty silly. So, hunker in their bunker and let's survive this thing together!<br/>If you have thoughts on episode topics, want to give feedback or just want to be friends: Follow us on twitter @TravisandAndie! The Intro/Outro music is courtesy of Brentalfloss. Our artwork is by the amazing Justin Russo!"
      },
      { 
        title: "Dave Hill's Podcasting Incident", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/dave-hill-cover.png", 
        hosts: "with Dave Hill", 
        rss: "DaveHillsPodcastingIncidentPage",
        twitter: "",
        facebook: "Dave-Hills-Podcasting-Incident-113915675324537",
        banner: "",
        bio: "This incredible podcast features comedian/musician/writer/actor/artist/man-about-town/thinking man Dave Hill sitting down and having a delightful conversation with various notable people, including but not limited to fellow comedians, musicians, actors, authors, supermodels, convicts and whoever else he can talk into it."
      },
      { 
        title: "The Flop House", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/the-flophouse-cover.jpg", 
        hosts: "with Elliott Kalan, Dan McCoy and Stuart Wellington", 
        rss: "",
        twitter: "theflophousepod",
        facebook: "groups/35873635570/",
        banner: "",
        bio: "The Flop House is a bi-monthly audio podcast, devoted to the worst in recent film. Your hosts (Elliott Kalan, Dan McCoy, and Stuart Wellington) watch a questionable film just before each episode, and then engage in an unscripted, slightly inebriated discussion, focusing on the movie's shortcomings and occasional delights."
      },
      { 
        title: "International Waters", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/international-waters-cover.jpg", 
        hosts: "with Dave Holmes", 
        rss: "",
        twitter: "IWPod",
        facebook: "groups/InternationalWaters",
        banner: "",
        bio: "International Waters is a pop culture comedy quiz show where land laws do not apply. Join host Dave Holmes and competing teams of world-famous comedians from the US and UK in a hilarious and lively test of pop culture knowledge (and the ability to make up baloney when that knowledge fails). It's part panel show, part trivia quiz and all laughs. It's also a little embarrassed it wrote that last sentence."
      },
      { 
        title: "Jordan, Jesse, Go!", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/jordan-jesse-go-cover.jpg", 
        hosts: "with Jesse Thorn and Jordan Morris", 
        rss: "",
        twitter: "",
        facebook: "Jordan-Jesse-GO-10389486885",
        banner: "",
        bio: "Jordan, Jesse, Go! is a freewheeling comedy podcast about life in your twenties and everything else. Your hosts are Jesse Thorn, 'America's Radio Sweetheart,' and Jordan Morris, 'Boy Detective.' More About Jordan, Jesse, Go!"
      },
      { 
        title: "Judge John Hodgman", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/judge-john-hodgman-cover.jpg", 
        hosts: "with John Hodgman and Jesse Thorn", 
        rss: "",
        twitter: "hodgman",
        facebook: "judgejohnhodgman",
        banner: "",
        bio: "Have your pressing issues decided by Famous Minor Television Personality John Hodgman, Certified Judge. If you'd like John Hodgman to solve your pressing issue, please contact us <a href='http://www.maximumfun.org/jjho'>HERE</a>."
      }
    ];
  }

  openPodcastPage(podcast) {

    this.navCtrl.push('PodcastDetailPage', podcast);

  }

}
