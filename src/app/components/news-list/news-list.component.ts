import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from '../../services/local-storage.service'
import {HelpersService} from '../../services/helpers.service'

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.html']
})
export class NewsListComponent implements OnInit {
  constructor(private http: HttpClient, private LocalService: LocalStorageService, private HelpersService: HelpersService) {
  }

  newsArr: any
  page: number = 1
  perPage: number = 20
  totalCount: number = 1
  showModal = false

  ngOnInit(): void {
    this.newsArr = this.HelpersService.fetchData(this.page, this.perPage)
  }

  onScrollDown(event: any) {
    this.page++
    this.newsArr = this.HelpersService.fetchNews(this.page, this.perPage)
  }

  onScrollUp(event: any) {}
}
