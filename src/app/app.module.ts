import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalAddNewsComponent } from './components/modal-add-news/modal-add-news.component';
import {FormsModule} from "@angular/forms";
import { NewsPostComponent } from './components/news-post/news-post.component';
import { NewsListComponent } from './components/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalAddNewsComponent,
    NewsPostComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {

}
