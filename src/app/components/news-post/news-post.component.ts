import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HelpersService} from "../../services/helpers.service"

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent implements OnInit{
  constructor(private route: ActivatedRoute, private HelpersService: HelpersService) {}

  id = 0
  itemData: any

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { this.id = params['id'] })
    this.itemData = this.HelpersService.getById(this.id)
  }
}
