import { Injectable } from '@angular/core';
 
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';

export class FeedItem { 
  description: string; 
  link: string;
  title: string;
  date: string;
  
  constructor(description: string, link: string, title: string, date: string) {
    this.description = description;
    this.link = link;
    this.title = title;
    this.date = date;
  } 
}

@Injectable()
export class RssServiceProvider {
  constructor(private http: Http) {}

  public getEpisodes(feedUrl) { 

    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2CpubDate%20from%20rss%20where%20url%3D%22' + encodeURIComponent(feedUrl) + '%22&format=json'; 

    let episodes = [];
    return this.http.get(url)
    .map(data => data.json()['query']['results'])
    .map((res) => {
      if (res === null) {
        return []; 
      }

      let objects = res['item']; 
      var length = 20;
    
      for (let i = 0; i < objects.length; i++) {
        let item = objects[i];
        var trimmedDescription = item.description.length > length ? item.description.substring(0, 60) + "..." :
        item.description;

        let newFeedItem = new FeedItem(trimmedDescription, item.link, item.title, item.pubDate);
        episodes.push(newFeedItem);
      }
      return episodes
    })
  }
}