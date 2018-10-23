import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecontrollerComponent } from './pagecontroller.component';

describe('PagecontrollerComponent', () => {
  let component: PagecontrollerComponent;
  let fixture: ComponentFixture<PagecontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
