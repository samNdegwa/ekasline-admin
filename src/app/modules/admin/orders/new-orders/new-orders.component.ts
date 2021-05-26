import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {
  orders;

  constructor(private orderService: OrdersService, private payService: PaymentsService) { }

  ngOnInit(): void {
    this.orderService.getNewOrders().subscribe(orders => {
      this.orders = orders;
   })
  }


}

