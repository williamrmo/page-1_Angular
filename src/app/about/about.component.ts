import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  public title: string = 'About';
  public description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  public link: string = '/about';
  constructor() { }

  ngOnInit() {
  }

}
