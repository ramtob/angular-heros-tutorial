import { Injectable } from '@angular/core';
import {Map, map, TileLayer, tileLayer, Marker, marker, Icon, icon} from 'leaflet';

const TELAVIV = [32.079, 34.8],
  INITIAL_ZOOM_LEVEL = 14;

@Injectable()
export class MapService {

  private goodMap: Map;
  private markerIcon: Icon;
  private markers = {};

  constructor() { }

  init(elementId) {
    this.goodMap = map(elementId, {center: TELAVIV, zoom: INITIAL_ZOOM_LEVEL});
    const tiles: TileLayer = tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    });
    tiles.addTo(this.goodMap);

    // Define my own marker icon (leaflet's default doesn't work well with webpack)
    this.markerIcon = icon({
      iconUrl:       'assets/leaflet_images/marker-icon.png',
      iconRetinaUrl: 'assets/leaflet_images/marker-icon-2x.png',
      shadowUrl:     'assets/leaflet_images/marker-shadow.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize:  [41, 41]
    });
  }

  addMarker(id, latlng, popupHtmlText) {
    const key = id.toString();
    let myMarker: Marker;
    if (!this.markers[key]) {
      myMarker = marker(latlng, {icon: this.markerIcon});
      myMarker.addTo(this.goodMap);
      this.markers[key] = myMarker;
    } else {
      myMarker = this.markers[key];
      myMarker.setLatLng(latlng);
    }
    myMarker.bindPopup(popupHtmlText);
  }

  on(eventType, callback) {
    this.goodMap.on(eventType, callback);
  }

  off(eventType, callback) {
    this.goodMap.off(eventType, callback);
  }

}
