import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistbookingsComponent } from './artistbookings.component';

describe('ArtistbookingsComponent', () => {
  let component: ArtistbookingsComponent;
  let fixture: ComponentFixture<ArtistbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
