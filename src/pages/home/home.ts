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
        banner: "assets/img/adventure_zone_banner.png", 
        bio: "Justin, Travis and Griffin McElroy from My Brother, My Brother and Me have recruited their dad Clint for a campaign of high adventure. Join the McElroys as they find their fortune and slay an unconscionable number of ... you know, kobolds or whatever in ... The Adventure Zone. Follow us on Twitter @TheZoneCast, post with the tag #TAZ and be sure to subscribe on iTunes so you never miss a new episode: http://itunes.com/adventurezone",
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
        bio: "The number one podcast for those involved or just interested in the production of beef animals and dairy herds. A comedy podcast by Benjamin Partridge.",
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
        bio: "Join Andie and Travis every Wednesday as they take on every single Apocalypse scenario they (and you the listener!) can think of! They're not preppers, they're comedians so it'll probably get pretty silly. So, hunker in their bunker and let's survive this thing together! If you have thoughts on episode topics, want to give feedback or just want to be friends: Follow us on twitter @TravisandAndie! The Intro/Outro music is courtesy of Brentalfloss. Our artwork is by the amazing Justin Russo!",
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
        banner: "http://www.maximumfun.org/blog/uploaded_images/jjgologo-793426.jpg",
        bio: "Jordan, Jesse, Go! is a freewheeling comedy podcast about life in your twenties and everything else. Your hosts are Jesse Thorn, 'America's Radio Sweetheart,' and Jordan Morris, 'Boy Detective.'",
        type: "Comedy"
      },
      { 
        title: "Judge John Hodgman", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/judge-john-hodgman-cover.jpg", 
        hosts: "with John Hodgman and Jesse Thorn", 
        rss: "http://feeds.feedburner.com/thornmorris",
        twitter: "hodgman",
        facebook: "judgejohnhodgman",
        banner: "http://www.maximumfun.org/sites/all/themes/jjhodgman/logo.png",
        bio: "Have your pressing issues decided by Famous Minor Television Personality John Hodgman, Certified Judge. If you'd like John Hodgman to solve your pressing issue, please contact us http://www.maximumfun.org/jjho.",
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
        bio: "Comedians Barbara Gray, Brandie Posey and Tess Barker welcome a fourth funny lady to the table each week to bring you gut-busting debates over current events and pop culture, along with a healthy dose of embarrassingly hilarious personal revelations. Springing from the hit live talk show at the Upright Citizen's Brigade Los Angeles, Lady to Lady brings the laughs with visits from weirdo recurring characters & on-the-fly theme songs - making it one of the most unique and ridiculous ways you can spend an hour.",
        type: "Comedy"
      },
      { 
        title: "My Brother, My Brother and Me", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/my-brother-my-brother-and-me-cover.jpg", 
        hosts: "with Justin, Travis and Griffin McElroy", 
        rss: "http://feeds.feedburner.com/mbmbam",
        twitter: "MBMBaM",
        facebook: "MBMBaM-145824008797151",
        banner: "http://www.maximumfun.org/sites/all/themes/mbmbam/logo.png",
        bio: "My Brother, My Brother and Me is an advicecast for the modern era featuring three real-life brothers: Justin, Travis and Griffin McElroy. For roughly five-sixths of an hour each week, with new episodes dropping every Monday, the brothers McElroy will answer any query sent our way, each fielding questions falling into our respective areas of expertise. We operate like a streamlined, advice-generating machine. It’s both terrifying and humbling to behold. If you’re in desperate need of a bit of advice, don’t be shy! Simply send an email to mbmbam@maximumfun.org, or post on twitter with the tag #MBMBaM and we’ll take care of that for you.",
        type: "Comedy"
      },
      { 
        title: "One Bad Mother", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/one-bad-mother-cover.jpg", 
        hosts: "with Biz Ellis and Theresa Thorn", 
        rss: "http://maximumfun.org/feeds/onebadmother.xml",
        twitter: "OneBadMothers",
        facebook: "OneBadMother",
        banner: "http://www.maximumfun.org/sites/all/themes/onebadmother/logo.png",
        bio: "One Bad Mother is a comedy podcast hosted by Biz Ellis and Theresa Thorn about motherhood and how unnatural it sometimes is. We aren't all magical vessels! Join us every week as we deal with the thrills and embarrassments of motherhood and strive for less judging and more laughing. For booking and guest ideas, please email onebadmother@maximumfun.org.",
        type: "Comedy"
      },
      { 
        title: "Still Buffering", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/still-buffering-cover.jpg", 
        hosts: "with Sydnee McElroy, Teylor Smirl, and Rileigh Smirl", 
        rss: "http://stillbuffering.libsyn.com/rss",
        twitter: "Stillbuff",
        facebook: "groups/1171406519551147",
        banner: "http://www.maximumfun.org/sites/all/themes/stillbuffering/logo.png",
        bio: "Join real-life sisters Sydnee McElroy (Sawbones), Teylor Smirl, and Rileigh Smirl as they help bridge the gap between the teenagers of yesterday and today. 'How do you party?' 'What do I do with all this hair?' Still Buffering has the answer.",
        type: "Comedy"
      },
      { 
        title: "Stop Podcasting Yourself", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/stop-podcasting-yourself.jpg", 
        hosts: "with Graham Clark and Dave Shumka", 
        rss: "http://feeds.feedburner.com/stoppodcastingyourself",
        twitter: "",
        facebook: "groups/35964865432",
        banner: "http://www.maximumfun.org/sites/all/themes/spy/logo.png",
        bio: "Vancouver's top comedy podcast? Hosted by Graham Clark and Dave Shumka, with weekly guests. Hilarious weekly guests? Yup.",
        type: "Comedy"
      },
      { 
        title: "Throwing Shade", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/throwing-shade-cover.jpg", 
        hosts: "with Erin Gibson and Bryan Safi", 
        rss: "http://throwingshade.libsyn.com/rss",
        twitter: "throwingshade",
        facebook: "ThrowingShadeOfficial",
        banner: "http://www.maximumfun.org/sites/all/themes/throwingshade/logo.png",
        bio: "Hosts Erin Gibson and Bryan Safi take a weekly look at all the issues important to ladies and gays... and treat them with much less respect than they deserve. Can you handle it?",
        type: "Comedy"
      },
      { 
        title: "Trends Like These", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/trends-like-these-cover.jpg", 
        hosts: "with Travis McElroy and Brent Black", 
        rss: "http://trendslikethese.libsyn.com/rss",
        twitter: "TrendsLikeThese",
        facebook: "groups/440456942794381",
        banner: "http://www.maximumfun.org/sites/all/themes/trendslikethese/logo.jpg",
        bio: "Trends Like These is a weekly round-up of what's trending on Facebook, Twitter and all over the Internet. We'll prepare you to chat around the water cooler about celeb Twitter beefs, mysteriously colored dresses, flat Earth, Starbucks cups and so much more! We'll dig past the easily shareable headlines to try to get to the real story! Brought to you every Thursday by Travis McElroy and Brent Black. We're real life friends talking 'bout Internet trends!",
        type: "Comedy"
      },
      { 
        title: "We Got This with Mark and Hal", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/we-got-this-cover.jpg", 
        hosts: "with Mark Gagliardi and Hal Lublin", 
        rss: "http://wegotthis.libsyn.com/rss",
        twitter: "wegotthistweets",
        facebook: "groups/wegotthispodcast",
        banner: "http://www.maximumfun.org/sites/all/themes/wegotthis/logo.png",
        bio: "Every week, Mark Gagliardi and Hal Lublin take the dumb issues in life that people care strongly about and settle the argument once and for all. No topic is too small or insignificant for them to dissect and decide! Whatever minutiae you argue with friends and family, don’t worry: We Got This. Have a topic for a future episode of We Got This? Email Mark and Hal at WeGotThisPodcast@gmail.com, tweet them at @wegotthistweets or hit them up on Facebook at facebook.com/wegotthispodcast.",
        type: "Comedy"
      },
      { 
        title: "Adam Ruins Everything", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/adam-ruins-everything-cover-3.png", 
        hosts: "with Adam Conover", 
        rss: "http://maximumfun.org/feeds/are.xml",
        twitter: "AdamRuins",
        facebook: "truTVAdamRuinsEverything",
        banner: "http://www.maximumfun.org/sites/all/themes/adamruinseverything/logo.png",
        bio: "First, on the Adam Ruins Everything TV show, Adam Conover broke down widespread misconceptions about everything we take for granted. Now, join Adam as he sits down with the experts and stars from the show to go into even more detail.",
        type: "Culture"
      },
      { 
        title: "Bullseye", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/bullseye-cover.jpg", 
        hosts: "with Jesse Thorn", 
        rss: "http://feeds.feedburner.com/tsoya",
        twitter: "Bullseye",
        facebook: "bullseyewithjessethorn",
        banner: "http://www.maximumfun.org/sites/all/themes/bullseye/logo.png",
        bio: "Bullseye is a public radio show about what's good in popular culture. With a keen editorial eye, Bullseye sifts the wheat from the chaff, and brings you hot culture picks, in-depth interviews with the most revered and revolutionary creative people and irreverent original comedy. Bullseye is equal parts funny and fascinating. Whether you're already plugged in to the culture map, or looking for a signpost, Bullseye will keep you on target.",
        type: "Culture"
      },
      { 
        title: "Can I Pet Your Dog?", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/can-i-pet-your-dog-cover.png", 
        hosts: "with Allegra Ringo and Renee Colvert", 
        rss: "http://cipyd.libsyn.com/rss",
        twitter: "CIPYDPodcast",
        facebook: "groups/1035804789763201",
        banner: "http://www.maximumfun.org/sites/all/themes/cipyd/logo.png",
        bio: "Every Tuesday, dog owner Allegra Ringo and dog wanter Renee Colvert talk to guests about their dogs, discuss dogs they met this week, and brief you on dogs news. They go on assignment to dog events and report back with what you need to know. If there's a dog, they're gonna pet it! Email them at canipetyourdogpodcast@gmail.com!",
        type: "Culture"
      },
      { 
        title: "Dead Pilots Society", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/DPS-CoverArt-1400x1400%20(1).jpg", 
        hosts: "with Andrew Reich and Ben Blacker", 
        rss: "http://deadpilotssociety.libsyn.com/rss",
        twitter: "deadpilotspod",
        facebook: "deadpilotssociety",
        banner: "http://www.maximumfun.org/sites/all/themes/deadpilots/logo.png",
        bio: "In Dead Pilots Society, scripts that were developed by studios and networks but were never produced are given the table reads they deserve. Starring actors you know and love from television and film, a live audience, and a good time in which no one gets notes, no one is fired, and everyone laughs. Presented by Andrew Reich (Friends; Worst Week) and Ben Blacker (The Writers Panel podcast; co-creator, Thrilling Adventure Hour).",
        type: "Culture"
      },
      { 
        title: "Getting Curious", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/getting-curious-cover.jpg", 
        hosts: "with Jonathan Van Ness", 
        rss: "http://www.maximumfun.org/feeds/gettingcurious.xml",
        twitter: "Getting_Curious",
        facebook: "groups/gettingcurious",
        banner: "http://www.maximumfun.org/sites/all/themes/gettingcurious/logo.png",
        bio: "A biweekly exploration of all the things Jonathan is curious about. Come on a journey with Jonathan and experts in their respective fields as they get curious about anything and everything under the sun.",
        type: "Culture"
      },
      { 
        title: "The Greatest Generation", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/TGGLogo.jpg", 
        hosts: "with Benjamin Ahr Harrison and Adam Pranica", 
        rss: "http://feeds.feedburner.com/TheGreatestGeneration",
        twitter: "",
        facebook: "GreatestGen",
        banner: "http://www.maximumfun.org/sites/all/themes/greatestgeneration/logo.png",
        bio: "The Greatest Generation is a comedy podcast about Star Trek: The Next Generation, beloved by everyone from people who’ve never seen an episode, to complete dorkazoids who are fluent in Klingon. Twice a week Benjamin Ahr Harrison and Adam Pranica watch an episode of TNG and tell you what’s great, what’s bad, and what’s hilarious about the show they grew up loving, and still do. It’s a little bit nerdy, a lot filthy, and exposes some of Adam and Ben’s most embarrassing stories from their dorky childhoods.",
        type: "Culture"
      },
      { 
        title: "Magic Lessons with Elizabeth Gilbert", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/magic-lessons-cover.png", 
        hosts: "with Elizabeth Gilbert", 
        rss: "http://magiclessons.libsyn.com/rss",
        twitter: "",
        facebook: "",
        banner: "http://www.maximumfun.org/sites/all/themes/magiclessons/logo.png",
        bio: "Bestselling author Elizabeth Gilbert returns for the second season of her hit podcast MAGIC LESSONS, ready to help another batch of aspiring artists overcome their fears and create more joyfully. This year’s guest experts include Neil Gaiman, Gary Shteyngart, Amy Purdy, Michael Ian Black, Brandon Stanton, Martha Beck, and Glennon Doyle Melton.",
        type: "Culture"
      },
      { 
        title: "Minority Korner", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/minority-korner-cover.png", 
        hosts: "with Nnekay FitzClarke and James Arthur", 
        rss: "http://minoritykorner.libsyn.com/",
        twitter: "MinorityKorner",
        facebook: "minority.korner",
        banner: "http://www.maximumfun.org/sites/all/themes/minoritykorner/logo.png",
        bio: "Stop on by Minority Korner, a new podcast, every Friday. We'll visit neighborhood korners like: good ole race korner, the gender fun korner, sexy ass LGBTQIIALMNOP (there's a lot of letters there) korner, pop culture korner, politics korner, nostalgia korner, all from the lens of these two crazy minorities. Learn. Laugh. Play... like Blue's Clues! Only... more Black, gay, and lady like.",
        type: "Culture"
      },
      { 
        title: "Oh No, Ross and Carrie!", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/oh-no-ross-and-carrie-cover.jpg", 
        hosts: "with Ross Blocher and Carrie Poppy", 
        rss: "http://feeds.feedburner.com/OhNoPodcast",
        twitter: "OhNoPodcast",
        facebook: "ONRAC",
        banner: "assets/img/oh_no_ross_and_carrie_banner.png",
        bio: "Welcome to Oh No, Ross and Carrie!, the show where we don’t just report on fringe science, spirituality, and claims of the paranormal, but take part ourselves. Follow us as we join religions, undergo alternative treatments, seek out the paranormal, and always find the humor in life’s biggest mysteries. We show up - so you don’t have to. Every month we share a new investigation, along with occasional bonus interviews and updates.",
        type: "Culture"
      },
      { 
        title: "Pop Rocket", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/pop-rocket-cover.jpg", 
        hosts: "with Guy Branum, Wynter Mitchell, Karen Tongson and Margaret Wappler", 
        rss: "http://maximumfun.org/feeds/poprocket.xml",
        twitter: "PopRocket",
        facebook: "poprocketpodcast",
        banner: "http://www.maximumfun.org/sites/all/themes/poprocket/logo.png",
        bio: "Pop Rocket is a high-octane weekly discussion of the culture we all love to love. Join host Guy Branum and panelists Wynter Mitchell, Karen Tongson and Margaret Wappler for smart, funny, sometimes sweary chat about everything great in entertainment. Combining comic, journalistic, academic and digital media expertise, the Pop Rocket team will keep you up-to-date on what's most exciting in pop culture this week.",
        type: "Culture"
      },
      { 
        title: "Rose Buddies", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/rosebuddieslogo.jpg", 
        hosts: "with Rachel and Griffin McElroy", 
        rss: "http://rosebuddies.libsyn.com/",
        twitter: "rosebuddiescast",
        facebook: "groups/RoseBuddiesCast",
        banner: "http://www.maximumfun.org/sites/all/themes/rosebuddies/logo.png",
        bio: "The Bachelor is too dangerous a television series to try to watch alone. That's where Rose Buddies comes in: Media experts Rachel and Griffin McElroy — get this! — watch episodes of The Bachelor family of products, and then — this next part is genius — talk about them on a podcast. They'll have their erudite analysis ready for you the morning after new episodes of The Bachelor, or The Bachelorette, or Bachelor in Paradise or of whatever other hellspawn is birthed from this franchise's fertile womb.",
        type: "Culture"
      },
      { 
        title: "Sawbones", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/sawbones-cover.png", 
        hosts: "with Sydnee and Justin McElroy", 
        rss: "http://sawbones.libsyn.com/rss",
        twitter: "Sawbones",
        facebook: "sawbonesshow",
        banner: "http://www.maximumfun.org/sites/all/themes/sawbones/logo.png",
        bio: "Dr. Sydnee McElroy and her husband Justin welcome you to Sawbones: A Marital Tour of Misguided Medicine. Every Friday, they dig through the annals of medical history to uncover all the odd, weird, wrong, dumb and just gross ways we've tried to fix people over the years. Educational? You bet! Fun? We hope!",
        type: "Culture"
      },
      { 
        title: "Shmanners", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/shmanners-cover.jpg", 
        hosts: "with Travis and Teresa McElroy", 
        rss: "http://shmanners.libsyn.com/rss",
        twitter: "ShmannersCast",
        facebook: "823119417831683",
        banner: "http://www.maximumfun.org/sites/all/themes/shmanners/logo.png",
        bio: "Join husband Travis McElroy and wife Teresa McElroy every Friday and they'll improve your etiquette week by week! Perplexed by thank you notes? Baffled by black tie? Dismayed by dinner parties? Worry no more, Shmanners has your answers! Tune in every Friday on MaximumFun.org!",
        type: "Culture"
      },
      { 
        title: "Tights and Fights", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/IMG_0653.JPG", 
        hosts: "with Hal Lublin, Danielle Radford and Mike Eagle", 
        rss: "http://tightsandfights.libsyn.com/",
        twitter: "TightsFights",
        facebook: "groups/TightsFights",
        banner: "http://www.maximumfun.org/sites/all/themes/tightsandfights/logo.png",
        bio: "Tights and Fights is the podcast that covers pro-wrestling with the sincerity and hilarity that it deserves. Every week, hosts Hal Lublin, Danielle Radford and Mike Eagle make sense of the chaos that is the world of sports-entertainment. Whether it's the latest headlines, a cultural analysis of an old angle or a debate about which wrestler has the best merch, Tights and Fights will examine every corner of the squared-circle for your enjoyment.",
        type: "Culture"
      },
      { 
        title: "Wham Bam Pow", 
        image: "http://www.maximumfun.org/sites/default/files/imagecache/cover-200/show_images/whambampow-logo-r2.png", 
        hosts: "with Cameron Esposito, Rhea Butcher and Ricky Carmona", 
        rss: "http://whambampow.libsyn.com/",
        twitter: "",
        facebook: "WhamBamPow",
        banner: "http://www.maximumfun.org/sites/all/themes/whambampow/logo.png",
        bio: "Wham Bam Pow is an action/scifi moviecast. Each week, host Cameron Esposito and panelists Rhea Butcher and Ricky Carmona will terminate your boredom with movie news, interviews & watch-along film reviews. It's one show to rule them all!",
        type: "Culture"
      }
    ];
  }

  openPodcastPage(podcast) {

    this.navCtrl.push('PodcastDetailPage', podcast);

  }

}
