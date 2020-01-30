import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistregitrationComponent } from './artistregitration.component';

describe('ArtistregitrationComponent', () => {
  let component: ArtistregitrationComponent;
  let fixture: ComponentFixture<ArtistregitrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistregitrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistregitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
