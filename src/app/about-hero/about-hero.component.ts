import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.sass']
})
export class AboutHeroComponent implements OnInit {
  imgHero1: string = '../assets/hero1.jpg';
  imgHero2: string = '../assets/hero2.jpg';
  imgHero3: string = '../assets/hero3.jpg';

  constructor() { }

  ngOnInit() {
  }

}
