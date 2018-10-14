import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import  {TweeterData, Tweet} from './tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  replies: Tweet[];
  retweets: Tweet[];
  followers: number;
  tweetsCount: number;


  constructor(private tweetsService:TweetsService) { }

  async ngOnInit() {
    let data: TweeterData = await this.tweetsService.getAllTweets();
    this.retweets = data.retweets;
    this.replies = data.replies;
    this.followers = data.followers;
    this.tweetsCount = data.tweets_count;
  }
}
