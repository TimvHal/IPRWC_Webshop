import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { CartItemService } from '../services/cart-item.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: CartItem[]
  message: String;
  emptyCart: boolean; 
  totalPrice: number;

  constructor(
    private cartItemService: CartItemService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.emptyCart = true;
    this.message = '';
    this.totalPrice = 0;
    this.getItems();
  }

  getItems() {
    this.items = [];
    this.cartItemService.getCartItems(items => {
      if(items.length == 0) {
        this.message = 'Your shopping cart is empty.';
        this.emptyCart = true;
      }
      else {
        for(let item of items) {
          this.items.push(item);
          this.totalPrice = this.totalPrice + item.price;
        }
        this.emptyCart = false;
      }
    })
  }

  deleteItem(cartItemId:String) {
    this.cartItemService.deleteCartItem(cartItemId);
    this.items.forEach((item, index) => {
      if(item.cartItemId == cartItemId) {
        this.items.splice(index, 1);
      }
      if(this.items.length == 0) {
        this.message = 'Your shopping cart is empty.';
        this.emptyCart = true;
      }
    })
  }

  orderItems() {
    this.items.forEach((item, index) => {
      this.orderService.postOrder(item.articleId, null);
      this.items.splice(index, 1);
      });
    this.cartItemService.emptyCart();
    this.message = 'Your shopping cart is empty.';
    this.emptyCart = true;
    this.router.navigate(['/main'])
  }
}
