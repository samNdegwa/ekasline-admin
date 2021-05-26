import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.css']
})
export class OpenOrdersComponent implements OnInit {
  orders;

  constructor(private orderService: OrdersService,private route: Router) { }

  ngOnInit(): void {
    this.orderService.getOpenOrders().subscribe(orders => {
      console.log(orders);
      this.orders = orders;
   })
  }

  openOrder(oid) {
     this.route.navigateByUrl('./');
  }

}
