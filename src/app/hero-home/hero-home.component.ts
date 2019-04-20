import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.sass']
})
export class HeroHomeComponent implements OnInit {
  img: string = '../assets/fondo.jpg';
  constructor() { }

  ngOnInit() {
  }

}
