import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  openOders
  newOrders;
  closedOrders;
  allProducts;
  total_products;
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [201563, 210232, 150212, 200121, 121221, 229123, 239989], label: 'Requested Orders' },
    { data: [101563, 110232, 60212, 100121, 121221, 139123, 139989], label: 'Complete Orders' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor(private orderService: OrdersService, private payService: PaymentsService,private prodService: ProductService ) { }

  ngOnInit(): void {
    localStorage.setItem('cp','0');
   this.orderService.getOpenOrders().subscribe(orders =>{
     this.openOders = orders
   });

   this.prodService.productsCount().subscribe(data =>{
    this.total_products = data;
    this.total_products = this.total_products;
    localStorage.setItem('tps',this.total_products);
  })

   this.orderService.getNewOrders().subscribe(nrd =>{
     this.newOrders = nrd;
   })

   this.orderService.getCompleteClosedOrders().subscribe(cr =>{
     this.closedOrders = cr;
   })
  }

}
