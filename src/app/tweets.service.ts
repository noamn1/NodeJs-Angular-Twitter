import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetsService {

  constructor(private http: Http) { }

  getAllTweets() {
    // DEBUG:
    console.log('getAllTweets');
    return this.http.get('/api/tweets')
      .map(res => res.json().tweets);
  }

}
