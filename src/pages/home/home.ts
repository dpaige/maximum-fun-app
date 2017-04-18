import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  podcasts: Array<{title: string, image: string, hosts: string, rss: string, twitter: string, facebook: string, banner: string, bio: string, type: string }>;

  constructor(public navCtrl: NavController) {
    this.podcasts= [
      { 
        title: "The Adventure Zone", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/The%20Adventure%20Zone%20Flat.jpg", 
        hosts: "with Justin, Travis, Griffin, and Clint McElroy", 
        rss: "http://adventurezone.libsyn.com/rss", 
        twitter: "TheZoneCast", 
        facebook: "theadventurezone", 
        banner: "http://www.maximumfun.org/sites/all/themes/az/logo.png", 
        bio: "Justin, Travis and Griffin McElroy from My Brother, My Brother and Me have recruited their dad Clint for a campaign of high adventure. Join the McElroys as they find their fortune and slay an unconscionable number of ... you know, kobolds or whatever in ... The Adventure Zone.<br/><br/>Follow us on Twitter @TheZoneCast, post with the tag #TAZ and be sure to subscribe on iTunes so you never miss a new episode: <a href='http://itunes.com/adventurezone'>http://itunes.com/adventurezone</a>",
        type: "Comedy" 
      },
      { 
        title: "The Beef and Dairy Network Podcast", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/avatars-000155841882-28wjit-original.jpg", 
        hosts: "with Benjamin Partridge", 
        rss: "http://beefanddairynetwork.libsyn.com/rss",
        twitter: "beefanddairy",
        facebook: "beefanddairynetwork",
        banner: "http://www.maximumfun.org/sites/all/themes/beefanddairy/logo.png",
        bio: "The number one podcast for those involved or just interested in the production of beef animals and dairy herds.<br/><br/>A comedy podcast by Benjamin Partridge.",
        type: "Comedy" 
      },
      { 
        title: "Baby Geniuses", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/baby-geniuses-cover.png", 
        hosts: "with Emily Heller and Lisa Hanawalt", 
        rss: "http://babygeniuses.libsyn.com/rss",
        twitter: "TheBabyGeniuses",
        facebook: "BabyGeniusesPodcast",
        banner: "http://www.maximumfun.org/sites/all/themes/babygeniuses/logo.png",
        bio: "Baby Geniuses is a show for people who know stuff and people who don't know stuff, but would like to. Every week, comedian and super-genius Emily Heller and cartoonist and mastermind Lisa Hanawalt, challenge their guests to share some knowledge on any topic they want.",
        type: "Comedy" 
      },
      { 
        title: "Bunker Buddies with Andie and Travis", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/bunker-buddies-cover.jpg", 
        hosts: "with Andie Bolt and Travis McElroy", 
        rss: "http://bunkerbuddies.libsyn.com/rss",
        twitter: "TravisandAndie",
        facebook: "bunkerbuddiesshow",
        banner: "http://www.maximumfun.org/sites/all/themes/bb/logo.png",
        bio: "Join Andie and Travis every Wednesday as they take on every single Apocalypse scenario they (and you the listener!) can think of! They're not preppers, they're comedians so it'll probably get pretty silly. So, hunker in their bunker and let's survive this thing together!<br/>If you have thoughts on episode topics, want to give feedback or just want to be friends: Follow us on twitter @TravisandAndie! The Intro/Outro music is courtesy of Brentalfloss. Our artwork is by the amazing Justin Russo!",
        type: "Comedy" 
      },
      { 
        title: "Dave Hill's Podcasting Incident", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/dave-hill-cover.png", 
        hosts: "with Dave Hill", 
        rss: "http://davehillincident.libsyn.com/rss",
        twitter: "",
        facebook: "Dave-Hills-Podcasting-Incident-113915675324537",
        banner: "http://www.maximumfun.org/sites/all/themes/davehill/logo.png",
        bio: "This incredible podcast features comedian/musician/writer/actor/artist/man-about-town/thinking man Dave Hill sitting down and having a delightful conversation with various notable people, including but not limited to fellow comedians, musicians, actors, authors, supermodels, convicts and whoever else he can talk into it.",
        type: "Comedy" 
      },
      { 
        title: "The Flop House", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/the-flophouse-cover.jpg", 
        hosts: "with Elliott Kalan, Dan McCoy and Stuart Wellington", 
        rss: "http://theflophouse.libsyn.com/rss",
        twitter: "theflophousepod",
        facebook: "groups/35873635570/",
        banner: "http://www.maximumfun.org/sites/all/themes/flophouse/logo.png",
        bio: "The Flop House is a bi-monthly audio podcast, devoted to the worst in recent film. Your hosts (Elliott Kalan, Dan McCoy, and Stuart Wellington) watch a questionable film just before each episode, and then engage in an unscripted, slightly inebriated discussion, focusing on the movie's shortcomings and occasional delights.",
        type: "Comedy" 
      },
      { 
        title: "International Waters", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/international-waters-cover.jpg", 
        hosts: "with Dave Holmes", 
        rss: "http://www.maximumfun.org/feeds/iw.xml",
        twitter: "IWPod",
        facebook: "groups/InternationalWaters",
        banner: "http://www.maximumfun.org/sites/all/themes/intlwaters/logo.png",
        bio: "International Waters is a pop culture comedy quiz show where land laws do not apply. Join host Dave Holmes and competing teams of world-famous comedians from the US and UK in a hilarious and lively test of pop culture knowledge (and the ability to make up baloney when that knowledge fails). It's part panel show, part trivia quiz and all laughs. It's also a little embarrassed it wrote that last sentence.",
        type: "Comedy" 
      },
      { 
        title: "Jordan, Jesse, Go!", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/jordan-jesse-go-cover.jpg", 
        hosts: "with Jesse Thorn and Jordan Morris", 
        rss: "http://feeds.feedburner.com/thornmorris",
        twitter: "",
        facebook: "Jordan-Jesse-GO-10389486885",
        banner: "",
        bio: "Jordan, Jesse, Go! is a freewheeling comedy podcast about life in your twenties and everything else. Your hosts are Jesse Thorn, 'America's Radio Sweetheart,' and Jordan Morris, 'Boy Detective.' More About Jordan, Jesse, Go!",
        type: "Comedy" 
      },
      { 
        title: "Judge John Hodgman", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/judge-john-hodgman-cover.jpg", 
        hosts: "with John Hodgman and Jesse Thorn", 
        rss: "http://feeds.feedburner.com/thornmorris",
        twitter: "hodgman",
        facebook: "judgejohnhodgman",
        banner: "http://www.maximumfun.org/sites/all/themes/jjgo/logo.png",
        bio: "Have your pressing issues decided by Famous Minor Television Personality John Hodgman, Certified Judge. If you'd like John Hodgman to solve your pressing issue, please contact us <a href='http://www.maximumfun.org/jjho'>HERE</a>.",
        type: "Comedy"
      },
      { 
        title: "The Kasper Hauser Podcast", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/kasper-hauser-cover.jpg", 
        hosts: "with Dan Klein, James Reichmuth, John Reichmuth, and Rob Baedeker", 
        rss: "http://feeds.feedburner.com/kasperhauser",
        twitter: "",
        facebook: "",
        banner: "http://www.maximumfun.org/sites/all/themes/kasperhauser/logo.jpg",
        bio: "Kasper Hauser are one of the most acclaimed sketch comedy groups in the nation. They've won the prestigious Herald Angel at the Edinburgh Fringe Festival, appeared on Comedy Central and This American Life, and are the authors of three books. Their podcast features audio, video, and visual comedy.",
        type: "Comedy"
      },
      { 
        title: "Lady to Lady", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/LadyToLady.jpg", 
        hosts: "with Barbara Gray, Brandie Posey and Tess Barker", 
        rss: "http://ladytolady.libsyn.com/rss",
        twitter: "Lady2LadyComedy",
        facebook: "groups/LadytoLadyPodcast",
        banner: "http://www.maximumfun.org/sites/all/themes/ladytolady/logo.png",
        bio: "Comedians Barbara Gray, Brandie Posey and Tess Barker welcome a fourth funny lady to the table each week to bring you gut-busting debates over current events and pop culture, along with a healthy dose of embarrassingly hilarious personal revelations.<br/>Springing from the hit live talk show at the Upright Citizen's Brigade Los Angeles, Lady to Lady brings the laughs with visits from weirdo recurring characters & on-the-fly theme songs - making it one of the most unique and ridiculous ways you can spend an hour.",
        type: "Comedy"
      }
    ];
  }

  openPodcastPage(podcast) {

    this.navCtrl.push('PodcastDetailPage', podcast);

  }

}
