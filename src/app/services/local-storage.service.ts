import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addNews(fileData: any) {
    if(!localStorage.getItem('userNewsArr')) {
      localStorage.setItem('userNewsArr', '[]')
    }

    let userNewsValue: any = localStorage.getItem('userNewsArr')
    let userNewsArr = JSON.parse(userNewsValue)

    userNewsArr.push(fileData)
    userNewsValue = JSON.stringify(userNewsArr)
    localStorage.setItem('userNewsArr', userNewsValue)

  }

  getStorageNews() {
    return localStorage.getItem('userNewsArr');
  }
}
