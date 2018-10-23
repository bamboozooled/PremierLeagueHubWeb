import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { Link } from './Link';

declare var feednami: any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  allNews: News[] = new Array();
  arraylinks: Link[];
  constructor() { }

  ngOnInit() {
    const url1 = new Link('http://www.independent.co.uk/sport/football/rss', 'Independent');
    const url2 = new Link('https://talksport.com/rss/football/premier-league/feed', 'TalkSport');
    const url3 = new Link('http://www.espnfc.us/english-premier-league/23/rss', 'ESPN');
    const url4 = new Link('http://feeds.feedburner.com/PremierLeagueFootballNews', 'PLFN');
    const url5 = new Link('http://metro.co.uk/sport/football/feed/', 'Metro');
    const url6 = new Link('http://www.dailymail.co.uk/sport/premierleague/index.rss', 'Daily Mail');
    const url7 = new Link('http://feeds.bbci.co.uk/sport/football/rss.xml?edition=uk', 'BBC');
    const url8 = new Link('http://www.uefa.com/rssfeed/uefachampionsleague/rss.xml', 'UEFA');
    const url9 = new Link('https://www.foxsports.com.au/content-feeds/premier-league/', 'FOX');
    const url10 = new Link('http://www.espnfc.us/english-premier-league/23/rss', 'ESPN');

    this.arraylinks = [url1, url2, url3, url4, url5, url6, url7, url8, url9, url10];

    feednami.setPublicApiKey('d5d6643523a773f9625c6a2837373f4da2d4778f76cd1a8dc83f811751884ed9');
    for (let i = 0; i < this.arraylinks.length; i++) {
      feednami.loadGoogleFormat(this.arraylinks[i].link, (result) => {
        if (result.error) {
          console.log(result.error);
        } else {
        const entries = result.feed.entries;
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          console.log(entry);
          const news = new News(entry.title, entry.link, '', entry.contentSnippet);
          this.allNews.push(news);
        }
  
        console.log(this.allNews);
      }
      });
    }
  }

}
