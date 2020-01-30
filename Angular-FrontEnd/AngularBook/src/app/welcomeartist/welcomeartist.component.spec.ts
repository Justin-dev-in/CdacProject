import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeArtistComponent } from './welcomeartist.component';

describe('WelcomeartistComponent', () => {
  let component: WelcomeArtistComponent;
  let fixture: ComponentFixture<WelcomeArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
