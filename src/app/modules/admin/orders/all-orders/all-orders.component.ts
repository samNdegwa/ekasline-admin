import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  orders;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(orders => {
      console.log(orders);
      this.orders = orders;
   })
  }

}
