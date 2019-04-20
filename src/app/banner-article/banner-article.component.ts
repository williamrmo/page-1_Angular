import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-article',
  templateUrl: './banner-article.component.html',
  styleUrls: ['./banner-article.component.sass']
})
export class BannerArticleComponent implements OnInit {
  says: string[];

  constructor() {
    this.says = ['UNO', 'DOS', 'TRES'];
  }

  ngOnInit() {
  }

}
