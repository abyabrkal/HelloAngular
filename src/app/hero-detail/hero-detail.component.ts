import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;


  //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
  //The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
  //The location is an Angular service for interacting with the browser. 
  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location
            ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // Route parameters are always strings. The JavaScript (+) operator converts the string to a number,
    // which is what a hero id should be.
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
