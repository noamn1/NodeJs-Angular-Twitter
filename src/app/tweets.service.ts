import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TweetsService {

  constructor(private http: Http) { }

  async getAllTweets(): Promise<any> {
    const response = await this.http.get('/api/tweets').toPromise();
    return response.json();
  }

}

export interface Tweet {
    tweet: string;
    retweets: number;
}
