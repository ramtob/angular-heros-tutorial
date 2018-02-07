import {Component, OnInit} from '@angular/core';
import {MapService} from "../../services/map.service";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-heroes-map',
  templateUrl: './heroes-map.component.html',
  styleUrls: ['./heroes-map.component.css']
})
export class HeroesMapComponent implements OnInit {

  constructor(private map: MapService,
              private heroService: HeroService) {
  }

  ngOnInit() {
    this.map.init('mapid');
    this.getHeroes();
  }

  /**
   * show heroes on map
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        heroes
          .filter(hero => hero.location)
          .forEach(hero => {
            this.map.addMarker(hero.id, hero.location, hero.name);
          });
      });
  }


}
