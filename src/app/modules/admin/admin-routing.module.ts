import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { CompleteClosedOrdersComponent } from './orders/complete-closed-orders/complete-closed-orders.component';
import { IncompletClosedOrdersComponent } from './orders/incomplet-closed-orders/incomplet-closed-orders.component';
import { NewOrdersComponent } from './orders/new-orders/new-orders.component';
import { OpenOrdersComponent } from './orders/open-orders/open-orders.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'all-orders',
    component: AllOrdersComponent
  },
  {
    path: 'new-orders',
    component: NewOrdersComponent
  },
  {
    path: 'open-orders',
    component: OpenOrdersComponent
  },
  {
    path: 'complete-closed-orders',
    component: CompleteClosedOrdersComponent
  },
  {
    path: 'incomplete-closed-orders',
    component: IncompletClosedOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
