import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.sass']
})
export class AboutInfoComponent implements OnInit {
  minSay: string = 'Loren Ipsus';
  say: string = 'Loren Ipsus';
  constructor() { }

  ngOnInit() {
  }

}
