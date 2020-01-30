import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregitrationComponent } from './userregitration.component';

describe('UserregitrationComponent', () => {
  let component: UserregitrationComponent;
  let fixture: ComponentFixture<UserregitrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregitrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
