import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NewsListComponent} from "./components/news-list/news-list.component";
import {NewsPostComponent} from "./components/news-post/news-post.component";

const routes: Routes = [
  {path: 'news', component: NewsListComponent},
  {path: 'news/:id', component: NewsPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
