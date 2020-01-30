import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistavldateComponent } from './artistavldate.component';

describe('ArtistavldateComponent', () => {
  let component: ArtistavldateComponent;
  let fixture: ComponentFixture<ArtistavldateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistavldateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistavldateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
