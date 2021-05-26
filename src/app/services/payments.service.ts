import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  createPayment(order_id: number, amount: number, reference: string, payment_mode: string, created_date: string) {
    return this.http.post(`${this.url}/create-payment.php`,{order_id,amount,reference,payment_mode,created_date});
  }

  getOrderPayments(order_id: number) {
    return this.http.get(`${this.url}/read-order-payments.php?order_id=`+order_id);
  }
}
