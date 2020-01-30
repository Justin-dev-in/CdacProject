import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookartistfilterComponent } from './bookartistfilter.component';

describe('BookartistfilterComponent', () => {
  let component: BookartistfilterComponent;
  let fixture: ComponentFixture<BookartistfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookartistfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookartistfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
