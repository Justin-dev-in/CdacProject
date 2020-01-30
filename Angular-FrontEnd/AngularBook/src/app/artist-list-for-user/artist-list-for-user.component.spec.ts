import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListForUserComponent } from './artist-list-for-user.component';

describe('ArtistListForUserComponent', () => {
  let component: ArtistListForUserComponent;
  let fixture: ComponentFixture<ArtistListForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistListForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
