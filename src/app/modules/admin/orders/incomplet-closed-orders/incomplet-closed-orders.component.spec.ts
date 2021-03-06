import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompletClosedOrdersComponent } from './incomplet-closed-orders.component';

describe('IncompletClosedOrdersComponent', () => {
  let component: IncompletClosedOrdersComponent;
  let fixture: ComponentFixture<IncompletClosedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncompletClosedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompletClosedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
