import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { DatePipe } from '@angular/common';
import { PaymentsService } from 'src/app/services/payments.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers: [DatePipe]
})
export class OrderDetailsComponent implements OnInit {

  serverURL = environment.SERVER_URL;
  orderNumber;
  products;
  orderDetails;
  userDetails;
  orderAddress;
  previousOrders;
  registerForm: FormGroup
  submitted = false;
  amount:number;
  mode: string;
  reference:  string;
  myDate;
  payMent;

  get f() { return this.registerForm.controls; }
  
  closeResult: string;

  constructor(private route: ActivatedRoute, private orderService: OrdersService,
    private formBuilder: FormBuilder, private notify: NotificationService, 
    private datePipe: DatePipe, private payService: PaymentsService) { 
    this.route.params.subscribe(data => {
      this.orderNumber = data.id;
    });
  }

  ngOnInit(): void {
    this.orderService.updateOrderStageStatus(this.orderNumber,1).subscribe(data =>{});
    this.orderService.getOrderDetails(this.orderNumber).subscribe(prods =>{
      console.log(prods)
      this.products = prods;
    });

    this.orderService.getSinleOrder(this.orderNumber).subscribe(order =>{
      this.orderDetails = order;

      console.log('This is order details '+order)

      this.orderService.getUserDetails(this.orderDetails.user_id).subscribe(user =>{
        console.log('This is User details '+user)
        this.userDetails = user;
      });

      this.orderService.getUserOrders(this.orderDetails.user_id).subscribe(po =>{
        this.previousOrders = po;
      });
    });

    this.orderService.getOrderAdress(this.orderNumber).subscribe(addr =>{
      this.orderAddress = addr;
    });

    this.payService.getOrderPayments(this.orderNumber).subscribe(data =>{
      console.log('This is order Payments '+data)
      this.payMent = data;
      console.log(this.payMent.totals[0].total);
     });


// Here is the validation code for form inputs
  this.registerForm = this.formBuilder.group({
    amount: ['', Validators.required],
    mode: ['', Validators.required],
    reference: ['', Validators.required]
});

 
  }

  submitPayment() {
    this.submitted = true;
       if (this.registerForm.invalid) {
                return;
          }
      else
      {
       this.amount  = this.registerForm.value.amount;
       this.mode = this.registerForm.value.mode;
       this.reference = this.registerForm.value.reference;
       var totalAmount = this.amount+this.payMent.totals[0].total;
       var amountDue = this.orderDetails.amount_due;
       var balance=this.orderDetails.amount_due-this.payMent.totals[0].total;
       var overpayment = totalAmount-amountDue;

       this.myDate=new Date();
       let latest_date =this.datePipe.transform(this.myDate, 'yyyy-MM-dd  hh:mm:ss');
       if(balance > this.amount) {
         this.notify.showWarning('Amount entered is less than '+this.amount+' required. Unable to approve','Error!!')
       } else {
         if(amountDue<totalAmount) {
          var r = confirm("Overpayment Noted!\n"+
          "Amount Due : KES"+amountDue+" \nAmount Paid : KES"+totalAmount+"\n Overpayment : KES"+overpayment+
          "\n Please confirm this order has receive an overpayment of KES"+overpayment);
          if (r == true) {

            this.payService.createPayment(this.orderNumber, this.amount, this.reference,this.mode,latest_date).subscribe(status =>{
              this.notify.showSuccess('Order successifully paid and approved', 'Success!');
            });
    
           } else {
            
           }

         } else {
          var r = confirm("Are you sure this order has been fully paid?");
          if (r == true) {
            this.payService.createPayment(this.orderNumber, totalAmount, this.reference,this.mode,latest_date).subscribe(status =>{
              this.notify.showSuccess('Order successifully paid and approved', 'Success!');
            });
         } else {
         //Money not received
         }

         }
       
       }
      
      }
      }

      approveOrder() {
        this.orderService.updateOrderStatus(this.orderNumber,1).subscribe(data =>{
          this.notify.showSuccess('Order approved for delivery', 'Success!');
        })
      }


}
