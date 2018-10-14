import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TweetsService {

  constructor(private http: Http) { }

  // getAllTweets() {
  //   console.log('getAllTweets');
  //   return this.http.get('/api/tweets')
  //     .map(res => res.json().replies.tweets);
  // }



   async getAllTweets(): Tweet[] {
    //const response = await this.http.get('/api/tweets').toPromise();
    let resp = await this.http.get('/api/tweets');
    let arr: Tweet[] = await resp.json().tweets;
    return arr;
    //return this.http.get<Tweet[]>('/api/tweets').toPromise().then(res => res.json().replies.tweets);

  }

}

export interface Tweet {
    tweet: string;
    retweets: number;
}
