import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { PostsService } from './posts.service';
import { TweetsComponent } from './tweets/tweets.component';
import  {TweetsService } from './tweets.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'tweets',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'tweets',
    component: TweetsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService, TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
