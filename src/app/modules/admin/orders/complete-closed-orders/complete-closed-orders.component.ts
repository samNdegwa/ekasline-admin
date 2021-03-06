import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-complete-closed-orders',
  templateUrl: './complete-closed-orders.component.html',
  styleUrls: ['./complete-closed-orders.component.css']
})
export class CompleteClosedOrdersComponent implements OnInit {
  orders;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getOpenOrders().subscribe(orders => {
      console.log(orders);
      this.orders = orders;
   })
  }

}
