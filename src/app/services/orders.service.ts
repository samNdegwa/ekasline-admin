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
  getOrderDetails(id: number){
    return this.http.get(`${this.url}/read-order-details.php?id=`+id);
  }
  getSinleOrder(id: number){
    return this.http.get(`${this.url}/read-single-order.php?id=`+id);
  }
  getUserDetails(id: number) {
    return this.http.get(`${this.url}/read-user-by-id.php?id=`+id);
  }
  getOrderAdress(id: number) {
    return this.http.get(`${this.url}/read-order-address.php?order_id=`+id);

  }
  getUserOrders(id: number) {
    return this.http.get(`${this.url}/user-orders.php?user_id=`+id);
  }
  updateOderPayment(id: number, payment: number) {
    return this.http.post(`${this.url}/update-order-payment.php`,{id,payment});
  }
  updateOrderStatus(id: number, status: number) {
    return this.http.post(`${this.url}/updata-order-status.php`,{id,status});
  }
  updateOrderStageStatus(id: number, status: number) {
    return this.http.post(`${this.url}/update-order-stage-status.php`,{id,status});
  }


}
