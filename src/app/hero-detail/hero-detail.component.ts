import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Hero} from "../models/hero.model";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {HeroService} from "../services/hero.service";
import {MapService} from "../services/map.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  @Input() hero: Hero;
  listener: Function;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private map: MapService
  ) { }

  ngOnInit() {
    this.getHero();
    this.listener = this.onMapClick.bind(this);
    this.map.on('click', this.listener);
  }

  ngOnDestroy(): void {
    this.map.off('click', this.listener);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .pipe(
        tap(() => {this.map.addMarker(this.hero.id, this.hero.location, this.hero.name); })
      )
      .subscribe(() => {
        // this.goBack()
      });
  }

  onMapClick(event) {
    this.hero.location = [event.latlng.lat, event.latlng.lng];
  }

}
