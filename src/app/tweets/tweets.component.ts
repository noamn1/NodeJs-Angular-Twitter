import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets: any = [];

  constructor(private tweetsService:TweetsService) { }

  ngOnInit() {
    // Retrieve tweets from the API

    this.tweets = this.tweetsService.getAllTweets();
  }
}
