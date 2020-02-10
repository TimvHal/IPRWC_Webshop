import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartItemService } from 'src/app/services/cart-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  constructor(
    public cartItemService: CartItemService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  deleteItem() {
    this.cartItemService.deleteCartItem(this.item.cartItemId);
  }
}
