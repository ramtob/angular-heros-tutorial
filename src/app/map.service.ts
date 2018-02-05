import { Injectable } from '@angular/core';
import {Map, map, TileLayer, tileLayer} from 'leaflet';

const TELAVIV = [32.079, 34.8],
  INITIAL_ZOOM_LEVEL = 14;

@Injectable()
export class MapService {

  private myMap: Map;

  constructor() { }

  init(elementId) {
    this.myMap = map(elementId, {center: TELAVIV, zoom: INITIAL_ZOOM_LEVEL});
    const tiles: TileLayer = tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    });
    tiles.addTo(this.myMap);
  }

}
