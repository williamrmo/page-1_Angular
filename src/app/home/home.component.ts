import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public title: string = 'Home';
  public description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  public link: string = '/';

  constructor() {

  }

  ngOnInit() {
  }

}
