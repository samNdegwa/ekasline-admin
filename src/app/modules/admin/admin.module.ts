import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { NewOrdersComponent } from './orders/new-orders/new-orders.component';
import { OpenOrdersComponent } from './orders/open-orders/open-orders.component';
import { ClosedOrdersComponent } from './orders/closed-orders/closed-orders.component';
import { IncompletClosedOrdersComponent } from './orders/incomplet-closed-orders/incomplet-closed-orders.component';
import { CompleteClosedOrdersComponent } from './orders/complete-closed-orders/complete-closed-orders.component';


@NgModule({
  declarations: [DashboardComponent, AllOrdersComponent, NewOrdersComponent, OpenOrdersComponent, ClosedOrdersComponent, IncompletClosedOrdersComponent, CompleteClosedOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule
  ]
})
export class AdminModule { }
