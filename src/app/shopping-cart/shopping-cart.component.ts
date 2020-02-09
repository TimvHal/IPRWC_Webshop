import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: CartItem[] 

  constructor(
    private cartItemService: CartItemService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = [];
    this.cartItemService.getCartItems(items => {
      for(let item of items) {
        this.items.push(item);
      }
    })
  }

  deleteItem(cartItemId:String) {
    this.cartItemService.deleteCartItem(cartItemId);
    this.items.forEach((item, index) => {
      if(item.cartItemId == cartItemId) {
        this.items.splice(index, 1);
      }
    })
  }
}
