import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { ClosedOrdersComponent } from './orders/closed-orders/closed-orders.component';
import { CompleteClosedOrdersComponent } from './orders/complete-closed-orders/complete-closed-orders.component';
import { IncompletClosedOrdersComponent } from './orders/incomplet-closed-orders/incomplet-closed-orders.component';
import { NewOrdersComponent } from './orders/new-orders/new-orders.component';
import { OpenOrdersComponent } from './orders/open-orders/open-orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { RegisterProductComponent } from './products/register-product/register-product.component';
import { SearchComponent } from './products/search/search.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';

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
  },
  {
    path: 'closed-order',
    component: ClosedOrdersComponent
  },
  {
    path: 'new-orders/:id',
    component: OrderDetailsComponent
  },
  {
    path: 'product-register',
    component: RegisterProductComponent
  },
  {
    path: 'view-product',
    component: ViewProductsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
