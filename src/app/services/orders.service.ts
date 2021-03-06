import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getAllOrders(){
   return this.http.get(`${this.url}/read-all-orders.php`);
  }

  getNewOrders(){
    return this.http.get(`${this.url}/read-new-order.php`);
  }
  getOpenOrders(){
    return this.http.get(`${this.url}/read-open-order.php`);
  }
  getCompleteClosedOrders(){
    return this.http.get(`${this.url}/read-complete-closed-order.php`);
  }

  get


}
