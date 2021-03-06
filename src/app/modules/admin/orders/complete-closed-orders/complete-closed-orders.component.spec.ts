import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteClosedOrdersComponent } from './complete-closed-orders.component';

describe('CompleteClosedOrdersComponent', () => {
  let component: CompleteClosedOrdersComponent;
  let fixture: ComponentFixture<CompleteClosedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteClosedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteClosedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
