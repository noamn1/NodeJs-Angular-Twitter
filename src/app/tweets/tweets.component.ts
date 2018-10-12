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
    // Retrieve posts from the API
    this.tweetsService.getAllTweets().subscribe(tweets => {
      this.tweets = tweets;
    });
  }
}
