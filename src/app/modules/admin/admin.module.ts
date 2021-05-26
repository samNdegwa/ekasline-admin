import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { NewOrdersComponent } from './orders/new-orders/new-orders.component';
import { OpenOrdersComponent } from './orders/open-orders/open-orders.component';
import { ClosedOrdersComponent } from './orders/closed-orders/closed-orders.component';
import { IncompletClosedOrdersComponent } from './orders/incomplet-closed-orders/incomplet-closed-orders.component';
import { CompleteClosedOrdersComponent } from './orders/complete-closed-orders/complete-closed-orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RegisterProductComponent } from './products/register-product/register-product.component';
import { ViewProductsComponent } from './products/view-products/view-products.component';
import { SearchComponent } from './products/search/search.component';


@NgModule({
  declarations: [DashboardComponent, AllOrdersComponent, NewOrdersComponent, OpenOrdersComponent, ClosedOrdersComponent, IncompletClosedOrdersComponent, CompleteClosedOrdersComponent, OrderDetailsComponent, RegisterProductComponent, ViewProductsComponent, SearchComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule
  ]
})
export class AdminModule { }
