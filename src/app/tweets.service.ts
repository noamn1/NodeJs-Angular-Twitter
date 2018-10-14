import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import  {TweeterData} from './tweets/tweet';

@Injectable()
export class TweetsService {

  constructor(private http: Http) { }

  async getAllTweets(): Promise<TweeterData> {
    const response = await this.http.get('/api/tweets').toPromise();
    return response.json();
  }

}
