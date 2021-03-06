import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroService} from "./services/hero.service";
import {MessagesService} from './services/messages.service';
import {MessagesComponent} from './components/messages/messages.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroesMapComponent } from './components/heroes-map/heroes-map.component';
import {MapService} from "./services/map.service";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [
    HeroService, MessagesService, MapService,
    {provide: 'routes', useValue: routes}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
