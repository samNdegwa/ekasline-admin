import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';


@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {
  orders;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getNewOrders().subscribe(orders => {
      console.log(orders);
      this.orders = orders;
   })
  }

}
