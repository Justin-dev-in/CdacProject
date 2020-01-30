import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistloginComponent } from './artistlogin.component';

describe('ArtistloginComponent', () => {
  let component: ArtistloginComponent;
  let fixture: ComponentFixture<ArtistloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
