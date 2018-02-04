import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMapComponent } from './heroes-map.component';

describe('HeroesMapComponent', () => {
  let component: HeroesMapComponent;
  let fixture: ComponentFixture<HeroesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
