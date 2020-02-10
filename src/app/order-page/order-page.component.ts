import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  orders: Order[]
  message: String;
  emptyOrders: boolean; 

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.emptyOrders = true;
    this.message = '';
    this.getOrders();
  }

  getOrders() {
    this.orders = [];
    this.orderService.getOrders(orders => {
      if(orders.length == 0) {
        this.message = 'You currently have no orders.';
        this.emptyOrders = true;
      }
      else {
        for(let order of orders) {
          this.orders.push(order);
        }
        this.emptyOrders = false;
      }
    })
  }

}
