import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationworkingComponent } from './applicationworking.component';

describe('ApplicationworkingComponent', () => {
  let component: ApplicationworkingComponent;
  let fixture: ComponentFixture<ApplicationworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationworkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
