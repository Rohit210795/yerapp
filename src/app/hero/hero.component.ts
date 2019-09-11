import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {Heroes} from '../mock-heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
 /*  heroes: Hero = {
    id: 1,
    name: 'Windstorm'
  }; */
  heroes=Heroes;
  selectedHero: Hero;

  

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  
}
