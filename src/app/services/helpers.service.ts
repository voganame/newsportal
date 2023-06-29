import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./local-storage.service";


@Injectable({
  providedIn: 'root'
})

export class HelpersService {

  constructor(private http: HttpClient, private LocalService: LocalStorageService) {}

  newsArr:any = []
  totalCount: number = 1
  onInitList = false

  fetchData(page: number, perPage: number) {
    if(!this.onInitList) {
      this.fetchNews(page, perPage)
      let userNewsValue: any = this.LocalService.getStorageNews()
      if(userNewsValue) {
        this.newsArr.push(...(JSON.parse(userNewsValue)))
      }
      this.onInitList = true
    }

    return this.newsArr
  }

  fetchNews(page: number, perPage: number) {
    if(this.newsArr.length >= this.totalCount) {
      return
    }

    this.http.get<any>('https://webapi.autodoc.ru/api/news/' + page + '/' + perPage)
      .subscribe(response => {
        this.newsArr.push(...response.news)
        this.totalCount = response.totalCount
      })

    return this.newsArr
  }

  getById(id: number) {
    return this.newsArr.find(post => post.id == id)
  }

  addPost(postData: any) {
    this.newsArr.push(postData)
  }

  randomString(length) {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for ( let i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
  }


}
