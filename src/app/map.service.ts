import { Injectable } from '@angular/core';
import L from 'leaflet';

const TELAVIV = [32.079, 34.787],
  INITIAL_ZOOM_LEVEL = 13;

@Injectable()
export class MapService {

  constructor() { }

  init(elementId) {
    L.map(elementId).setView(TELAVIV, INITIAL_ZOOM_LEVEL);
  }

}
