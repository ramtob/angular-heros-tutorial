import { Component, OnInit } from '@angular/core';
import {MapService} from "../map.service";

@Component({
  selector: 'app-heroes-map',
  templateUrl: './heroes-map.component.html',
  styleUrls: ['./heroes-map.component.css']
})
export class HeroesMapComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.init('mapid');
  }

}
